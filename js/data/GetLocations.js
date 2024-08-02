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
            // Gerar e adicionar o HTML para cada academia
            const maskImage = element.mask === "required" ? '/assets/images/required-mask.png' :
                              element.mask === "recommended" ? '/assets/images/recommended-mask.png' : '';
            const towelImage = element.towel === "required" ? '/assets/images/required-towel.png' : '';
            const fountainImage = element.fountain === "partial" ? '/assets/images/partial-fountain.png' : '';
            const lockerImage = element.locker_room === "allowed" ? '/assets/images/allowed-lockerroom.png' : '';

            cards.innerHTML += `
            <li class="gyms">
                <span class="status">${element.opened ? 'aberto' : 'fechado'}</span>
                <h3>${element.title}</h3>
                <h2>${element.content}</h2>
                <div class="requirements">
                    ${maskImage ? `<img class="mask" src="${maskImage}" alt="Máscara Requerida">` : ''}
                    ${towelImage ? `<img class="towel" src="${towelImage}" alt="Toalha Requerida">` : ''}
                    ${fountainImage ? `<img class="fountain" src="${fountainImage}" alt="Fonte Parcial">` : ''}
                    ${lockerImage ? `<img class="locker" src="${lockerImage}" alt="Armário Permitido">` : ''}
                </div>
            </li>
            `;
        });
    };

    // Função para atualizar as academias exibidas
    const updateDisplayedLocations = async () => {
        const closedCheckbox = document.querySelector('#closed');
        const allLocations = await fetchLocations();
        let filteredLocations = allLocations;

        if (closedCheckbox.checked) {
            filteredLocations = allLocations.filter(element => !element.opened);
            console.log('Locais fechados:', filteredLocations); // Log dos locais filtrados
        } else {
            filteredLocations = allLocations.filter(element => element.opened);
            console.log('Locais abertos:', filteredLocations); // Log dos locais abertos
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