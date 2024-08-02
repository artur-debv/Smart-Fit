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
          
        });
    };

    // Função para atualizar as academias exibidas
    const updateDisplayedLocations = async () => {
        const closedCheckbox = document.querySelector('#closed');
        let filteredLocations = allLocations;
    
        if (closedCheckbox.checked) {
            // Filtra academias fechadas
            filteredLocations = allLocations.filter(location => !location.opened);
            console.log('Locais fechados:', filteredLocations.length); // Log dos locais filtrados
        } else {
            // Exibe todas as academias
            filteredLocations = allLocations;
            console.log('Todos os locais exibidos:', filteredLocations.length); // Log dos locais exibidos
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