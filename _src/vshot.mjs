import { createRequire } from 'module'; const require = createRequire(import.meta.url);
const pw = require('/Users/marioescobar/.npm-global/lib/node_modules/playwright');
const [,, f, k, o, w, h] = process.argv;
const b = await pw.chromium.launch({ channel: 'chrome' }); const p = await b.newPage({ viewport: { width: +w, height: +h } });
await p.goto('file://' + f); await p.waitForTimeout(500);
if (k && k !== '-') await p.evaluate(k => document.querySelectorAll('[data-estado]').forEach(v => v.hidden = v.dataset.estado !== k), k);
await p.waitForTimeout(300); await p.screenshot({ path: o }); await b.close();
