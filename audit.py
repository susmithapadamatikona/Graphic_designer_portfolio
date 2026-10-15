from pathlib import Path
import re
from xml.etree import ElementTree

root=Path(__file__).parent/'dist'
refs=set()
for path in [*root.rglob('*.html'),*root.rglob('*.js')]:
 refs.update(re.findall(r'[a-z][a-z-]+\.html',path.read_text(encoding='utf-8')))
missing=[name for name in refs if not (root/name).exists()]
assert not missing,missing
for path in root.rglob('*.svg'):
 ElementTree.parse(path)
for path in root.glob('*.html'):
 text=path.read_text(encoding='utf-8')
 for name in re.findall(r'(?:href|src)="(assets/[^"]+)"',text):
  assert (root/name).exists(),f'{path.name}: {name}'
 assert 'assets/css/responsive.css' in text
print(f'PASS: {len(list(root.glob("*.html")))} pages, all local page targets/assets, responsive styles, and SVG XML.')
