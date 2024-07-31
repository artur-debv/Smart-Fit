document.addEventListener('DOMContentLoaded', () => {
    const searchgyms = document.querySelector(".find");
    const showClosedCheckbox = document.querySelector("#showClosed");

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
                  

                    // Definindo as URLs com base nas propriedades
                    const maskImage = imageMap.mask[element.mask] || '';
                    const towelImage = imageMap.towel[element.towel] || '';
                    const fountainImage = imageMap.fountain[element.fountain] || '';
                    const lockerImage = imageMap.locker_room[element.locker_room] || '';

                    // Gerando o HTML para cada academia
                    cards.innerHTML += `
                    <li class="gyms">
                        <span class="status">${element.opened ? 'aberto' : 'fechado'}</span>
                        <h3>${element.title}</h3>
                        <h2>${element.content}</h2>
                        <div class="requirements">
                            ${maskImage ? `<img class="icon mask" src="${maskImage}" alt="Mask">` : ''}
                            ${towelImage ? `<img class="icon towel" src="${towelImage}" alt="Towel">` : ''}
                            ${fountainImage ? `<img class="icon fountain" src="${fountainImage}" alt="Fountain">` : ''}
                            ${lockerImage ? `<img class="icon locker" src="${lockerImage}" alt="Locker">` : ''}
                        </div>
                    </li>
                    `;
                });
            });
    });

    // Atualiza a lista de academias quando o checkbox é alterado
    showClosedCheckbox.addEventListener('change', () => {
        searchgyms.click(); // Dispara o evento de clique no botão para atualizar a lista
    });
});