const apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

const searchButton = document.querySelector(".find");

const fetchApi = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.locations;
}

function displayCount(academies) {
    const count = document.querySelector(".result");
    count.textContent = `Resultados encontrados: ${academies.length}`;
}

function filterAcademy(academies) {
    return academies.filter(academy => academy.opened);
}

const openAcademies = async () => {
    const academies = await fetchApi();
    const academiesFilter = filterAcademy(academies);
    displayCount(academiesFilter);
}

document.addEventListener("DOMContentLoaded", openAcademies);

function academiesCards(academies) {
    const cards = document.querySelector(".cards");
    cards.innerHTML = ""; // Clear previous cards
    academies.forEach(academy => {
     
    });
}

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
