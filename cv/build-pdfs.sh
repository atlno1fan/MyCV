#!/bin/zsh
# Rebuilds the two downloadable CVs in public/ from the HTML sources in this folder.
# Edit cv-full.html / cv-1page.html, run this, then commit the PDFs with the site.
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf=../public/Yomna-Salem-CV.pdf "file://$PWD/cv-full.html"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf=../public/Yomna-Salem-CV-1page.pdf "file://$PWD/cv-1page.html"
for f in ../public/Yomna-Salem-CV.pdf ../public/Yomna-Salem-CV-1page.pdf; do
  python3 -c "import re,sys;print(sys.argv[1], 'pages:', len(re.findall(rb'/Type\s*/Page[^s]', open(sys.argv[1],'rb').read())))" "$f"
done
