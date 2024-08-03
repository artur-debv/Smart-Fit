const Api_url = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

const Search = document.querySelector(".find")

const FetchApi = async () => {
    const response = await fetch(Api_url);
    const data = await response.json();
    return data.locations;
}

function DiplayCount(academys){
    const count = document.querySelector(".result");
    count.textContent = `Resultados encontrados: ${academys.length}`
}

function filterAcademy(academys){
    return academys.filter(academys => academys.opened)
}