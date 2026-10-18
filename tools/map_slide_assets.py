import zipfile
import xml.etree.ElementTree as ET
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

slide_assets = {}

with zipfile.ZipFile("LSGTDA.pptx", "r") as z:
    for i in range(1, 43):
        rel_name = f"ppt/slides/_rels/slide{i}.xml.rels"
        if rel_name in z.namelist():
            tree = ET.fromstring(z.read(rel_name))
            images = []
            for rel in tree.findall("{http://schemas.openxmlformats.org/package/2006/relationships}Relationship"):
                target = rel.attrib.get("Target", "")
                r_type = rel.attrib.get("Type", "")
                if "image" in r_type or target.startswith("../media/"):
                    images.append(target.replace("../media/", ""))
            slide_assets[i] = images

with open("slide_assets.json", "w", encoding="utf-8") as f:
    json.dump(slide_assets, f, indent=2)

print("Mapped slide assets:")
for i in [1, 2, 3, 4, 5, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]:
    print(f"Slide {i}: {slide_assets.get(i, [])}")
