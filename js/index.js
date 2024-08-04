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
    academiesCards(academiesFilter); // Adiciona esta linha para exibir as academias abertas ao carregar a página
}

document.addEventListener("DOMContentLoaded", openAcademies);

const iconPaths = {
    mask: {
        required: 'assets/images/required-mask.png',
        recommended: 'assets/images/recommended-mask.png',
        not_allowed: 'assets/images/not-allowed-mask.png'
    },
    towel: {
        required: 'assets/images/required-towel.png',
        recommended: 'assets/images/recommended-towel.png',
        not_allowed: 'assets/images/not-allowed-towel.png'
    },
    fountain: {
        partial: 'assets/images/partial-fountain.png',
        not_allowed: 'assets/images/not-allowed-fountain.png'
    },
   /*locker_room: {
        allowed: 'assets/images/allowed-lockerroom.png',
        closed: 'assets/images/closed-lockerroom.png'
    }*/
};

function academiesCards(academies) {
    const cards = document.querySelector(".cards");
    cards.innerHTML = ''; // Limpa o conteúdo existente antes de adicionar novos cartões

    academies.forEach(academy => {
        cards.innerHTML += `
        <div class="gyms">
            <span class="card-status ${academy.opened ? 'status-open' : 'status-close'}">
                ${academy.opened ? 'Aberto' : 'Fechado'}
            </span>
            <h3 class="card-title">${academy.title}</h3>
            <p class="card-address">
                ${academy.content ? academy.content.replace(/<\/?[^>]+(>|$)/g, "") : academy.street}
            </p>
            <div class="card-image">
                <img src="${iconPaths.mask[academy.mask]}" alt="Mask Icon" class="card-icon">
                <img src="${iconPaths.towel[academy.towel]}" alt="Towel Icon" class="card-icon">
                <img src="${iconPaths.fountain[academy.fountain]}" alt="Fountain Icon" class="card-icon">
            </div>
            <div class="Card-Hours">
                <ul>
                    ${academy.schedules.map(schedule => `
                        <ul class="card-hours">
                         <li class="card-hour">${schedule.weekdays}: ${schedule.hour}</li>
                        </ul>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;
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
