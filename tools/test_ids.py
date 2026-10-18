import re

html = open('index.html', encoding='utf-8').read()
js = open('src/js/game.js', encoding='utf-8').read()

html_ids = set(re.findall(r'id=["\']([^"\']+)["\']', html))
js_ids = re.findall(r'document\.getElementById\(["\']([^"\']+)["\']\)', js)

missing = [jid for jid in js_ids if jid not in html_ids]
print('Missing IDs:', set(missing) if missing else 'None! All IDs exist!')
