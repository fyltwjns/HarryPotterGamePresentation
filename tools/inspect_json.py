import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("slides_data.json", "r", encoding="utf-8") as f:
    slides = json.load(f)

print(f"Total slides analyzed: {len(slides)}")

# Slide 4
s4 = slides[3]
print("\n--- SLIDE 4 SHAPES & HYPERLINKS ---")
for shp in s4["shapes"]:
    if shp["text"] or shp["hyperlink"]:
        print(f"Shape ID: {shp['id']}, Name: {shp['name']}, Text: {repr(shp['text'])}, HL: {shp['hyperlink']}")

# Slide 5 (First question)
print("\n--- SLIDE 5 (QUESTION 1) ---")
s5 = slides[4]
print("Shapes:")
for shp in s5["shapes"]:
    print(f"  Shape {shp['id']} ({shp['name']}): text={repr(shp['text'][:40])}, hl={shp['hyperlink']}")
print("Animations:")
for anim in s5["animations"]:
    print(f"  Anim: {anim}")

# Slide 6 (Second question)
print("\n--- SLIDE 6 (QUESTION 2) ---")
s6 = slides[5]
print("Animations:")
for anim in s6["animations"]:
    print(f"  Anim: {anim}")
