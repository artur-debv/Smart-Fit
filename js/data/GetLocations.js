document.addEventListener('DOMContentLoaded', () => {
    const searchgyms = document.querySelector(".find");
    let allLocations = [];

    const fetchLocations = async () => {
        try {
            const response = await fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json");
            const data = await response.json();
            allLocations = data.locations;
            console.log('Todos os locais:', allLocations); // Log dos dados recebidos da API
            displayLocations(allLocations);
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
            // Definindo as imagens com base nas propriedades
            const maskImage = element.mask === "required" ? '/assets/images/required-mask.png' :
                              element.mask === "recommended" ? '/assets/images/recommended-mask.png' : '';
            const towelImage = element.towel === "required" ? '/assets/images/required-towel.png' : '';
            const fountainImage = element.fountain === "partial" ? '/assets/images/partial-fountain.png' : '';
            const lockerImage = element.locker_room === "allowed" ? '/assets/images/allowed-lockerroom.png' : '';

            // Gerando o HTML para cada academia
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

    const updateDisplayedLocations = () => {
        const Closed = document.querySelector('#closed');
        let filteredLocations = allLocations;

        if (Closed.checked) {
            filteredLocations = allLocations.filter(element => element.opened === false);
            console.log('Locais fechados:', filteredLocations); // Log dos locais filtrados
        } else {
            console.log('Todos os locais:', allLocations); // Log dos locais sem filtrar
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
