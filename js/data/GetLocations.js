document.addEventListener('DOMContentLoaded', () => {
    const searchgyms = document.querySelector(".find");
    const gymApiURL = 'https://test-frontend-developer.s3.amazonaws.com/data/locations.json';

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

    const displayLocations = (locations) => {
        const result = document.querySelector('.result');
        const cards = document.querySelector('.cards');

        result.innerText = `Resultados encontrados: ${locations.length}`;
        cards.innerHTML = "";

        locations.forEach(element => {
       
        });
    };

    const updateDisplayedLocations = async () => {
        const closed = document.querySelector('#closed');
        const allLocations = await fetchLocations();
        let filteredLocations = allLocations;

        if (closed.checked) {
            filteredLocations = allLocations.filter(element => !element.opened);
            console.log('Locais fechados:', filteredLocations); // Log dos locais filtrados
        } else {
            filteredLocations = allLocations.filter(element => element.opened);
            console.log('Locais abertos:', filteredLocations); // Log dos locais abertos
        }

        displayLocations(filteredLocations);
    };

    searchgyms.addEventListener('click', (event) => {
        event.preventDefault();
        updateDisplayedLocations();
    });

    document.querySelector('#closed').addEventListener('change', updateDisplayedLocations);

    // Carregar unidades ao inicializar
    updateDisplayedLocations();
});
