export const ClearOptions = (event) => {
    const Closed = document.getElementById("closed");
    event.preventDefault();
    const option = document.querySelectorAll("input[type=radio]");
    option.forEach((option) => {
        option.checked = false;
    })

    Closed.checked = false;
}

