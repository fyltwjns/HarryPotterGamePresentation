import win32com.client, os, sys, json
sys.stdout.reconfigure(encoding='utf-8')
app = win32com.client.Dispatch('PowerPoint.Application')
pres = app.Presentations.Open(os.path.abspath('LSGTDA.pptx'), WithWindow=False)

questions = []
for s_idx in range(5, 20):
    s = pres.Slides(s_idx)
    q_data = {
        "slide_index": s_idx,
        "question_num": s_idx - 4,
        "raw_texts": []
    }
    for shp in s.Shapes:
        if shp.HasTextFrame and shp.TextFrame.HasText:
            txt = shp.TextFrame.TextRange.Text.strip()
            if txt:
                q_data["raw_texts"].append({
                    "id": shp.Id,
                    "name": shp.Name,
                    "left": round(shp.Left, 1),
                    "top": round(shp.Top, 1),
                    "width": round(shp.Width, 1),
                    "height": round(shp.Height, 1),
                    "text": txt
                })
    questions.append(q_data)

with open("questions_data.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2, ensure_ascii=False)

print("Saved questions_data.json!")
for q in questions:
    print(f"\n--- Question {q['question_num']} (Slide {q['slide_index']}) ---")
    for t in q["raw_texts"]:
        print(f"  [{t['name']} @ {t['top']}]: {t['text'][:60]}")

pres.Close()
app.Quit()
