import win32com.client, os, sys
sys.stdout.reconfigure(encoding='utf-8')
app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('LSGTDA.pptx'), WithWindow=False)

reward_slides = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]

for sn in reward_slides:
    s = pres.Slides(sn)
    txts = []
    for shp in s.Shapes:
        if shp.HasTextFrame and shp.TextFrame.HasText:
            t = shp.TextFrame.TextRange.Text.strip().replace('\n', ' ')
            if t:
                txts.append(f"[{shp.Name}]: '{t}'")
    print(f"Slide {sn} (Shapes: {s.Shapes.Count}): {' | '.join(txts[:8])}")

pres.Close()
app.Quit()
