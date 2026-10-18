import win32com.client, os, sys
sys.stdout.reconfigure(encoding='utf-8')
app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('LSGTDA.pptx'), WithWindow=False)

for idx in range(20, pres.Slides.Count + 1):
    s = pres.Slides(idx)
    texts = []
    for shp in s.Shapes:
        if shp.HasTextFrame and shp.TextFrame.HasText:
            t = shp.TextFrame.TextRange.Text.strip().replace('\n', ' // ')
            if t:
                texts.append(t)
    print(f"Slide {idx}: {' | '.join(texts)}")

pres.Close()
app.Quit()
