const Option = document.querySelectorAll('input[type="radio"]');

const clean = document.querySelector('.clean');

clean.addEventListener('click', () => {
    Option.forEach((e) => {
        e.checked = false;
    })
})

Option.forEach((e) => {
    e.addEventListener('change', (event) => {
        console.log(`Você selecionou: ${event.target.value}`)
    })
})