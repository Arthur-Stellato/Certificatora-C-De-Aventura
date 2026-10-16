// Atalho para document.getElementById
export const $ = (id) => document.getElementById(id);

// Cria um elemento com classe e texto (textContent evita injeção de HTML)
export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

// Extrai o ID do vídeo de um link do YouTube (ou devolve null se o link for inválido).
export function ytId(url) {
  try {
    const u = new URL(String(url).trim());
    const host = u.hostname.replace(/^www\.|^m\./, '');
    let id = null;

    if (host === 'youtu.be') {
      id = u.pathname.slice(1).split('/')[0];
    } else if (['youtube.com', 'music.youtube.com', 'youtube-nocookie.com'].includes(host)) {
      if (u.pathname === '/watch') {
        id = u.searchParams.get('v');
      } else {
        const m = u.pathname.match(/^\/(embed|shorts|live|v)\/([^/?]+)/);
        if (m) id = m[2];
      }
    }
    return id && /^[\w-]{11}$/.test(id) ? id : null;
  } catch {
    return null;
  }
}
