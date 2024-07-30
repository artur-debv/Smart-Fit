fetch("https://test-frontend-developer.s3.amazonaws.com/data/locations.json", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    }
}).then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error))