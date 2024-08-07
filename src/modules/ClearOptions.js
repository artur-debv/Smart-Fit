const buttonClean = document.querySelector(".clean");

const option = document.querySelectorAll("input[type=radio]");

const Closed = document.getElementById("closed");

buttonClean.addEventListener("click", () => {
   option.forEach((option) => {
    option.checked = false;
   })

   Closed.checked = false;
})