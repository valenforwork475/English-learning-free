import json
import re

categoryData = {
    "toeic_listening": { "name": "TOEIC Listening", "icon": "fa-headphones", "color": "bg-blue" },
    "toeic_reading": { "name": "TOEIC Reading", "icon": "fa-book-open", "color": "bg-blue" },
    "toeic_speaking": { "name": "TOEIC Speaking", "icon": "fa-microphone", "color": "bg-blue" },
    "toefl_listening": { "name": "TOEFL Listening", "icon": "fa-headphones", "color": "bg-purple" },
    "toefl_reading": { "name": "TOEFL Reading", "icon": "fa-book-open", "color": "bg-purple" },
    "toefl_speaking": { "name": "TOEFL Speaking", "icon": "fa-microphone", "color": "bg-purple" }
}

with open('vocabulary.json', 'r', encoding='utf-8') as f:
    base_words = json.load(f)

vocabList = []
word_counter = 1
levelsInfo = {}

vocabData = []
for track, words in base_words.items():
    if track not in categoryData:
        continue
    
    num_words = len(words)
    num_levels = (num_words + 9) // 10  # 10 words per level
    
    levelsInfo[track] = []
    for l in range(1, num_levels + 1):
        desc = "ฝึกทักษะพื้นฐาน" if l == 1 else "ฝึกทักษะระดับกลาง" if l == 2 else "ฝึกทักษะระดับสูง"
        levelsInfo[track].append({
            "level": l, 
            "name": f"Level {l}", 
            "desc": f"{desc} (10 คำ)" 
        })
        
    for i, w in enumerate(words):
        level = (i // 10) + 1
        vocabData.append({
            "id": word_counter,
            "category": track,
            "level": level,
            "en": w['en'],
            "phonetic": w['phonetic'],
            "th": w['th'],
            "type": w['type'],
            "example_en": w['example_en'],
            "example_th": w['example_th']
        })
        word_counter += 1

# Generate quizzes
import random
quizData = {}

for track, levels in levelsInfo.items():
    quizData[track] = {}
    for level_info in levels:
        level = level_info["level"]
        quizData[track][level] = []
        
        if 'listening' in track:
            quizData[track][level] = [
                {
                    "type": "listening",
                    "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                    "audioText": "",
                    "options": [],
                    "answer": 0
                } for _ in range(5)
            ]
        elif 'speaking' in track:
            quizData[track][level] = [
                {
                    "type": "speaking",
                    "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ที่มีความหมายว่า ______",
                    "answerText": "",
                    "options": [],
                    "answer": 0
                } for _ in range(5)
            ]
        else:
            quizData[track][level] = [
                {
                    "type": "reading",
                    "question": "What is the meaning of ______?",
                    "options": [],
                    "answer": 0
                } for _ in range(5)
            ]

for track, levels in quizData.items():
    for level, qs in levels.items():
        # Get up to 10 words for this track and level
        track_words = [w for w in vocabData if w["category"] == track and w["level"] == level]
        if not track_words: continue
        
        # Pick 5 distinct answers
        num_qs = min(5, len(track_words))
        answers = random.sample(track_words, num_qs)
        
        # We might have fewer questions if not enough words
        qs = qs[:num_qs]
        
        for i, q in enumerate(qs):
            correct_word = answers[i]
            # Pick 3 wrong options
            wrong_words_pool = [w for w in track_words if w["id"] != correct_word["id"]]
            num_wrong = min(3, len(wrong_words_pool))
            wrong_words = random.sample(wrong_words_pool, num_wrong)
            options = [correct_word] + wrong_words
            random.shuffle(options)
            
            answer_idx = options.index(correct_word)
            q["options"] = [o["en"] for o in options]
            q["answer"] = answer_idx
            
            if q["type"] == "listening":
                q["audioText"] = correct_word["en"]
            elif q["type"] == "speaking":
                q["question"] = f"กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า '{correct_word['th']}'"
                q["answerText"] = correct_word["en"]
            else:
                # Reading track: Use example sentence
                en_word = correct_word["en"]
                ex_en = correct_word["example_en"]
                ex_th = correct_word["example_th"]
                
                # Replace word with ______
                pattern = re.compile(re.escape(en_word), re.IGNORECASE)
                masked_sentence = pattern.sub("______", ex_en)
                
                if masked_sentence == ex_en:
                    # If word not exactly found, just append
                    masked_sentence = f"______: {ex_en}"
                
                q["question"] = f"{masked_sentence}\n\n(แปล: {ex_th})"

        quizData[track][level] = qs

output_js = f"""
const categoryData = {json.dumps(categoryData, ensure_ascii=False, indent=4)};
const levelsInfo = {json.dumps(levelsInfo, ensure_ascii=False, indent=4)};
const vocabData = {json.dumps(vocabData, ensure_ascii=False, indent=4)};
const quizData = {json.dumps(quizData, ensure_ascii=False, indent=4)};
"""

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(output_js)

print("Data generated successfully into js/data.js")
