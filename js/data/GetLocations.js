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
            result.innerText = `Resultados encontrados: ${data.locations.length}`;
            cards.innerHTML = "";

            data.locations.forEach(element => {
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
                    <div class="hours">
                       <li>${element.schedules.weekdays}</li>
                    </div>
                </li>
                `;
            });
        });
});
