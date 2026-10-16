// Estado compartilhado entre os módulos. Todos importam este mesmo objeto.

import { PLACES } from './config.js';

export const state = {
  
  videos: Object.fromEntries(PLACES.map((p) => [p.id, []])),
  current: PLACES[0].id,   // aula aberta na janela
  playing: null,           // { place, id } do vídeo que está tocando
  isAdmin: false,          // true depois de digitar a senha certa
  adminOpen: false,
  onRemove: null           // função definida pelo admin.js para remover vídeos
};

export function getPlace(id) {
  return PLACES.find((p) => p.id === id);
}
