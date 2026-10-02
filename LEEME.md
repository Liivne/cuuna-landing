# Sitio CUUNA

Sitio en [Jekyll](https://jekyllrb.com/), publicado en [Vercel](https://vercel.com).
Cada push a `main` publica el sitio; cada push a otra rama (o cada pull request) genera
una vista previa con su propia dirección, para revisar antes de publicar.
La configuración de la compilación está en `vercel.json`.

## Editar contenido
El contenido que cambia seguido vive en archivos de datos, no en el HTML. Se pueden
editar directamente en GitHub (botón del lápiz) y al guardar en `main` el sitio se
actualiza solo.

| Qué | Archivo | Dónde se ve |
|---|---|---|
| Noticias | `_noticias/*.md`, una por archivo | Portada (las 3 más recientes), `noticias.html` y una página por noticia |
| Directorio | `_data/directorio.yml` | `directorio.html` |
| Conferencias | `_data/conferencias.yml` | `conferencias.html` |
| Carrusel de fotos | `_data/experiencia.yml` | Portada |
| Alianzas | `_data/alianzas.yml` | `alianzas.html` |
| Redes, fotos fijas y datos para donar | `_data/sitio.yml` | Todo el sitio |
| Menú | `_data/menu.yml` | Encabezado |

Una noticia nueva es un archivo nuevo en `_noticias/` con este encabezado (el texto
completo, opcional, va debajo del segundo `---`):

```
---
title: Título de la noticia
fecha: 2026-10-14
categoria: Conferencia        # Conferencia, Alianza o Actividad
imagen: /img/fotos/mi-foto.jpg
resumen: Una o dos frases para la tarjeta.
---
```

Las fotos se suben a `img/` y se escriben con su ruta desde la raíz (`/img/...`).
Lo que queda vacío se muestra como marcador (el isotipo en vez de la foto,
"Próximamente" en el Directorio, "Por completar" en los datos para donar).
Las noticias con fecha se ordenan de la más nueva a la más antigua; las que no tienen
fecha van al final.

## Estructura del código
| Carpeta / archivo | Qué es |
|---|---|
| `_layouts/` | `default` (encabezado + pie), `page` (páginas internas), `noticia` |
| `_includes/` | Encabezado, pie, íconos, foto con marcador, tarjeta de noticia, etc. |
| `*.html` en la raíz | Las páginas. Su encabezado (`---`) define título, bajada y grupo del menú |
| `css/`, `js/`, `img/` | Estilos, menú/carrusel y logos |

Las páginas que están dentro de un desplegable del menú declaran `grupo:` (`sobre`,
`hacemos`) y muestran al final enlaces a sus páginas hermanas.

## Ver el sitio en tu equipo
Requiere Ruby (probado con Ruby 4.0 en Windows; Vercel compila con Ruby 3.3).
La primera vez:

```
bundle config set --local path vendor/bundle
bundle install
```

Luego, cada vez:

```
bundle exec jekyll serve
```

y abrir http://localhost:4000/. Al guardar un archivo el sitio se recompila solo
(basta recargar el navegador).

## Marca
Según `Brandbook_CUUNA`: celeste `#37b2f8`, celeste claro `#80d5fc`, verde `#57b626`,
tipografía Montserrat. Los logos están en `img/` (isotipo, logotipo y logotipo en negativo).

## Pendientes
- Fecha de cada noticia (sin ella se ordenan alfabéticamente).
- Datos de transferencia para donaciones (banco, cuenta, RUT) o enlace a una plataforma.
- Requisitos, plazos y enlace del formulario para postular a la DeCI (`TODO` en `deci.html`).
- Nombres, descripción y fotos del Directorio 2026–2027.
- Fotos de portada, equipo, DeCI, MUN Escolar, carrusel y noticias.
