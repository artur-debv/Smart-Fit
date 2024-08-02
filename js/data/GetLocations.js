document.addEventListener('DOMContentLoaded', () => {
    const searchgyms = document.querySelector(".find");
    const closedCheckbox = document.querySelector('#closed');
    let allLocations = [];

    const fetchLocations = async () => {
        try {
            const response = await fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json");
            const data = await response.json();
            allLocations = data.locations;
            console.log('Todos os locais:', allLocations);
            updateDisplayedLocations();
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

    const updateDisplayedLocations = () => {
        const filteredLocations = closedCheckbox.checked ? 
            allLocations.filter(location => !location.opened) :
            allLocations.filter(location => location.opened);

        console.log('Locais filtrados:', filteredLocations);
        displayLocations(filteredLocations);
    };

    searchgyms.addEventListener('click', (event) => {
        event.preventDefault();
        fetchLocations();
    });

    closedCheckbox.addEventListener('change', updateDisplayedLocations);

    // Carregar unidades ao inicializar
    fetchLocations();
});
