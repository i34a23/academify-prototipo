#!/usr/bin/env python3
# Genera temas/a-electrico/theme.css: el bloque oscuro se escribe una vez y se emite en los dos selectores exigidos.
import pathlib, sys
here = pathlib.Path(__file__).parent
src = (here / "theme.src.css").read_text()
dark = (here / "dark.tokens.css").read_text().rstrip()
indented = "\n".join("  " + l if l.strip() else l for l in dark.splitlines())
block = (
    "@media (prefers-color-scheme: dark) {\n"
    "  :root:not([data-theme=\"light\"]) {\n" + "\n".join("  " + l for l in indented.splitlines()) + "\n    color-scheme: dark;\n  }\n}\n"
    ":root[data-theme=\"dark\"] {\n" + indented + "\n  color-scheme: dark;\n}\n"
)
out = src.replace("/*@@DARK@@*/", block)
pathlib.Path(sys.argv[1]).write_text(out)
print("ok", len(out))
