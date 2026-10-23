// Interruptor de tema: Sistema → Claro → Oscuro. Se porta a la app (preferencia por usuario).
// Escribe data-theme="light|dark" en <html>; sin atributo manda prefers-color-scheme.
// Si la página trae un botón [data-theme-toggle] lo usa; si no, agrega uno flotante.
(() => {
  const KEY = 'academify-tema';
  const root = document.documentElement;
  const order = ['system', 'light', 'dark'];
  const label = { system: 'Tema: sistema', light: 'Tema: claro', dark: 'Tema: oscuro' };
  let mode = 'system';
  try { mode = localStorage.getItem(KEY) || 'system'; } catch (e) {}

  function apply() {
    if (mode === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', mode);
    document.querySelectorAll('[data-theme-toggle]').forEach(b => {
      b.setAttribute('aria-label', label[mode] + '. Cambiar tema');
      const t = b.querySelector('[data-theme-label]');
      if (t) t.textContent = label[mode].replace('Tema: ', '');
      b.dataset.mode = mode;
    });
  }
  apply();

  document.addEventListener('DOMContentLoaded', () => {
    if (!document.querySelector('[data-theme-toggle]')) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'theme-fab';
      b.setAttribute('data-theme-toggle', '');
      b.innerHTML = '<span class="theme-fab__dot" aria-hidden="true"></span><span data-theme-label></span>';
      document.body.append(b);
    }
    document.querySelectorAll('[data-theme-toggle]').forEach(b => b.addEventListener('click', () => {
      mode = order[(order.indexOf(mode) + 1) % order.length];
      try { localStorage.setItem(KEY, mode); } catch (e) {}
      apply();
    }));
    apply();
  });
})();
