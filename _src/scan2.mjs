// Recorre todas las páginas y variantes; mide desborde horizontal y errores JS a 390 y 1440.
import { createRequire } from 'module'; const require = createRequire(import.meta.url);
const pw = require('/Users/marioescobar/.npm-global/lib/node_modules/playwright'); import fs from 'fs'; import path from 'path';
const root = process.argv[2]; const out = process.argv[3];
const files = ['publico','acceso','vendedor','validador','admin'].flatMap(a => fs.readdirSync(path.join(root,a)).filter(f=>f.endsWith('.html')).map(f=>a+'/'+f));
const b = await pw.chromium.launch({ channel: 'chrome' }); const res = [];
for (const w of [390, 1440]) {
  const p = await b.newPage({ viewport: { width: w, height: 900 }, colorScheme: process.argv[4] || 'light' }); const errs = []; p.on('pageerror', e => errs.push(e.message));
  for (const f of files) {
    await p.goto('file://' + path.join(root, f)); await p.waitForTimeout(250);
    const keys = await p.$$eval('[data-estado]', v => v.map(x => x.dataset.estado));
    for (const k of (keys.length ? keys : [null])) {
      if (k) { await p.evaluate(k => { document.querySelectorAll('[data-estado]').forEach(v => v.hidden = v.dataset.estado !== k); }, k); await p.waitForTimeout(60); }
      const o = await p.evaluate(() => { const d = document.documentElement; const bad = [...document.querySelectorAll('body *')].filter(e => { const r = e.getBoundingClientRect(); return r.width && r.right > d.clientWidth + 1 && getComputedStyle(e).position !== 'fixed' && !e.closest('[hidden],.table-scroll,.mtx-scroll,[class*="scroll"]'); }).slice(0,3).map(e => e.className || e.tagName); return { sw: d.scrollWidth, cw: d.clientWidth, bad }; });
      if (o.sw > o.cw + 1) res.push({ w, f, k, ...o });
    }
  }
  if (errs.length) res.push({ w, jsErrors: [...new Set(errs)] });
  await p.close();
}
await b.close(); fs.writeFileSync(out, JSON.stringify(res, null, 1)); console.log('paginas', files.length, 'problemas', res.length);
