# Auditoría del proyecto — v2
Fecha: abril 2026

## Estado actual del repo
- Rama principal: `main`
- GitHub Pages sirve desde: raíz del repo (`/index.html`)
- URL pública: https://mundosintropico.github.io/

## Archivos clave
| Archivo | Rol |
|---|---|
| `/index.html` | El que GitHub Pages sirve. Único que hay que editar. |
| `/og-image.jpg` | Imagen de previsualización social (1200×630 px, 84 KB) |
| `app/index.html` | Copia de trabajo interna. NO es la que se publica. |

## Estructura del repo
El repo git vive en la carpeta `app/` del entorno local.
`app/index.html` ES el `index.html` raíz del repo — es el mismo archivo.
GitHub Pages lo sirve como `https://mundosintropico.github.io/`.

**Siempre editar `app/index.html` — es el único index.html que se publica.**
Los archivos en `app/frontend/` y `app/frontend/dist/` son builds separados que no se publican.

## Cambios aplicados en v2

### Meta tags Open Graph y Twitter Card
Añadidos en líneas 4–14 de `/index.html`:
- og:title, og:description, og:image, og:url, og:type
- twitter:card, twitter:title, twitter:description, twitter:image
- Imagen referenciada: `og-image.jpg` (JPG, compatible con todos los scrapers)

### Fix bugs Safari/iOS
- Eliminado `overflow-x:hidden` de `body`
- Eliminado `body::after` con el overlay scanline
- Scanline movido a `<div aria-hidden="true">` independiente al inicio del `<body>`
- Razón: el `::after` con `position:fixed` causaba zonas táctiles muertas en Safari iOS

### Imagen OG
- Creado `og-image.svg` (diseño neon, 1200×630)
- Convertido a `og-image.jpg` con sharp (92% quality, 84 KB)
- Referencias en index.html apuntan a `og-image.jpg`

## Pendiente (próximas sesiones)
1. **Punto 3** — Unificar marca: título visible "Mundo Sintrópico" en header + `<title>` a "Mundo Sintrópico — Lo Que No Ves"
2. **Punto 2** — SEO: hash URLs por investigación + `document.title` dinámico + meta description por artículo
3. **Punto 4** — Email: añadir propuesta de valor al formulario de suscripción
4. **Punto 1** — Performance: extraer imágenes base64 a archivos externos en `/assets/`

## Stack
- HTML + CSS + JS vanilla
- Sin framework, sin build step
- Hosting: GitHub Pages (estático)
- Fuentes: Google Fonts (Space Mono, Syne, Lora)
- Gráficos: Chart.js, SVG inline
