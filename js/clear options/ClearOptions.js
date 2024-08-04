const Options = document.querySelectorAll("input[type=radio]");

const clear = document.querySelector(".clean");

const closed = document.getElementById("closed");

clear.addEventListener("click", () => {
    Options.forEach((option) => {
        option.checked = false;
    })

    closed.checked = false;
})


Options.forEach((option) => {
   option.addEventListener("change", () => {
      console.log(option.target.value);
   })
})

