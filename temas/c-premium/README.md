# Tema C · Oscuro premium («Espectro»)

## Concepto
1. Pensado primero en oscuro: superficies navy casi negras en capas (lienzo, superficie, panel de vidrio) y un riel navy de marca que se mantiene igual en los dos temas.
2. El caso avanza por un espectro azul → cian → menta (Venta → Contrato → Pago → Validación → Matriculado). Ese color marca la etapa en el panel, en las cifras y en la ficha.
3. Los colores cálidos tienen un solo uso: ámbar cuando se espera al postulante, coral cuando el caso está cerrado o hay error. El menta indica que algo está hecho o que el dinero ya se cobró. El rombo azul brilla y significa «te toca a ti».
4. La única audacia es la cifra clave: va en una isla de vidrio navy en ambos temas (el monto recaudado en el panel y el total a pagar en el pago). Las cifras y los títulos usan Bricolage Grotesque; el resto de la interfaz, Figtree.

## Paleta oscura (tema principal)
| Token | Hex | Uso |
|---|---|---|
| `--bg` noche 900 | `#080F1E` | lienzo |
| `--surface` noche 800 | `#0F1A2F` | tablas, visor, botón secundario, campos |
| `--bg-subtle` noche 850 | `#0D1729` | cabecera de tabla, fondo del visor |
| `--bg-muted` noche 700 | `#17263F` | carriles de barras, chips, deshabilitado |
| `--line` / `--line-strong` | `#1C2A44` / `#2A3B5B` | divisores |
| `--line-control` | `#61769C` | contorno de controles |
| `--ink` / `--text-2` / `--text-muted` / `--text-subtle` | `#EDF2FB` / `#C2CDE0` / `#98A6BF` / `#8796B1` | jerarquía de texto |
| `--accent` | `#6AA5FF` | enlaces, foco de acción, rombo |
| `--grad-accent` | `#5B9CFF → #3DD6F5` | botón primario (texto `#06101F`) |
| `--focus-ring` | `#7DD3FC` | anillo de foco |
| equipo | `#7FB2FF` sobre `#12264A` | «Por revisar», «Por validar» |
| postulante | `#FFC069` sobre `#2E2210`; icono `#FFB547` | observada, por firmar, por pagar |
| sistema/borrador | `#B4C0D6` sobre `#1A2640` | aprobada, borrador |
| hecho | `#5EEAB0` sobre `#0E2E2A` | matriculada, pasos hechos, dinero cobrado |
| cerrado/error | `#FF8A7A` sobre `#33171A` | rechazada, error |
| espectro 1–5 | `#5B8CFF` `#3DA5FF` `#22D3EE` `#2DD4BF` `#5EEAB0` | Venta, Contrato y firma, Pago, Validación, Matriculado |
| riel | `#10234A → #0B1A36 → #071022`; texto `#F2F6FF` / `#A9B8D3` | navegación (en ambos temas) |

## Paleta clara (derivada)
| Token | Hex | Uso |
|---|---|---|
| `--bg` niebla 25 | `#F5F7FC` | lienzo |
| `--surface` | `#FFFFFF` | tablas, visor, campos |
| `--bg-subtle` / `--bg-muted` | `#EDF1F8` / `#E3E9F3` | cabeceras, carriles |
| `--line` / `--line-strong` / `--line-control` | `#DCE3EE` / `#C9D3E3` / `#7A879C` | divisores y controles |
| `--ink` / `--text-2` / `--text-muted` / `--text-subtle` | `#0B1526` / `#33405A` / `#4E5B73` / `#5A667D` | texto |
| `--accent` | `#1D4ED8` (gradiente hasta `#2563EB`) | acción, rombo de marca |
| equipo | `#1D4ED8` sobre `#E3ECFF` | |
| postulante | `#8A4B00` sobre `#FFF1D6`; icono `#C77700`; barra `#B06A00` | |
| sistema | `#3B4658` sobre `#E8EDF5`; barra `#64748B` | |
| hecho | `#0B6B4F` sobre `#DDF7EC`; barra `#0E8F60` | |
| cerrado | `#B42318` sobre `#FDE8E6`; barra `#D9483B` | |
| espectro 1–5 | `#2F66F5` `#0B7FD1` `#0A8AA8` `#0C8C82` `#0E9461` | etapas |
| islas navy | `#142A50 → #0A152B` | cifra clave, cabecera pública |

## Contrastes (WCAG 2.2, fórmula de luminancia relativa; script `c-tools/cr.mjs`)
| Par | Oscuro | Claro | Mínimo |
|---|---|---|---|
| ink / lienzo | 17,04 | 17,04 | 4,5 |
| text-2 / lienzo | 11,94 | 9,69 | 4,5 |
| text-muted / lienzo · / bg-muted | 7,78 · 6,17 | 6,39 · 5,61 | 4,5 |
| text-subtle / lienzo · / bg-muted | 6,40 · 5,07 | 5,40 · 4,74 | 4,5 |
| accent / lienzo | 7,69 | 6,25 | 4,5 |
| texto del botón primario (peor punto del gradiente) | 6,94 (`#06101F`/`#5B9CFF`) | 5,17 (blanco/`#2563EB`) | 4,5 |
| badge equipo | 6,93 | 5,65 | 4,5 |
| badge postulante | 9,61 | 6,09 | 4,5 |
| badge sistema | 8,21 | 8,11 | 4,5 |
| badge hecho | 9,61 | 5,76 | 4,5 |
| badge cerrado | 7,17 | 5,59 | 4,5 |
| line-control / lienzo · / superficie | 4,17 · 3,55 | 3,39 · 3,64 | 3 |
| foco / lienzo | 11,48 | 6,25 | 3 |
| espectro (peor) / lienzo | ≥ 5 | 3,61 (`#0E9461`) | 3 |
| barras sobre carril: equipo · postulante · sistema · cerrada · borrador | 6,09 · 8,63 · 5,46 · 6,62 · 3,31 | 5,49 · 3,51 · 3,90 · 3,48 · 3,65 | 3 |
| riel: texto · secundario · icono activo · rombo | 15,97 · 8,63 · 9,82 · 6,94 | igual (riel fijo) | 4,5 / 3 |
| isla navy: ink · text-2 · text-muted · menta | 13,59 · 9,52 · 6,21 · 10,08 | igual | 4,5 |
| enlace de la cabecera pública `#8DBBFF` / navy | 7,85 | igual | 4,5 |

## Qué cambié (solo `theme.css`; el HTML no se tocó)
- **Tokens:** se redefinen los primitivos y semánticos para el claro y el oscuro, con el patrón `@media (prefers-color-scheme: dark) :root:not([data-theme="light"])` más `:root[data-theme="dark"]`. Agregué los tokens `--surface`, `--rail-*`, `--stage-1…5`, `--fill-*`, `--glass-*`, `--grad-accent`, `--hero-money` y `--font-display`. Ningún texto queda bajo 13 px (`--fs-12` = 13 px) y el texto base del equipo sube a 16 px.
- **Riel** (≥ 641 px): la barra lateral pasa a un riel de 72 px con íconos y un monograma. Al pasar el mouse o al entrar con el foco se abre como panel flotante de 272 px, con etiquetas, contadores y logo claro. El rombo con brillo marca lo que te toca. En móvil queda la barra superior navy y el cajón. `--sidebar-w` no cambió, así que `.form-page` no se ve afectado.
- **Panel:** `.tally` va como franja de vidrio y el progreso de cada cifra usa el color de su etapa. El monto recaudado va en una isla navy con la cifra en menta y el arancel comprometido queda en neutro. En `.where`, el nombre de cada etapa lleva su color, el carril va teñido con el color de la etapa y la barra muestra quién actúa (azul equipo, ámbar postulante, menta hecho, coral cerrada). El sello «Actualizado» va en menta.
- **Bandeja y ficha:** las tablas van en un panel con bordes suaves; la fila con cursor tiene un degradado y un borde de acento. La pestaña activa se marca con un subrayado degradado con brillo y los contadores van en píldora. Los badges llevan un anillo de su propio color. Las etapas de la ficha usan el espectro y el visor tiene un fondo punteado con herramientas en vidrio.
- **Pago:** la cabecera pública es navy con el logo claro. En el recorrido, los pasos hechos van en menta y el paso actual va resaltado con el rombo. La pista de cuotas usa el gradiente y el total más el botón van en la isla navy (en móvil, como hoja inferior fija).
- **Botones y campos:** el botón primario usa el gradiente con brillo. El secundario va sobre la superficie con contorno de acento al pasar el mouse. El chevron de los select cambia según el tema y el foco tiene un halo.
- **`.theme-fab`:** píldora de vidrio fija abajo a la derecha que respeta `env(safe-area-inset-*)`. Su punto muestra el modo (sistema mitad y mitad, claro con sol ámbar, oscuro con luna). En móvil queda solo el ícono y sube sobre la barra de pago.
- **Logo:** `logo-claro.svg` es la copia con la tinta en `#F2F6FF` y el rombo en `#6AA5FF`. Se usa en el riel, en la barra móvil y en la cabecera pública, todos navy en ambos temas.
- El selector de estados (`.proto-bar`, solo del prototipo) se adapta al oscuro para que no quede como una mancha blanca.

Fuente editable: `scratchpad/c-tools/` (`1-light.css`, `2-dark-tokens.css`, `3-dark-extra.css`, `4-components.css`). `build.sh` compone el `theme.css` y `shoot.sh` genera las 10 capturas.
