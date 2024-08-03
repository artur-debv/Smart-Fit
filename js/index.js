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

const OpenAcademys = async () => {
    const academys = await FetchApi();
    const academysFilter = filterAcademy(academys)

    DiplayCount(academysFilter)
}
document.addEventListener("DOMContentLoaded", OpenAcademys)


function academysCards(academys){
    const cards = document.querySelector(".cards")
    academys.forEach(academys => {
        const card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <div class="card__image">
`

        cards.appendChild(card)
})
}

const Searchs = async () => {
    const academys = await FetchApi();
    const academysFilter = filterAcademy(academys)

    const Closed = document.getElementById("#closed")

    if(Closed.checked){
        DiplayCount(academys)
        academysCards(academys)
    }else{
        DiplayCount(academysFilter)
        academysCards(academysFilter)
    }

}

const SearchAcademys = async () => {
    Search()
}

Search.addEventListener("click", SearchAcademys)