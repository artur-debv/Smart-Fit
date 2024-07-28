const Option = document.querySelectorAll('input[type="radio"]');

const clean = document.querySelector('.clean');

const Closed = document.querySelector('.containers');

 console.log(Closed)


clean.addEventListener('click', (event) => {
    event.preventDefault();
    Option.forEach((e) => {
        e.checked = false;
    })
    Closed.checked = false
})

Option.forEach((event) => {
    event.addEventListener('change', (event) => {
        console.log(`Você selecionou: ${event.target.value}`)
    })
})