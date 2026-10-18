import win32com.client, os, sys
sys.stdout.reconfigure(encoding='utf-8')
app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('LSGTDA.pptx'), WithWindow=False)

def inspect_seq(slide_num):
    s = pres.Slides(slide_num)
    tl = s.TimeLine
    print(f"\n=================== SLIDE {slide_num} ({s.Name}) ===================")
    for i in range(1, tl.MainSequence.Count + 1):
        eff = tl.MainSequence(i)
        shp = eff.Shape
        txt = shp.TextFrame.TextRange.Text.strip().replace('\n', ' ') if (shp and shp.HasTextFrame and shp.TextFrame.HasText) else ''
        eff_type = eff.EffectType
        trig = eff.Timing.TriggerType # 1: onClick, 2: withPrev, 3: afterPrev
        dur = eff.Timing.Duration
        delay = eff.Timing.TriggerDelayTime
        print(f"  #{i:2d} Trig={trig} Eff={eff_type:2d} Dur={dur:.2f} Del={delay:.2f} Shape='{shp.Name if shp else None}' Text='{txt[:30]}'")

for sn in [20, 21, 25, 26, 33, 34, 40, 41, 42]:
    inspect_seq(sn)

pres.Close()
app.Quit()
