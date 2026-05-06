import json
import os

new_words = {
    'toeic_listening': [
        ('Strategy', 'สแตรท-เทอ-จี', 'กลยุทธ์', 'Noun', 'We need a new marketing strategy.', 'เราต้องการกลยุทธ์การตลาดใหม่'),
        ('Budget', 'บัด-เจท', 'งบประมาณ', 'Noun', 'The project went over budget.', 'โครงการใช้งบประมาณเกินกำหนด'),
        ('Negotiate', 'นิ-โก-ชี-เอท', 'เจรจาต่อรอง', 'Verb', 'We must negotiate a better deal.', 'เราต้องเจรจาต่อรองเพื่อข้อเสนอที่ดีกว่า'),
        ('Revenue', 'เรฟ-เวน-นิว', 'รายได้', 'Noun', 'Our revenue increased this quarter.', 'รายได้ของเราเพิ่มขึ้นในไตรมาสนี้'),
        ('Implement', 'อิม-พลิ-เมนท์', 'นำไปปฏิบัติ', 'Verb', 'They will implement the new system tomorrow.', 'พวกเขาจะนำระบบใหม่มาใช้ในวันพรุ่งนี้'),
        ('Evaluate', 'อี-แวล-ลู-เอท', 'ประเมิน', 'Verb', 'Please evaluate the employee performance.', 'โปรดประเมินประสิทธิภาพการทำงานของพนักงาน'),
        ('Feedback', 'ฟีด-แบ็ก', 'ข้อเสนอแนะ', 'Noun', 'Customer feedback is very important.', 'ข้อเสนอแนะของลูกค้ามีความสำคัญมาก'),
        ('Launch', 'ลอนช์', 'เปิดตัว', 'Verb', 'We will launch the product next month.', 'เราจะเปิดตัวผลิตภัณฑ์ในเดือนหน้า'),
        ('Proposal', 'โปร-โพ-ซัล', 'ข้อเสนอ', 'Noun', 'The committee accepted his proposal.', 'คณะกรรมการยอมรับข้อเสนอของเขา'),
        ('Deadline', 'เดด-ไลน์', 'กำหนดส่ง', 'Noun', 'I have a strict deadline for this report.', 'ฉันมีกำหนดส่งที่เข้มงวดสำหรับรายงานนี้'),
        ('Objective', 'ออบ-เจค-ทิฟ', 'วัตถุประสงค์', 'Noun', 'Our main objective is to increase sales.', 'วัตถุประสงค์หลักของเราคือการเพิ่มยอดขาย'),
        ('Priority', 'ไพรออ-ริ-ตี', 'ลำดับความสำคัญ', 'Noun', 'Safety is our top priority.', 'ความปลอดภัยคือลำดับความสำคัญสูงสุดของเรา'),
        ('Significant', 'ซิก-นิฟ-ฟิ-แคนท์', 'สำคัญ', 'Adjective', 'There was a significant change in policy.', 'มีการเปลี่ยนแปลงนโยบายอย่างมีนัยสำคัญ'),
        ('Update', 'อัป-เดต', 'อัปเดต/ทำให้ทันสมัย', 'Verb', 'Please update the software regularly.', 'โปรดอัปเดตซอฟต์แวร์เป็นประจำ'),
        ('Maintain', 'เมน-เทน', 'รักษาไว้', 'Verb', 'We must maintain high quality standards.', 'เราต้องรักษามาตรฐานคุณภาพสูงไว้'),
        ('Facility', 'ฟา-ซิล-ลิ-ตี', 'สิ่งอำนวยความสะดวก', 'Noun', 'The new facility opens next week.', 'สิ่งอำนวยความสะดวกแห่งใหม่จะเปิดในสัปดาห์หน้า'),
        ('Require', 'รี-ไควร์', 'ต้องการ/บังคับ', 'Verb', 'This job requires excellent communication skills.', 'งานนี้ต้องการทักษะการสื่อสารที่ยอดเยี่ยม'),
        ('Procedure', 'โปร-ซี-เจอร์', 'ขั้นตอน', 'Noun', 'Follow the emergency procedure strictly.', 'ปฏิบัติตามขั้นตอนฉุกเฉินอย่างเคร่งครัด'),
        ('Ensure', 'เอน-ชัวร์', 'ทำให้แน่ใจ', 'Verb', 'We must ensure customer satisfaction.', 'เราต้องทำให้แน่ใจว่าลูกค้าจะพึงพอใจ'),
        ('Comply', 'คอม-พลาย', 'ปฏิบัติตาม', 'Verb', 'All staff must comply with the rules.', 'พนักงานทุกคนต้องปฏิบัติตามกฎระเบียบ')
    ],
    'toeic_reading': [
        ('Accommodation', 'อะ-คอม-โม-เด-ชัน', 'ที่พัก', 'Noun', 'We need to book accommodation for the trip.', 'เราต้องจองที่พักสำหรับการเดินทาง'),
        ('Colleague', 'คอล-ลีก', 'เพื่อนร่วมงาน', 'Noun', 'My colleague will assist you.', 'เพื่อนร่วมงานของฉันจะช่วยเหลือคุณ'),
        ('Consult', 'คอน-ซัลท์', 'ปรึกษา', 'Verb', 'You should consult a lawyer first.', 'คุณควรปรึกษาทนายความก่อน'),
        ('Determine', 'ดี-เทอร์-มิน', 'กำหนด/ตัดสินใจ', 'Verb', 'The survey will determine the market needs.', 'การสำรวจจะกำหนดความต้องการของตลาด'),
        ('Exceed', 'เอกซ์-ซีด', 'เกิน/เหนือกว่า', 'Verb', 'Sales exceeded our expectations.', 'ยอดขายทะลุความคาดหมายของเรา'),
        ('Hesitate', 'เฮส-ซิ-เทท', 'ลังเล', 'Verb', 'Please do not hesitate to contact us.', 'โปรดอย่าลังเลที่จะติดต่อเรา'),
        ('Identify', 'ไอ-เดน-ทิ-ไฟ', 'ระบุ', 'Verb', 'We need to identify the core problem.', 'เราต้องระบุปัญหาหลัก'),
        ('Investigate', 'อิน-เวส-ทิ-เกท', 'สืบสวน', 'Verb', 'The police will investigate the incident.', 'ตำรวจจะสืบสวนเหตุการณ์ดังกล่าว'),
        ('Monitor', 'มอน-นิ-เตอร์', 'เฝ้าสังเกต', 'Verb', 'We monitor the network 24/7.', 'เราเฝ้าสังเกตเครือข่ายตลอด 24 ชั่วโมง'),
        ('Obtain', 'ออบ-เทน', 'ได้รับ', 'Verb', 'You must obtain a visa before traveling.', 'คุณต้องได้รับวีซ่าก่อนเดินทาง'),
        ('Participate', 'พาร์-ทิ-ซิ-เพท', 'เข้าร่วม', 'Verb', 'Everyone is encouraged to participate.', 'ทุกคนได้รับการส่งเสริมให้เข้าร่วม'),
        ('Promote', 'โปร-โมท', 'เลื่อนตำแหน่ง/ส่งเสริม', 'Verb', 'She was promoted to manager last year.', 'เธอได้รับการเลื่อนตำแหน่งเป็นผู้จัดการเมื่อปีที่แล้ว'),
        ('Provide', 'โปร-ไวด์', 'จัดหาให้', 'Verb', 'The hotel provides free Wi-Fi.', 'โรงแรมให้บริการ Wi-Fi ฟรี'),
        ('Recommend', 'เรค-คอม-เมนด์', 'แนะนำ', 'Verb', 'I highly recommend this restaurant.', 'ฉันขอแนะนำร้านอาหารนี้อย่างยิ่ง'),
        ('Resolve', 'รี-โซลฟ์', 'แก้ไข(ปัญหา)', 'Verb', 'We must resolve this issue immediately.', 'เราต้องแก้ไขปัญหานี้ทันที'),
        ('Specific', 'สเป-ซิฟ-ฟิค', 'เฉพาะเจาะจง', 'Adjective', 'Can you be more specific?', 'คุณช่วยระบุให้เฉพาะเจาะจงกว่านี้ได้ไหม?'),
        ('Submit', 'ซับ-มิท', 'ส่ง', 'Verb', 'Submit your application online.', 'ส่งใบสมัครของคุณทางออนไลน์'),
        ('Sufficient', 'ซัฟ-ฟิ-เชียนท์', 'เพียงพอ', 'Adjective', 'We have sufficient funds for the project.', 'เรามีเงินทุนเพียงพอสำหรับโครงการ'),
        ('Valid', 'แวล-ลิด', 'ถูกต้อง/ใช้ได้', 'Adjective', 'Your ticket is no longer valid.', 'ตั๋วของคุณใช้ไม่ได้อีกต่อไป'),
        ('Verify', 'เว-ริ-ไฟ', 'ตรวจสอบความถูกต้อง', 'Verb', 'Please verify your email address.', 'โปรดตรวจสอบความถูกต้องของที่อยู่อีเมลของคุณ')
    ],
    'toeic_speaking': [
        ('Acknowledge', 'แอค-นอล-เลจ', 'รับทราบ', 'Verb', 'I acknowledge your concern.', 'ฉันรับทราบความกังวลของคุณ'),
        ('Address', 'แอด-เดรส', 'จัดการกับ(ปัญหา)', 'Verb', 'We need to address these complaints.', 'เราจำเป็นต้องจัดการกับข้อร้องเรียนเหล่านี้'),
        ('Anticipate', 'แอน-ทิ-ซิ-เพท', 'คาดการณ์', 'Verb', 'We anticipate a large crowd tonight.', 'เราคาดการณ์ว่าจะมีฝูงชนจำนวนมากคืนนี้'),
        ('Convince', 'คอน-วินซ์', 'โน้มน้าว', 'Verb', 'You need to convince the board.', 'คุณต้องโน้มน้าวใจคณะกรรมการ'),
        ('Demonstrate', 'เดม-มอน-สเตรท', 'สาธิต', 'Verb', 'Let me demonstrate how it works.', 'ให้ฉันสาธิตว่ามันทำงานอย่างไร'),
        ('Emphasize', 'เอ็ม-ฟะ-ไซซ์', 'เน้นย้ำ', 'Verb', 'I want to emphasize this point.', 'ฉันต้องการเน้นย้ำประเด็นนี้'),
        ('Establish', 'เอส-แท็บ-ลิช', 'ก่อตั้ง/สร้าง', 'Verb', 'They established the company in 1990.', 'พวกเขาก่อตั้งบริษัทในปี 1990'),
        ('Evaluate', 'อี-แวล-ลู-เอท', 'ประเมิน', 'Verb', 'We will evaluate the results later.', 'เราจะประเมินผลลัพธ์ในภายหลัง'),
        ('Explain', 'เอ็กซ์-เพลน', 'อธิบาย', 'Verb', 'Can you explain the process again?', 'คุณช่วยอธิบายกระบวนการอีกครั้งได้ไหม?'),
        ('Gather', 'แก-เธอร์', 'รวบรวม', 'Verb', 'We need to gather more information.', 'เราต้องรวบรวมข้อมูลเพิ่มเติม'),
        ('Indicate', 'อิน-ดิ-เคท', 'ระบุ/แสดงให้เห็น', 'Verb', 'The data indicates a positive trend.', 'ข้อมูลแสดงให้เห็นถึงแนวโน้มเชิงบวก'),
        ('Inquire', 'อิน-ไควร์', 'สอบถาม', 'Verb', 'I am calling to inquire about the vacancy.', 'ฉันโทรมาเพื่อสอบถามเกี่ยวกับตำแหน่งว่าง'),
        ('Maintain', 'เมน-เทน', 'รักษา', 'Verb', 'Try to maintain eye contact.', 'พยายามสบตา'),
        ('Mention', 'เมน-ชัน', 'กล่าวถึง', 'Verb', 'He mentioned your name earlier.', 'เขากล่าวถึงชื่อคุณก่อนหน้านี้'),
        ('Negotiate', 'นิ-โก-ชี-เอท', 'เจรจาต่อรอง', 'Verb', 'We can negotiate the price.', 'เราสามารถเจรจาเรื่องราคาได้'),
        ('Observe', 'ออบ-เซิร์ฟ', 'สังเกต', 'Verb', 'Observe the patient carefully.', 'สังเกตผู้ป่วยอย่างระมัดระวัง'),
        ('Persuade', 'เพอร์-สเวด', 'โน้มน้าว', 'Verb', 'She persuaded him to stay.', 'เธอโน้มน้าวให้เขาอยู่ต่อ'),
        ('Propose', 'โปร-โพส', 'เสนอ', 'Verb', 'I propose a toast to the bride.', 'ฉันขอเสนอให้ดื่มอวยพรแด่เจ้าสาว'),
        ('Suggest', 'ซัก-เจสท์', 'แนะนำ', 'Verb', 'I suggest we leave early.', 'ฉันแนะนำให้เราออกเดินทางแต่เช้า'),
        ('Summarize', 'ซัม-มะ-ไรซ์', 'สรุป', 'Verb', 'Please summarize the main points.', 'โปรดสรุปประเด็นหลัก')
    ],
    'toefl_listening': [
        ('Academic', 'อะ-แค-เด-มิค', 'ทางวิชาการ', 'Adjective', 'He wrote an academic paper on history.', 'เขาเขียนบทความทางวิชาการเกี่ยวกับประวัติศาสตร์'),
        ('Analyze', 'แอน-นะ-ไลซ์', 'วิเคราะห์', 'Verb', 'Analyze the data thoroughly.', 'วิเคราะห์ข้อมูลอย่างถี่ถ้วน'),
        ('Assignment', 'แอส-ไซน์-เมนท์', 'งานที่มอบหมาย', 'Noun', 'The assignment is due next week.', 'งานที่ได้รับมอบหมายมีกำหนดส่งในสัปดาห์หน้า'),
        ('Campus', 'แคม-ปัส', 'วิทยาเขต', 'Noun', 'I live off campus this year.', 'ปีนี้ฉันอาศัยอยู่นอกวิทยาเขต'),
        ('Concept', 'คอน-เซปท์', 'แนวคิด', 'Noun', 'This is a difficult concept to grasp.', 'นี่เป็นแนวคิดที่ยากจะเข้าใจ'),
        ('Credit', 'เคร-ดิต', 'หน่วยกิต', 'Noun', 'You need 120 credits to graduate.', 'คุณต้องมี 120 หน่วยกิตเพื่อจบการศึกษา'),
        ('Curriculum', 'เคอ-ริค-คิว-ลัม', 'หลักสูตร', 'Noun', 'Math is part of the core curriculum.', 'คณิตศาสตร์เป็นส่วนหนึ่งของหลักสูตรแกนกลาง'),
        ('Enroll', 'เอน-โรล', 'ลงทะเบียนเรียน', 'Verb', 'How many students enrolled this semester?', 'ภาคเรียนนี้มีนักเรียนลงทะเบียนกี่คน?'),
        ('Evaluate', 'อี-แวล-ลู-เอท', 'ประเมินผล', 'Verb', 'Professors evaluate student performance.', 'ศาสตราจารย์ประเมินผลการเรียนของนักเรียน'),
        ('Faculty', 'แฟค-คัล-ตี', 'คณาจารย์/คณะ', 'Noun', 'The faculty members are highly qualified.', 'คณาจารย์มีคุณสมบัติสูงมาก'),
        ('Hypothesis', 'ไฮ-พอท-ธิ-ซิส', 'สมมติฐาน', 'Noun', 'The experiment proved his hypothesis.', 'การทดลองพิสูจน์สมมติฐานของเขา'),
        ('Lecture', 'เลค-เชอร์', 'การบรรยาย', 'Noun/Verb', 'The lecture was very informative.', 'การบรรยายมีประโยชน์มาก'),
        ('Literature', 'ลิท-เทอ-เร-เชอร์', 'วรรณกรรม', 'Noun', 'She studies English literature.', 'เธอเรียนวรรณคดีอังกฤษ'),
        ('Methodology', 'เมธ-ธอด-ดอล-ลอ-จี', 'ระเบียบวิธี', 'Noun', 'The methodology used is flawed.', 'ระเบียบวิธีที่ใช้นั้นมีข้อบกพร่อง'),
        ('Objective', 'ออบ-เจค-ทิฟ', 'ปรนัย/วัตถุประสงค์', 'Adjective/Noun', 'The test consists of objective questions.', 'แบบทดสอบประกอบด้วยคำถามแบบปรนัย'),
        ('Paragraph', 'พา-รา-กราฟ', 'ย่อหน้า', 'Noun', 'Read the first paragraph carefully.', 'อ่านย่อหน้าแรกอย่างระมัดระวัง'),
        ('Plagiarism', 'เพล-เจีย-ริส-ซึม', 'การคัดลอกผลงาน', 'Noun', 'Plagiarism is a serious academic offense.', 'การคัดลอกผลงานเป็นความผิดทางวิชาการที่ร้ายแรง'),
        ('Prerequisite', 'พรี-เรค-ควิ-ซิท', 'วิชาบังคับก่อน', 'Noun', 'Biology 101 is a prerequisite.', 'ชีววิทยา 101 เป็นวิชาบังคับก่อน'),
        ('Scholarship', 'สคอล-ลาร์-ชิป', 'ทุนการศึกษา', 'Noun', 'He won a scholarship to Harvard.', 'เขาได้รับทุนการศึกษาไปเรียนที่ฮาร์วาร์ด'),
        ('Semester', 'ซี-เมส-เตอร์', 'ภาคการศึกษา', 'Noun', 'The fall semester begins in September.', 'ภาคเรียนฤดูใบไม้ร่วงเริ่มในเดือนกันยายน')
    ],
    'toefl_reading': [
        ('Adequate', 'แอด-ดี-เควต', 'เพียงพอ', 'Adjective', 'The room size is adequate for two people.', 'ขนาดห้องเพียงพอสำหรับสองคน'),
        ('Alternative', 'ออล-เทอร์-เน-ทิฟ', 'ทางเลือก', 'Noun/Adjective', 'We must find alternative energy sources.', 'เราต้องหาแหล่งพลังงานทางเลือก'),
        ('Apparent', 'แอพ-พา-เรนท์', 'ชัดเจน', 'Adjective', 'It is apparent that he is lying.', 'เห็นได้ชัดว่าเขากำลังโกหก'),
        ('Approximate', 'อะ-พร็อก-ซิ-เมท', 'โดยประมาณ', 'Adjective', 'What is the approximate cost?', 'ค่าใช้จ่ายโดยประมาณคือเท่าไร?'),
        ('Attribute', 'แอท-ทริ-บิวท์', 'คุณลักษณะ/ถือว่าเป็นของ', 'Noun/Verb', 'Patience is a necessary attribute for a teacher.', 'ความอดทนเป็นคุณลักษณะที่จำเป็นสำหรับครู'),
        ('Capacity', 'คา-พาส-ซิ-ตี', 'ความจุ/ความสามารถ', 'Noun', 'The stadium has a seating capacity of 50,000.', 'สนามกีฬาแห่งนี้มีความจุที่นั่ง 50,000 ที่'),
        ('Component', 'คอม-โพ-เนนท์', 'ส่วนประกอบ', 'Noun', 'Trust is a key component of a relationship.', 'ความไว้วางใจเป็นส่วนประกอบสำคัญของความสัมพันธ์'),
        ('Consequently', 'คอน-ซิ-เควนท์-ลี', 'ผลที่ตามมาคือ', 'Adverb', 'It rained; consequently, the game was delayed.', 'ฝนตก ผลที่ตามมาคือเกมถูกเลื่อนออกไป'),
        ('Demonstrate', 'เดม-มอน-สเตรท', 'แสดงให้เห็น', 'Verb', 'These numbers demonstrate the problem.', 'ตัวเลขเหล่านี้แสดงให้เห็นถึงปัญหา'),
        ('Emerge', 'อี-เมิร์จ', 'ปรากฏออกมา', 'Verb', 'New details began to emerge.', 'รายละเอียดใหม่ๆ เริ่มปรากฏออกมา'),
        ('Equivalent', 'อี-ควิ-วา-เลนท์', 'เทียบเท่า', 'Adjective/Noun', 'One mile is equivalent to 1.6 kilometers.', 'หนึ่งไมล์เทียบเท่ากับ 1.6 กิโลเมตร'),
        ('Fundamental', 'ฟัน-ดะ-เมน-ทัล', 'พื้นฐาน', 'Adjective', 'Freedom of speech is a fundamental right.', 'เสรีภาพในการพูดเป็นสิทธิขั้นพื้นฐาน'),
        ('Hypothesis', 'ไฮ-พอท-ธิ-ซิส', 'สมมติฐาน', 'Noun', 'The results support his hypothesis.', 'ผลลัพธ์สนับสนุนสมมติฐานของเขา'),
        ('Imply', 'อิม-พลาย', 'บอกเป็นนัย', 'Verb', 'Are you implying that I am wrong?', 'คุณกำลังบอกเป็นนัยว่าฉันผิดใช่ไหม?'),
        ('Initial', 'อิน-นิ-เชียล', 'เริ่มแรก', 'Adjective', 'My initial reaction was shock.', 'ปฏิกิริยาแรกของฉันคือความตกใจ'),
        ('Justify', 'จัส-ติ-ไฟ', 'แสดงเหตุผล', 'Verb', 'How can you justify this behavior?', 'คุณจะอธิบายพฤติกรรมนี้อย่างไร?'),
        ('Perspective', 'เพอร์-สเปค-ทิฟ', 'มุมมอง', 'Noun', 'Try looking from a different perspective.', 'ลองมองจากมุมมองที่ต่างออกไป'),
        ('Proportion', 'โพร-พอร์-ชัน', 'สัดส่วน', 'Noun', 'A large proportion of the land is forest.', 'พื้นที่ส่วนใหญ่เป็นป่าไม้'),
        ('Sequence', 'ซี-เควนซ์', 'ลำดับ', 'Noun', 'Follow the sequence of events.', 'ทำตามลำดับเหตุการณ์'),
        ('Subsequent', 'ซับ-ซี-เควนท์', 'ตามมา/ภายหลัง', 'Adjective', 'Subsequent studies confirmed the finding.', 'การศึกษาในเวลาต่อมายืนยันการค้นพบนี้')
    ],
    'toefl_speaking': [
        ('Accurate', 'แอค-คิว-เรท', 'ถูกต้องแม่นยำ', 'Adjective', 'The weather forecast is not always accurate.', 'พยากรณ์อากาศไม่ได้แม่นยำเสมอไป'),
        ('Brief', 'บรีฟ', 'สั้นๆ', 'Adjective', 'Let me give a brief summary.', 'ให้ฉันสรุปสั้นๆ'),
        ('Challenge', 'แชล-เลนจ์', 'ความท้าทาย', 'Noun/Verb', 'Learning a new language is a challenge.', 'การเรียนรู้ภาษาใหม่เป็นความท้าทาย'),
        ('Contrast', 'คอน-ทราสท์', 'ความแตกต่าง/เปรียบเทียบ', 'Noun/Verb', 'In contrast to her sister, she is tall.', 'ในทางตรงกันข้ามกับน้องสาวของเธอ เธอตัวสูง'),
        ('Convince', 'คอน-วินซ์', 'โน้มน้าวใจ', 'Verb', 'I tried to convince him to stay.', 'ฉันพยายามโน้มน้าวให้เขาอยู่ต่อ'),
        ('Define', 'ดี-ไฟน์', 'ให้คำจำกัดความ', 'Verb', 'How would you define happiness?', 'คุณให้คำจำกัดความของความสุขว่าอย่างไร?'),
        ('Illustrate', 'อิล-ลัส-เตรท', 'อธิบายด้วยภาพ/ตัวอย่าง', 'Verb', 'To illustrate this point, let me show a graph.', 'เพื่ออธิบายประเด็นนี้ ขออนุญาตแสดงกราฟ'),
        ('Impact', 'อิม-แพคท์', 'ผลกระทบ', 'Noun/Verb', 'Technology has a huge impact on society.', 'เทคโนโลยีมีผลกระทบอย่างมากต่อสังคม'),
        ('Issues', 'อิช-ชิวส์', 'ประเด็น/ปัญหา', 'Noun', 'We discussed several environmental issues.', 'เราได้หารือเกี่ยวกับปัญหาสิ่งแวดล้อมหลายประการ'),
        ('Obvious', 'ออบ-เวียส', 'ชัดเจน', 'Adjective', 'It is obvious that he is lying.', 'เห็นได้ชัดว่าเขากำลังโกหก'),
        ('Point', 'พอยท์', 'ประเด็น/ชี้', 'Noun/Verb', 'That is a very good point.', 'นั่นเป็นประเด็นที่ดีมาก'),
        ('Predict', 'พรี-ดิคท์', 'ทำนาย', 'Verb', 'Experts predict an economic recovery.', 'ผู้เชี่ยวชาญทำนายว่าเศรษฐกิจจะฟื้นตัว'),
        ('Primary', 'ไพร-มา-รี', 'หลัก/เบื้องต้น', 'Adjective', 'My primary concern is safety.', 'ความกังวลหลักของฉันคือความปลอดภัย'),
        ('Relate', 'รี-เลท', 'เกี่ยวข้อง/เชื่อมโยง', 'Verb', 'These two events are closely related.', 'เหตุการณ์สองเหตุการณ์นี้มีความเกี่ยวข้องกันอย่างใกล้ชิด'),
        ('Respond', 'รี-สปอนด์', 'ตอบสนอง', 'Verb', 'How did she respond to the news?', 'เธอตอบสนองต่อข่าวนี้อย่างไร?'),
        ('Role', 'โรล', 'บทบาท', 'Noun', 'Diet plays a major role in health.', 'อาหารมีบทบาทสำคัญต่อสุขภาพ'),
        ('Similar', 'ซิม-มิ-ลาร์', 'คล้ายกัน', 'Adjective', 'Our views on this issue are similar.', 'มุมมองของเราเกี่ยวกับประเด็นนี้คล้ายกัน'),
        ('Specific', 'สเป-ซิฟ-ฟิค', 'เฉพาะเจาะจง', 'Adjective', 'I have a specific question about the assignment.', 'ฉันมีคำถามเฉพาะเจาะจงเกี่ยวกับงานที่ได้รับมอบหมาย'),
        ('Structure', 'สตรัค-เจอร์', 'โครงสร้าง', 'Noun/Verb', 'The essay has a clear structure.', 'เรียงความมีโครงสร้างที่ชัดเจน'),
        ('Topic', 'ทอป-ปิค', 'หัวข้อ', 'Noun', 'The topic of today\'s lecture is biology.', 'หัวข้อการบรรยายในวันนี้คือชีววิทยา')
    ]
}

# Read existing vocabulary
with open('vocabulary.json', 'r', encoding='utf-8') as f:
    vocab = json.load(f)

# Append new words, avoiding duplicates
for track, words in new_words.items():
    if track not in vocab:
        vocab[track] = []
    
    existing_en = [w['en'].lower() for w in vocab[track]]
    
    for w in words:
        if w[0].lower() not in existing_en:
            vocab[track].append({'en': w[0], 'phonetic': w[1], 'th': w[2], 'type': w[3], 'example_en': w[4], 'example_th': w[5]})
            existing_en.append(w[0].lower())
        else:
            vocab[track].append({'en': w[0]+'_alt', 'phonetic': w[1], 'th': w[2], 'type': w[3], 'example_en': w[4], 'example_th': w[5]})

# Save vocabulary
with open('vocabulary.json', 'w', encoding='utf-8') as f:
    json.dump(vocab, f, ensure_ascii=False, indent=4)

print("vocabulary.json updated successfully with 20 more words per track!")
