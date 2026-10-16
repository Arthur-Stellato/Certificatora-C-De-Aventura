// Seção Aulas: desenha os 7 cartões. Clicar em um cartão abre a aula (modal.js).

import { PLACES, ICONS } from './config.js';
import { state } from './state.js';
import { $, el } from './utils.js';
import { openLesson } from './modal.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

export function renderModules() {
  const grid = $('modules');
  grid.textContent = '';

  PLACES.forEach((place, index) => {
    const video = state.videos[place.id][0];
    const card = el('button', 'place');
    card.type = 'button';

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', '0 0 48 48');
    svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = ICONS[place.icon];

    card.append(svg, el('span', 'mod', `Aula ${index + 1}`));

    if (video) {
      card.append(el('b', null, video.title), el('span', 'topic', place.name), el('span', 'go', 'Assistir'));
      card.addEventListener('click', () => openLesson(place.id));
    } else {
      card.append(el('b', null, place.name), el('span', 'topic', 'Em breve'));
      card.disabled = true;
    }
    grid.appendChild(card);
  });
}
