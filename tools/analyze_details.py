import win32com.client
import os
import json
import sys

sys.stdout.reconfigure(encoding='utf-8')
sys.stderr.reconfigure(encoding='utf-8')

ppt_path = os.path.abspath("LSGTDA.pptx")
app = win32com.client.Dispatch("PowerPoint.Application")
pres = app.Presentations.Open(ppt_path, WithWindow=False)

output_dir = os.path.abspath("extracted_slides")
os.makedirs(output_dir, exist_ok=True)

# Export slides to images
print(f"Exporting {pres.Slides.Count} slides to {output_dir}...")
for i, slide in enumerate(pres.Slides):
    slide_num = i + 1
    img_path = os.path.join(output_dir, f"slide_{slide_num:02d}.png")
    # Export as 1920x1080
    slide.Export(img_path, "PNG", 1920, 1080)

print("Export complete! Now analyzing slide 4, 5-19 and rewards...")

slides_data = []

for i, slide in enumerate(pres.Slides):
    s_idx = i + 1
    s_info = {
        "index": s_idx,
        "name": slide.Name,
        "shapes": [],
        "animations": []
    }
    
    # Shapes & Hyperlinks
    for shp in slide.Shapes:
        shp_data = {
            "id": shp.Id,
            "name": shp.Name,
            "type": shp.Type,
            "left": shp.Left,
            "top": shp.Top,
            "width": shp.Width,
            "height": shp.Height,
            "text": shp.TextFrame.TextRange.Text if shp.HasTextFrame and shp.TextFrame.HasText else "",
            "hyperlink": None
        }
        try:
            hl = shp.ActionSettings(1).Hyperlink # ppMouseClick = 1
            if hl.Address or hl.SubAddress:
                shp_data["hyperlink"] = {
                    "address": hl.Address,
                    "subAddress": hl.SubAddress
                }
        except Exception:
            pass
        s_info["shapes"].append(shp_data)
        
    # Animations / Timeline
    try:
        main_seq = slide.TimeLine.MainSequence
        for eff_idx in range(1, main_seq.Count + 1):
            eff = main_seq(eff_idx)
            s_info["animations"].append({
                "type": "main",
                "index": eff_idx,
                "shape_id": eff.Shape.Id if eff.Shape else None,
                "shape_name": eff.Shape.Name if eff.Shape else None,
                "effect_type": eff.EffectType,
                "timing_trigger": eff.Timing.TriggerType,
                "duration": eff.Timing.Duration
            })
            
        # Interactive sequences (triggers)
        inter_seqs = slide.TimeLine.InteractiveSequences
        for iseq_idx in range(1, inter_seqs.Count + 1):
            iseq = inter_seqs(iseq_idx)
            for eff_idx in range(1, iseq.Count + 1):
                eff = iseq(eff_idx)
                s_info["animations"].append({
                    "type": "interactive",
                    "sequence_index": iseq_idx,
                    "shape_id": eff.Shape.Id if eff.Shape else None,
                    "shape_name": eff.Shape.Name if eff.Shape else None,
                    "effect_type": eff.EffectType,
                    "trigger_shape_id": eff.Timing.TriggerShape.Id if eff.Timing.TriggerShape else None,
                    "trigger_shape_name": eff.Timing.TriggerShape.Name if eff.Timing.TriggerShape else None,
                    "trigger_type": eff.Timing.TriggerType,
                    "duration": eff.Timing.Duration
                })
    except Exception as e:
        s_info["anim_error"] = str(e)
        
    slides_data.append(s_info)

with open("slides_data.json", "w", encoding="utf-8") as f:
    json.dump(slides_data, f, indent=2, ensure_ascii=False)

print("Saved slides_data.json!")
pres.Close()
app.Quit()
