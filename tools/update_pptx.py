import win32com.client
import os
import shutil
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

original_file = os.path.abspath("LSGTDA.pptx")
backup_file = os.path.abspath("LSGTDA_Original_Backup.pptx")

if not os.path.exists(backup_file):
    shutil.copyfile(original_file, backup_file)
    print(f"Created backup at {backup_file}")

app = win32com.client.Dispatch("PowerPoint.Application")
pres = app.Presentations.Open(original_file, WithWindow=False)

print(f"Opened presentation with {pres.Slides.Count} slides.")

# Slide 4: Trang tổng hợp 15 câu hỏi
s4 = pres.Slides(4)
for shp in s4.Shapes:
    if shp.HasTextFrame and shp.TextFrame.HasText:
        t = shp.TextFrame.TextRange.Text.strip()
        if t.isdigit():
            num = int(t)
            if 1 <= num <= 15:
                target_slide_idx = num + 4 # 1 -> slide 5, 15 -> slide 19
                target_slide = pres.Slides(target_slide_idx)
                slide_id = target_slide.SlideID
                sub_addr = f"{slide_id},{target_slide_idx}, "
                shp.ActionSettings(1).Action = 7 # ppActionHyperlink
                shp.ActionSettings(1).Hyperlink.SubAddress = sub_addr
                print(f"Slide 4 button '{num}' linked to Slide {target_slide_idx} ({sub_addr})")

q_reward_mapping = {
    5: 20,
    6: 21,
    7: 22,
    8: 25,
    9: 26,
    10: 27,
    11: 30,
    12: 33,
    13: 34,
    14: 35,
    15: 36,
    16: 37,
    17: 40,
    18: 41,
    19: 42
}

def set_hyperlink(shape, sub_address):
    try:
        if shape.Type == 6: # msoGroup
            for gi in shape.GroupItems:
                set_hyperlink(gi, sub_address)
        else:
            shape.ActionSettings(1).Action = 7
            shape.ActionSettings(1).Hyperlink.SubAddress = sub_address
    except Exception as e:
        print(f"  Warning on shape {shape.Name}: {e}")

for q_slide_idx, reward_slide_idx in q_reward_mapping.items():
    slide = pres.Slides(q_slide_idx)
    target_reward = pres.Slides(reward_slide_idx)
    sub_addr = f"{target_reward.SlideID},{reward_slide_idx}, "
    
    # Find green button (right side, L > 500, T > 200)
    for shp in slide.Shapes:
        if shp.Left > 500 and shp.Top > 200:
            set_hyperlink(shp, sub_addr)
            print(f"Slide {q_slide_idx} green button linked to Reward Slide {reward_slide_idx}")
            break

s4_slide = pres.Slides(4)
s4_sub_addr = f"{s4_slide.SlideID},4, "

reward_slides_all = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42]
for r_idx in reward_slides_all:
    s = pres.Slides(r_idx)
    crest_found = False
    for shp in s.Shapes:
        if shp.Left > 600 and shp.Top > 300 and shp.Width < 80:
            set_hyperlink(shp, s4_sub_addr)
            crest_found = True
            print(f"Slide {r_idx} crest button linked to Slide 4")
            break
            
    if not crest_found:
        btn = s.Shapes.AddShape(1, 650, 360, 40, 40)
        btn.Fill.ForeColor.RGB = 0x228B22 # Forest Green
        btn.Line.Visible = False
        btn.TextFrame.TextRange.Text = "H"
        set_hyperlink(btn, s4_sub_addr)
        print(f"Added return button on Slide {r_idx}")

pres.Save()
pres.Close()
app.Quit()
print("All hyperlinks in PowerPoint updated and saved successfully!")
