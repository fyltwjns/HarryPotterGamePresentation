import win32com.client
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

app = win32com.client.Dispatch("PowerPoint.Application")
pres = app.Presentations.Open(os.path.abspath("LSGTDA.pptx"), WithWindow=False)

def print_anim_details(slide_idx):
    slide = pres.Slides(slide_idx)
    print(f"\n=================== SLIDE {slide_idx} ANIMATIONS ===================")
    tl = slide.TimeLine
    print(f"MainSequence Count: {tl.MainSequence.Count}")
    for i in range(1, tl.MainSequence.Count + 1):
        eff = tl.MainSequence(i)
        shp_name = eff.Shape.Name if eff.Shape else "None"
        shp_text = eff.Shape.TextFrame.TextRange.Text.strip() if eff.Shape and eff.Shape.HasTextFrame and eff.Shape.TextFrame.HasText else ""
        print(f"  MainSeq #{i}: Shape='{shp_name}' Text='{shp_text[:30]}' EffectType={eff.EffectType} TriggerType={eff.Timing.TriggerType} Dur={eff.Timing.Duration} Delay={eff.Timing.TriggerDelayTime}")

    print(f"InteractiveSequences Count: {tl.InteractiveSequences.Count}")
    for i in range(1, tl.InteractiveSequences.Count + 1):
        seq = tl.InteractiveSequences(i)
        print(f"  InteractiveSeq #{i} Count={seq.Count}:")
        for j in range(1, seq.Count + 1):
            eff = seq(j)
            shp_name = eff.Shape.Name if eff.Shape else "None"
            shp_text = eff.Shape.TextFrame.TextRange.Text.strip() if eff.Shape and eff.Shape.HasTextFrame and eff.Shape.TextFrame.HasText else ""
            trig_shp_name = eff.Timing.TriggerShape.Name if eff.Timing.TriggerShape else "None"
            trig_shp_text = eff.Timing.TriggerShape.TextFrame.TextRange.Text.strip() if eff.Timing.TriggerShape and eff.Timing.TriggerShape.HasTextFrame and eff.Timing.TriggerShape.TextFrame.HasText else ""
            print(f"    Eff #{j}: TargetShape='{shp_name}' TargetText='{shp_text[:20]}' TriggerShape='{trig_shp_name}' TriggerText='{trig_shp_text[:20]}' EffectType={eff.EffectType} Dur={eff.Timing.Duration}")

for idx in [4, 5, 6, 7, 10, 20, 21, 26, 36, 40]:
    print_anim_details(idx)

pres.Close()
app.Quit()
