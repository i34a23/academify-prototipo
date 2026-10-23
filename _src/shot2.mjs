// uso: node shot2.mjs <archivo.html> <salida.png> <ancho> <alto> <light|dark> [full]
import { createRequire } from 'module'; const require = createRequire(import.meta.url);
const pw = require('/Users/marioescobar/.npm-global/lib/node_modules/playwright');
const [,, f, o, w = '1440', h = '900', scheme = 'light', full] = process.argv;
const b = await pw.chromium.launch({ channel: 'chrome' });
const p = await b.newPage({ viewport: { width: +w, height: +h }, colorScheme: scheme });
const errs = []; p.on('pageerror', e => errs.push(e.message));
await p.goto('file://' + f); await p.waitForTimeout(900);
await p.screenshot({ path: o, fullPage: !!full });
const ov = await p.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
console.log(JSON.stringify({ png: o, desborde_px: ov, errores: errs })); await b.close();
