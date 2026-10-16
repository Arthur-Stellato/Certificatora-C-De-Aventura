// Janela (modal) de uma aula: player do YouTube + título + descrição.

import { PLACES } from './config.js';
import { state, getPlace } from './state.js';
import { $ } from './utils.js';

const dialog = () => $('moduleModal');

// Limpa o player (isso faz o vídeo parar de tocar)
function resetPlayer() {
  state.playing = null;
  $('screen').textContent = '';
}

export function openLesson(placeId) {
  const video = state.videos[placeId][0];
  if (!video) return;

  state.current = placeId;
  state.playing = { place: placeId, id: video.id };

  const place = getPlace(placeId);
  const number = PLACES.findIndex((p) => p.id === placeId) + 1;
  $('modalMod').textContent = `Aula ${number} · ${place.name}`;
  $('modalTitle').textContent = video.title;
  $('nowLink').href = `https://www.youtube.com/watch?v=${video.id}`;

  const desc = $('lessonDesc');
  desc.textContent = video.desc || '';
  desc.hidden = !video.desc;

  // o Mestre (logado) vê o botão de remover (aulas fixas de aulas.js não podem ser removidas aqui)
  $('lessonRemove').hidden = !(state.isAdmin && state.onRemove && !video.fixed);

  // Coloca o vídeo do YouTube dentro da janela
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1`;
  iframe.title = video.title;
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen';
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  const screen = $('screen');
  screen.textContent = '';
  screen.appendChild(iframe);

  if (!dialog().open) dialog().showModal();
  dialog().scrollTop = 0;
}

// Se a aula aberta deixou de existir (foi removida), fecha a janela
export function refreshModal() {
  if (dialog().open && !state.videos[state.current][0]) dialog().close();
}

export function setupModal() {
  const d = dialog();
  $('modalClose').addEventListener('click', () => d.close());
  // clicar fora da caixa (no fundo escuro) também fecha
  d.addEventListener('click', (e) => {
    if (e.target === d) d.close();
  });
  d.addEventListener('close', resetPlayer);
  $('lessonRemove').addEventListener('click', () => state.onRemove && state.onRemove(state.current));
}
