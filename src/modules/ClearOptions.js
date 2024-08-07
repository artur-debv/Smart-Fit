export const ClearOptions = (event) => {
    event.preventDefault();
    
    // Seleciona o elemento com id 'closed'
    const Closed = document.getElementById("closed");
    
    // Seleciona todos os inputs do tipo radio
    const options = document.querySelectorAll("input[type=radio]");
    
    // Itera sobre cada input radio e desmarca-os
    options.forEach((option) => {
        option.checked = false;
    });
    
    // Desmarca o elemento 'Closed' se ele existir
    if (Closed) {
        Closed.checked = false;
    }
}
