const Option = document.querySelectorAll('input[name="hours"]');

Option.foreach((e) => {
    e.addEventListener('change', (event) => {
        console.log(event)
    })
})