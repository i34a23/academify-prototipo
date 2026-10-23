# Tema A: Azul eléctrico

## Concepto
El ADN de academify (navy #0F1B2D + azul #1D4ED8) pasado a luz: el riel lateral es noche de marca que baja a azul eléctrico, y cada página abre con una banda de color y una línea azul → cian → violeta.
El color tiene una función: dice **quién actúa**. Azul = equipo (tú), ámbar = postulante, violeta = sistema, verde = hecho, rojo = cerrado. Cian, violeta y fucsia solo marcan **etapas del caso** (venta, contrato, pago, validación, matrícula).
Las cifras del período van en vidrio sobre la banda. La única audacia es la cifra que manda, el dinero recaudado, en un bloque navy→azul de marca.
Una sola familia (Figtree). La jerarquía sale del peso y el tamaño: cuerpo del equipo a 16 px, piso de 13 px, títulos de 30-32 px.

## Archivos
- `theme.css`: generado. No se edita a mano.
- `fuente/theme.src.css` (claro + componentes) y `fuente/dark.tokens.css` (oscuro). El bloque oscuro se escribe una vez y se emite en los dos selectores exigidos. Para regenerar: `python3 fuente/build.py theme.css`
- `fuente/cr.py`: calcula los contrastes WCAG.
- `logo-claro.svg`: wordmark blanco con rombo #7FA4FF. Se usa siempre en el riel y en la barra móvil, y en el encabezado público en oscuro (`content: var(--logo-swap)`).

## Paleta clara
| Token | Hex | Uso |
|---|---|---|
| ink | #0F1B2D | texto principal (navy de marca) |
| text-2 / text-muted | #33415C / #4F5D78 | texto secundario / metadatos |
| accent (electric-600) | #1D4ED8 | enlaces, botón primario, rombo, «te toca a ti» |
| electric-500 | #2F6BFF | barras del equipo, etapa venta |
| accent-subtle | #EAF0FF | grupo «Te toca a ti», fila en foco |
| line / line-control | #E2E8F3 / #7584A3 | divisores / borde de controles |
| bg / bg-subtle / bg-muted | #FFFFFF / #F3F6FC / #E9EEF8 | superficies |
| team | #1D4ED8 sobre #E3EBFF | estado: espera al equipo |
| applicant | #9A3412 sobre #FFEBD3 (icono #C2410C) | estado: espera al postulante |
| system | #6D28D9 sobre #EFE7FF | estado: lo mueve el sistema |
| done | #067647 sobre #D9F7E8 | matriculado |
| closed | #B42318 sobre #FFE4E1 | rechazada o error |
| bar-applicant / bar-system / bar-done / bar-draft | #C25E00 / #7C3AED / #059669 / #64748B | barras sobre pista #EEF2FA |
| stage-1…5 | #2F6BFF · #7C3AED · #0891B2 · #C026D3 · #059669 | venta · contrato · pago · validación · matrícula |
| riel | #0B1633 → #12286E → #1A3CB0 | degradado vertical del menú |
| hero | #0F1B2D → #1D4ED8 | cifra clave (recaudado) |

## Paleta oscura
| Token | Hex | Uso |
|---|---|---|
| bg / bg-subtle / bg-muted | #0B1222 / #111B31 / #18243F | superficies (navy noche, nunca negro) |
| ink / text-2 / text-muted | #EEF3FF / #C5D0E8 / #9DABC9 | texto |
| accent | #7FA4FF | enlaces y texto de acción |
| btn-bg / btn-bg-top | #2A55E0 / #3461F0 | botón primario (texto blanco) |
| line / line-control | #1F2D4A / #6177A6 | divisores / controles |
| team | #8FB0FF sobre #172B5C | equipo |
| applicant | #FFB869 sobre #3A2610 | postulante |
| system | #C4B0FF sobre #2A1F52 | sistema |
| done | #5EE2A0 sobre #0F3526 | hecho |
| closed | #FF9089 sobre #3D1518 | cerrado |
| bar-team / applicant / system / done / draft / closed | #5B8CFF / #FFA24C / #A78BFA / #34D399 / #7D8DB0 / #FF7B72 | barras sobre #18243F |
| stage-1…5 | #5B8CFF · #A78BFA · #22D3EE · #E879F9 · #34D399 | etapas |
| riel | #060C1C → #0D1D52 → #1733A0 | menú |
| hero | #12286E → #2A55E0 | cifra clave |

## Contrastes (WCAG 2.2 AA; texto ≥ 4,5:1, componentes ≥ 3:1)
| Par | Claro | Oscuro |
|---|---|---|
| ink / bg | 17,28 | 16,82 |
| text-2 / bg | 10,24 | 12,07 |
| text-muted / bg · / bg-muted · / banda | 6,63 · 5,70 · 5,75 | 8,10 · 6,68 · 7,19 |
| text-disabled / bg-muted | 4,54 | 5,44 |
| accent / bg · / accent-subtle | 6,70 · 5,87 | 7,70 · 6,08 |
| blanco / botón primario (base · brillo · hover) | 6,70 · 5,35 · 8,82 | 6,04 · 5,10 · 5,52 |
| badge team | 5,61 | 6,39 |
| badge applicant (texto · icono) | 6,29 · 4,46 | 8,41 · 7,03 |
| badge system | 5,94 | 7,77 |
| badge done | 4,99 | 8,26 |
| badge closed | 5,46 | 7,28 |
| line-control / bg (componente) | 3,76 | 4,18 |
| barras / pista (team · applicant · system · done · draft) | 3,87 · 3,82 · 4,90 · 3,24 · 4,09 | 4,87 · 7,72 · 5,66 · 8,01 · 4,63 |
| riel: blanco arriba · abajo; text-muted abajo; acento cian abajo | 17,11 · 7,59; 5,44; 6,67 | igual (el riel es oscuro en ambos temas) |
| contador «te toca» del riel (#0B1633 / #9FE8FF) | 13,14 | 13,14 |
| hero: blanco / extremo claro · nota / extremo claro | 6,70 · 5,09 | 6,04 · 4,84 |
| etapas / bg (marcador gráfico) | 4,50 · 5,70 · 3,68 · 4,71 · 3,77 | 5,91 · 6,87 · 10,34 · 7,59 · 9,72 |

Excepción declarada: el icono ámbar del badge del postulante da 4,46:1 en claro. Es un componente gráfico (umbral 3:1) y el texto del badge da 6,29:1.

## Componentes que cambian (solo por clase existente; el HTML no se toca)
- **Riel y barra móvil** (`.sidebar`, `.shell__topbar`): degradado noche → eléctrico. Los tokens se re-escopan dentro del riel para que todos sus hijos se lean claros. El ítem activo lleva vidrio y una barra cian a la izquierda. Los contadores van en píldora y los tuyos en cian. Logo claro.
- **Banda de encabezado** (`.main`, `.split__main`, `body.is-public`): degradado de color que se desvanece, más una línea de marca de 3 px. Título a 32 px.
- **Cifras** (`.tally*`): tarjetas de vidrio con `backdrop-filter`. El color de la barrita depende de quién actúa (aprobadas = sistema, firma y pago = postulante). «Recaudado en línea» va como bloque hero.
- **Dónde están los casos** (`.where`, `.bars*`): un filete de color por etapa y barras de 10 px redondeadas con color por actor.
- **Badges**: 26 px, con anillo del mismo tono. Sistema pasa de gris a violeta.
- **Botones**: el primario lleva degradado y brillo azul. El secundario se pinta de acento al pasar el mouse.
- **Pestañas**: subrayado de 3 px con la línea de marca y contador de la pestaña activa en acento.
- **Tabla**: contenedor redondeado, grupo «Te toca a ti» en azul tenue (`:has(.rombo)`) y fila en foco con filete eléctrico de 4 px. «Esperando» vencido pasa a ámbar.
- **Ficha**: la barra de decisión va en vidrio. Las etapas usan el color de cada etapa (línea y círculo) y los hechos ya cumplidos van en azul. El visor es una mesa de luz con retícula de puntos.
- **Pago público**: encabezado de vidrio con línea de marca. «Te toca» va en una caja azul tenue, con etiquetas en píldora, ícono de renglón en azul, pista de cuotas en eléctrico y el total en una tarjeta de vidrio (en móvil, una barra fija de vidrio). Total a 36 px.
- **`.theme-fab`**: píldora de vidrio fija abajo a la derecha, con `env(safe-area-inset-*)`. El punto indica el modo (mitad y mitad = sistema, sol = claro, luna = oscuro). En móvil queda solo el ícono y sube sobre la barra de pago.

## Pendientes fuera del CSS
- `<meta name="theme-color">` sigue fijo (#F7F8FA / #FFFFFF). En oscuro debería ser #0B1222, o #0B1633 para el riel. Se cambia con una línea de JS en `theme.js` o con dos metas con `media`.
- Pestañas de la bandeja: con el cuerpo a 16 px caben justo a 1440 (1136/1136 px). A anchos menores se desplazan dentro de su propia franja, igual que antes.
