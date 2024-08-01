const searchgyms = document.querySelector(".find");

searchgyms.addEventListener('click', (event) => {
    event.preventDefault();
    fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(data => {
            const result = document.querySelector('.result');
            const cards = document.querySelector('.cards');
            const options = document.querySelectorAll('input[type="radio"]');

            // Obtém o valor do input radio selecionado
            const selectedOption = document.querySelector('input[name="closed"]:checked').value;
            
            // Filtrando as academias com base na seleção do radio
            const filteredLocations = data.locations.filter(element => {
                if (selectedOption === 'all') {
                    return true;
                } else if (selectedOption === 'closed') {
                    return !element.opened;
                }
            });

            //result.innerText = `Resultados encontrados: ${filteredLocations.length}`;
            cards.innerHTML = "";

            filteredLocations.forEach(element => {
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
        });
});
