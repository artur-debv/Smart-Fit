document.addEventListener('DOMContentLoaded', () => {
    const searchgyms = document.querySelector(".find");


    const fetchLocations = async () => {
        try {
            const response = await fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json");
            const data = await response.json();
            allLocations = data.locations;
            console.log('Todos os locais:', allLocations); // Log dos dados recebidos da API
            updateDisplayedLocations(); // Exibir todas as academias abertas inicialmente
        } catch (error) {
            console.error('Erro ao buscar locais:', error);
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

    const updateDisplayedLocations = () => {
        const closed = document.querySelector('#closed');
        const filteredLocations = allLocations;

        if (closed.checked) {
            filteredLocations = allLocations.filter(element => element.opened === false);
            console.log('Locais fechados:', filteredLocations); // Log dos locais filtrados
        } else {
            filteredLocations = allLocations.filter(element => element.opened === true);
            console.log('Locais abertos:', filteredLocations); // Log dos locais abertos
        }

        displayLocations(filteredLocations);
    };

    searchgyms.addEventListener('click', (event) => {
        event.preventDefault();
        fetchLocations();
    });

    document.querySelector('#closed').addEventListener('change', updateDisplayedLocations);

    // Carregar unidades ao inicializar
    fetchLocations();
});
