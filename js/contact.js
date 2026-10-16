// Seção Time: um cartão para cada aluno, com LinkedIn e GitHub.

import { ALUNOS } from './alunos.js';
import { $, el } from './utils.js';

// Só aceita links https:// (evita links quebrados ou perigosos)
function isValidLink(url) {
  try {
    return new URL(url).protocol === 'https:';
  } catch {
    return false;
  }
}

// Foto: caminho dentro da pasta img ou link https
function isValidPhoto(path) {
  return typeof path === 'string' && (/^img\/[\w .-]+$/.test(path) || isValidLink(path));
}

// Iniciais para o brasão: "Maria Souza" -> "MS"
function initials(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0].toUpperCase()).join('');
}

function socialLink(label, url, studentName) {
  if (!isValidLink(url)) return el('span', 'social off', `${label} não informado`);
  const a = el('a', 'social', label);
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', `${label} de ${studentName} (abre em nova aba)`);
  return a;
}

export function renderTeam() {
  const box = $('team');
  box.textContent = '';

  ALUNOS.forEach((aluno) => {
    const card = el('article', 'dialog member');

    if (isValidPhoto(aluno.foto)) {
      const img = el('img', 'photo');
      img.src = aluno.foto;
      img.alt = `Foto de ${aluno.nome}`;
      img.loading = 'lazy';
      card.appendChild(img);
    } else {
      card.appendChild(el('div', 'crest', initials(aluno.nome)));
    }

    card.appendChild(el('h3', null, aluno.nome));
    card.appendChild(el('p', 'role', aluno.funcao));

    const links = el('div', 'socials');
    links.append(socialLink('LinkedIn', aluno.linkedin, aluno.nome), socialLink('GitHub', aluno.github, aluno.nome));
    card.appendChild(links);

    box.appendChild(card);
  });
}
