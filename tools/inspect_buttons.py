import win32com.client, os, sys
sys.stdout.reconfigure(encoding='utf-8')
app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('LSGTDA.pptx'), WithWindow=False)

s = pres.Slides(5)
for shp in [s.Shapes(1), s.Shapes(2)]:
    print('Shape:', shp.Name, 'Type:', shp.Type)
    if shp.Type == 6: # msoGroup
        print('  GroupItems count:', shp.GroupItems.Count)
        for gi in shp.GroupItems:
            hl = None
            try:
                hl = (gi.ActionSettings(1).Hyperlink.Address, gi.ActionSettings(1).Hyperlink.SubAddress)
            except Exception:
                pass
            txt = gi.TextFrame.TextRange.Text if gi.HasTextFrame and gi.TextFrame.HasText else ""
            print(f'    GroupItem: {gi.Name} Txt={repr(txt)} HL={hl}')
            
pres.Close()
app.Quit()
