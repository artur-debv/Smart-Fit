const searchgyms = document.querySelector(".find")

searchgyms.addEventListener('click', (event) => {
    event.preventDefault();
    fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(response => response.json())
        .then(data => {
            const result = document.querySelector('.result')
            const cards = document.querySelector('.cards')
            result.innerText = `Resultados encontrados: ${data.locations.length}`
            cards.innerHTML = "";

            data.locations.forEach(element => {
                cards.innerHTML += `

            <li class="gyms">
                <span class="status">${element.opened ? 'aberto' : 'fechado'}</span>
                <h3>${element.title}</h3>
                <h2>${element.content}</h2>
                <img src="${element.mask}" alt="">
                <img src="${element.towel}" alt="">
                <img src="${element.fountain}" alt="">
                <img src="${element.locker_room}" alt="">
            </li>
            `

            });
        })
})



