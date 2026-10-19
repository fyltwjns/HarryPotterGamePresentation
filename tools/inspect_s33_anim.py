import win32com.client
import os

app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('presentation/LSGTDA.pptx'), WithWindow=False)
slide = pres.Slides(33)
tl = slide.TimeLine
print('MainSequence Count:', tl.MainSequence.Count)
for i in range(1, tl.MainSequence.Count + 1):
    eff = tl.MainSequence(i)
    shp = eff.Shape
    print(f'MainSeq #{i}: Shape="{shp.Name if shp else ""}" Type={eff.EffectType}')
print('InteractiveSequences Count:', tl.InteractiveSequences.Count)
for i in range(1, tl.InteractiveSequences.Count + 1):
    seq = tl.InteractiveSequences(i)
    for j in range(1, seq.Count + 1):
        eff = seq(j)
        trig = eff.Timing.TriggerShape
        shp = eff.Shape
        print(f'Trigger #{i}: on "{trig.Name if trig else ""}" -> animates "{shp.Name if shp else ""}"')
pres.Close()
app.Quit()
