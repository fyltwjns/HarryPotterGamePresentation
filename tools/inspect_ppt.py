import sys
import os

try:
    import win32com.client
    ppt_app = win32com.client.Dispatch("PowerPoint.Application")
    print("PowerPoint COM Dispatch SUCCESSFUL!")
    ppt_path = os.path.abspath("LSGTDA.pptx")
    presentation = ppt_app.Presentations.Open(ppt_path, WithWindow=False)
    print(f"Presentation opened: {len(presentation.Slides)} slides found.")
    
    for i, slide in enumerate(presentation.Slides):
        texts = []
        for shape in slide.Shapes:
            if shape.HasTextFrame:
                if shape.TextFrame.HasText:
                    texts.append(shape.TextFrame.TextRange.Text.strip())
        first_few_texts = " | ".join(texts[:3]).replace("\n", " ")
        print(f"Slide {i+1}: {first_few_texts[:100]} (Shapes: {slide.Shapes.Count})")

    presentation.Close()
    ppt_app.Quit()
except Exception as e:
    print(f"COM error: {e}")
