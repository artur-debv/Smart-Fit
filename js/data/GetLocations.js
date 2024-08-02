document.addEventListener('DOMContentLoaded', () => {
    const searchGymsButton = document.querySelector(".find");
    const gymApiURL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

    // Função para buscar os dados da API
    const fetchLocations = async () => {
        try {
            const response = await fetch(gymApiURL);
            const data = await response.json();
            console.log('Todos os locais:', data.locations); // Log dos dados recebidos da API
            return data.locations;
        } catch (error) {
            console.error('Erro ao buscar locais:', error);
            return [];
        }
    };

    // Função para exibir o resultado das academias
    const displayLocations = (locations) => {
        const result = document.querySelector('.result');
        const cards = document.querySelector('.cards');

        result.innerText = `Resultados encontrados: ${locations.length}`;
        cards.innerHTML = "";

        locations.forEach(element => {
            const gymCard = document.createElement('div');
            gymCard.className = 'gym-card';

            gymCard.innerHTML = `
                <div class="card-header">
                    <span class="card-status ${element.opened ? 'status-open' : 'status-close'}">
                        ${element.opened ? 'Aberto' : 'Fechado'}
                    </span>
                    <h3 class="card-title">${element.title}</h3>
                    <p class="card-address">
                        ${element.content ? element.content.replace(/<\/?[^>]+(>|$)/g, "") : element.street}
                    </p>
                </div>

                <div class="card-container-icons">
                    <img src="assets/images/required-mask.png" alt="icon" class="card-icon">
                    <img src="assets/images/required-towel.png" alt="icon" class="card-icon">
                    <img src="assets/images/partial-fountain.png" alt="icon" class="card-icon">
                    <img src="assets/images/allowed-lockerroom.png" alt="icon" class="card-icon">
                </div>
                
                <div class="card-schedules">
                    <p class="card-schedules-container">
                        <span class="card-day">Seg. à Sex.</span>
                        <span class="card-hour">06h às 22h</span>
                    </p>

                    <p class="card-schedules-container">
                        <span class="card-day">Sáb</span>
                        <span class="card-hour">Fechada</span>
                    </p>

                    <p class="card-schedules-container">
                        <span class="card-day">Dom.</span>
                        <span class="card-hour">Fechada</span>
                    </p>
                </div>
            `;

            cards.appendChild(gymCard);
        });
    };

    // Função para atualizar as academias exibidas
    const updateDisplayedLocations = async () => {
        const closedCheckbox = document.querySelector('#closed');
        const allLocations = await fetchLocations();
        let filteredLocations;

        if (closedCheckbox.checked) {
            filteredLocations = allLocations.filter(location => !location.opened); // Filtra academias fechadas
        } else {
            filteredLocations = allLocations.filter(location => location.opened); // Filtra academias abertas
        }

        displayLocations(filteredLocations);
    };

    // Adiciona eventos aos elementos
    searchGymsButton.addEventListener('click', (event) => {
        event.preventDefault();
        updateDisplayedLocations();
    });

    document.querySelector('#closed').addEventListener('change', updateDisplayedLocations);

    // Carregar unidades ao inicializar
    updateDisplayedLocations();
});