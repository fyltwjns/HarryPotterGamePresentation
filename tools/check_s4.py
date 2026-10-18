import win32com.client, os, sys
sys.stdout.reconfigure(encoding='utf-8')
app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('LSGTDA.pptx'), WithWindow=False)

s4 = pres.Slides(4)
print("=== SLIDE 4 SHAPES ===")
for shp in s4.Shapes:
    txt = shp.TextFrame.TextRange.Text if shp.HasTextFrame and shp.TextFrame.HasText else ""
    hl_sub = ""
    try:
        hl_sub = shp.ActionSettings(1).Hyperlink.SubAddress
    except:
        pass
    print(f"ID={shp.Id:3d} Name={shp.Name:25s} L={shp.Left:6.1f} T={shp.Top:6.1f} W={shp.Width:6.1f} H={shp.Height:6.1f} Txt={repr(txt):8s} HL='{hl_sub}'")

pres.Close()
app.Quit()
