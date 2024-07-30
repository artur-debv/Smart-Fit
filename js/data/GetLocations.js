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
          data.locations.forEach((location) => {
            console.log(location); // Log para depuração
            result.innerHTML += `<p>ID: ${location.id} - Nome: ${location.name}</p>`;
        });
})
})

