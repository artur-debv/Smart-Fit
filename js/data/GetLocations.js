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
          result.innerText = `Resultados encontrados: ${data.locations.length}`

          data.locations.forEach(element => {
            const box = document.createElement('div')
            box.classList.add('box')
            box.innerHTML = `
                <h3>${element.content}</h3>
                <p>${element.mask}</p>
                <p>${element.towel}</p>
                <p>${element.fountain}</p>
                <p>${element.lockerroom}</p>
            `

        });
})
})



