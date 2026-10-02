# Sitio CUUNA

Sitio en [Jekyll](https://jekyllrb.com/), publicado con GitHub Pages en
https://liivne.github.io/cuuna-landing/. GitHub Pages compila el sitio solo cada vez
que cambia `main`; no hay que instalar nada.

## Editar contenido (sin tocar código)
El contenido se edita desde **Pages CMS** (https://app.pagescms.org), un formulario web
conectado a este repositorio. Su configuración está en `.pages.yml`.

1. Quien administra el repo entra a https://app.pagescms.org con su cuenta de GitHub
   e instala la aplicación de Pages CMS en `Liivne/cuuna-landing`.
2. Desde ahí puede invitar por correo a quienes editen el sitio: los colaboradores
   **no necesitan cuenta de GitHub**.
3. Cada vez que alguien guarda, Pages CMS hace un commit en `main` y el sitio se
   actualiza en uno o dos minutos.

Qué se puede editar:

| En Pages CMS | Archivo | Dónde se ve |
|---|---|---|
| Noticias | `_noticias/*.md` (una por archivo) | Portada (las 3 más recientes), `noticias.html` y una página por noticia |
| Directorio | `_data/directorio.yml` | `directorio.html` |
| Conferencias | `_data/conferencias.yml` | `conferencias.html` |
| Carrusel de fotos | `_data/experiencia.yml` | Portada |
| Alianzas | `_data/alianzas.yml` | `alianzas.html` |
| Datos del sitio | `_data/sitio.yml` | Redes, fotos fijas de las páginas y datos para donar |

Lo que queda vacío se muestra como marcador (el isotipo en vez de la foto,
"Próximamente" en el Directorio, "Por completar" en los datos para donar).
Las noticias con fecha se ordenan de la más nueva a la más antigua; las que no tienen
fecha van al final.

## Estructura del código
| Carpeta / archivo | Qué es |
|---|---|
| `_layouts/` | `default` (encabezado + pie), `page` (páginas internas), `noticia` |
| `_includes/` | Encabezado, pie, íconos, foto con marcador, tarjeta de noticia, etc. |
| `_data/menu.yml` | El menú. Agregar una página al menú = una línea aquí |
| `*.html` en la raíz | Las páginas. Su encabezado (`---`) define título, bajada y grupo del menú |
| `css/`, `js/`, `img/` | Estilos, menú/carrusel y logos |

Las páginas que están dentro de un desplegable del menú declaran `grupo:` (`sobre`,
`hacemos`) y muestran al final enlaces a sus páginas hermanas.

## Revisar cambios antes de publicarlos
Trabajar en una rama distinta de `main`: el workflow `Verificar sitio`
(`.github/workflows/verificar.yml`) la compila con el mismo constructor de GitHub Pages
y deja el resultado como artefacto `sitio` en la pestaña Actions. Para verlo, se
descarga en una carpeta `cuuna-landing/` y se sirve la carpeta que la contiene:

```
python -m http.server 5511
```

y se abre http://localhost:5511/cuuna-landing/.

## Marca
Según `Brandbook_CUUNA`: celeste `#37b2f8`, celeste claro `#80d5fc`, verde `#57b626`,
tipografía Montserrat. Los logos están en `img/` (isotipo, logotipo y logotipo en negativo).

## Pendientes
- Fecha de cada noticia (sin ella se ordenan alfabéticamente).
- Datos de transferencia para donaciones (banco, cuenta, RUT) o enlace a una plataforma.
- Requisitos, plazos y enlace del formulario para postular a la DeCI (`TODO` en `deci.html`).
- Nombres, descripción y fotos del Directorio 2026–2027.
- Fotos de portada, equipo, DeCI, MUN Escolar, carrusel y noticias.
