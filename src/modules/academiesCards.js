import { Path } from './Paths.js';

export const academiesCards = (academies) => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = ''; // Limpa o conteúdo existente antes de adicionar novos cartões

  const fragment = document.createDocumentFragment();

  academies.forEach(academy => {
    const card = document.createElement('div');
    card.className = 'gyms';
    card.innerHTML = `
        <span class="card-status ${academy.opened ? 'status-open' : 'status-close'}">
            ${academy.opened ? 'Aberto' : 'Fechado'}
        </span>
        <h3 class="card-title">${academy.title}</h3>
        <p class="card-address">
            ${academy.content ? academy.content.replace(/<\/?[^>]+(>|$)/g, "") : academy.street}
        </p>
        <div class="card-image">
            ${academy.mask ? `<img src="${Path.mask[academy.mask]}" alt="Mask Icon" class="card-icon">` : ''}
            ${academy.towel ? `<img src="${Path.towel[academy.towel]}" alt="Towel Icon" class="card-icon">` : ''}
            ${academy.fountain ? `<img src="${Path.fountain[academy.fountain]}" alt="Fountain Icon" class="card-icon">` : ''}
            ${academy.locker_room ? `<img src="${Path.locker_room[academy.locker_room]}" alt="Locker Room Icon" class="card-icon">` : ''}
        </div>
        <div class="Card-Hours">
            <ul>
                ${academy.schedules ? academy.schedules.map(schedule => `
                    <li><strong>${schedule.weekdays}</strong></li>
                    <li>${schedule.hour}</li>
                `).join('') : ''}
            </ul>
        </div>
    `;
    fragment.appendChild(card);
  });

  cards.appendChild(fragment); // Adiciona o fragmento ao DOM
};