import win32com.client
import os
import sys

# Ensure utf-8 output
sys.stdout.reconfigure(encoding='utf-8')

app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('presentation/LSGTDA.pptx'), WithWindow=False)
slide = pres.Slides(33)

books_map = [
    {"shape_name": "Google Shape;631;p45", "class_name": "Muggle Studies", "file_name": "class_book_muggle_studies.png"},
    {"shape_name": "Google Shape;613;p45", "class_name": "Potions", "file_name": "class_book_potions.png"},
    {"shape_name": "Google Shape;625;p45", "class_name": "History of Magic", "file_name": "class_book_history_of_magic.png"},
    {"shape_name": "Google Shape;634;p45", "class_name": "Divination", "file_name": "class_book_divination.png"},
    {"shape_name": "Google Shape;619;p45", "class_name": "Astronomy", "file_name": "class_book_astronomy.png"},
    {"shape_name": "Google Shape;628;p45", "class_name": "Defense Against Dark Arts", "file_name": "class_book_defense_dark_arts.png"},
    {"shape_name": "Google Shape;640;p45", "file_name": "class_book_magical_theory.png", "class_name": "Magical Theory"},
    {"shape_name": "Google Shape;622;p45", "class_name": "Herbology", "file_name": "class_book_herbology.png"},
    {"shape_name": "Google Shape;637;p45", "class_name": "Care of Magical Creatures", "file_name": "class_book_magical_creatures.png"},
    {"shape_name": "Google Shape;616;p45", "class_name": "Charms", "file_name": "class_book_charms.png"}
]

os.makedirs('assets/classes', exist_ok=True)

for b in books_map:
    shape = slide.Shapes(b['shape_name'])
    out_path = os.path.abspath(os.path.join('assets', 'classes', b['file_name']))
    shape.Export(out_path, 2)  # ppShapeFormatPNG = 2
    print(f"Exported: {b['class_name']} -> {out_path} ({os.path.getsize(out_path)} bytes)")

pres.Close()
app.Quit()
print("All 10 books exported successfully!")
