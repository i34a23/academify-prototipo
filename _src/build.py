# Ensambla el prototipo: _src/pages/<area>/*.html -> <area>/*.html
# Inserta el sprite en <!--SPRITE--> y expande {{i:nombre}}, {{i14:nombre}}, {{i20:nombre}}.
# Uso: python3 _src/build.py [area/archivo.html ...]   (sin argumentos: todo)
import re, pathlib, sys

src = pathlib.Path(__file__).parent
root = src.parent
sprite = (src / 'sprite.svg').read_text().strip()
# Íconos agregados por grupo: _src/sprite-ext/*.svg con solo elementos <symbol id="i-...">.
ext = ''.join(f.read_text() for f in sorted((src / 'sprite-ext').glob('*.svg'))) if (src / 'sprite-ext').exists() else ''
if ext:
    sprite = sprite[:sprite.rindex('</svg>')] + ext + '</svg>'
defined = set(re.findall(r'id="i-([a-z0-9-]+)"', sprite))

def icon(m):
    size, name = m.group(1), m.group(2)
    cls = 'i' + (f' i--{size}' if size else '')
    return f'<svg class="{cls}" aria-hidden="true"><use href="#i-{name}"/></svg>'

pages = sorted((src / 'pages').glob('*/*.html'))
if len(sys.argv) > 1:
    wanted = set(sys.argv[1:])
    pages = [p for p in pages if f'{p.parent.name}/{p.name}' in wanted]

errors = 0
for p in pages:
    t = p.read_text()
    t = t.replace('<!--SPRITE-->', sprite)
    t = re.sub(r'\{\{i(14|20)?:([a-z0-9-]+)\}\}', icon, t)
    missing = set(re.findall(r'#i-([a-z0-9-]+)', t)) - defined
    if missing:
        errors += 1
        print('FALTA icono en', f'{p.parent.name}/{p.name}', sorted(missing))
    out = root / p.parent.name / p.name
    out.parent.mkdir(exist_ok=True)
    out.write_text(t)
    print('ok', out.relative_to(root))
sys.exit(1 if errors else 0)
