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
| Equipo (Directorio, comisiones y coordinaciones) | `_data/equipo.yml` | `equipo.html` |
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

## Ver el sitio en tu equipo
Requiere Ruby (probado con Ruby 4.0 en Windows). La primera vez:

```
bundle config set --local path vendor/bundle
bundle install
```

Luego, cada vez:

```
bundle exec jekyll serve
```

y abrir http://localhost:4000/cuuna-landing/. Al guardar un archivo el sitio se
recompila solo (basta recargar el navegador).

GitHub Pages compila con la gema `github-pages`, que todavía no admite Ruby 4. Por eso
el `Gemfile` usa Jekyll 3.10 directo: es el mismo motor, sin los plugins de
`github-pages` (este sitio no usa ninguno), y el resultado es idéntico al publicado.

## Revisar cambios antes de publicarlos
Para cambios grandes, trabajar en una rama distinta de `main`. El workflow
`Verificar sitio` (`.github/workflows/verificar.yml`) la compila con el constructor
exacto de GitHub Pages y avisa si algo falla, sin publicar nada. El resultado
compilado queda como artefacto `sitio` en la pestaña Actions.

## Marca
Según `Brandbook_CUUNA`: celeste `#37b2f8`, celeste claro `#80d5fc`, verde `#57b626`,
tipografía Montserrat. Los logos están en `img/` (isotipo, logotipo y logotipo en negativo).

## Pendientes
- Fecha de cada noticia (sin ella se ordenan alfabéticamente).
- Datos de transferencia para donaciones (banco, cuenta, RUT) o enlace a una plataforma.
- Requisitos, plazos y enlace del formulario para postular a la DeCI (`TODO` en `deci.html`).
- Integrantes del equipo 2026–2027 (Directorio, comisiones y coordinaciones), con descripción y foto.
- Fotos de portada, equipo, DeCI, MUN Escolar, carrusel y noticias.
