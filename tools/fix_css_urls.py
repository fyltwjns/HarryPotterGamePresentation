import os

css_path = os.path.abspath("src/css/style.css")
with open(css_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace url('assets/ with url('../../assets/
new_content = content.replace("url('assets/", "url('../../assets/")
with open(css_path, "w", encoding="utf-8") as f:
    f.write(new_content)

print("Updated asset paths in src/css/style.css successfully!")
