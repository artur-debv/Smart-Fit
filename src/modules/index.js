import { fetchApi } from './modules/fetchApi.js';
import { filterAcademy } from './modules/filterAcademy.js';
import { displayCount } from './modules/displayCount.js';
import { academiesCards } from './modules/academiesCards.js';
import { searchAcademies } from './modules/searchAcademies.js';

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
    const statusMessage = await searchAcademies(searchValue);

    if (statusMessage) {
        Status.textContent = alert(statusMessage);
    } else {
        Status.textContent = "";
    }
});
