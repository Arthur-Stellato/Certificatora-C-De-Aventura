// Conversa com o servidor (back end). Nenhuma mexida na tela acontece aqui.

async function request(path, options = {}) {
  const res = await fetch(path, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) }
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.erro || `Erro ${res.status}`);
  return data;
}

export function fetchLocais() {
  return request('api/locais');
}

export function login(password) {
  return request('api/login', { method: 'POST', body: JSON.stringify({ password }) });
}

// Substitui a lista de vídeos de um local (exige senha)
export function saveLocal(placeId, videos, password) {
  return request(`api/locais/${placeId}`, {
    method: 'PUT',
    headers: { 'x-admin-password': password },
    body: JSON.stringify({ videos })
  });
}
