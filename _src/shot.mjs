// uso: node shot.mjs <archivo.html> <salida.png> [ancho=1440] [alto=900]
import { createRequire } from 'module'; const require = createRequire(import.meta.url);
const pw = require(process.env.PWPATH || '/Users/marioescobar/.npm-global/lib/node_modules/playwright');
const [,, f, o, w='1440', h='900'] = process.argv;
const b = await pw.chromium.launch({ channel: 'chrome' });
const p = await b.newPage({ viewport: { width: +w, height: +h } });
const errs=[]; p.on('pageerror', e=>errs.push(e.message)); p.on('console', m=>{ if(m.type()==='error') errs.push(m.text()) });
await p.goto('file://' + f); await p.waitForTimeout(1200);
await p.screenshot({ path: o, fullPage: true });
console.log(JSON.stringify({ ok: true, png: o, errores: errs }));
await b.close();
