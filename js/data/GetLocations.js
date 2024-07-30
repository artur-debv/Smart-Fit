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
            
          console.log(data.locations.length)

            for (let i = 0; i < data.locations.length; i++) {
                let list = document.querySelector(".list")
                let li = document.createElement("li")

                list.appendChild(li)
            }
           
        })
})

