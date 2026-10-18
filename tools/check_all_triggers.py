import win32com.client, os, sys
sys.stdout.reconfigure(encoding='utf-8')
app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('LSGTDA.pptx'), WithWindow=False)

for idx in range(1, pres.Slides.Count + 1):
    s = pres.Slides(idx)
    tl = s.TimeLine
    m_cnt = tl.MainSequence.Count
    i_cnt = tl.InteractiveSequences.Count
    if m_cnt > 0 or i_cnt > 0:
        print(f"Slide {idx} ({s.Name}): Main={m_cnt}, Interactive={i_cnt}")
        for j in range(1, i_cnt + 1):
            seq = tl.InteractiveSequences(j)
            trig = seq(1).Timing.TriggerShape.Name if (seq.Count > 0 and seq(1).Timing.TriggerShape) else "Unknown"
            targets = [seq(k).Shape.Name for k in range(1, seq.Count + 1) if seq(k).Shape]
            print(f"   Trigger [{trig}] -> affects {len(targets)} shapes: {targets[:3]}...")

pres.Close()
app.Quit()
