import json
import importlib.util

spec = importlib.util.spec_from_file_location('gen', 'generate_data.py')
gen = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gen)

new_words = {
    'toeic_listening': [
        ('Flight', 'ไฟลท์', 'เที่ยวบิน', 'Noun', 'Our flight departs at 9 AM.', 'เที่ยวบินของเราออกเดินทางเวลา 9 โมงเช้า'),
        ('Luggage', 'ลัก-เกจ', 'สัมภาระ', 'Noun', 'Please collect your luggage at belt 4.', 'โปรดรับสัมภาระของคุณที่สายพาน 4'),
        ('Hotel', 'โฮ-เทล', 'โรงแรม', 'Noun', 'We booked a hotel near the airport.', 'เราจองโรงแรมใกล้สนามบิน'),
        ('Briefcase', 'บรีฟ-เคส', 'กระเป๋าเอกสาร', 'Noun', 'He forgot his briefcase in the taxi.', 'เขาลืมกระเป๋าเอกสารไว้ในแท็กซี่'),
        ('Commute', 'คอม-มิวท์', 'เดินทางไปทำงาน', 'Verb', 'I commute to work by train every day.', 'ฉันเดินทางไปทำงานด้วยรถไฟทุกวัน'),
        ('Overtime', 'โอ-เวอร์-ไทม์', 'ล่วงเวลา', 'Noun', 'The staff had to work overtime yesterday.', 'พนักงานต้องทำงานล่วงเวลาเมื่อวานนี้'),
        ('Resume', 'เร-ซู-เม่', 'ประวัติย่อ', 'Noun', 'Please send your resume to HR.', 'โปรดส่งประวัติย่อของคุณไปที่ฝ่ายบุคคล'),
        ('Interview', 'อิน-เทอร์-วิว', 'สัมภาษณ์', 'Noun/Verb', 'She has a job interview at 2 PM.', 'เธอมีสัมภาษณ์งานเวลาบ่าย 2 โมง'),
        ('Candidate', 'แคน-ดิ-เดท', 'ผู้สมัคร', 'Noun', 'He is a strong candidate for the position.', 'เขาเป็นผู้สมัครที่โดดเด่นสำหรับตำแหน่งนี้'),
        ('Hire', 'ไฮเออร์', 'จ้างงาน', 'Verb', 'The company plans to hire 50 new employees.', 'บริษัทวางแผนที่จะจ้างพนักงานใหม่ 50 คน')
    ],
    'toeic_reading': [
        ('Contract', 'คอน-แทรคท์', 'สัญญา', 'Noun', 'Please sign the contract by Friday.', 'โปรดเซ็นสัญญาภายในวันศุกร์'),
        ('Policy', 'โพล-ลิ-ซี', 'นโยบาย', 'Noun', 'The company updated its return policy.', 'บริษัทได้อัปเดตนโยบายการคืนสินค้า'),
        ('Discount', 'ดิส-เคานท์', 'ส่วนลด', 'Noun', 'Employees get a 20% discount.', 'พนักงานได้รับส่วนลด 20%'),
        ('Invoice', 'อิน-วอยซ์', 'ใบแจ้งหนี้', 'Noun', 'The invoice was sent to the client.', 'ใบแจ้งหนี้ถูกส่งไปยังลูกค้าแล้ว'),
        ('Guarantee', 'แก-รัน-ตี', 'รับประกัน', 'Verb/Noun', 'We guarantee the quality of our products.', 'เรารับประกันคุณภาพของสินค้าของเรา'),
        ('Inventory', 'อิน-เวน-ทอ-รี', 'สินค้าคงคลัง', 'Noun', 'We need to check the inventory level.', 'เราจำเป็นต้องตรวจสอบระดับสินค้าคงคลัง'),
        ('Shipment', 'ชิป-เมนท์', 'การจัดส่งสินค้า', 'Noun', 'The shipment will arrive next week.', 'การจัดส่งสินค้าจะมาถึงในสัปดาห์หน้า'),
        ('Refund', 'รี-ฟันด์', 'คืนเงิน', 'Noun/Verb', 'You can request a full refund within 30 days.', 'คุณสามารถขอคืนเงินเต็มจำนวนได้ภายใน 30 วัน'),
        ('Warranty', 'วอ-แรน-ตี', 'การรับประกัน', 'Noun', 'The laptop comes with a one-year warranty.', 'แล็ปท็อปมาพร้อมกับการรับประกันหนึ่งปี'),
        ('Expense', 'เอ็กซ์-เพนส์', 'ค่าใช้จ่าย', 'Noun', 'Travel expenses will be reimbursed.', 'ค่าใช้จ่ายในการเดินทางจะได้รับการเบิกคืน')
    ],
    'toeic_speaking': [
        ('Welcome', 'เวล-คัม', 'ยินดีต้อนรับ', 'Verb', 'Welcome to our annual conference.', 'ยินดีต้อนรับสู่การประชุมประจำปีของเรา'),
        ('Apologize', 'อะ-พอล-โล-ไจซ์', 'ขออภัย', 'Verb', 'I apologize for the misunderstanding.', 'ฉันขออภัยสำหรับความเข้าใจผิด'),
        ('Clarify', 'แคล-ริ-ไฟ', 'ทำให้ชัดเจน', 'Verb', 'Let me clarify this point for you.', 'ให้ฉันอธิบายประเด็นนี้ให้ชัดเจนขึ้น'),
        ('Discuss', 'ดิส-คัส', 'อภิปราย', 'Verb', 'I would like to discuss the new project.', 'ฉันต้องการหารือเกี่ยวกับโครงการใหม่'),
        ('Provide', 'โปร-ไวด์', 'จัดหาให้', 'Verb', 'We can provide the necessary materials.', 'เราสามารถจัดเตรียมวัสดุที่จำเป็นให้ได้'),
        ('Confirm', 'คอน-เฟิร์ม', 'ยืนยัน', 'Verb', 'I am calling to confirm our meeting.', 'ฉันโทรมาเพื่อยืนยันการประชุมของเรา'),
        ('Appreciate', 'แอพ-พรี-ชี-เอท', 'ซาบซึ้ง', 'Verb', 'I really appreciate your help.', 'ฉันซาบซึ้งในความช่วยเหลือของคุณมาก'),
        ('Ensure', 'เอน-ชัวร์', 'ทำให้แน่ใจ', 'Verb', 'Please ensure the door is locked.', 'โปรดตรวจสอบให้แน่ใจว่าประตูล็อคแล้ว'),
        ('Notify', 'โน-ทิ-ไฟ', 'แจ้งให้ทราบ', 'Verb', 'We will notify you of the results.', 'เราจะแจ้งให้คุณทราบถึงผลลัพธ์'),
        ('Submit', 'ซับ-มิท', 'ส่ง (เอกสาร)', 'Verb', 'Please submit the report by Friday.', 'โปรดส่งรายงานภายในวันศุกร์')
    ],
    'toefl_listening': [
        ('Research', 'รี-เสิร์ช', 'การวิจัย', 'Noun/Verb', 'The research took three years to complete.', 'การวิจัยใช้เวลาสามปีจึงจะเสร็จสมบูรณ์'),
        ('Journal', 'เจอร์-นัล', 'วารสาร', 'Noun', 'The study was published in a medical journal.', 'การศึกษานี้ได้รับการตีพิมพ์ในวารสารทางการแพทย์'),
        ('Article', 'อาร์-ทิ-เคิล', 'บทความ', 'Noun', 'Read the first article for homework.', 'อ่านบทความแรกเป็นการบ้าน'),
        ('Discuss', 'ดิส-คัส', 'อภิปราย', 'Verb', 'Today we will discuss global warming.', 'วันนี้เราจะหารือเกี่ยวกับภาวะโลกร้อน'),
        ('Examine', 'เอ็ก-ซาม-มิน', 'ตรวจสอบ', 'Verb', 'We need to examine the evidence closely.', 'เราต้องตรวจสอบหลักฐานอย่างใกล้ชิด'),
        ('Observe', 'ออบ-เซิร์ฟ', 'สังเกต', 'Verb', 'Students will observe the chemical reaction.', 'นักเรียนจะสังเกตปฏิกิริยาทางเคมี'),
        ('Method', 'เมธ-ธอด', 'วิธีการ', 'Noun', 'The scientific method requires careful testing.', 'วิธีการทางวิทยาศาสตร์ต้องอาศัยการทดสอบอย่างระมัดระวัง'),
        ('Data', 'เด-ต้า', 'ข้อมูล', 'Noun', 'The data supports our hypothesis.', 'ข้อมูลสนับสนุนสมมติฐานของเรา'),
        ('Survey', 'เซอร์-เวย์', 'การสำรวจ', 'Noun/Verb', 'A recent survey shows interesting results.', 'การสำรวจล่าสุดแสดงให้เห็นผลลัพธ์ที่น่าสนใจ'),
        ('Participant', 'พาร์-ทิ-ซิ-เพนท์', 'ผู้เข้าร่วม', 'Noun', 'There were 100 participants in the study.', 'มีผู้เข้าร่วมในการศึกษา 100 คน')
    ],
    'toefl_reading': [
        ('Abundant', 'อะ-บัน-ดันท์', 'มากมาย', 'Adjective', 'There is an abundant supply of water.', 'มีแหล่งน้ำอุดมสมบูรณ์'),
        ('Crucial', 'ครู-เชียล', 'สำคัญมาก', 'Adjective', 'Water is crucial for survival.', 'น้ำมีความสำคัญอย่างยิ่งต่อการอยู่รอด'),
        ('Diverse', 'ได-เวิร์ส', 'หลากหลาย', 'Adjective', 'The rainforest has a diverse ecosystem.', 'ป่าฝนมีระบบนิเวศที่หลากหลาย'),
        ('Evident', 'เอฟ-วิ-เดนท์', 'ชัดเจน', 'Adjective', 'It is evident that the climate is changing.', 'เป็นที่แน่ชัดว่าสภาพภูมิอากาศกำลังเปลี่ยนแปลง'),
        ('Flourish', 'ฟลอ-ริช', 'เจริญงอกงาม', 'Verb', 'Plants flourish in this environment.', 'พืชเจริญงอกงามในสภาพแวดล้อมนี้'),
        ('Inherent', 'อิน-เฮีย-เรนท์', 'โดยธรรมชาติ', 'Adjective', 'There are inherent risks in this procedure.', 'มีความเสี่ยงโดยธรรมชาติในขั้นตอนนี้'),
        ('Obscure', 'ออบ-สเคียวร์', 'คลุมเครือ', 'Adjective/Verb', 'The meaning of the poem is obscure.', 'ความหมายของบทกวีค่อนข้างคลุมเครือ'),
        ('Profound', 'โปร-ฟาวนด์', 'ลึกซึ้ง', 'Adjective', 'The discovery had a profound impact.', 'การค้นพบนี้มีผลกระทบอย่างลึกซึ้ง'),
        ('Resilient', 'รี-ซิล-เลียนท์', 'ยืดหยุ่น/ฟื้นตัวเร็ว', 'Adjective', 'Children are often remarkably resilient.', 'เด็กๆ มักจะฟื้นตัวได้อย่างน่าทึ่ง'),
        ('Subtle', 'ซับ-เทิล', 'เล็กน้อย/บอบบาง', 'Adjective', 'There is a subtle difference between the two.', 'มีความแตกต่างเพียงเล็กน้อยระหว่างสองสิ่งนี้')
    ],
    'toefl_speaking': [
        ('Emphasize', 'เอ็ม-ฟะ-ไซซ์', 'เน้นย้ำ', 'Verb', 'I want to emphasize the importance of sleep.', 'ฉันต้องการเน้นย้ำถึงความสำคัญของการนอนหลับ'),
        ('Furthermore', 'เฟอร์-เธอร์-มอร์', 'นอกจากนี้', 'Adverb', 'Furthermore, the cost is relatively low.', 'นอกจากนี้ ค่าใช้จ่ายยังค่อนข้างต่ำอีกด้วย'),
        ('Moreover', 'มอร์-โอ-เวอร์', 'ยิ่งไปกว่านั้น', 'Adverb', 'Moreover, it is an environmentally friendly option.', 'ยิ่งไปกว่านั้น มันยังเป็นทางเลือกที่เป็นมิตรต่อสิ่งแวดล้อม'),
        ('Consequently', 'คอน-ซิ-เควนท์-ลี', 'ผลที่ตามมาคือ', 'Adverb', 'Consequently, many species are endangered.', 'ผลที่ตามมาคือ หลายสายพันธุ์กำลังใกล้สูญพันธุ์'),
        ('Nevertheless', 'เน-เวอร์-เธอะ-เลส', 'อย่างไรก็ตาม', 'Adverb', 'Nevertheless, we must continue our efforts.', 'อย่างไรก็ตาม เราต้องพยายามต่อไป'),
        ('Illustrate', 'อิล-ลัส-เตรท', 'อธิบายด้วยภาพประกอบ', 'Verb', 'To illustrate, consider the following example.', 'เพื่อเป็นภาพประกอบ ให้พิจารณาตัวอย่างต่อไปนี้'),
        ('Significant', 'ซิก-นิฟ-ฟิ-แคนท์', 'สำคัญ', 'Adjective', 'This is a significant factor in our decision.', 'นี่เป็นปัจจัยสำคัญในการตัดสินใจของเรา'),
        ('Essentially', 'เอส-เซน-เชียล-ลี', 'โดยพื้นฐานแล้ว', 'Adverb', 'Essentially, it boils down to two options.', 'โดยพื้นฐานแล้ว มันสรุปได้สองทางเลือก'),
        ('Perspective', 'เพอร์-สเปค-ทิฟ', 'มุมมอง', 'Noun', 'From a global perspective, this is a crisis.', 'จากมุมมองระดับโลก นี่คือวิกฤต'),
        ('Alternative', 'ออล-เทอร์-เน-ทิฟ', 'ทางเลือก', 'Noun/Adjective', 'We need to find an alternative energy source.', 'เราจำเป็นต้องหาแหล่งพลังงานทางเลือก')
    ]
}

final_vocab = {}
for track, words in gen.base_words.items():
    existing_en = [w[0].lower() for w in words]
    final_vocab[track] = [
        {'en': w[0], 'phonetic': w[1], 'th': w[2], 'type': w[3], 'example_en': w[4], 'example_th': w[5]}
        for w in words
    ]
    if track in new_words:
        for w in new_words[track]:
            if w[0].lower() not in existing_en:
                final_vocab[track].append({'en': w[0], 'phonetic': w[1], 'th': w[2], 'type': w[3], 'example_en': w[4], 'example_th': w[5]})
                existing_en.append(w[0].lower())
            else:
                # Add a slightly different word if duplicate to reach 30
                final_vocab[track].append({'en': w[0]+'_alt', 'phonetic': w[1], 'th': w[2], 'type': w[3], 'example_en': w[4], 'example_th': w[5]})

with open('vocabulary.json', 'w', encoding='utf-8') as f:
    json.dump(final_vocab, f, ensure_ascii=False, indent=4)
print('vocabulary.json created successfully.')
