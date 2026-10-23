// Comportamiento SOLO del prototipo. No se porta a la app.
// 1) Selector de estados: cada variante de pantalla es un elemento con
//    data-estado="clave" y data-estado-label="Nombre legible". Se muestra una a la vez.
//    La primera es la por defecto; ?estado=clave en la URL elige otra.
// 2) Abrir/cerrar demostrativo: [data-proto-open="#id"] muestra el destino (hidden=false)
//    y [data-proto-close] dentro de él lo oculta. Esc cierra el último abierto.
(() => {
  const variants = [...document.querySelectorAll('[data-estado]')];
  const params = new URLSearchParams(location.search);

  function show(key, push) {
    let found = false;
    variants.forEach(v => {
      const on = v.dataset.estado === key;
      v.hidden = !on;
      if (on) found = true;
    });
    if (!found && variants[0]) { variants[0].hidden = false; key = variants[0].dataset.estado; }
    document.querySelectorAll('.proto-bar__btn').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.key === key)));
    if (push) {
      const u = new URL(location.href);
      u.searchParams.set('estado', key);
      history.replaceState(null, '', u);
    }
  }

  if (variants.length > 1) {
    const bar = document.createElement('nav');
    bar.className = 'proto-bar';
    bar.setAttribute('aria-label', 'Estados de esta pantalla (prototipo)');
    const title = document.createElement('p');
    title.className = 'proto-bar__title';
    title.textContent = 'Estados';
    bar.append(title);
    const list = document.createElement('div');
    list.className = 'proto-bar__list';
    variants.forEach(v => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'proto-bar__btn';
      b.dataset.key = v.dataset.estado;
      b.textContent = v.dataset.estadoLabel || v.dataset.estado;
      b.addEventListener('click', () => show(v.dataset.estado, true));
      list.append(b);
    });
    bar.append(list);
    const hide = document.createElement('button');
    hide.type = 'button';
    hide.className = 'proto-bar__hide';
    const label = () => { hide.textContent = bar.classList.contains('is-min') ? `Estados (${variants.length})` : 'Ocultar'; hide.setAttribute('aria-expanded', String(!bar.classList.contains('is-min'))); };
    hide.addEventListener('click', () => { bar.classList.toggle('is-min'); label(); });
    // En pantallas angostas parte minimizado para no tapar la pantalla.
    if (window.matchMedia('(max-width: 640px)').matches) bar.classList.add('is-min');
    label();
    bar.append(hide);
    document.body.append(bar);
  }
  show(params.get('estado') || (variants[0] && variants[0].dataset.estado), false);

  const stack = [];
  document.addEventListener('click', e => {
    const opener = e.target.closest('[data-proto-open]');
    if (opener) {
      const t = document.querySelector(opener.dataset.protoOpen);
      if (t) { t.hidden = false; stack.push({ t, opener }); opener.setAttribute('aria-expanded', 'true'); const f = t.querySelector('[tabindex="-1"], h2, h1'); if (f) { f.setAttribute('tabindex', '-1'); f.focus(); } }
      return;
    }
    const closer = e.target.closest('[data-proto-close]');
    if (closer) {
      const t = closer.closest('[hidden], .modal, .drawer, .scrim, [role="dialog"]') || closer.parentElement;
      const i = stack.findIndex(s => s.t.contains(closer));
      if (i > -1) { const s = stack.splice(i, 1)[0]; s.t.hidden = true; s.opener.setAttribute('aria-expanded', 'false'); s.opener.focus(); }
      else if (t) t.hidden = true;
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && stack.length) { const s = stack.pop(); s.t.hidden = true; s.opener.setAttribute('aria-expanded', 'false'); s.opener.focus(); }
  });
})();
