// Botão que alterna entre o modo claro (pergaminho) e escuro (taverna).

import { $ } from './utils.js';

export function setupTheme() {
  $('themeBtn').addEventListener('click', () => {
    const root = document.documentElement;
    const saved = root.getAttribute('data-theme');
    const isDark = saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme', isDark ? 'light' : 'dark');
  });
}
