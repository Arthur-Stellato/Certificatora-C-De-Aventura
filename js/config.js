// Dados fixos do site: as 7 aulas, cada uma em um local do mapa.

export const PLACES = [
  { id: 'l1', name: 'Pergaminho do Herói', icon: 'taverna' },
  { id: 'l2', name: 'O Baú Mímico', icon: 'floresta' },
  { id: 'l3', name: 'Masmorra Esquecida', icon: 'masmorra' },
  { id: 'l4', name: 'A Primeira de Muitas', icon: 'castelo' },
  { id: 'l5', name: 'Torre do Mago', icon: 'torre' },
  { id: 'l6', name: '', icon: 'porto' },
  { id: 'l7', name: '', icon: 'covil' }
];

// Desenhos SVG de cada local (viewBox 0 0 48 48)
const stroke = 'fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';

export const ICONS = {
  taverna:  `<path ${stroke} d="M14 14h26v20a10 10 0 0 1-10 10h-6a10 10 0 0 1-10-10zM40 20h6a5 5 0 0 1 0 14h-6M20 6v5M27 4v7M34 6v5"/>`,
  floresta: `<path ${stroke} d="M24 6 10 28h8L8 44h32L30 28h8zM24 44v-6"/>`,
  castelo:  `<path ${stroke} d="M6 42V16h6v6h6v-6h6v6h6v-6h6v6h6V16v26zM20 42V32a4 4 0 0 1 8 0v10"/>`,
  masmorra: `<path ${stroke} d="M8 42V22a16 16 0 0 1 32 0v20zM16 42V26a8 8 0 0 1 16 0v16M24 18v24"/>`,
  torre:    `<path ${stroke} d="M18 44V22l-4-4 10-12 10 12-4 4v22zM24 30v6M8 12l3 3M40 10l-3 3M24 2v3"/>`,
  porto:    `<path ${stroke} d="M24 6v28M24 34c-8 0-12-6-12-8M24 34c8 0 12-6 12-8M16 14h16M8 42c6-4 10 2 16-2s10 2 16-2"/>`,
  covil:    `<path ${stroke} d="M6 36c4-14 10-20 18-20s14 6 18 20c-4-3-6-3-9 0-3-3-6-3-9 0-3-3-6-3-9 0-3-3-5-3-9 0zM17 26l3 2M31 26l-3 2"/>`
};

export const PLAY_ICON = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 1v14l13-7z" fill="currentColor"/></svg>';
