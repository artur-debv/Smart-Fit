const searchButtons = document.querySelector(".search_button");
const searchInput = document.querySelector(".search_input");

searchButtons.addEventListener("click", async (event) => {
    event.preventDefault();
    searchAcademies();
});

searchInput.addEventListener("input", async () => {
    searchAcademies();
});

const searchAcademies = async () => {
    const searchValue = searchInput.value.toLowerCase();
    const academies = await fetchApi();
    const academiesFilter = filterAcademy(academies);

    const filteredAcademies = searchValue
        ? academiesFilter.filter(academy => academy.title.toLowerCase().includes(searchValue))
        : academiesFilter;

    displayCount(filteredAcademies);
    academiesCards(filteredAcademies);
};