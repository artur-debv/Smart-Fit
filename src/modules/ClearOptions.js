export const ClearOptions = (event) => {
    event.preventDefault();
    const option = document.querySelectorAll("input[type=radio]");
    option.forEach((option) => {
        option.checked = false;
    })

    Closed.checked = false;
}

