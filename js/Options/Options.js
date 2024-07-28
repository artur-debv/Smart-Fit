const Option = document.querySelectorAll('input[radio]');

Option.forEach((e) => {
    e.addEventListener('change', (event) => {
        console.log(`Você selecionou: ${event.target.name}`)
    })
})