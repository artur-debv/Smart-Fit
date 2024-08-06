export const displayCount = (academies) => {
    const count = document.querySelector(".result");
    count.textContent = `Resultados encontrados: ${academies.length}`;
  };