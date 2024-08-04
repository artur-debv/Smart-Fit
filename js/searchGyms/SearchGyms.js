const Button_Search = document.querySelector(".search_button");

const search = document.querySelector(".search_input");

Button_Search.addEventListener("click", (event) => {
    event.preventDefault();

    const searchValue = search.value;

    console.log(searchValue);
})