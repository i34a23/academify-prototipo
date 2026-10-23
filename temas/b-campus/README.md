# Tema B · Campus vivo

## Concepto
Cada etapa del caso tiene su color: Venta en fucsia, Contrato y firma en turquesa, Pago en mandarina, Validación en violeta y Matriculado en verde. Funciona como en Monday.com, donde cada estado tiene su color.
El color indica en qué etapa está el caso. La forma indica quién actúa: un badge con rombo y relleno pleno significa "te toca a ti"; uno en tinte con reloj significa que espera a otro.
El azul de marca queda solo para la acción (botones, enlaces, foco). El rojo queda solo para cierre y error.
El fondo es lila niebla (#F3F2F9) con tarjetas blancas, el riel es azul noche y la cifra clave va en vidrio sobre una aurora con los 5 colores de etapa en su orden.

## Paleta

### Claro
| Nombre | Hex | Uso |
|---|---|---|
| Lienzo lila niebla | #F3F2F9 | fondo de página |
| Superficie | #FFFFFF | tarjetas, tablas, campos |
| Tinta de marca | #0F1B2D | texto principal |
| Texto 2 / muted | #3B4658 / #505B6D | texto secundario |
| Contorno de control | #7D7896 | borde de inputs y botones |
| Azul acción | #1D4ED8 | botones primarios, enlaces, rombo |
| Riel | #1B2152 → #0F1B2D | menú vertical |
| Venta | #A21CAF relleno · #FBEEFC tinte · #86198F texto · #C026D3 barra | etapa 1 |
| Contrato y firma | #0F766E · #E3F6F3 · #115E59 · #0D9488 | etapa 2 |
| Pago | #C2410C · #FFF0E6 · #9A3412 · #EA580C | etapa 3 |
| Validación | #6D28D9 · #F1EBFE · #5B21B6 · #7C3AED | etapa 4 |
| Matriculado | #15803D · #E6F6EC · #166534 · #16A34A | etapa 5 |
| Cerrada / error | #B42318 · #FEF2F2 | rechazo, error |
| Aviso (actor postulante) | #7A4F00 · #FEF7D6 · #A16207 | alertas de advertencia (amarillo, para no chocar con Pago) |

### Oscuro
| Nombre | Hex | Uso |
|---|---|---|
| Lienzo noche | #0F1426 | fondo |
| Superficie | #171D33 | tarjetas |
| Subtle / muted | #1C2340 / #252D4D | cabeceras, pistas |
| Tinta | #EEF0F8 | texto principal |
| Texto 2 / muted | #C9CEE0 / #A6ADC6 | secundario |
| Contorno de control | #7F88AD | bordes |
| Azul acción | #7AA2FF (texto encima #0B1430) | acción, rombo |
| Venta | #E879F9 · #3A1A44 · #F5B8FB | |
| Contrato | #2DD4BF · #0F3433 · #8FEBDD | |
| Pago | #FB923C · #3D2214 · #FDBA8C | |
| Validación | #A78BFA · #2A2150 · #C9B8FF | |
| Matriculado | #4ADE80 · #12341F · #93EDB2 | |
| Cerrada | #F87171 · #3A1C22 · #FCA5A5 | |

En oscuro, los rellenos de etapa llevan texto #0F1426.

## Contrastes (WCAG 2.x, calculados)
| Par | Claro | Oscuro |
|---|---|---|
| Tinta / lienzo | 15,54 | 16,07 |
| Tinta / superficie | 17,28 | 14,65 |
| Muted / lienzo | 6,17 | 8,20 |
| Subtle / superficie | 5,48 | 5,84 |
| Acento / lienzo | 6,02 | 7,35 |
| Texto sobre botón primario | 6,70 | 7,29 |
| Contorno de control / superficie (≥3) | 4,20 | 4,78 |
| Badge pleno Venta (texto/relleno) | 6,32 | 7,43 |
| Badge pleno Contrato | 5,47 | 9,82 |
| Badge pleno Pago | 5,18 | 8,08 |
| Badge pleno Validación | 7,10 | 6,72 |
| Badge pleno Matriculado | 5,02 | 10,49 |
| Texto de etapa / tinte (Venta, Contrato, Pago, Validación, Matriculado) | 7,35 · 6,77 · 6,56 · 7,72 · 6,37 | 9,31 · 9,68 · 8,75 · 8,23 · 9,76 |
| Barra de etapa / superficie (≥3) | 4,71 · 3,74 · 3,56 · 5,70 · 3,30 | 6,77 · 8,95 · 7,36 · 6,12 · 9,56 |
| Texto 2 / tintes de etapa | ≥ 8,51 | ≥ 8,59 |
| Riel: texto / muted sobre #1B2152 | 15,15 / 9,57 | 14,20 / 7,90 |
| Aviso texto / tinte | 6,62 | 10,69 |
| Cerrada texto / tinte | 6,01 | 8,08 |

## Componentes cambiados (solo theme.css)
- **Tokens**: lienzo, superficies, líneas, textos, acción, actores y 7 juegos de etapa (`--st-*`) en claro y oscuro. El patrón oscuro va con `prefers-color-scheme` y con `[data-theme]`. Tipografía base de 16 px y piso de 13 px (`--fs-12` = 13 px). Bricolage Grotesque solo en títulos y cifras.
- **Mapeo a etapa** (`--stage*`): se hace con `[data-etapa]`, con `nth-child` en `.where`, `.stages`, `.journey` y `.tally` (el orden de etapas es canónico), y con `href*="estado="` en las pestañas.
- **Riel** (≥1025 px): 76 px de íconos sobre un degradado azul noche. Al pasar el mouse o al recibir foco se abre un panel flotante de 272 px. En el riel se ve el monograma «a»; en el panel abierto, el logo claro. Los contadores son píldoras y el rombo aparece sobre el ícono. En tablet y móvil sigue el comportamiento existente (colapsado o cajón).
- **Tally del panel**: arriba, la cifra clave en vidrio ($ recaudado, 56 px) y el arancel, sobre la aurora de etapas. Abajo, el embudo de 5 tarjetas teñidas por etapa con barra de proporción. Siempre en 2 franjas.
- **Dónde están los casos**: una tarjeta teñida por etapa, con barras gruesas en su color y borradores en rayado.
- **Badges**: tinte de etapa con borde suave. Si llevan rombo (te toca a ti), van en relleno pleno con sombra de color. Los badges de documento conservan el color por actor.
- **Pestañas o filtros**: punto de color de etapa, subrayado de 3 px en el color de la etapa activa y conteo en píldora teñida.
- **Tablas**: tarjeta blanca redondeada. Cada fila lleva un borde izquierdo de 4 px con el color de la etapa de su caso (`:has`). La fila con cursor lleva el borde en azul acción.
- **Ficha**: hechos y línea de etapas en tarjetas. La línea va en el color de cada etapa y la etapa actual queda teñida.
- **Pago público**: la tarea va en tarjeta. El recorrido tiene checks y tramos en el color de su etapa, y el paso actual queda teñido de Pago. Las cuotas elegidas van en mandarina. "Total a pagar hoy" va en vidrio con aurora de Pago.
- **Botones, inputs, filtros y alertas**: radios de 12 px y sombra de color en el primario (sin sombra si está deshabilitado). Las advertencias pasan a amarillo.
- **Interruptor `.theme-fab`**: píldora de vidrio abajo a la derecha con `env(safe-area-inset-*)`. El punto cambia según el modo: espectro (sistema), sol (claro) o luna (oscuro). En móvil queda solo el ícono, sobre la barra de pago.
- **Logo**: `logo-claro.svg` (navy → blanco, rombo #7AA2FF). Se usa siempre en el riel y en oscuro en todo `img[src$="academify-logo.svg"]`.
- **Barra de estados del prototipo**: versión oscura (solo chrome del prototipo).

## Cambio mínimo de HTML
Se agregó `data-etapa="venta|contrato|pago|validacion|matriculado|cerrada"` a los badges de estado del caso en `ven-01-postulaciones.html` (43) y en el título de `ven-02-ficha.html` (12). La app debe emitir ese atributo en el badge de estado. Los originales están en `orig/`.
