import { fetchApi } from './fetchApi.js';
import { filterAcademy } from './filterAcademy.js';
import { displayCount } from './count.js';
import { academiesCards } from './academiesCards.js';

const searchButton = document.querySelector(".find");

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

searchButton.addEventListener("click", searchAcademies);