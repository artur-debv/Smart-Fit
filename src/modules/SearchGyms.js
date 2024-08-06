const searchButtons = document.querySelector(".search_button");
const searchInput = document.querySelector(".search_input");
const Status = document.querySelector(".status");

searchButtons.addEventListener("click", async (event) => {
    event.preventDefault();

    const searchValue = searchInput.value.toLowerCase();
    const academies = await fetchApi();
    const academiesFilter = filterAcademy(academies);
    const filteredAcademies = academiesFilter.filter(academy => academy.title.toLowerCase().includes(searchValue));

    displayCount(filteredAcademies);
    academiesCards(filteredAcademies);

    if (filteredAcademies.length === 0) {
        Status.textContent = alert("Nenhum resultado encontrado");
    } else {
        Status.textContent = "";
    }

});