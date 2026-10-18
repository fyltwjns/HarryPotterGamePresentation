import json

with open("questions_data.json", "r", encoding="utf-8") as f:
    qdata = json.load(f)

clean_questions = []

for q in qdata:
    q_num = q["question_num"]
    texts = q["raw_texts"]
    
    # Sort texts by top
    question_text = ""
    options = {}
    correct_answer = ""
    
    for t in texts:
        txt = t["text"].strip()
        top = t["top"]
        left = t["left"]
        
        if top < 0:
            continue
        elif top < 110:
            question_text = txt
        elif 110 <= top <= 280:
            # Check prefix A., B., C., D.
            txt_clean = txt.strip()
            if txt_clean.startswith("A.") or txt_clean.startswith("A "):
                options["A"] = txt_clean
            elif txt_clean.startswith("B.") or txt_clean.startswith("B "):
                options["B"] = txt_clean
            elif txt_clean.startswith("C.") or txt_clean.startswith("C "):
                options["C"] = txt_clean
            elif txt_clean.startswith("D.") or txt_clean.startswith("D "):
                options["D"] = txt_clean
            elif txt_clean:
                # Based on coordinate
                if left < 350 and top < 200:
                    options["A"] = txt_clean
                elif left >= 350 and top < 200:
                    options["B"] = txt_clean
                elif left < 350 and top >= 200:
                    options["C"] = txt_clean
                else:
                    options["D"] = txt_clean
        elif top > 280:
            correct_answer = txt
            
    clean_questions.append({
        "number": q_num,
        "slide": q["slide_index"],
        "question": question_text,
        "options": options,
        "correct": correct_answer
    })

with open("clean_questions.json", "w", encoding="utf-8") as f:
    json.dump(clean_questions, f, indent=2, ensure_ascii=False)

print("Parsed 15 questions:")
for cq in clean_questions:
    print(f"Q{cq['number']}: {cq['question'][:50]} | Correct: {cq['correct']}")
