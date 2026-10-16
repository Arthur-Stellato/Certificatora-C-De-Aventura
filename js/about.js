// Seção Sobre: monta a linha do tempo a partir de trajetoria.js.

import { TRAJETORIA } from './trajetoria.js';
import { $, el } from './utils.js';

// Último ponto, sempre igual: a história continua
const FUTURO = {
  marco: '…',
  titulo: 'Tenho que terminar',
  texto: '...'
};

export function renderAbout() {
  const list = $('timeline');
  list.textContent = '';

  [...TRAJETORIA, FUTURO].forEach((item) => {
    const li = el('li', 'tl-item');
    li.appendChild(el('span', 'tl-dot', item.marco));

    const card = el('article', 'dialog tl-card');
    card.appendChild(el('h3', null, item.titulo));
    card.appendChild(el('p', null, item.texto));

    li.appendChild(card);
    list.appendChild(li);
  });
}
