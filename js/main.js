// Ponto de entrada: liga todos os módulos quando a página abre.

import { state } from './state.js';
import { PLACES } from './config.js';
import { AULAS } from './aulas.js';
import { fetchLocais } from './api.js';
import { renderModules } from './ui.js';
import { setupModal } from './modal.js';
import { setupAdmin } from './admin.js';
import { setupTheme } from './theme.js';
import { renderAbout } from './about.js';
import { renderTeam } from './contact.js';
import { $, ytId } from './utils.js';

// Aula escrita direto em aulas.js (marcada como "fixed": o painel não mexe nela)
function fixedLesson(placeId) {
  const aula = AULAS[placeId];
  if (!aula || !aula.link) return null;
  const id = ytId(aula.link);
  if (!id) {
    console.warn(`aulas.js: link inválido em ${placeId}:`, aula.link);
    return null;
  }
  return { id, title: aula.titulo || 'Aula', desc: aula.descricao || '', fixed: true };
}

// Cada aula tem no máximo 1 vídeo. O que está em aulas.js vale mais que o do painel.
function applyContent(serverData = {}) {
  PLACES.forEach((p) => {
    const fixed = fixedLesson(p.id);
    const fromServer = Array.isArray(serverData[p.id]) ? serverData[p.id] : [];
    state.videos[p.id] = fixed ? [fixed] : fromServer.slice(0, 1);
  });
}

async function loadFromServer() {
  try {
    applyContent(await fetchLocais());
    $('adminBtn').hidden = false;   // servidor respondeu: o painel do Mestre funciona
  } catch {
    // Sem servidor (ex.: GitHub Pages): o site usa só as aulas de aulas.js e esconde o painel
  }
  renderModules();
}

setupTheme();
setupModal();
setupAdmin();
renderAbout();
renderTeam();
applyContent();     // mostra as aulas fixas imediatamente
renderModules();
loadFromServer();
