import { fetchApi } from './fetchApi.js';
import { filterAcademy } from './filterAcademy.js';
import { displayCount } from './count.js';
import { academiesCards } from './academiesCards.js';
import { ClearOptions } from './ClearOptions.js';
import { SearchGyms } from './SearchGyms.js';

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

// Adiciona um listener ao botão de limpeza para chamar a função ClearOptions

ButtonSearch.addEventListener("click", SearchGyms);
clearButton.addEventListener("click", ClearOptions);
searchButton.addEventListener("click", searchAcademies);