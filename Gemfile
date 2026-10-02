source "https://rubygems.org"

# Jekyll 3.10. Vercel compila con Ruby 3.3; en local funciona también con Ruby 4.
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
