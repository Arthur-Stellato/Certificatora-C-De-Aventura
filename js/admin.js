// Painel do Mestre: login por senha, guardar e remover aulas.

import { PLACES } from './config.js';
import { state, getPlace } from './state.js';
import { $, el, ytId } from './utils.js';
import { login, saveLocal } from './api.js';
import { renderModules } from './ui.js';
import { refreshModal } from './modal.js';

let password = '';   // guardada só na memória da página

function message(text, isError = false) {
  const box = $('adMsg');
  box.textContent = text;
  box.className = isError ? 'msg err' : 'msg';
}

// Salva no servidor e só depois atualiza a tela. "videos" tem 0 ou 1 vídeo.
async function save(placeId, videos) {
  await saveLocal(placeId, videos, password);
  state.videos[placeId] = videos;
  renderModules();
  refreshModal();
}

async function removeVideo(placeId) {
  if (!window.confirm('Remover esta aula?')) return;
  try {
    await save(placeId, []);
    message('Aula removida.');
  } catch (e) {
    message(`Não foi possível remover: ${e.message}`, true);
  }
}

async function addVideo() {
  const placeId = $('adLocal').value;
  const title = $('adTitle').value.trim();
  const id = ytId($('adUrl').value);
  const desc = $('adDesc').value.trim();
  const current = state.videos[placeId][0];

  if (!title) return message('Dê um título à aula.', true);
  if (!id) return message('Link inválido. Use um link de vídeo do YouTube.', true);
  if (current && current.fixed) {
    return message('Esta aula já está definida em aulas.js. Apague lá para usar o painel.', true);
  }

  $('adAdd').disabled = true;
  try {
    // cada aula guarda um único vídeo: guardar de novo substitui o anterior
    await save(placeId, [desc ? { id, title, desc } : { id, title }]);
    message(`Aula guardada: ${getPlaceLabel(placeId)}.`);
    $('adTitle').value = '';
    $('adUrl').value = '';
    $('adDesc').value = '';
  } catch (e) {
    message(`Não foi possível guardar: ${e.message}`, true);
  } finally {
    $('adAdd').disabled = false;
  }
}

function getPlaceLabel(placeId) {
  const number = PLACES.findIndex((p) => p.id === placeId) + 1;
  return `Aula ${number} (${getPlace(placeId).name})`;
}

function togglePanel() {
  state.adminOpen = !state.adminOpen;
  $('admin').classList.toggle('on', state.adminOpen);
  $('adminBtn').textContent = state.adminOpen ? 'Fechar painel' : 'Mestre da guilda';
  if (state.adminOpen) $('admin').scrollIntoView({ block: 'start' });
}

async function onAdminButton() {
  if (state.isAdmin) return togglePanel();

  const typed = window.prompt('Senha do Mestre:');
  if (!typed) return;
  try {
    await login(typed);
    password = typed;
    state.isAdmin = true;
    togglePanel();
  } catch (e) {
    window.alert(e.message);
  }
}

export function setupAdmin() {
  const select = $('adLocal');
  PLACES.forEach((p, index) => {
    const option = el('option', null, `Aula ${index + 1} · ${p.name}`);
    option.value = p.id;
    select.appendChild(option);
  });

  state.onRemove = removeVideo;
  $('adAdd').addEventListener('click', addVideo);
  $('adminBtn').addEventListener('click', onAdminButton);
}
