# Landing CUUNA

Sitio estático (HTML + CSS + JS, sin dependencias). Para verlo, abre `index.html`
o sirve la carpeta con cualquier servidor estático, por ejemplo:

```
python -m http.server 5510
```

## Páginas
Cada opción del menú es una página propia, como en cuuna.org:

| Menú | Página |
|---|---|
| Inicio (logo) | `index.html`: portada, anuncio DeCI, carrusel de fotos y resúmenes |
| Sobre CUUNA | `que-es-cuuna.html`, `mision.html`, `estructura.html`, `alianzas.html` |
| Qué hacemos | `deci.html`, `mun-escolar.html` |
| Conferencias | `conferencias.html` |
| Directorio | `directorio.html` |
| Conoce más | `noticias.html`, `contacto.html`, `donaciones.html` |

El encabezado y el pie se repiten en cada archivo: si se agrega una página o cambia el
menú, hay que cambiarlo en todas. Eso se resuelve al pasar a Jekyll (ver Pendientes).

## Marca
Según `Brandbook_CUUNA`: celeste `#37b2f8`, celeste claro `#80d5fc`, verde `#57b626`,
tipografía Montserrat. Los logos están en `img/` (isotipo, logotipo y logotipo en negativo).

## Fotos
Cada foto tiene un marcador con el isotipo mientras no exista el archivo. Basta con
dejar la imagen con este nombre y aparece sola:

| Archivo | Dónde | Formato sugerido |
|---|---|---|
| `img/fotos/hero.jpg` | Portada | vertical 4:5 |
| `img/fotos/experiencia-1.jpg` … `experiencia-8.jpg` | Carrusel "Así se vive un MUN" | 4:5 (como Instagram) |
| `img/fotos/sobre.jpg` | ¿Qué es CUUNA? | 5:6 |
| `img/fotos/deci.jpg` | Proyecto DeCI | cuadrada |
| `img/fotos/mun-escolar.jpg` | Proyecto MUN Escolar | 4:3 |
| `img/fotos/noticia-worldmun.jpg`, `noticia-amnuch.jpg`, `noticia-cepal.jpg` | Noticias | 16:10 |
| `img/directorio/presidencia.jpg`, `vicepresidencia.jpg`, `secretaria.jpg`, `tesoreria.jpg`, `director-1.jpg` … `director-3.jpg` | Directorio | cuadrada |

Los pies de foto del carrusel se editan en `index.html` (`<figcaption>`). Las tres noticias
de la portada se repiten en `noticias.html`.

## Redes
- Instagram: https://www.instagram.com/cuuna.cl
- LinkedIn: https://www.linkedin.com/company/cuunacl/home/
- Linktree: https://linktr.ee/cuuna.cl

## Pendientes (buscar `TODO` en `index.html`)
- Datos de transferencia para donaciones (banco, cuenta, RUT) o enlace a una plataforma.
- Requisitos, plazos y enlace del formulario para postular a la DeCI.
- Nombres y breve descripción de cada integrante del Directorio 2026–2027.
- Fecha y detalle de cada noticia.
- Pasar el sitio a Jekyll + Pages CMS: noticias publicables desde un formulario y un solo
  encabezado/pie compartido por todas las páginas (decidido para más adelante).
