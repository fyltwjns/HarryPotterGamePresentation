import win32com.client
import os
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

app = win32com.client.Dispatch("PowerPoint.Application")
pres = app.Presentations.Open(os.path.abspath("LSGTDA.pptx"), WithWindow=False)

print(f"Total slides: {pres.Slides.Count}")

for s_idx in range(5, 20):
    slide = pres.Slides(s_idx)
    print(f"\n=================== SLIDE {s_idx} ===================")
    for shp in slide.Shapes:
        text = shp.TextFrame.TextRange.Text.strip().replace("\n", " ") if (shp.HasTextFrame and shp.TextFrame.HasText) else ""
        hl_info = ""
        try:
            hl = shp.ActionSettings(1).Hyperlink
            if hl.Address or hl.SubAddress:
                hl_info = f" -> HYPERLINK: addr='{hl.Address}' sub='{hl.SubAddress}'"
        except Exception:
            pass
        
        # Check action type
        act_info = ""
        try:
            act = shp.ActionSettings(1).Action
            act_info = f" Action={act}"
        except Exception:
            pass
            
        print(f"Shape: id={shp.Id}, name={shp.Name}, type={shp.Type}, L={shp.Left:.1f}, T={shp.Top:.1f}, W={shp.Width:.1f}, H={shp.Height:.1f}, text='{text[:60]}'{hl_info}{act_info}")

pres.Close()
app.Quit()
