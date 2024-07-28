const Option = document.querySelectorAll('input[name="hours"]');

Option.forEach((e) => {
    e.addEventListener('change', (event) => {
        console.log(`Você selecionou: ${event.target.value}`)
    })
})