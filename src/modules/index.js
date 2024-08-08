import { fetchApi } from './fetchApi.js';
import { filterAcademy } from './filterAcademy.js';
import { displayCount } from './count.js';
import { academiesCards } from './academiesCards.js';
import { ClearOptions } from './ClearOptions.js';
import { SearchGymss } from './SearchGyms.js';

const searchButton = document.querySelector(".find");
const clearButton = document.querySelector(".clean");
const ButtonSearch = document.querySelector(".search_button");

const openAcademies = async () => {
  const academies = await fetchApi();
  const academiesFilter = filterAcademy(academies);
  displayCount(academiesFilter);
  academiesCards(academiesFilter); // Adiciona esta linha para exibir as academias abertas ao carregar a página
}

document.addEventListener("DOMContentLoaded", openAcademies);

const searchAcademies = async (event) => {
  event.preventDefault();
  const academies = await fetchApi();
  const academiesFilter = filterAcademy(academies);

  const closed = document.getElementById("closed");

  if (closed.checked) {
    displayCount(academies);
    academiesCards(academies);
  } else {
    displayCount(academiesFilter);
    academiesCards(academiesFilter);
  }
}

const inputMorning = document.getElementById("morning");
const inputAfternoon = document.getElementById("afternoon");
const inputNight = document.getElementById("night");


let Filter = academiesFilter

const FilterGymsHours = () => {
  // Obter os inputs radio
  const inputMorning = document.getElementById('morning');
  const inputAfternoon = document.getElementById('afternoon');
  const inputNight = document.getElementById('night');

  Filter = academiesFilter.map(academy => {
    // Filtra os horários conforme o período selecionado
    const filtersHours = academy.schedules
      .filter(schedule => {
        // Verifica se o horário está dentro do período selecionado
        const isWeekend = schedule.weekdays === "Sab." || schedule.weekdays === "Dom.";
        const isWeekday = schedule.weekdays === 'Seg. à Sex.';

        const isMorning = inputMorning.checked && isWeekday && (schedule.hour >= '06:00' && schedule.hour <= '12:00');
        const isAfternoon = inputAfternoon.checked && isWeekday && (schedule.hour >= '12:00' && schedule.hour <= '18:00');
        const isNight = inputNight.checked && isWeekday && (schedule.hour >= '18:00' && schedule.hour <= '23:00');

        // Retorna verdadeiro se o horário estiver dentro do período selecionado ou se for fim de semana
        return isWeekend || isMorning || isAfternoon || isNight;
      });

    // Retorna a academia com os horários filtrados
    return {
      ...academy,
      schedules: filtersHours
    };
  }).filter(academy => academy.schedules.length > 0); // Remove academias sem horários válidos
}

// Adiciona um listener ao botão de limpeza para chamar a função ClearOptions

ButtonSearch.addEventListener("click", SearchGymss);
clearButton.addEventListener("click", ClearOptions);
searchButton.addEventListener("click", searchAcademies);