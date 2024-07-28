const Option = document.querySelectorAll('input[type="radio"]');

Option.forEach((e) => {
    e.addEventListener('change', (event) => {
        console.log(`Você selecionou: ${event.target.value}`)
    })
})