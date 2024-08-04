const searchButton = document.querySelector(".search_button");
const searchInput = document.querySelector(".search_input");

searchButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const searchValue = searchInput.value.toLowerCase();
    const academies = await fetchApi();
    const academiesFilter = filterAcademy(academies);
    const filteredAcademies = academiesFilter.filter(academy => academy.title.toLowerCase().includes(searchValue));

    displayCount(filteredAcademies);
    academiesCards(filteredAcademies);
});