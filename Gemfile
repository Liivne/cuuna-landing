source "https://rubygems.org"

# GitHub Pages compila con la gema github-pages 232 (Jekyll 3.10), que no admite
# Ruby 4. Para la vista local se usa Jekyll 3.10 directo: es el mismo motor, sin
# los plugins de github-pages, que este sitio no usa. La prueba exacta antes de
# publicar sigue siendo el workflow "Verificar sitio".
gem "jekyll", "~> 3.10.0"
gem "kramdown-parser-gfm"

# Librerías que Ruby 3.4+ sacó de su instalación estándar y Jekyll 3.10 aún usa.
gem "base64"
gem "bigdecimal"
gem "csv"
gem "logger"

# Servidor local de `jekyll serve` (ya no viene con Ruby).
gem "webrick"

# Windows no trae la base de zonas horarias.
platforms :windows do
  gem "tzinfo-data"
end
