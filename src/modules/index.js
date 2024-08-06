import { fetchApi } from './modules/fetchApi.js';
import { filterAcademy } from '.filterAcademy.js';
import { displayCount } from '.displayCount.js';
import { academiesCards } from '.academiesCards.js';
import { SearchGyms } from './SearchGyms.js';

const searchButton = document.querySelector(".search_button");
const searchInput = document.querySelector(".search_input");
const Status = document.querySelector(".status");

const openAcademies = async () => {
  const academies = await fetchApi();
  const academiesFilter = filterAcademy(academies);
  displayCount(academiesFilter);
  academiesCards(academiesFilter); // Adiciona esta linha para exibir as academias abertas ao carregar a página
};

document.addEventListener("DOMContentLoaded", openAcademies);

searchButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const searchValue = searchInput.value.toLowerCase();
  const statusMessage = await SearchGyms(searchValue);

  if (statusMessage) {
    Status.textContent = alert(statusMessage);
  } else {
    Status.textContent = "";
  }
});