
const categoryData = {
    "toeic_listening": {
        "name": "TOEIC Listening",
        "icon": "fa-headphones",
        "color": "bg-blue"
    },
    "toeic_reading": {
        "name": "TOEIC Reading",
        "icon": "fa-book-open",
        "color": "bg-blue"
    },
    "toeic_speaking": {
        "name": "TOEIC Speaking",
        "icon": "fa-microphone",
        "color": "bg-blue"
    },
    "toefl_listening": {
        "name": "TOEFL Listening",
        "icon": "fa-headphones",
        "color": "bg-purple"
    },
    "toefl_reading": {
        "name": "TOEFL Reading",
        "icon": "fa-book-open",
        "color": "bg-purple"
    },
    "toefl_speaking": {
        "name": "TOEFL Speaking",
        "icon": "fa-microphone",
        "color": "bg-purple"
    }
};
const levelsInfo = {
    "toeic_listening": [
        {
            "level": 1,
            "name": "Level 1",
            "desc": "ฝึกทักษะพื้นฐาน (10 คำ)"
        },
        {
            "level": 2,
            "name": "Level 2",
            "desc": "ฝึกทักษะระดับกลาง (10 คำ)"
        },
        {
            "level": 3,
            "name": "Level 3",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 4,
            "name": "Level 4",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 5,
            "name": "Level 5",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 6,
            "name": "Level 6",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 7,
            "name": "Level 7",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 8,
            "name": "Level 8",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 9,
            "name": "Level 9",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 10,
            "name": "Level 10",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        }
    ],
    "toeic_reading": [
        {
            "level": 1,
            "name": "Level 1",
            "desc": "ฝึกทักษะพื้นฐาน (10 คำ)"
        },
        {
            "level": 2,
            "name": "Level 2",
            "desc": "ฝึกทักษะระดับกลาง (10 คำ)"
        },
        {
            "level": 3,
            "name": "Level 3",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 4,
            "name": "Level 4",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 5,
            "name": "Level 5",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 6,
            "name": "Level 6",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 7,
            "name": "Level 7",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 8,
            "name": "Level 8",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 9,
            "name": "Level 9",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 10,
            "name": "Level 10",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        }
    ],
    "toeic_speaking": [
        {
            "level": 1,
            "name": "Level 1",
            "desc": "ฝึกทักษะพื้นฐาน (10 คำ)"
        },
        {
            "level": 2,
            "name": "Level 2",
            "desc": "ฝึกทักษะระดับกลาง (10 คำ)"
        },
        {
            "level": 3,
            "name": "Level 3",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 4,
            "name": "Level 4",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 5,
            "name": "Level 5",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 6,
            "name": "Level 6",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 7,
            "name": "Level 7",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 8,
            "name": "Level 8",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 9,
            "name": "Level 9",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 10,
            "name": "Level 10",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        }
    ],
    "toefl_listening": [
        {
            "level": 1,
            "name": "Level 1",
            "desc": "ฝึกทักษะพื้นฐาน (10 คำ)"
        },
        {
            "level": 2,
            "name": "Level 2",
            "desc": "ฝึกทักษะระดับกลาง (10 คำ)"
        },
        {
            "level": 3,
            "name": "Level 3",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 4,
            "name": "Level 4",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 5,
            "name": "Level 5",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 6,
            "name": "Level 6",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 7,
            "name": "Level 7",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 8,
            "name": "Level 8",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 9,
            "name": "Level 9",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 10,
            "name": "Level 10",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        }
    ],
    "toefl_reading": [
        {
            "level": 1,
            "name": "Level 1",
            "desc": "ฝึกทักษะพื้นฐาน (10 คำ)"
        },
        {
            "level": 2,
            "name": "Level 2",
            "desc": "ฝึกทักษะระดับกลาง (10 คำ)"
        },
        {
            "level": 3,
            "name": "Level 3",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 4,
            "name": "Level 4",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 5,
            "name": "Level 5",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 6,
            "name": "Level 6",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 7,
            "name": "Level 7",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 8,
            "name": "Level 8",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 9,
            "name": "Level 9",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 10,
            "name": "Level 10",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        }
    ],
    "toefl_speaking": [
        {
            "level": 1,
            "name": "Level 1",
            "desc": "ฝึกทักษะพื้นฐาน (10 คำ)"
        },
        {
            "level": 2,
            "name": "Level 2",
            "desc": "ฝึกทักษะระดับกลาง (10 คำ)"
        },
        {
            "level": 3,
            "name": "Level 3",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 4,
            "name": "Level 4",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 5,
            "name": "Level 5",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 6,
            "name": "Level 6",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 7,
            "name": "Level 7",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 8,
            "name": "Level 8",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 9,
            "name": "Level 9",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        },
        {
            "level": 10,
            "name": "Level 10",
            "desc": "ฝึกทักษะระดับสูง (10 คำ)"
        }
    ]
};
const vocabData = [
    {
        "id": 1,
        "category": "toeic_listening",
        "level": 1,
        "en": "Announce",
        "phonetic": "แอน-เนาซ์",
        "th": "ประกาศ",
        "type": "Verb",
        "example_en": "They will announce the flight delay soon.",
        "example_th": "พวกเขาจะประกาศเที่ยวบินล่าช้าในไม่ช้า"
    },
    {
        "id": 2,
        "category": "toeic_listening",
        "level": 1,
        "en": "Boarding",
        "phonetic": "บอร์ด-ดิง",
        "th": "การขึ้นเครื่อง",
        "type": "Noun",
        "example_en": "Boarding will begin in 10 minutes.",
        "example_th": "การขึ้นเครื่องจะเริ่มในอีก 10 นาที"
    },
    {
        "id": 3,
        "category": "toeic_listening",
        "level": 1,
        "en": "Platform",
        "phonetic": "แพลต-ฟอร์ม",
        "th": "ชานชาลา",
        "type": "Noun",
        "example_en": "The train will arrive at platform 3.",
        "example_th": "รถไฟจะมาถึงที่ชานชาลาที่ 3"
    },
    {
        "id": 4,
        "category": "toeic_listening",
        "level": 1,
        "en": "Delay",
        "phonetic": "ดี-เลย์",
        "th": "ล่าช้า",
        "type": "Noun/Verb",
        "example_en": "The flight has a two-hour delay.",
        "example_th": "เที่ยวบินล่าช้าไปสองชั่วโมง"
    },
    {
        "id": 5,
        "category": "toeic_listening",
        "level": 1,
        "en": "Passenger",
        "phonetic": "แพส-เซน-เจอร์",
        "th": "ผู้โดยสาร",
        "type": "Noun",
        "example_en": "All passengers must wear a seatbelt.",
        "example_th": "ผู้โดยสารทุกคนต้องคาดเข็มขัดนิรภัย"
    },
    {
        "id": 6,
        "category": "toeic_listening",
        "level": 1,
        "en": "Ticket",
        "phonetic": "ทิค-เคท",
        "th": "ตั๋ว",
        "type": "Noun",
        "example_en": "Please show your ticket at the gate.",
        "example_th": "โปรดแสดงตั๋วของคุณที่ประตูทางออก"
    },
    {
        "id": 7,
        "category": "toeic_listening",
        "level": 1,
        "en": "Luggage",
        "phonetic": "ลัก-เกจ",
        "th": "สัมภาระ",
        "type": "Noun",
        "example_en": "Do not leave your luggage unattended.",
        "example_th": "ห้ามทิ้งสัมภาระไว้โดยไม่มีคนดูแล"
    },
    {
        "id": 8,
        "category": "toeic_listening",
        "level": 1,
        "en": "Departure",
        "phonetic": "ดิ-พาร์ท-เชอร์",
        "th": "ขาออก",
        "type": "Noun",
        "example_en": "Check the departure screen for updates.",
        "example_th": "ตรวจสอบหน้าจอขาออกสำหรับการอัปเดต"
    },
    {
        "id": 9,
        "category": "toeic_listening",
        "level": 1,
        "en": "Arrival",
        "phonetic": "อะ-ไรฟ-วัล",
        "th": "ขาเข้า",
        "type": "Noun",
        "example_en": "We are waiting at the arrival hall.",
        "example_th": "พวกเรากำลังรออยู่ที่ห้องโถงขาเข้า"
    },
    {
        "id": 10,
        "category": "toeic_listening",
        "level": 1,
        "en": "Cancel",
        "phonetic": "แคน-เซิล",
        "th": "ยกเลิก",
        "type": "Verb",
        "example_en": "The meeting was canceled due to rain.",
        "example_th": "การประชุมถูกยกเลิกเนื่องจากฝนตก"
    },
    {
        "id": 11,
        "category": "toeic_listening",
        "level": 2,
        "en": "Confirm",
        "phonetic": "คอน-เฟิร์ม",
        "th": "ยืนยัน",
        "type": "Verb",
        "example_en": "Please confirm your reservation by email.",
        "example_th": "โปรดยืนยันการจองของคุณทางอีเมล"
    },
    {
        "id": 12,
        "category": "toeic_listening",
        "level": 2,
        "en": "Reserve",
        "phonetic": "รี-เซิร์ฟ",
        "th": "จอง",
        "type": "Verb",
        "example_en": "I would like to reserve a table for two.",
        "example_th": "ฉันต้องการจองโต๊ะสำหรับสองคน"
    },
    {
        "id": 13,
        "category": "toeic_listening",
        "level": 2,
        "en": "Schedule",
        "phonetic": "เชด-ดูล",
        "th": "ตารางเวลา",
        "type": "Noun",
        "example_en": "The project is ahead of schedule.",
        "example_th": "โครงการนี้เร็วกว่าตารางเวลาที่กำหนด"
    },
    {
        "id": 14,
        "category": "toeic_listening",
        "level": 2,
        "en": "Meeting",
        "phonetic": "มีท-ติง",
        "th": "การประชุม",
        "type": "Noun",
        "example_en": "The board meeting is on Friday.",
        "example_th": "การประชุมคณะกรรมการมีขึ้นในวันศุกร์"
    },
    {
        "id": 15,
        "category": "toeic_listening",
        "level": 2,
        "en": "Client",
        "phonetic": "ไคล-เอนท์",
        "th": "ลูกค้า",
        "type": "Noun",
        "example_en": "We have a meeting with a new client.",
        "example_th": "เรามีการประชุมกับลูกค้ารายใหม่"
    },
    {
        "id": 16,
        "category": "toeic_listening",
        "level": 2,
        "en": "Colleague",
        "phonetic": "คอล-ลีก",
        "th": "เพื่อนร่วมงาน",
        "type": "Noun",
        "example_en": "My colleague will assist you today.",
        "example_th": "เพื่อนร่วมงานของฉันจะช่วยเหลือคุณในวันนี้"
    },
    {
        "id": 17,
        "category": "toeic_listening",
        "level": 2,
        "en": "Manager",
        "phonetic": "แมน-เน-เจอร์",
        "th": "ผู้จัดการ",
        "type": "Noun",
        "example_en": "The manager approved my leave request.",
        "example_th": "ผู้จัดการอนุมัติคำขอลาพักร้อนของฉัน"
    },
    {
        "id": 18,
        "category": "toeic_listening",
        "level": 2,
        "en": "Office",
        "phonetic": "ออฟ-ฟิศ",
        "th": "สำนักงาน",
        "type": "Noun",
        "example_en": "Our office is located in downtown.",
        "example_th": "สำนักงานของเราตั้งอยู่ในย่านใจกลางเมือง"
    },
    {
        "id": 19,
        "category": "toeic_listening",
        "level": 2,
        "en": "Discuss",
        "phonetic": "ดิส-คัส",
        "th": "อภิปราย",
        "type": "Verb",
        "example_en": "We need to discuss the budget cuts.",
        "example_th": "เราจำเป็นต้องหารือเกี่ยวกับการตัดงบประมาณ"
    },
    {
        "id": 20,
        "category": "toeic_listening",
        "level": 2,
        "en": "Report",
        "phonetic": "รี-พอร์ต",
        "th": "รายงาน",
        "type": "Noun",
        "example_en": "The financial report is due tomorrow.",
        "example_th": "รายงานทางการเงินมีกำหนดส่งพรุ่งนี้"
    },
    {
        "id": 21,
        "category": "toeic_listening",
        "level": 3,
        "en": "Flight",
        "phonetic": "ไฟลท์",
        "th": "เที่ยวบิน",
        "type": "Noun",
        "example_en": "Our flight departs at 9 AM.",
        "example_th": "เที่ยวบินของเราออกเดินทางเวลา 9 โมงเช้า"
    },
    {
        "id": 22,
        "category": "toeic_listening",
        "level": 3,
        "en": "Luggage_alt",
        "phonetic": "ลัก-เกจ",
        "th": "สัมภาระ",
        "type": "Noun",
        "example_en": "Please collect your luggage at belt 4.",
        "example_th": "โปรดรับสัมภาระของคุณที่สายพาน 4"
    },
    {
        "id": 23,
        "category": "toeic_listening",
        "level": 3,
        "en": "Hotel",
        "phonetic": "โฮ-เทล",
        "th": "โรงแรม",
        "type": "Noun",
        "example_en": "We booked a hotel near the airport.",
        "example_th": "เราจองโรงแรมใกล้สนามบิน"
    },
    {
        "id": 24,
        "category": "toeic_listening",
        "level": 3,
        "en": "Briefcase",
        "phonetic": "บรีฟ-เคส",
        "th": "กระเป๋าเอกสาร",
        "type": "Noun",
        "example_en": "He forgot his briefcase in the taxi.",
        "example_th": "เขาลืมกระเป๋าเอกสารไว้ในแท็กซี่"
    },
    {
        "id": 25,
        "category": "toeic_listening",
        "level": 3,
        "en": "Commute",
        "phonetic": "คอม-มิวท์",
        "th": "เดินทางไปทำงาน",
        "type": "Verb",
        "example_en": "I commute to work by train every day.",
        "example_th": "ฉันเดินทางไปทำงานด้วยรถไฟทุกวัน"
    },
    {
        "id": 26,
        "category": "toeic_listening",
        "level": 3,
        "en": "Overtime",
        "phonetic": "โอ-เวอร์-ไทม์",
        "th": "ล่วงเวลา",
        "type": "Noun",
        "example_en": "The staff had to work overtime yesterday.",
        "example_th": "พนักงานต้องทำงานล่วงเวลาเมื่อวานนี้"
    },
    {
        "id": 27,
        "category": "toeic_listening",
        "level": 3,
        "en": "Resume",
        "phonetic": "เร-ซู-เม่",
        "th": "ประวัติย่อ",
        "type": "Noun",
        "example_en": "Please send your resume to HR.",
        "example_th": "โปรดส่งประวัติย่อของคุณไปที่ฝ่ายบุคคล"
    },
    {
        "id": 28,
        "category": "toeic_listening",
        "level": 3,
        "en": "Interview",
        "phonetic": "อิน-เทอร์-วิว",
        "th": "สัมภาษณ์",
        "type": "Noun/Verb",
        "example_en": "She has a job interview at 2 PM.",
        "example_th": "เธอมีสัมภาษณ์งานเวลาบ่าย 2 โมง"
    },
    {
        "id": 29,
        "category": "toeic_listening",
        "level": 3,
        "en": "Candidate",
        "phonetic": "แคน-ดิ-เดท",
        "th": "ผู้สมัคร",
        "type": "Noun",
        "example_en": "He is a strong candidate for the position.",
        "example_th": "เขาเป็นผู้สมัครที่โดดเด่นสำหรับตำแหน่งนี้"
    },
    {
        "id": 30,
        "category": "toeic_listening",
        "level": 3,
        "en": "Hire",
        "phonetic": "ไฮเออร์",
        "th": "จ้างงาน",
        "type": "Verb",
        "example_en": "The company plans to hire 50 new employees.",
        "example_th": "บริษัทวางแผนที่จะจ้างพนักงานใหม่ 50 คน"
    },
    {
        "id": 31,
        "category": "toeic_listening",
        "level": 4,
        "en": "Strategy",
        "phonetic": "สแตรท-เทอ-จี",
        "th": "กลยุทธ์",
        "type": "Noun",
        "example_en": "We need a new marketing strategy.",
        "example_th": "เราต้องการกลยุทธ์การตลาดใหม่"
    },
    {
        "id": 32,
        "category": "toeic_listening",
        "level": 4,
        "en": "Budget",
        "phonetic": "บัด-เจท",
        "th": "งบประมาณ",
        "type": "Noun",
        "example_en": "The project went over budget.",
        "example_th": "โครงการใช้งบประมาณเกินกำหนด"
    },
    {
        "id": 33,
        "category": "toeic_listening",
        "level": 4,
        "en": "Negotiate",
        "phonetic": "นิ-โก-ชี-เอท",
        "th": "เจรจาต่อรอง",
        "type": "Verb",
        "example_en": "We must negotiate a better deal.",
        "example_th": "เราต้องเจรจาต่อรองเพื่อข้อเสนอที่ดีกว่า"
    },
    {
        "id": 34,
        "category": "toeic_listening",
        "level": 4,
        "en": "Revenue",
        "phonetic": "เรฟ-เวน-นิว",
        "th": "รายได้",
        "type": "Noun",
        "example_en": "Our revenue increased this quarter.",
        "example_th": "รายได้ของเราเพิ่มขึ้นในไตรมาสนี้"
    },
    {
        "id": 35,
        "category": "toeic_listening",
        "level": 4,
        "en": "Implement",
        "phonetic": "อิม-พลิ-เมนท์",
        "th": "นำไปปฏิบัติ",
        "type": "Verb",
        "example_en": "They will implement the new system tomorrow.",
        "example_th": "พวกเขาจะนำระบบใหม่มาใช้ในวันพรุ่งนี้"
    },
    {
        "id": 36,
        "category": "toeic_listening",
        "level": 4,
        "en": "Evaluate",
        "phonetic": "อี-แวล-ลู-เอท",
        "th": "ประเมิน",
        "type": "Verb",
        "example_en": "Please evaluate the employee performance.",
        "example_th": "โปรดประเมินประสิทธิภาพการทำงานของพนักงาน"
    },
    {
        "id": 37,
        "category": "toeic_listening",
        "level": 4,
        "en": "Feedback",
        "phonetic": "ฟีด-แบ็ก",
        "th": "ข้อเสนอแนะ",
        "type": "Noun",
        "example_en": "Customer feedback is very important.",
        "example_th": "ข้อเสนอแนะของลูกค้ามีความสำคัญมาก"
    },
    {
        "id": 38,
        "category": "toeic_listening",
        "level": 4,
        "en": "Launch",
        "phonetic": "ลอนช์",
        "th": "เปิดตัว",
        "type": "Verb",
        "example_en": "We will launch the product next month.",
        "example_th": "เราจะเปิดตัวผลิตภัณฑ์ในเดือนหน้า"
    },
    {
        "id": 39,
        "category": "toeic_listening",
        "level": 4,
        "en": "Proposal",
        "phonetic": "โปร-โพ-ซัล",
        "th": "ข้อเสนอ",
        "type": "Noun",
        "example_en": "The committee accepted his proposal.",
        "example_th": "คณะกรรมการยอมรับข้อเสนอของเขา"
    },
    {
        "id": 40,
        "category": "toeic_listening",
        "level": 4,
        "en": "Deadline",
        "phonetic": "เดด-ไลน์",
        "th": "กำหนดส่ง",
        "type": "Noun",
        "example_en": "I have a strict deadline for this report.",
        "example_th": "ฉันมีกำหนดส่งที่เข้มงวดสำหรับรายงานนี้"
    },
    {
        "id": 41,
        "category": "toeic_listening",
        "level": 5,
        "en": "Objective",
        "phonetic": "ออบ-เจค-ทิฟ",
        "th": "วัตถุประสงค์",
        "type": "Noun",
        "example_en": "Our main objective is to increase sales.",
        "example_th": "วัตถุประสงค์หลักของเราคือการเพิ่มยอดขาย"
    },
    {
        "id": 42,
        "category": "toeic_listening",
        "level": 5,
        "en": "Priority",
        "phonetic": "ไพรออ-ริ-ตี",
        "th": "ลำดับความสำคัญ",
        "type": "Noun",
        "example_en": "Safety is our top priority.",
        "example_th": "ความปลอดภัยคือลำดับความสำคัญสูงสุดของเรา"
    },
    {
        "id": 43,
        "category": "toeic_listening",
        "level": 5,
        "en": "Significant",
        "phonetic": "ซิก-นิฟ-ฟิ-แคนท์",
        "th": "สำคัญ",
        "type": "Adjective",
        "example_en": "There was a significant change in policy.",
        "example_th": "มีการเปลี่ยนแปลงนโยบายอย่างมีนัยสำคัญ"
    },
    {
        "id": 44,
        "category": "toeic_listening",
        "level": 5,
        "en": "Update",
        "phonetic": "อัป-เดต",
        "th": "อัปเดต/ทำให้ทันสมัย",
        "type": "Verb",
        "example_en": "Please update the software regularly.",
        "example_th": "โปรดอัปเดตซอฟต์แวร์เป็นประจำ"
    },
    {
        "id": 45,
        "category": "toeic_listening",
        "level": 5,
        "en": "Maintain",
        "phonetic": "เมน-เทน",
        "th": "รักษาไว้",
        "type": "Verb",
        "example_en": "We must maintain high quality standards.",
        "example_th": "เราต้องรักษามาตรฐานคุณภาพสูงไว้"
    },
    {
        "id": 46,
        "category": "toeic_listening",
        "level": 5,
        "en": "Facility",
        "phonetic": "ฟา-ซิล-ลิ-ตี",
        "th": "สิ่งอำนวยความสะดวก",
        "type": "Noun",
        "example_en": "The new facility opens next week.",
        "example_th": "สิ่งอำนวยความสะดวกแห่งใหม่จะเปิดในสัปดาห์หน้า"
    },
    {
        "id": 47,
        "category": "toeic_listening",
        "level": 5,
        "en": "Require",
        "phonetic": "รี-ไควร์",
        "th": "ต้องการ/บังคับ",
        "type": "Verb",
        "example_en": "This job requires excellent communication skills.",
        "example_th": "งานนี้ต้องการทักษะการสื่อสารที่ยอดเยี่ยม"
    },
    {
        "id": 48,
        "category": "toeic_listening",
        "level": 5,
        "en": "Procedure",
        "phonetic": "โปร-ซี-เจอร์",
        "th": "ขั้นตอน",
        "type": "Noun",
        "example_en": "Follow the emergency procedure strictly.",
        "example_th": "ปฏิบัติตามขั้นตอนฉุกเฉินอย่างเคร่งครัด"
    },
    {
        "id": 49,
        "category": "toeic_listening",
        "level": 5,
        "en": "Ensure",
        "phonetic": "เอน-ชัวร์",
        "th": "ทำให้แน่ใจ",
        "type": "Verb",
        "example_en": "We must ensure customer satisfaction.",
        "example_th": "เราต้องทำให้แน่ใจว่าลูกค้าจะพึงพอใจ"
    },
    {
        "id": 50,
        "category": "toeic_listening",
        "level": 5,
        "en": "Comply",
        "phonetic": "คอม-พลาย",
        "th": "ปฏิบัติตาม",
        "type": "Verb",
        "example_en": "All staff must comply with the rules.",
        "example_th": "พนักงานทุกคนต้องปฏิบัติตามกฎระเบียบ"
    },
    {
        "id": 51,
        "category": "toeic_listening",
        "level": 6,
        "en": "Aisle",
        "phonetic": "ไอล",
        "th": "ทางเดิน",
        "type": "Noun",
        "example_en": "Please keep your bags out of the aisle.",
        "example_th": "กรุณาอย่าวางกระเป๋าขวางทางเดิน"
    },
    {
        "id": 52,
        "category": "toeic_listening",
        "level": 6,
        "en": "Baggage",
        "phonetic": "แบก-เกจ",
        "th": "สัมภาระ",
        "type": "Noun",
        "example_en": "You can claim your baggage at carousel 3.",
        "example_th": "คุณสามารถรับสัมภาระได้ที่สายพาน 3"
    },
    {
        "id": 53,
        "category": "toeic_listening",
        "level": 6,
        "en": "Counter",
        "phonetic": "เคาน์-เตอร์",
        "th": "เคาน์เตอร์",
        "type": "Noun",
        "example_en": "Please proceed to the check-in counter.",
        "example_th": "กรุณาไปที่เคาน์เตอร์เช็คอิน"
    },
    {
        "id": 54,
        "category": "toeic_listening",
        "level": 6,
        "en": "Destination",
        "phonetic": "เดส-ทิ-เน-ชัน",
        "th": "จุดหมายปลายทาง",
        "type": "Noun",
        "example_en": "What is your final destination?",
        "example_th": "จุดหมายปลายทางของคุณคือที่ไหน?"
    },
    {
        "id": 55,
        "category": "toeic_listening",
        "level": 6,
        "en": "Familiar",
        "phonetic": "ฟา-มิล-เลียร์",
        "th": "คุ้นเคย",
        "type": "Adjective",
        "example_en": "Are you familiar with this software?",
        "example_th": "คุณคุ้นเคยกับซอฟต์แวร์นี้หรือไม่?"
    },
    {
        "id": 56,
        "category": "toeic_listening",
        "level": 6,
        "en": "Guarantee",
        "phonetic": "แก-รัน-ตี",
        "th": "รับประกัน",
        "type": "Verb",
        "example_en": "We guarantee the best price.",
        "example_th": "เรารับประกันราคาดีที่สุด"
    },
    {
        "id": 57,
        "category": "toeic_listening",
        "level": 6,
        "en": "Information",
        "phonetic": "อิน-ฟอร์-เม-ชัน",
        "th": "ข้อมูล",
        "type": "Noun",
        "example_en": "For more information, visit our website.",
        "example_th": "สำหรับข้อมูลเพิ่มเติม โปรดเยี่ยมชมเว็บไซต์ของเรา"
    },
    {
        "id": 58,
        "category": "toeic_listening",
        "level": 6,
        "en": "Journal",
        "phonetic": "เจอร์-นัล",
        "th": "วารสาร",
        "type": "Noun",
        "example_en": "He published his findings in a journal.",
        "example_th": "เขาตีพิมพ์ผลการค้นพบในวารสาร"
    },
    {
        "id": 59,
        "category": "toeic_listening",
        "level": 6,
        "en": "Machine",
        "phonetic": "มะ-ชีน",
        "th": "เครื่องจักร",
        "type": "Noun",
        "example_en": "The coffee machine is broken.",
        "example_th": "เครื่องชงกาแฟพัง"
    },
    {
        "id": 60,
        "category": "toeic_listening",
        "level": 6,
        "en": "Occasion",
        "phonetic": "ออ-เค-ชัน",
        "th": "โอกาส",
        "type": "Noun",
        "example_en": "I only wear this suit on special occasions.",
        "example_th": "ฉันใส่ชุดสูทนี้เฉพาะในโอกาสพิเศษเท่านั้น"
    },
    {
        "id": 61,
        "category": "toeic_listening",
        "level": 7,
        "en": "Package",
        "phonetic": "แพค-เกจ",
        "th": "บรรจุภัณฑ์/พัสดุ",
        "type": "Noun",
        "example_en": "Your package has arrived.",
        "example_th": "พัสดุของคุณมาถึงแล้ว"
    },
    {
        "id": 62,
        "category": "toeic_listening",
        "level": 7,
        "en": "Quality",
        "phonetic": "ควอล-ลิ-ตี",
        "th": "คุณภาพ",
        "type": "Noun",
        "example_en": "We focus on product quality.",
        "example_th": "เรามุ่งเน้นที่คุณสมบัติของผลิตภัณฑ์"
    },
    {
        "id": 63,
        "category": "toeic_listening",
        "level": 7,
        "en": "Receipt",
        "phonetic": "รี-ซีท",
        "th": "ใบเสร็จ",
        "type": "Noun",
        "example_en": "Please keep your receipt as proof of purchase.",
        "example_th": "โปรดเก็บใบเสร็จไว้เป็นหลักฐานการซื้อ"
    },
    {
        "id": 64,
        "category": "toeic_listening",
        "level": 7,
        "en": "Signature",
        "phonetic": "ซิก-เน-เจอร์",
        "th": "ลายเซ็น",
        "type": "Noun",
        "example_en": "We need your signature on this document.",
        "example_th": "เราต้องการลายเซ็นของคุณในเอกสารนี้"
    },
    {
        "id": 65,
        "category": "toeic_listening",
        "level": 7,
        "en": "Terminal",
        "phonetic": "เทอร์-มิ-นัล",
        "th": "อาคารผู้โดยสาร",
        "type": "Noun",
        "example_en": "The flight departs from Terminal 2.",
        "example_th": "เที่ยวบินออกเดินทางจากอาคารผู้โดยสาร 2"
    },
    {
        "id": 66,
        "category": "toeic_listening",
        "level": 7,
        "en": "Valuable",
        "phonetic": "แวล-ลู-เอ-เบิล",
        "th": "มีค่า",
        "type": "Adjective",
        "example_en": "Keep your valuable items with you.",
        "example_th": "เก็บของมีค่าไว้กับตัว"
    },
    {
        "id": 67,
        "category": "toeic_listening",
        "level": 7,
        "en": "Warehouse",
        "phonetic": "แวร์-เฮาส์",
        "th": "โกดัง",
        "type": "Noun",
        "example_en": "The goods are stored in the warehouse.",
        "example_th": "สินค้าถูกเก็บไว้ในโกดัง"
    },
    {
        "id": 68,
        "category": "toeic_listening",
        "level": 7,
        "en": "Yield",
        "phonetic": "ยิลด์",
        "th": "ผลผลิต/ให้ผล",
        "type": "Noun/Verb",
        "example_en": "The new strategy yielded positive results.",
        "example_th": "กลยุทธ์ใหม่ให้ผลลัพธ์ที่เป็นบวก"
    },
    {
        "id": 69,
        "category": "toeic_listening",
        "level": 7,
        "en": "Zone",
        "phonetic": "โซน",
        "th": "พื้นที่",
        "type": "Noun",
        "example_en": "This is a no-parking zone.",
        "example_th": "นี่คือพื้นที่ห้ามจอด"
    },
    {
        "id": 70,
        "category": "toeic_listening",
        "level": 7,
        "en": "Accompany",
        "phonetic": "แอค-คอม-พา-นี",
        "th": "มาด้วย/ติดตาม",
        "type": "Verb",
        "example_en": "Children must be accompanied by an adult.",
        "example_th": "เด็กต้องมีผู้ใหญ่คอยดูแล"
    },
    {
        "id": 71,
        "category": "toeic_listening",
        "level": 8,
        "en": "Board",
        "phonetic": "บอร์ด",
        "th": "คณะกรรมการ/ขึ้น(เครื่อง)",
        "type": "Noun/Verb",
        "example_en": "The board of directors approved the budget.",
        "example_th": "คณะกรรมการอนุมัติงบประมาณ"
    },
    {
        "id": 72,
        "category": "toeic_listening",
        "level": 8,
        "en": "Cancel_alt",
        "phonetic": "แคน-เซิล",
        "th": "ยกเลิก",
        "type": "Verb",
        "example_en": "The flight was canceled due to bad weather.",
        "example_th": "เที่ยวบินถูกยกเลิกเนื่องจากสภาพอากาศเลวร้าย"
    },
    {
        "id": 73,
        "category": "toeic_listening",
        "level": 8,
        "en": "Damage",
        "phonetic": "แดม-เมจ",
        "th": "ความเสียหาย",
        "type": "Noun",
        "example_en": "Report any damage to the manager.",
        "example_th": "รายงานความเสียหายใดๆ ต่อผู้จัดการ"
    },
    {
        "id": 74,
        "category": "toeic_listening",
        "level": 8,
        "en": "Economy",
        "phonetic": "อี-คอน-โน-มี",
        "th": "เศรษฐกิจ/ชั้นประหยัด",
        "type": "Noun",
        "example_en": "I usually fly economy class.",
        "example_th": "ฉันมักจะบินชั้นประหยัด"
    },
    {
        "id": 75,
        "category": "toeic_listening",
        "level": 8,
        "en": "Forecast",
        "phonetic": "ฟอร์-คาสท์",
        "th": "พยากรณ์",
        "type": "Verb/Noun",
        "example_en": "The weather forecast predicts rain.",
        "example_th": "พยากรณ์อากาศคาดว่าจะมีฝนตก"
    },
    {
        "id": 76,
        "category": "toeic_listening",
        "level": 8,
        "en": "Gate",
        "phonetic": "เกท",
        "th": "ประตู(ขึ้นเครื่อง)",
        "type": "Noun",
        "example_en": "Proceed to gate 14 immediately.",
        "example_th": "ไปที่ประตู 14 ทันที"
    },
    {
        "id": 77,
        "category": "toeic_listening",
        "level": 8,
        "en": "Handle",
        "phonetic": "แฮน-เดิล",
        "th": "จัดการ",
        "type": "Verb",
        "example_en": "She can handle the pressure.",
        "example_th": "เธอสามารถจัดการกับแรงกดดันได้"
    },
    {
        "id": 78,
        "category": "toeic_listening",
        "level": 8,
        "en": "Item",
        "phonetic": "ไอ-เทม",
        "th": "รายการ/สิ่งของ",
        "type": "Noun",
        "example_en": "Please place all items in the bin.",
        "example_th": "โปรดวางสิ่งของทั้งหมดลงในถัง"
    },
    {
        "id": 79,
        "category": "toeic_listening",
        "level": 8,
        "en": "Join",
        "phonetic": "จอยน์",
        "th": "เข้าร่วม",
        "type": "Verb",
        "example_en": "Would you like to join us for lunch?",
        "example_th": "คุณต้องการร่วมทานอาหารกลางวันกับเราไหม?"
    },
    {
        "id": 80,
        "category": "toeic_listening",
        "level": 8,
        "en": "Luggage_alt",
        "phonetic": "ลัก-เกจ",
        "th": "สัมภาระ",
        "type": "Noun",
        "example_en": "Do you have any checked luggage?",
        "example_th": "คุณมีสัมภาระโหลดใต้เครื่องหรือไม่?"
    },
    {
        "id": 81,
        "category": "toeic_listening",
        "level": 9,
        "en": "Manager_alt",
        "phonetic": "แมน-เน-เจอร์",
        "th": "ผู้จัดการ",
        "type": "Noun",
        "example_en": "The store manager is currently busy.",
        "example_th": "ผู้จัดการร้านกำลังยุ่งอยู่"
    },
    {
        "id": 82,
        "category": "toeic_listening",
        "level": 9,
        "en": "Notice",
        "phonetic": "โน-ทิส",
        "th": "ประกาศ/สังเกต",
        "type": "Noun",
        "example_en": "Did you see the notice on the board?",
        "example_th": "คุณเห็นประกาศบนกระดานไหม?"
    },
    {
        "id": 83,
        "category": "toeic_listening",
        "level": 9,
        "en": "Option",
        "phonetic": "ออป-ชัน",
        "th": "ทางเลือก",
        "type": "Noun",
        "example_en": "We have several payment options.",
        "example_th": "เรามีทางเลือกการชำระเงินหลายแบบ"
    },
    {
        "id": 84,
        "category": "toeic_listening",
        "level": 9,
        "en": "Platform_alt",
        "phonetic": "แพลต-ฟอร์ม",
        "th": "ชานชาลา",
        "type": "Noun",
        "example_en": "The train on platform 3 is ready to depart.",
        "example_th": "รถไฟที่ชานชาลา 3 พร้อมออกเดินทางแล้ว"
    },
    {
        "id": 85,
        "category": "toeic_listening",
        "level": 9,
        "en": "Quarter",
        "phonetic": "ควอร์-เตอร์",
        "th": "ไตรมาส",
        "type": "Noun",
        "example_en": "Profits rose in the third quarter.",
        "example_th": "กำไรเพิ่มขึ้นในไตรมาสที่สาม"
    },
    {
        "id": 86,
        "category": "toeic_listening",
        "level": 9,
        "en": "Reservation",
        "phonetic": "เรส-เซอร์-เว-ชัน",
        "th": "การจอง",
        "type": "Noun",
        "example_en": "I have a reservation under the name Smith.",
        "example_th": "ฉันมีการจองในชื่อสมิธ"
    },
    {
        "id": 87,
        "category": "toeic_listening",
        "level": 9,
        "en": "Security",
        "phonetic": "ซี-คิว-ริ-ตี",
        "th": "ความปลอดภัย",
        "type": "Noun",
        "example_en": "Pass through security screening.",
        "example_th": "ผ่านการตรวจตราความปลอดภัย"
    },
    {
        "id": 88,
        "category": "toeic_listening",
        "level": 9,
        "en": "Track",
        "phonetic": "แทรค",
        "th": "ติดตาม/ลู่",
        "type": "Verb/Noun",
        "example_en": "We use software to track shipments.",
        "example_th": "เราใช้ซอฟต์แวร์เพื่อติดตามการจัดส่ง"
    },
    {
        "id": 89,
        "category": "toeic_listening",
        "level": 9,
        "en": "Upgrade",
        "phonetic": "อัป-เกรด",
        "th": "อัปเกรด",
        "type": "Verb/Noun",
        "example_en": "He received a free upgrade to first class.",
        "example_th": "เขาได้รับการอัปเกรดเป็นชั้นหนึ่งฟรี"
    },
    {
        "id": 90,
        "category": "toeic_listening",
        "level": 9,
        "en": "Vehicle",
        "phonetic": "วี-ฮิ-เคิล",
        "th": "ยานพาหนะ",
        "type": "Noun",
        "example_en": "Park your vehicle in the designated area.",
        "example_th": "จอดรถของคุณในพื้นที่ที่กำหนด"
    },
    {
        "id": 91,
        "category": "toeic_listening",
        "level": 10,
        "en": "Wait",
        "phonetic": "เวท",
        "th": "รอ",
        "type": "Verb",
        "example_en": "Please wait in the lobby.",
        "example_th": "กรุณารอที่ล็อบบี้"
    },
    {
        "id": 92,
        "category": "toeic_listening",
        "level": 10,
        "en": "Annual",
        "phonetic": "แอน-นวล",
        "th": "ประจำปี",
        "type": "Adjective",
        "example_en": "The annual report will be published soon.",
        "example_th": "รายงานประจำปีจะได้รับการเผยแพร่ในไม่ช้า"
    },
    {
        "id": 93,
        "category": "toeic_listening",
        "level": 10,
        "en": "Balance",
        "phonetic": "บาล-ลานซ์",
        "th": "ยอดคงเหลือ/สมดุล",
        "type": "Noun",
        "example_en": "Check your account balance online.",
        "example_th": "ตรวจสอบยอดเงินในบัญชีของคุณทางออนไลน์"
    },
    {
        "id": 94,
        "category": "toeic_listening",
        "level": 10,
        "en": "Charge",
        "phonetic": "ชาร์จ",
        "th": "คิดราคา",
        "type": "Verb",
        "example_en": "There is no extra charge for delivery.",
        "example_th": "ไม่มีค่าธรรมเนียมเพิ่มเติมสำหรับการจัดส่ง"
    },
    {
        "id": 95,
        "category": "toeic_listening",
        "level": 10,
        "en": "Direct",
        "phonetic": "ได-เรคท์",
        "th": "โดยตรง",
        "type": "Adjective",
        "example_en": "I prefer a direct flight.",
        "example_th": "ฉันชอบเที่ยวบินตรงมากกว่า"
    },
    {
        "id": 96,
        "category": "toeic_listening",
        "level": 10,
        "en": "Estimate",
        "phonetic": "เอส-ทิ-เมท",
        "th": "ประมาณการ",
        "type": "Verb",
        "example_en": "Can you estimate the total cost?",
        "example_th": "คุณช่วยประมาณการค่าใช้จ่ายทั้งหมดได้ไหม?"
    },
    {
        "id": 97,
        "category": "toeic_listening",
        "level": 10,
        "en": "Frequent",
        "phonetic": "ฟรี-เควนท์",
        "th": "บ่อย",
        "type": "Adjective",
        "example_en": "He is a frequent flyer.",
        "example_th": "เขาเป็นผู้โดยสารที่บินบ่อย"
    },
    {
        "id": 98,
        "category": "toeic_listening",
        "level": 10,
        "en": "Guest",
        "phonetic": "เกสต์",
        "th": "แขก",
        "type": "Noun",
        "example_en": "We are expecting a special guest.",
        "example_th": "เรากำลังรอแขกคนพิเศษ"
    },
    {
        "id": 99,
        "category": "toeic_listening",
        "level": 10,
        "en": "Host",
        "phonetic": "โฮสต์",
        "th": "เจ้าภาพ",
        "type": "Noun",
        "example_en": "Our company will host the event.",
        "example_th": "บริษัทของเราจะเป็นเจ้าภาพจัดงาน"
    },
    {
        "id": 100,
        "category": "toeic_listening",
        "level": 10,
        "en": "Issue",
        "phonetic": "อิช-ชิว",
        "th": "ปัญหา/ออกให้",
        "type": "Noun",
        "example_en": "Let us resolve this issue quickly.",
        "example_th": "เรามาแก้ปัญหานี้กันอย่างรวดเร็ว"
    },
    {
        "id": 101,
        "category": "toeic_reading",
        "level": 1,
        "en": "Implement",
        "phonetic": "อิม-พลิ-เมนท์",
        "th": "ทำให้มีผล",
        "type": "Verb",
        "example_en": "The company will implement new safety rules.",
        "example_th": "บริษัทจะนำกฎความปลอดภัยใหม่มาใช้"
    },
    {
        "id": 102,
        "category": "toeic_reading",
        "level": 1,
        "en": "Revenue",
        "phonetic": "เรฟ-เวน-นิว",
        "th": "รายได้",
        "type": "Noun",
        "example_en": "Our revenue increased by 20% this year.",
        "example_th": "รายได้ของเราเพิ่มขึ้น 20% ในปีนี้"
    },
    {
        "id": 103,
        "category": "toeic_reading",
        "level": 1,
        "en": "Budget",
        "phonetic": "บัด-เจท",
        "th": "งบประมาณ",
        "type": "Noun",
        "example_en": "We have a limited budget for marketing.",
        "example_th": "เรามีงบประมาณจำกัดสำหรับการตลาด"
    },
    {
        "id": 104,
        "category": "toeic_reading",
        "level": 1,
        "en": "Evaluate",
        "phonetic": "อี-แวล-ลู-เอท",
        "th": "ประเมินผล",
        "type": "Verb",
        "example_en": "They will evaluate the employee performance.",
        "example_th": "พวกเขาจะประเมินประสิทธิภาพการทำงานของพนักงาน"
    },
    {
        "id": 105,
        "category": "toeic_reading",
        "level": 1,
        "en": "Strategy",
        "phonetic": "สแตรท-เทอ-จี",
        "th": "กลยุทธ์",
        "type": "Noun",
        "example_en": "We need a new business strategy to win.",
        "example_th": "เราต้องการกลยุทธ์ทางธุรกิจใหม่เพื่อเอาชนะ"
    },
    {
        "id": 106,
        "category": "toeic_reading",
        "level": 1,
        "en": "Propose",
        "phonetic": "โปร-โพส",
        "th": "เสนอ",
        "type": "Verb",
        "example_en": "I propose that we launch the app next week.",
        "example_th": "ฉันเสนอให้เราเปิดตัวแอปในสัปดาห์หน้า"
    },
    {
        "id": 107,
        "category": "toeic_reading",
        "level": 1,
        "en": "Agreement",
        "phonetic": "อะ-กรี-เมนท์",
        "th": "ข้อตกลง",
        "type": "Noun",
        "example_en": "Both parties signed the agreement today.",
        "example_th": "ทั้งสองฝ่ายได้ลงนามในข้อตกลงวันนี้"
    },
    {
        "id": 108,
        "category": "toeic_reading",
        "level": 1,
        "en": "Investment",
        "phonetic": "อิน-เวสท์-เมนท์",
        "th": "การลงทุน",
        "type": "Noun",
        "example_en": "Buying real estate is a good investment.",
        "example_th": "การซื้ออสังหาริมทรัพย์เป็นการลงทุนที่ดี"
    },
    {
        "id": 109,
        "category": "toeic_reading",
        "level": 1,
        "en": "Profit",
        "phonetic": "โปร-ฟิท",
        "th": "กำไร",
        "type": "Noun",
        "example_en": "The store made a huge profit last month.",
        "example_th": "ร้านค้าทำกำไรได้อย่างมหาศาลในเดือนที่แล้ว"
    },
    {
        "id": 110,
        "category": "toeic_reading",
        "level": 1,
        "en": "Market",
        "phonetic": "มาร์-เกท",
        "th": "ตลาด",
        "type": "Noun",
        "example_en": "The global market is highly competitive.",
        "example_th": "ตลาดโลกมีการแข่งขันสูงมาก"
    },
    {
        "id": 111,
        "category": "toeic_reading",
        "level": 2,
        "en": "Competitor",
        "phonetic": "คอม-เพท-ทิ-เทอร์",
        "th": "คู่แข่ง",
        "type": "Noun",
        "example_en": "Our main competitor has lowered their prices.",
        "example_th": "คู่แข่งหลักของเราได้ปรับลดราคาลง"
    },
    {
        "id": 112,
        "category": "toeic_reading",
        "level": 2,
        "en": "Launch",
        "phonetic": "ลอนช์",
        "th": "เปิดตัว",
        "type": "Verb",
        "example_en": "The brand will launch a new smartphone.",
        "example_th": "แบรนด์จะเปิดตัวสมาร์ทโฟนรุ่นใหม่"
    },
    {
        "id": 113,
        "category": "toeic_reading",
        "level": 2,
        "en": "Promote",
        "phonetic": "โปร-โมท",
        "th": "ส่งเสริม",
        "type": "Verb",
        "example_en": "He was promoted to the position of director.",
        "example_th": "เขาได้รับการเลื่อนตำแหน่งเป็นผู้อำนวยการ"
    },
    {
        "id": 114,
        "category": "toeic_reading",
        "level": 2,
        "en": "Campaign",
        "phonetic": "แคม-เปน",
        "th": "แคมเปญ",
        "type": "Noun",
        "example_en": "The advertising campaign was successful.",
        "example_th": "แคมเปญโฆษณาประสบความสำเร็จอย่างมาก"
    },
    {
        "id": 115,
        "category": "toeic_reading",
        "level": 2,
        "en": "Target",
        "phonetic": "ทาร์-เกท",
        "th": "เป้าหมาย",
        "type": "Noun",
        "example_en": "We must reach our sales target by December.",
        "example_th": "เราต้องไปให้ถึงเป้าหมายการขายภายในเดือนธันวาคม"
    },
    {
        "id": 116,
        "category": "toeic_reading",
        "level": 2,
        "en": "Resource",
        "phonetic": "รี-ซอร์ส",
        "th": "ทรัพยากร",
        "type": "Noun",
        "example_en": "Human resources is an important department.",
        "example_th": "ฝ่ายทรัพยากรบุคคลเป็นแผนกที่สำคัญ"
    },
    {
        "id": 117,
        "category": "toeic_reading",
        "level": 2,
        "en": "Allocate",
        "phonetic": "แอล-โล-เคท",
        "th": "จัดสรร",
        "type": "Verb",
        "example_en": "The government will allocate funds to schools.",
        "example_th": "รัฐบาลจะจัดสรรเงินทุนให้กับโรงเรียน"
    },
    {
        "id": 118,
        "category": "toeic_reading",
        "level": 2,
        "en": "Analyze",
        "phonetic": "แอน-นะ-ไลซ์",
        "th": "วิเคราะห์",
        "type": "Verb",
        "example_en": "Scientists analyze the data carefully.",
        "example_th": "นักวิทยาศาสตร์วิเคราะห์ข้อมูลอย่างระมัดระวัง"
    },
    {
        "id": 119,
        "category": "toeic_reading",
        "level": 2,
        "en": "Trend",
        "phonetic": "เทรนด์",
        "th": "แนวโน้ม",
        "type": "Noun",
        "example_en": "There is a growing trend in online shopping.",
        "example_th": "มีแนวโน้มการเติบโตในการช็อปปิ้งออนไลน์"
    },
    {
        "id": 120,
        "category": "toeic_reading",
        "level": 2,
        "en": "Forecast",
        "phonetic": "ฟอร์-คาสท์",
        "th": "คาดการณ์",
        "type": "Verb",
        "example_en": "Experts forecast a drop in housing prices.",
        "example_th": "ผู้เชี่ยวชาญคาดการณ์ว่าราคาบ้านจะลดลง"
    },
    {
        "id": 121,
        "category": "toeic_reading",
        "level": 3,
        "en": "Contract",
        "phonetic": "คอน-แทรคท์",
        "th": "สัญญา",
        "type": "Noun",
        "example_en": "Please sign the contract by Friday.",
        "example_th": "โปรดเซ็นสัญญาภายในวันศุกร์"
    },
    {
        "id": 122,
        "category": "toeic_reading",
        "level": 3,
        "en": "Policy",
        "phonetic": "โพล-ลิ-ซี",
        "th": "นโยบาย",
        "type": "Noun",
        "example_en": "The company updated its return policy.",
        "example_th": "บริษัทได้อัปเดตนโยบายการคืนสินค้า"
    },
    {
        "id": 123,
        "category": "toeic_reading",
        "level": 3,
        "en": "Discount",
        "phonetic": "ดิส-เคานท์",
        "th": "ส่วนลด",
        "type": "Noun",
        "example_en": "Employees get a 20% discount.",
        "example_th": "พนักงานได้รับส่วนลด 20%"
    },
    {
        "id": 124,
        "category": "toeic_reading",
        "level": 3,
        "en": "Invoice",
        "phonetic": "อิน-วอยซ์",
        "th": "ใบแจ้งหนี้",
        "type": "Noun",
        "example_en": "The invoice was sent to the client.",
        "example_th": "ใบแจ้งหนี้ถูกส่งไปยังลูกค้าแล้ว"
    },
    {
        "id": 125,
        "category": "toeic_reading",
        "level": 3,
        "en": "Guarantee",
        "phonetic": "แก-รัน-ตี",
        "th": "รับประกัน",
        "type": "Verb/Noun",
        "example_en": "We guarantee the quality of our products.",
        "example_th": "เรารับประกันคุณภาพของสินค้าของเรา"
    },
    {
        "id": 126,
        "category": "toeic_reading",
        "level": 3,
        "en": "Inventory",
        "phonetic": "อิน-เวน-ทอ-รี",
        "th": "สินค้าคงคลัง",
        "type": "Noun",
        "example_en": "We need to check the inventory level.",
        "example_th": "เราจำเป็นต้องตรวจสอบระดับสินค้าคงคลัง"
    },
    {
        "id": 127,
        "category": "toeic_reading",
        "level": 3,
        "en": "Shipment",
        "phonetic": "ชิป-เมนท์",
        "th": "การจัดส่งสินค้า",
        "type": "Noun",
        "example_en": "The shipment will arrive next week.",
        "example_th": "การจัดส่งสินค้าจะมาถึงในสัปดาห์หน้า"
    },
    {
        "id": 128,
        "category": "toeic_reading",
        "level": 3,
        "en": "Refund",
        "phonetic": "รี-ฟันด์",
        "th": "คืนเงิน",
        "type": "Noun/Verb",
        "example_en": "You can request a full refund within 30 days.",
        "example_th": "คุณสามารถขอคืนเงินเต็มจำนวนได้ภายใน 30 วัน"
    },
    {
        "id": 129,
        "category": "toeic_reading",
        "level": 3,
        "en": "Warranty",
        "phonetic": "วอ-แรน-ตี",
        "th": "การรับประกัน",
        "type": "Noun",
        "example_en": "The laptop comes with a one-year warranty.",
        "example_th": "แล็ปท็อปมาพร้อมกับการรับประกันหนึ่งปี"
    },
    {
        "id": 130,
        "category": "toeic_reading",
        "level": 3,
        "en": "Expense",
        "phonetic": "เอ็กซ์-เพนส์",
        "th": "ค่าใช้จ่าย",
        "type": "Noun",
        "example_en": "Travel expenses will be reimbursed.",
        "example_th": "ค่าใช้จ่ายในการเดินทางจะได้รับการเบิกคืน"
    },
    {
        "id": 131,
        "category": "toeic_reading",
        "level": 4,
        "en": "Accommodation",
        "phonetic": "อะ-คอม-โม-เด-ชัน",
        "th": "ที่พัก",
        "type": "Noun",
        "example_en": "We need to book accommodation for the trip.",
        "example_th": "เราต้องจองที่พักสำหรับการเดินทาง"
    },
    {
        "id": 132,
        "category": "toeic_reading",
        "level": 4,
        "en": "Colleague",
        "phonetic": "คอล-ลีก",
        "th": "เพื่อนร่วมงาน",
        "type": "Noun",
        "example_en": "My colleague will assist you.",
        "example_th": "เพื่อนร่วมงานของฉันจะช่วยเหลือคุณ"
    },
    {
        "id": 133,
        "category": "toeic_reading",
        "level": 4,
        "en": "Consult",
        "phonetic": "คอน-ซัลท์",
        "th": "ปรึกษา",
        "type": "Verb",
        "example_en": "You should consult a lawyer first.",
        "example_th": "คุณควรปรึกษาทนายความก่อน"
    },
    {
        "id": 134,
        "category": "toeic_reading",
        "level": 4,
        "en": "Determine",
        "phonetic": "ดี-เทอร์-มิน",
        "th": "กำหนด/ตัดสินใจ",
        "type": "Verb",
        "example_en": "The survey will determine the market needs.",
        "example_th": "การสำรวจจะกำหนดความต้องการของตลาด"
    },
    {
        "id": 135,
        "category": "toeic_reading",
        "level": 4,
        "en": "Exceed",
        "phonetic": "เอกซ์-ซีด",
        "th": "เกิน/เหนือกว่า",
        "type": "Verb",
        "example_en": "Sales exceeded our expectations.",
        "example_th": "ยอดขายทะลุความคาดหมายของเรา"
    },
    {
        "id": 136,
        "category": "toeic_reading",
        "level": 4,
        "en": "Hesitate",
        "phonetic": "เฮส-ซิ-เทท",
        "th": "ลังเล",
        "type": "Verb",
        "example_en": "Please do not hesitate to contact us.",
        "example_th": "โปรดอย่าลังเลที่จะติดต่อเรา"
    },
    {
        "id": 137,
        "category": "toeic_reading",
        "level": 4,
        "en": "Identify",
        "phonetic": "ไอ-เดน-ทิ-ไฟ",
        "th": "ระบุ",
        "type": "Verb",
        "example_en": "We need to identify the core problem.",
        "example_th": "เราต้องระบุปัญหาหลัก"
    },
    {
        "id": 138,
        "category": "toeic_reading",
        "level": 4,
        "en": "Investigate",
        "phonetic": "อิน-เวส-ทิ-เกท",
        "th": "สืบสวน",
        "type": "Verb",
        "example_en": "The police will investigate the incident.",
        "example_th": "ตำรวจจะสืบสวนเหตุการณ์ดังกล่าว"
    },
    {
        "id": 139,
        "category": "toeic_reading",
        "level": 4,
        "en": "Monitor",
        "phonetic": "มอน-นิ-เตอร์",
        "th": "เฝ้าสังเกต",
        "type": "Verb",
        "example_en": "We monitor the network 24/7.",
        "example_th": "เราเฝ้าสังเกตเครือข่ายตลอด 24 ชั่วโมง"
    },
    {
        "id": 140,
        "category": "toeic_reading",
        "level": 4,
        "en": "Obtain",
        "phonetic": "ออบ-เทน",
        "th": "ได้รับ",
        "type": "Verb",
        "example_en": "You must obtain a visa before traveling.",
        "example_th": "คุณต้องได้รับวีซ่าก่อนเดินทาง"
    },
    {
        "id": 141,
        "category": "toeic_reading",
        "level": 5,
        "en": "Participate",
        "phonetic": "พาร์-ทิ-ซิ-เพท",
        "th": "เข้าร่วม",
        "type": "Verb",
        "example_en": "Everyone is encouraged to participate.",
        "example_th": "ทุกคนได้รับการส่งเสริมให้เข้าร่วม"
    },
    {
        "id": 142,
        "category": "toeic_reading",
        "level": 5,
        "en": "Promote_alt",
        "phonetic": "โปร-โมท",
        "th": "เลื่อนตำแหน่ง/ส่งเสริม",
        "type": "Verb",
        "example_en": "She was promoted to manager last year.",
        "example_th": "เธอได้รับการเลื่อนตำแหน่งเป็นผู้จัดการเมื่อปีที่แล้ว"
    },
    {
        "id": 143,
        "category": "toeic_reading",
        "level": 5,
        "en": "Provide",
        "phonetic": "โปร-ไวด์",
        "th": "จัดหาให้",
        "type": "Verb",
        "example_en": "The hotel provides free Wi-Fi.",
        "example_th": "โรงแรมให้บริการ Wi-Fi ฟรี"
    },
    {
        "id": 144,
        "category": "toeic_reading",
        "level": 5,
        "en": "Recommend",
        "phonetic": "เรค-คอม-เมนด์",
        "th": "แนะนำ",
        "type": "Verb",
        "example_en": "I highly recommend this restaurant.",
        "example_th": "ฉันขอแนะนำร้านอาหารนี้อย่างยิ่ง"
    },
    {
        "id": 145,
        "category": "toeic_reading",
        "level": 5,
        "en": "Resolve",
        "phonetic": "รี-โซลฟ์",
        "th": "แก้ไข(ปัญหา)",
        "type": "Verb",
        "example_en": "We must resolve this issue immediately.",
        "example_th": "เราต้องแก้ไขปัญหานี้ทันที"
    },
    {
        "id": 146,
        "category": "toeic_reading",
        "level": 5,
        "en": "Specific",
        "phonetic": "สเป-ซิฟ-ฟิค",
        "th": "เฉพาะเจาะจง",
        "type": "Adjective",
        "example_en": "Can you be more specific?",
        "example_th": "คุณช่วยระบุให้เฉพาะเจาะจงกว่านี้ได้ไหม?"
    },
    {
        "id": 147,
        "category": "toeic_reading",
        "level": 5,
        "en": "Submit",
        "phonetic": "ซับ-มิท",
        "th": "ส่ง",
        "type": "Verb",
        "example_en": "Submit your application online.",
        "example_th": "ส่งใบสมัครของคุณทางออนไลน์"
    },
    {
        "id": 148,
        "category": "toeic_reading",
        "level": 5,
        "en": "Sufficient",
        "phonetic": "ซัฟ-ฟิ-เชียนท์",
        "th": "เพียงพอ",
        "type": "Adjective",
        "example_en": "We have sufficient funds for the project.",
        "example_th": "เรามีเงินทุนเพียงพอสำหรับโครงการ"
    },
    {
        "id": 149,
        "category": "toeic_reading",
        "level": 5,
        "en": "Valid",
        "phonetic": "แวล-ลิด",
        "th": "ถูกต้อง/ใช้ได้",
        "type": "Adjective",
        "example_en": "Your ticket is no longer valid.",
        "example_th": "ตั๋วของคุณใช้ไม่ได้อีกต่อไป"
    },
    {
        "id": 150,
        "category": "toeic_reading",
        "level": 5,
        "en": "Verify",
        "phonetic": "เว-ริ-ไฟ",
        "th": "ตรวจสอบความถูกต้อง",
        "type": "Verb",
        "example_en": "Please verify your email address.",
        "example_th": "โปรดตรวจสอบความถูกต้องของที่อยู่อีเมลของคุณ"
    },
    {
        "id": 151,
        "category": "toeic_reading",
        "level": 6,
        "en": "Asset",
        "phonetic": "แอส-เซท",
        "th": "สินทรัพย์",
        "type": "Noun",
        "example_en": "The company has many valuable assets.",
        "example_th": "บริษัทมีสินทรัพย์ที่มีค่ามากมาย"
    },
    {
        "id": 152,
        "category": "toeic_reading",
        "level": 6,
        "en": "Broker",
        "phonetic": "โบรค-เกอร์",
        "th": "นายหน้า",
        "type": "Noun",
        "example_en": "The real estate broker showed us the house.",
        "example_th": "นายหน้าอสังหาริมทรัพย์พาเราไปดูบ้าน"
    },
    {
        "id": 153,
        "category": "toeic_reading",
        "level": 6,
        "en": "Clause",
        "phonetic": "คลอส",
        "th": "ข้อสัญญา",
        "type": "Noun",
        "example_en": "Please read the penalty clause carefully.",
        "example_th": "โปรดอ่านข้อสัญญาการปรับอย่างละเอียด"
    },
    {
        "id": 154,
        "category": "toeic_reading",
        "level": 6,
        "en": "Deduct",
        "phonetic": "ดี-ดัคท์",
        "th": "หักออก",
        "type": "Verb",
        "example_en": "Taxes will be deducted from your salary.",
        "example_th": "ภาษีจะถูกหักออกจากเงินเดือนของคุณ"
    },
    {
        "id": 155,
        "category": "toeic_reading",
        "level": 6,
        "en": "Exempt",
        "phonetic": "เอกซ์-เซมพ์",
        "th": "ได้รับการยกเว้น",
        "type": "Adjective",
        "example_en": "Non-profit organizations are tax-exempt.",
        "example_th": "องค์กรไม่แสวงหาผลกำไรได้รับการยกเว้นภาษี"
    },
    {
        "id": 156,
        "category": "toeic_reading",
        "level": 6,
        "en": "Franchise",
        "phonetic": "แฟรน-ไชส์",
        "th": "แฟรนไชส์",
        "type": "Noun",
        "example_en": "He owns a fast-food franchise.",
        "example_th": "เขาเป็นเจ้าของแฟรนไชส์ฟาสต์ฟู้ด"
    },
    {
        "id": 157,
        "category": "toeic_reading",
        "level": 6,
        "en": "Gross",
        "phonetic": "กรอส",
        "th": "ทั้งหมด/รวม",
        "type": "Adjective",
        "example_en": "The gross profit margin was 40%.",
        "example_th": "อัตรากำไรขั้นต้นอยู่ที่ 40%"
    },
    {
        "id": 158,
        "category": "toeic_reading",
        "level": 6,
        "en": "Headquarters",
        "phonetic": "เฮด-ควอ-เตอร์ส",
        "th": "สำนักงานใหญ่",
        "type": "Noun",
        "example_en": "Our headquarters is located in London.",
        "example_th": "สำนักงานใหญ่ของเราตั้งอยู่ในลอนดอน"
    },
    {
        "id": 159,
        "category": "toeic_reading",
        "level": 6,
        "en": "Inventory_alt",
        "phonetic": "อิน-เวน-ทอ-รี",
        "th": "สินค้าคงคลัง",
        "type": "Noun",
        "example_en": "We conduct an inventory check every month.",
        "example_th": "เราทำการตรวจสอบสินค้าคงคลังทุกเดือน"
    },
    {
        "id": 160,
        "category": "toeic_reading",
        "level": 6,
        "en": "Jobless",
        "phonetic": "จ๊อบ-เลส",
        "th": "ตกงาน",
        "type": "Adjective",
        "example_en": "The jobless rate has decreased this year.",
        "example_th": "อัตราคนว่างงานลดลงในปีนี้"
    },
    {
        "id": 161,
        "category": "toeic_reading",
        "level": 7,
        "en": "Lease",
        "phonetic": "ลีส",
        "th": "สัญญาเช่า",
        "type": "Noun/Verb",
        "example_en": "The office lease expires in December.",
        "example_th": "สัญญาเช่าสำนักงานจะหมดอายุในเดือนธันวาคม"
    },
    {
        "id": 162,
        "category": "toeic_reading",
        "level": 7,
        "en": "Margin",
        "phonetic": "มาร์-จิน",
        "th": "ส่วนกำไร",
        "type": "Noun",
        "example_en": "We need to increase our profit margin.",
        "example_th": "เราจำเป็นต้องเพิ่มอัตรากำไรของเรา"
    },
    {
        "id": 163,
        "category": "toeic_reading",
        "level": 7,
        "en": "Net",
        "phonetic": "เนท",
        "th": "สุทธิ",
        "type": "Adjective",
        "example_en": "Net income rose by 10%.",
        "example_th": "รายได้สุทธิเพิ่มขึ้น 10%"
    },
    {
        "id": 164,
        "category": "toeic_reading",
        "level": 7,
        "en": "Output",
        "phonetic": "เอาท์-พุท",
        "th": "ผลผลิต",
        "type": "Noun",
        "example_en": "Factory output reached a new high.",
        "example_th": "ผลผลิตของโรงงานพุ่งแตะระดับสูงสุดใหม่"
    },
    {
        "id": 165,
        "category": "toeic_reading",
        "level": 7,
        "en": "Patent",
        "phonetic": "แพท-เทนท์",
        "th": "สิทธิบัตร",
        "type": "Noun",
        "example_en": "The company filed a patent for the new technology.",
        "example_th": "บริษัทได้ยื่นจดสิทธิบัตรสำหรับเทคโนโลยีใหม่"
    },
    {
        "id": 166,
        "category": "toeic_reading",
        "level": 7,
        "en": "Quota",
        "phonetic": "โคว-ตา",
        "th": "โควตา",
        "type": "Noun",
        "example_en": "The sales team met their monthly quota.",
        "example_th": "ทีมขายทำยอดได้ตามโควตารายเดือน"
    },
    {
        "id": 167,
        "category": "toeic_reading",
        "level": 7,
        "en": "Retail",
        "phonetic": "รี-เทล",
        "th": "ขายปลีก",
        "type": "Noun",
        "example_en": "Retail prices have gone up slightly.",
        "example_th": "ราคาขายปลีกปรับตัวสูงขึ้นเล็กน้อย"
    },
    {
        "id": 168,
        "category": "toeic_reading",
        "level": 7,
        "en": "Stake",
        "phonetic": "สเตค",
        "th": "ส่วนได้ส่วนเสีย",
        "type": "Noun",
        "example_en": "He holds a 20% stake in the business.",
        "example_th": "เขาถือหุ้น 20% ในธุรกิจนี้"
    },
    {
        "id": 169,
        "category": "toeic_reading",
        "level": 7,
        "en": "Tariff",
        "phonetic": "ทาร์-ริฟ",
        "th": "ภาษีศุลกากร",
        "type": "Noun",
        "example_en": "New tariffs on imported goods were introduced.",
        "example_th": "มีการนำอัตราภาษีใหม่สำหรับสินค้านำเข้ามาใช้"
    },
    {
        "id": 170,
        "category": "toeic_reading",
        "level": 7,
        "en": "Utility",
        "phonetic": "ยู-ทิล-ลิ-ตี",
        "th": "สาธารณูปโภค",
        "type": "Noun",
        "example_en": "The utility bills include water and electricity.",
        "example_th": "ค่าสาธารณูปโภคครอบคลุมค่าน้ำและค่าไฟฟ้า"
    },
    {
        "id": 171,
        "category": "toeic_reading",
        "level": 8,
        "en": "Vendor",
        "phonetic": "เวน-ดอร์",
        "th": "ผู้จัดจำหน่าย",
        "type": "Noun",
        "example_en": "We need to select a reliable software vendor.",
        "example_th": "เราจำเป็นต้องเลือกผู้จัดจำหน่ายซอฟต์แวร์ที่เชื่อถือได้"
    },
    {
        "id": 172,
        "category": "toeic_reading",
        "level": 8,
        "en": "Wholesale",
        "phonetic": "โฮล-เซล",
        "th": "ขายส่ง",
        "type": "Noun",
        "example_en": "We buy materials at wholesale prices.",
        "example_th": "เราซื้อวัสดุในราคาขายส่ง"
    },
    {
        "id": 173,
        "category": "toeic_reading",
        "level": 8,
        "en": "Yield",
        "phonetic": "ยิลด์",
        "th": "ผลตอบแทน",
        "type": "Noun",
        "example_en": "The investment offers a high yield.",
        "example_th": "การลงทุนให้ผลตอบแทนสูง"
    },
    {
        "id": 174,
        "category": "toeic_reading",
        "level": 8,
        "en": "Approve",
        "phonetic": "แอพ-พรูฟ",
        "th": "อนุมัติ",
        "type": "Verb",
        "example_en": "The manager approved the budget request.",
        "example_th": "ผู้จัดการอนุมัติคำของบประมาณ"
    },
    {
        "id": 175,
        "category": "toeic_reading",
        "level": 8,
        "en": "Bankrupt",
        "phonetic": "แบง-ครัปท์",
        "th": "ล้มละลาย",
        "type": "Adjective",
        "example_en": "The company went bankrupt last year.",
        "example_th": "บริษัทล้มละลายเมื่อปีที่แล้ว"
    },
    {
        "id": 176,
        "category": "toeic_reading",
        "level": 8,
        "en": "Compensation",
        "phonetic": "คอม-เพน-เซ-ชัน",
        "th": "ค่าตอบแทน",
        "type": "Noun",
        "example_en": "He received workers' compensation for his injury.",
        "example_th": "เขาได้รับค่าตอบแทนสำหรับคนงานจากการบาดเจ็บ"
    },
    {
        "id": 177,
        "category": "toeic_reading",
        "level": 8,
        "en": "Distribute",
        "phonetic": "ดิส-ทริ-บิวท์",
        "th": "แจกจ่าย",
        "type": "Verb",
        "example_en": "We distribute products worldwide.",
        "example_th": "เราจัดจำหน่ายสินค้าไปทั่วโลก"
    },
    {
        "id": 178,
        "category": "toeic_reading",
        "level": 8,
        "en": "Entrepreneur",
        "phonetic": "ออน-เทรอ-เพรอ-เนอร์",
        "th": "ผู้ประกอบการ",
        "type": "Noun",
        "example_en": "She is a successful entrepreneur in the tech industry.",
        "example_th": "เธอเป็นผู้ประกอบการที่ประสบความสำเร็จในอุตสาหกรรมเทคโนโลยี"
    },
    {
        "id": 179,
        "category": "toeic_reading",
        "level": 8,
        "en": "Feature",
        "phonetic": "ฟี-เจอร์",
        "th": "คุณลักษณะเด่น",
        "type": "Noun",
        "example_en": "The new car has many advanced safety features.",
        "example_th": "รถยนต์รุ่นใหม่มีคุณลักษณะด้านความปลอดภัยขั้นสูงมากมาย"
    },
    {
        "id": 180,
        "category": "toeic_reading",
        "level": 8,
        "en": "Guarantee_alt",
        "phonetic": "แก-รัน-ตี",
        "th": "การรับประกัน",
        "type": "Noun",
        "example_en": "The television comes with a two-year guarantee.",
        "example_th": "โทรทัศน์มาพร้อมกับการรับประกันสองปี"
    },
    {
        "id": 181,
        "category": "toeic_reading",
        "level": 9,
        "en": "Hierarchical",
        "phonetic": "ไฮ-รา-คิ-คัล",
        "th": "ตามลำดับชั้น",
        "type": "Adjective",
        "example_en": "The organization has a hierarchical structure.",
        "example_th": "องค์กรมีโครงสร้างตามลำดับชั้น"
    },
    {
        "id": 182,
        "category": "toeic_reading",
        "level": 9,
        "en": "Incentive",
        "phonetic": "อิน-เซน-ทิฟ",
        "th": "สิ่งจูงใจ",
        "type": "Noun",
        "example_en": "Employees are given financial incentives for good performance.",
        "example_th": "พนักงานจะได้รับสิ่งจูงใจทางการเงินสำหรับผลการทำงานที่ดี"
    },
    {
        "id": 183,
        "category": "toeic_reading",
        "level": 9,
        "en": "Justify",
        "phonetic": "จัส-ติ-ไฟ",
        "th": "แสดงเหตุผล",
        "type": "Verb",
        "example_en": "You must justify your business expenses.",
        "example_th": "คุณต้องแสดงเหตุผลสำหรับค่าใช้จ่ายทางธุรกิจของคุณ"
    },
    {
        "id": 184,
        "category": "toeic_reading",
        "level": 9,
        "en": "Launch_alt",
        "phonetic": "ลอนช์",
        "th": "เปิดตัว",
        "type": "Verb",
        "example_en": "The marketing team will launch the campaign next week.",
        "example_th": "ทีมการตลาดจะเปิดตัวแคมเปญในสัปดาห์หน้า"
    },
    {
        "id": 185,
        "category": "toeic_reading",
        "level": 9,
        "en": "Merger",
        "phonetic": "เมอร์-เจอร์",
        "th": "การควบรวมกิจการ",
        "type": "Noun",
        "example_en": "The merger between the two banks was successful.",
        "example_th": "การควบรวมกิจการระหว่างสองธนาคารประสบความสำเร็จ"
    },
    {
        "id": 186,
        "category": "toeic_reading",
        "level": 9,
        "en": "Niche",
        "phonetic": "นิช",
        "th": "กลุ่มเป้าหมายเฉพาะ",
        "type": "Noun",
        "example_en": "They found a profitable niche in the market.",
        "example_th": "พวกเขาพบกลุ่มเป้าหมายเฉพาะที่ทำกำไรได้ในตลาด"
    },
    {
        "id": 187,
        "category": "toeic_reading",
        "level": 9,
        "en": "Outsource",
        "phonetic": "เอาท์-ซอร์ส",
        "th": "จัดจ้างบุคคลภายนอก",
        "type": "Verb",
        "example_en": "Many companies outsource their IT services.",
        "example_th": "บริษัทหลายแห่งจ้างบุคคลภายนอกให้บริการด้านไอที"
    },
    {
        "id": 188,
        "category": "toeic_reading",
        "level": 9,
        "en": "Portfolio",
        "phonetic": "พอร์ต-โฟ-ลิ-โอ",
        "th": "ผลงาน/พอร์ตโฟลิโอ",
        "type": "Noun",
        "example_en": "The designer presented her portfolio to the client.",
        "example_th": "นักออกแบบนำเสนอผลงานของเธอต่อลูกค้า"
    },
    {
        "id": 189,
        "category": "toeic_reading",
        "level": 9,
        "en": "Quarterly",
        "phonetic": "ควอร์-เตอร์-ลี",
        "th": "รายไตรมาส",
        "type": "Adjective/Adverb",
        "example_en": "We publish a quarterly report.",
        "example_th": "เราจัดพิมพ์รายงานรายไตรมาส"
    },
    {
        "id": 190,
        "category": "toeic_reading",
        "level": 9,
        "en": "Refund_alt",
        "phonetic": "รี-ฟันด์",
        "th": "คืนเงิน",
        "type": "Noun",
        "example_en": "If you are not satisfied, we will offer a full refund.",
        "example_th": "หากคุณไม่พอใจ เราจะคืนเงินให้เต็มจำนวน"
    },
    {
        "id": 191,
        "category": "toeic_reading",
        "level": 10,
        "en": "Sponsor",
        "phonetic": "สปอน-เซอร์",
        "th": "ผู้สนับสนุน",
        "type": "Noun/Verb",
        "example_en": "The event is sponsored by local businesses.",
        "example_th": "กิจกรรมนี้ได้รับการสนับสนุนจากธุรกิจในท้องถิ่น"
    },
    {
        "id": 192,
        "category": "toeic_reading",
        "level": 10,
        "en": "Turnover",
        "phonetic": "เทิร์น-โอ-เวอร์",
        "th": "อัตราการหมุนเวียน/ยอดขาย",
        "type": "Noun",
        "example_en": "The company has a high staff turnover rate.",
        "example_th": "บริษัทมีอัตราการลาออกของพนักงานสูง"
    },
    {
        "id": 193,
        "category": "toeic_reading",
        "level": 10,
        "en": "Unanimous",
        "phonetic": "ยู-แนน-นิ-มัส",
        "th": "เป็นเอกฉันท์",
        "type": "Adjective",
        "example_en": "The board reached a unanimous decision.",
        "example_th": "คณะกรรมการมีมติเป็นเอกฉันท์"
    },
    {
        "id": 194,
        "category": "toeic_reading",
        "level": 10,
        "en": "Viable",
        "phonetic": "ไว-อะ-เบิล",
        "th": "ทำได้จริง",
        "type": "Adjective",
        "example_en": "We need to find a commercially viable solution.",
        "example_th": "เราจำเป็นต้องหาวิธีแก้ปัญหาที่ทำกำไรได้ในเชิงพาณิชย์"
    },
    {
        "id": 195,
        "category": "toeic_reading",
        "level": 10,
        "en": "Warrant",
        "phonetic": "วอ-แรนท์",
        "th": "รับรอง",
        "type": "Verb",
        "example_en": "The situation does not warrant such drastic measures.",
        "example_th": "สถานการณ์ไม่ได้รุนแรงถึงขั้นต้องใช้มาตรการรุนแรงเช่นนี้"
    },
    {
        "id": 196,
        "category": "toeic_reading",
        "level": 10,
        "en": "Acquisition",
        "phonetic": "แอค-ควิ-ซิ-ชัน",
        "th": "การเข้าซื้อกิจการ",
        "type": "Noun",
        "example_en": "The acquisition will double our market share.",
        "example_th": "การเข้าซื้อกิจการจะเพิ่มส่วนแบ่งการตลาดของเราเป็นสองเท่า"
    },
    {
        "id": 197,
        "category": "toeic_reading",
        "level": 10,
        "en": "Benchmark",
        "phonetic": "เบนช์-มาร์ค",
        "th": "เกณฑ์มาตรฐาน",
        "type": "Noun",
        "example_en": "This product sets a new benchmark for quality.",
        "example_th": "ผลิตภัณฑ์นี้สร้างเกณฑ์มาตรฐานใหม่สำหรับคุณภาพ"
    },
    {
        "id": 198,
        "category": "toeic_reading",
        "level": 10,
        "en": "Comply",
        "phonetic": "คอม-พลาย",
        "th": "ปฏิบัติตาม",
        "type": "Verb",
        "example_en": "All suppliers must comply with environmental regulations.",
        "example_th": "ซัพพลายเออร์ทั้งหมดต้องปฏิบัติตามข้อบังคับด้านสิ่งแวดล้อม"
    },
    {
        "id": 199,
        "category": "toeic_reading",
        "level": 10,
        "en": "Diversify",
        "phonetic": "ได-เวอร์-ซิ-ไฟ",
        "th": "ทำให้หลากหลาย",
        "type": "Verb",
        "example_en": "We need to diversify our product range.",
        "example_th": "เราจำเป็นต้องเพิ่มความหลากหลายของสายผลิตภัณฑ์"
    },
    {
        "id": 200,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Present",
        "phonetic": "พรี-เซนต์",
        "th": "นำเสนอ",
        "type": "Verb",
        "example_en": "I have to present my project tomorrow.",
        "example_th": "ฉันต้องนำเสนอโครงการของฉันในวันพรุ่งนี้"
    },
    {
        "id": 201,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Negotiate",
        "phonetic": "นิ-โก-ชี-เอท",
        "th": "เจรจาต่อรอง",
        "type": "Verb",
        "example_en": "We managed to negotiate a better deal.",
        "example_th": "เราจัดการเจรจาต่อรองข้อเสนอที่ดีกว่าได้"
    },
    {
        "id": 202,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Explain",
        "phonetic": "เอ็กซ์-เพลน",
        "th": "อธิบาย",
        "type": "Verb",
        "example_en": "Can you explain how this machine works?",
        "example_th": "คุณช่วยอธิบายว่าเครื่องนี้ทำงานอย่างไรได้ไหม?"
    },
    {
        "id": 203,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Clarify",
        "phonetic": "แคล-ริ-ไฟ",
        "th": "ทำให้ชัดเจน",
        "type": "Verb",
        "example_en": "Please clarify what you mean by that.",
        "example_th": "โปรดทำให้ชัดเจนว่าคุณหมายถึงอะไร"
    },
    {
        "id": 204,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Summarize",
        "phonetic": "ซัม-มะ-ไรซ์",
        "th": "สรุป",
        "type": "Verb",
        "example_en": "Could you summarize the main points?",
        "example_th": "คุณช่วยสรุปประเด็นหลักให้หน่อยได้ไหม?"
    },
    {
        "id": 205,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Suggest",
        "phonetic": "ซัก-เจสท์",
        "th": "แนะนำ",
        "type": "Verb",
        "example_en": "I suggest we take a short break.",
        "example_th": "ฉันขอแนะนำให้เราหยุดพักสักครู่"
    },
    {
        "id": 206,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Recommend",
        "phonetic": "เรค-คอม-เมนด์",
        "th": "แนะนำ/เสนอแนะ",
        "type": "Verb",
        "example_en": "The chef recommends the grilled salmon.",
        "example_th": "เชฟแนะนำเมนูแซลมอนย่าง"
    },
    {
        "id": 207,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Agree",
        "phonetic": "อะ-กรี",
        "th": "เห็นด้วย",
        "type": "Verb",
        "example_en": "I completely agree with your idea.",
        "example_th": "ฉันเห็นด้วยกับแนวคิดของคุณอย่างสมบูรณ์"
    },
    {
        "id": 208,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Disagree",
        "phonetic": "ดิส-อะ-กรี",
        "th": "ไม่เห็นด้วย",
        "type": "Verb",
        "example_en": "He strongly disagrees with the new policy.",
        "example_th": "เขาไม่เห็นด้วยอย่างยิ่งกับนโยบายใหม่"
    },
    {
        "id": 209,
        "category": "toeic_speaking",
        "level": 1,
        "en": "Apologize",
        "phonetic": "อะ-พอล-โล-ไจซ์",
        "th": "ขอโทษ",
        "type": "Verb",
        "example_en": "I apologize for the delay in response.",
        "example_th": "ฉันขออภัยที่ตอบกลับล่าช้า"
    },
    {
        "id": 210,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Persuade",
        "phonetic": "เพอร์-สเวด",
        "th": "โน้มน้าว",
        "type": "Verb",
        "example_en": "She tried to persuade me to buy the car.",
        "example_th": "เธอพยายามโน้มน้าวให้ฉันซื้อรถ"
    },
    {
        "id": 211,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Convince",
        "phonetic": "คอน-วินซ์",
        "th": "ทำให้เชื่อ",
        "type": "Verb",
        "example_en": "You need to convince the investors.",
        "example_th": "คุณจำเป็นต้องโน้มน้าวใจนักลงทุน"
    },
    {
        "id": 212,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Emphasize",
        "phonetic": "เอ็ม-ฟะ-ไซซ์",
        "th": "เน้นย้ำ",
        "type": "Verb",
        "example_en": "The boss emphasized the importance of teamwork.",
        "example_th": "เจ้านายเน้นย้ำถึงความสำคัญของการทำงานเป็นทีม"
    },
    {
        "id": 213,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Illustrate",
        "phonetic": "อิล-ลัส-เตรท",
        "th": "ยกตัวอย่าง",
        "type": "Verb",
        "example_en": "Let me illustrate this concept with a graph.",
        "example_th": "ให้ฉันอธิบายแนวคิดนี้ด้วยกราฟ"
    },
    {
        "id": 214,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Express",
        "phonetic": "เอ็กซ์-เพรส",
        "th": "แสดงออก",
        "type": "Verb",
        "example_en": "Words cannot express how grateful I am.",
        "example_th": "คำพูดไม่สามารถแสดงได้ว่าฉันรู้สึกขอบคุณเพียงใด"
    },
    {
        "id": 215,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Respond",
        "phonetic": "รี-สปอนด์",
        "th": "ตอบกลับ",
        "type": "Verb",
        "example_en": "Please respond to the email by 5 PM.",
        "example_th": "โปรดตอบกลับอีเมลภายในเวลา 17.00 น."
    },
    {
        "id": 216,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Interact",
        "phonetic": "อิน-เทอร์-แอคท์",
        "th": "โต้ตอบ",
        "type": "Verb",
        "example_en": "Teachers should interact with students more.",
        "example_th": "ครูควรมีปฏิสัมพันธ์กับนักเรียนให้มากขึ้น"
    },
    {
        "id": 217,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Communicate",
        "phonetic": "คอม-มิว-นิ-เคท",
        "th": "สื่อสาร",
        "type": "Verb",
        "example_en": "We must communicate effectively to succeed.",
        "example_th": "เราต้องสื่อสารอย่างมีประสิทธิภาพเพื่อความสำเร็จ"
    },
    {
        "id": 218,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Participate",
        "phonetic": "พาร์-ทิ-ซิ-เพท",
        "th": "เข้าร่วม",
        "type": "Verb",
        "example_en": "Everyone is encouraged to participate in the event.",
        "example_th": "ทุกคนได้รับการส่งเสริมให้เข้าร่วมในกิจกรรม"
    },
    {
        "id": 219,
        "category": "toeic_speaking",
        "level": 2,
        "en": "Introduce",
        "phonetic": "อิน-โทร-ดิวซ์",
        "th": "แนะนำตัว",
        "type": "Verb",
        "example_en": "Allow me to introduce our guest speaker.",
        "example_th": "ขออนุญาตแนะนำวิทยากรรับเชิญของเรา"
    },
    {
        "id": 220,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Welcome",
        "phonetic": "เวล-คัม",
        "th": "ยินดีต้อนรับ",
        "type": "Verb",
        "example_en": "Welcome to our annual conference.",
        "example_th": "ยินดีต้อนรับสู่การประชุมประจำปีของเรา"
    },
    {
        "id": 221,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Apologize_alt",
        "phonetic": "อะ-พอล-โล-ไจซ์",
        "th": "ขออภัย",
        "type": "Verb",
        "example_en": "I apologize for the misunderstanding.",
        "example_th": "ฉันขออภัยสำหรับความเข้าใจผิด"
    },
    {
        "id": 222,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Clarify_alt",
        "phonetic": "แคล-ริ-ไฟ",
        "th": "ทำให้ชัดเจน",
        "type": "Verb",
        "example_en": "Let me clarify this point for you.",
        "example_th": "ให้ฉันอธิบายประเด็นนี้ให้ชัดเจนขึ้น"
    },
    {
        "id": 223,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Discuss",
        "phonetic": "ดิส-คัส",
        "th": "อภิปราย",
        "type": "Verb",
        "example_en": "I would like to discuss the new project.",
        "example_th": "ฉันต้องการหารือเกี่ยวกับโครงการใหม่"
    },
    {
        "id": 224,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Provide",
        "phonetic": "โปร-ไวด์",
        "th": "จัดหาให้",
        "type": "Verb",
        "example_en": "We can provide the necessary materials.",
        "example_th": "เราสามารถจัดเตรียมวัสดุที่จำเป็นให้ได้"
    },
    {
        "id": 225,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Confirm",
        "phonetic": "คอน-เฟิร์ม",
        "th": "ยืนยัน",
        "type": "Verb",
        "example_en": "I am calling to confirm our meeting.",
        "example_th": "ฉันโทรมาเพื่อยืนยันการประชุมของเรา"
    },
    {
        "id": 226,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Appreciate",
        "phonetic": "แอพ-พรี-ชี-เอท",
        "th": "ซาบซึ้ง",
        "type": "Verb",
        "example_en": "I really appreciate your help.",
        "example_th": "ฉันซาบซึ้งในความช่วยเหลือของคุณมาก"
    },
    {
        "id": 227,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Ensure",
        "phonetic": "เอน-ชัวร์",
        "th": "ทำให้แน่ใจ",
        "type": "Verb",
        "example_en": "Please ensure the door is locked.",
        "example_th": "โปรดตรวจสอบให้แน่ใจว่าประตูล็อคแล้ว"
    },
    {
        "id": 228,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Notify",
        "phonetic": "โน-ทิ-ไฟ",
        "th": "แจ้งให้ทราบ",
        "type": "Verb",
        "example_en": "We will notify you of the results.",
        "example_th": "เราจะแจ้งให้คุณทราบถึงผลลัพธ์"
    },
    {
        "id": 229,
        "category": "toeic_speaking",
        "level": 3,
        "en": "Submit",
        "phonetic": "ซับ-มิท",
        "th": "ส่ง (เอกสาร)",
        "type": "Verb",
        "example_en": "Please submit the report by Friday.",
        "example_th": "โปรดส่งรายงานภายในวันศุกร์"
    },
    {
        "id": 230,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Acknowledge",
        "phonetic": "แอค-นอล-เลจ",
        "th": "รับทราบ",
        "type": "Verb",
        "example_en": "I acknowledge your concern.",
        "example_th": "ฉันรับทราบความกังวลของคุณ"
    },
    {
        "id": 231,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Address",
        "phonetic": "แอด-เดรส",
        "th": "จัดการกับ(ปัญหา)",
        "type": "Verb",
        "example_en": "We need to address these complaints.",
        "example_th": "เราจำเป็นต้องจัดการกับข้อร้องเรียนเหล่านี้"
    },
    {
        "id": 232,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Anticipate",
        "phonetic": "แอน-ทิ-ซิ-เพท",
        "th": "คาดการณ์",
        "type": "Verb",
        "example_en": "We anticipate a large crowd tonight.",
        "example_th": "เราคาดการณ์ว่าจะมีฝูงชนจำนวนมากคืนนี้"
    },
    {
        "id": 233,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Convince_alt",
        "phonetic": "คอน-วินซ์",
        "th": "โน้มน้าว",
        "type": "Verb",
        "example_en": "You need to convince the board.",
        "example_th": "คุณต้องโน้มน้าวใจคณะกรรมการ"
    },
    {
        "id": 234,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Demonstrate",
        "phonetic": "เดม-มอน-สเตรท",
        "th": "สาธิต",
        "type": "Verb",
        "example_en": "Let me demonstrate how it works.",
        "example_th": "ให้ฉันสาธิตว่ามันทำงานอย่างไร"
    },
    {
        "id": 235,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Emphasize_alt",
        "phonetic": "เอ็ม-ฟะ-ไซซ์",
        "th": "เน้นย้ำ",
        "type": "Verb",
        "example_en": "I want to emphasize this point.",
        "example_th": "ฉันต้องการเน้นย้ำประเด็นนี้"
    },
    {
        "id": 236,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Establish",
        "phonetic": "เอส-แท็บ-ลิช",
        "th": "ก่อตั้ง/สร้าง",
        "type": "Verb",
        "example_en": "They established the company in 1990.",
        "example_th": "พวกเขาก่อตั้งบริษัทในปี 1990"
    },
    {
        "id": 237,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Evaluate",
        "phonetic": "อี-แวล-ลู-เอท",
        "th": "ประเมิน",
        "type": "Verb",
        "example_en": "We will evaluate the results later.",
        "example_th": "เราจะประเมินผลลัพธ์ในภายหลัง"
    },
    {
        "id": 238,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Explain_alt",
        "phonetic": "เอ็กซ์-เพลน",
        "th": "อธิบาย",
        "type": "Verb",
        "example_en": "Can you explain the process again?",
        "example_th": "คุณช่วยอธิบายกระบวนการอีกครั้งได้ไหม?"
    },
    {
        "id": 239,
        "category": "toeic_speaking",
        "level": 4,
        "en": "Gather",
        "phonetic": "แก-เธอร์",
        "th": "รวบรวม",
        "type": "Verb",
        "example_en": "We need to gather more information.",
        "example_th": "เราต้องรวบรวมข้อมูลเพิ่มเติม"
    },
    {
        "id": 240,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Indicate",
        "phonetic": "อิน-ดิ-เคท",
        "th": "ระบุ/แสดงให้เห็น",
        "type": "Verb",
        "example_en": "The data indicates a positive trend.",
        "example_th": "ข้อมูลแสดงให้เห็นถึงแนวโน้มเชิงบวก"
    },
    {
        "id": 241,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Inquire",
        "phonetic": "อิน-ไควร์",
        "th": "สอบถาม",
        "type": "Verb",
        "example_en": "I am calling to inquire about the vacancy.",
        "example_th": "ฉันโทรมาเพื่อสอบถามเกี่ยวกับตำแหน่งว่าง"
    },
    {
        "id": 242,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Maintain",
        "phonetic": "เมน-เทน",
        "th": "รักษา",
        "type": "Verb",
        "example_en": "Try to maintain eye contact.",
        "example_th": "พยายามสบตา"
    },
    {
        "id": 243,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Mention",
        "phonetic": "เมน-ชัน",
        "th": "กล่าวถึง",
        "type": "Verb",
        "example_en": "He mentioned your name earlier.",
        "example_th": "เขากล่าวถึงชื่อคุณก่อนหน้านี้"
    },
    {
        "id": 244,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Negotiate_alt",
        "phonetic": "นิ-โก-ชี-เอท",
        "th": "เจรจาต่อรอง",
        "type": "Verb",
        "example_en": "We can negotiate the price.",
        "example_th": "เราสามารถเจรจาเรื่องราคาได้"
    },
    {
        "id": 245,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Observe",
        "phonetic": "ออบ-เซิร์ฟ",
        "th": "สังเกต",
        "type": "Verb",
        "example_en": "Observe the patient carefully.",
        "example_th": "สังเกตผู้ป่วยอย่างระมัดระวัง"
    },
    {
        "id": 246,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Persuade_alt",
        "phonetic": "เพอร์-สเวด",
        "th": "โน้มน้าว",
        "type": "Verb",
        "example_en": "She persuaded him to stay.",
        "example_th": "เธอโน้มน้าวให้เขาอยู่ต่อ"
    },
    {
        "id": 247,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Propose",
        "phonetic": "โปร-โพส",
        "th": "เสนอ",
        "type": "Verb",
        "example_en": "I propose a toast to the bride.",
        "example_th": "ฉันขอเสนอให้ดื่มอวยพรแด่เจ้าสาว"
    },
    {
        "id": 248,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Suggest_alt",
        "phonetic": "ซัก-เจสท์",
        "th": "แนะนำ",
        "type": "Verb",
        "example_en": "I suggest we leave early.",
        "example_th": "ฉันแนะนำให้เราออกเดินทางแต่เช้า"
    },
    {
        "id": 249,
        "category": "toeic_speaking",
        "level": 5,
        "en": "Summarize_alt",
        "phonetic": "ซัม-มะ-ไรซ์",
        "th": "สรุป",
        "type": "Verb",
        "example_en": "Please summarize the main points.",
        "example_th": "โปรดสรุปประเด็นหลัก"
    },
    {
        "id": 250,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Adapt",
        "phonetic": "อะ-แดปท์",
        "th": "ปรับตัว",
        "type": "Verb",
        "example_en": "We must adapt to changing market conditions.",
        "example_th": "เราต้องปรับตัวให้เข้ากับสภาวะตลาดที่เปลี่ยนแปลง"
    },
    {
        "id": 251,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Benefit",
        "phonetic": "เบน-เน-ฟิท",
        "th": "ผลประโยชน์",
        "type": "Noun",
        "example_en": "The main benefit of this plan is cost savings.",
        "example_th": "ประโยชน์หลักของแผนนี้คือการประหยัดต้นทุน"
    },
    {
        "id": 252,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Conclude",
        "phonetic": "คอน-คลูด",
        "th": "สรุป",
        "type": "Verb",
        "example_en": "To conclude, we need more funding.",
        "example_th": "โดยสรุปแล้ว เราต้องการเงินทุนเพิ่มเติม"
    },
    {
        "id": 253,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Determine",
        "phonetic": "ดี-เทอร์-มิน",
        "th": "ตัดสินใจ/กำหนด",
        "type": "Verb",
        "example_en": "We need to determine the best approach.",
        "example_th": "เราจำเป็นต้องกำหนดแนวทางที่ดีที่สุด"
    },
    {
        "id": 254,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Essential",
        "phonetic": "เอส-เซน-เชียล",
        "th": "จำเป็นอย่างยิ่ง",
        "type": "Adjective",
        "example_en": "Teamwork is essential for success.",
        "example_th": "การทำงานเป็นทีมเป็นสิ่งจำเป็นอย่างยิ่งสำหรับความสำเร็จ"
    },
    {
        "id": 255,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Focus",
        "phonetic": "โฟ-คัส",
        "th": "มุ่งเน้น",
        "type": "Verb",
        "example_en": "We should focus on customer service.",
        "example_th": "เราควรมุ่งเน้นไปที่การบริการลูกค้า"
    },
    {
        "id": 256,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Guideline",
        "phonetic": "ไกด์-ไลน์",
        "th": "แนวทาง",
        "type": "Noun",
        "example_en": "Please follow the safety guidelines.",
        "example_th": "โปรดปฏิบัติตามแนวทางด้านความปลอดภัย"
    },
    {
        "id": 257,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Highlight",
        "phonetic": "ไฮ-ไลท์",
        "th": "เน้นให้เห็นชัด",
        "type": "Verb",
        "example_en": "I would like to highlight three main issues.",
        "example_th": "ฉันต้องการเน้นให้เห็นประเด็นหลักสามประการ"
    },
    {
        "id": 258,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Inform",
        "phonetic": "อิน-ฟอร์ม",
        "th": "แจ้งให้ทราบ",
        "type": "Verb",
        "example_en": "Please inform the staff about the meeting.",
        "example_th": "โปรดแจ้งให้พนักงานทราบเกี่ยวกับการประชุม"
    },
    {
        "id": 259,
        "category": "toeic_speaking",
        "level": 6,
        "en": "Justify",
        "phonetic": "จัส-ติ-ไฟ",
        "th": "อธิบายเหตุผล",
        "type": "Verb",
        "example_en": "Can you justify this expense?",
        "example_th": "คุณอธิบายเหตุผลของค่าใช้จ่ายนี้ได้ไหม?"
    },
    {
        "id": 260,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Knowledge",
        "phonetic": "นอล-เลจ",
        "th": "ความรู้",
        "type": "Noun",
        "example_en": "He has extensive knowledge of the subject.",
        "example_th": "เขามีความรู้อย่างกว้างขวางในเรื่องนี้"
    },
    {
        "id": 261,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Locate",
        "phonetic": "โล-เคท",
        "th": "ตั้งอยู่/หาตำแหน่ง",
        "type": "Verb",
        "example_en": "We are trying to locate the missing package.",
        "example_th": "เรากำลังพยายามค้นหาพัสดุที่หายไป"
    },
    {
        "id": 262,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Maximize",
        "phonetic": "แมก-ซิ-ไมซ์",
        "th": "ทำให้สูงสุด",
        "type": "Verb",
        "example_en": "Our goal is to maximize efficiency.",
        "example_th": "เป้าหมายของเราคือการทำให้ประสิทธิภาพสูงสุด"
    },
    {
        "id": 263,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Note",
        "phonetic": "โน้ท",
        "th": "สังเกต/จดจำ",
        "type": "Verb",
        "example_en": "Please note that the deadline has changed.",
        "example_th": "โปรดทราบว่ากำหนดส่งได้เปลี่ยนแปลงแล้ว"
    },
    {
        "id": 264,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Outline",
        "phonetic": "เอาท์-ไลน์",
        "th": "เค้าโครง/สรุปคร่าวๆ",
        "type": "Verb/Noun",
        "example_en": "I will outline the marketing strategy.",
        "example_th": "ฉันจะสรุปโครงร่างกลยุทธ์การตลาด"
    },
    {
        "id": 265,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Persuade_alt",
        "phonetic": "เพอร์-สเวด",
        "th": "โน้มน้าว",
        "type": "Verb",
        "example_en": "We need to persuade the client to sign.",
        "example_th": "เราต้องโน้มน้าวให้ลูกค้าเซ็นสัญญา"
    },
    {
        "id": 266,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Question",
        "phonetic": "เควส-ชัน",
        "th": "ตั้งคำถาม",
        "type": "Verb/Noun",
        "example_en": "I have a question about the budget.",
        "example_th": "ฉันมีคำถามเกี่ยวกับงบประมาณ"
    },
    {
        "id": 267,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Recognize",
        "phonetic": "เรค-คอก-ไนซ์",
        "th": "ตระหนัก/จดจำได้",
        "type": "Verb",
        "example_en": "We must recognize the importance of this task.",
        "example_th": "เราต้องตระหนักถึงความสำคัญของงานนี้"
    },
    {
        "id": 268,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Summarize_alt",
        "phonetic": "ซัม-มะ-ไรซ์",
        "th": "สรุป",
        "type": "Verb",
        "example_en": "Let me summarize what we discussed.",
        "example_th": "ให้ฉันสรุปสิ่งที่เราได้หารือกัน"
    },
    {
        "id": 269,
        "category": "toeic_speaking",
        "level": 7,
        "en": "Target",
        "phonetic": "ทาร์-เกท",
        "th": "เป้าหมาย",
        "type": "Noun",
        "example_en": "Our target audience is young adults.",
        "example_th": "กลุ่มเป้าหมายของเราคือคนหนุ่มสาว"
    },
    {
        "id": 270,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Understand",
        "phonetic": "อัน-เดอร์-สแตนด์",
        "th": "เข้าใจ",
        "type": "Verb",
        "example_en": "Do you understand the instructions?",
        "example_th": "คุณเข้าใจคำแนะนำไหม?"
    },
    {
        "id": 271,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Verify",
        "phonetic": "เว-ริ-ไฟ",
        "th": "ยืนยันความถูกต้อง",
        "type": "Verb",
        "example_en": "Can you verify these numbers?",
        "example_th": "คุณช่วยยืนยันตัวเลขเหล่านี้ได้ไหม?"
    },
    {
        "id": 272,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Welcome_alt",
        "phonetic": "เวล-คัม",
        "th": "ยินดีต้อนรับ",
        "type": "Verb",
        "example_en": "We welcome your suggestions.",
        "example_th": "เรายินดีรับข้อเสนอแนะของคุณ"
    },
    {
        "id": 273,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Yield",
        "phonetic": "ยิลด์",
        "th": "ยอมแพ้/ให้ผล",
        "type": "Verb",
        "example_en": "We will not yield to their demands.",
        "example_th": "เราจะไม่ยอมแพ้ต่อข้อเรียกร้องของพวกเขา"
    },
    {
        "id": 274,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Analyze",
        "phonetic": "แอน-นะ-ไลซ์",
        "th": "วิเคราะห์",
        "type": "Verb",
        "example_en": "Let's analyze the sales data.",
        "example_th": "มาวิเคราะห์ข้อมูลการขายกันเถอะ"
    },
    {
        "id": 275,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Brainstorm",
        "phonetic": "เบรน-สตอร์ม",
        "th": "ระดมสมอง",
        "type": "Verb",
        "example_en": "We need to brainstorm some new ideas.",
        "example_th": "เราจำเป็นต้องระดมสมองคิดไอเดียใหม่ๆ"
    },
    {
        "id": 276,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Clarify_alt",
        "phonetic": "แคล-ริ-ไฟ",
        "th": "อธิบายให้กระจ่าง",
        "type": "Verb",
        "example_en": "Could you clarify the last point?",
        "example_th": "คุณช่วยอธิบายประเด็นสุดท้ายให้กระจ่างได้ไหม?"
    },
    {
        "id": 277,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Demonstrate_alt",
        "phonetic": "เดม-มอน-สเตรท",
        "th": "แสดงให้เห็น",
        "type": "Verb",
        "example_en": "I will demonstrate how to use the software.",
        "example_th": "ฉันจะสาธิตวิธีใช้ซอฟต์แวร์"
    },
    {
        "id": 278,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Evaluate_alt",
        "phonetic": "อี-แวล-ลู-เอท",
        "th": "ประเมิน",
        "type": "Verb",
        "example_en": "We must evaluate all the options.",
        "example_th": "เราต้องประเมินทางเลือกทั้งหมด"
    },
    {
        "id": 279,
        "category": "toeic_speaking",
        "level": 8,
        "en": "Facilitate",
        "phonetic": "ฟา-ซิล-ลิ-เทท",
        "th": "ทำให้ง่ายขึ้น/อำนวยความสะดวก",
        "type": "Verb",
        "example_en": "I will facilitate the workshop tomorrow.",
        "example_th": "ฉันจะเป็นผู้อำนวยความสะดวกในการประชุมเชิงปฏิบัติการพรุ่งนี้"
    },
    {
        "id": 280,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Generate",
        "phonetic": "เจน-เนอ-เรท",
        "th": "สร้าง/ผลิต",
        "type": "Verb",
        "example_en": "The campaign should generate more leads.",
        "example_th": "แคมเปญควรจะสร้างลูกค้าเป้าหมายได้มากขึ้น"
    },
    {
        "id": 281,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Handle",
        "phonetic": "แฮน-เดิล",
        "th": "รับมือ/จัดการ",
        "type": "Verb",
        "example_en": "How should we handle this complaint?",
        "example_th": "เราควรรับมือกับข้อร้องเรียนนี้อย่างไร?"
    },
    {
        "id": 282,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Implement",
        "phonetic": "อิม-พลิ-เมนท์",
        "th": "นำไปปฏิบัติ",
        "type": "Verb",
        "example_en": "We plan to implement the changes next week.",
        "example_th": "เราวางแผนที่จะนำการเปลี่ยนแปลงไปใช้ในสัปดาห์หน้า"
    },
    {
        "id": 283,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Judge",
        "phonetic": "จัจ",
        "th": "ตัดสิน",
        "type": "Verb",
        "example_en": "It is hard to judge the outcome right now.",
        "example_th": "เป็นการยากที่จะตัดสินผลลัพธ์ในตอนนี้"
    },
    {
        "id": 284,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Keep",
        "phonetic": "คีพ",
        "th": "รักษาไว้",
        "type": "Verb",
        "example_en": "Please keep me updated on the progress.",
        "example_th": "โปรดแจ้งให้ฉันทราบถึงความคืบหน้า"
    },
    {
        "id": 285,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Lead",
        "phonetic": "ลีด",
        "th": "นำ/เป็นผู้นำ",
        "type": "Verb",
        "example_en": "Who will lead the project team?",
        "example_th": "ใครจะเป็นผู้นำทีมโครงการ?"
    },
    {
        "id": 286,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Manage",
        "phonetic": "แมน-เนจ",
        "th": "จัดการ",
        "type": "Verb",
        "example_en": "She manages a team of 10 people.",
        "example_th": "เธอจัดการทีมงาน 10 คน"
    },
    {
        "id": 287,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Negotiate_alt",
        "phonetic": "นิ-โก-ชี-เอท",
        "th": "เจรจา",
        "type": "Verb",
        "example_en": "We are currently negotiating the contract.",
        "example_th": "เรากำลังอยู่ในระหว่างการเจรจาสัญญา"
    },
    {
        "id": 288,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Organize",
        "phonetic": "ออร์-กา-ไนซ์",
        "th": "จัดระเบียบ/จัดเตรียม",
        "type": "Verb",
        "example_en": "I will organize the files.",
        "example_th": "ฉันจะจัดระเบียบไฟล์ต่างๆ"
    },
    {
        "id": 289,
        "category": "toeic_speaking",
        "level": 9,
        "en": "Present_alt",
        "phonetic": "พรี-เซนต์",
        "th": "นำเสนอ",
        "type": "Verb",
        "example_en": "I am ready to present my findings.",
        "example_th": "ฉันพร้อมที่จะนำเสนอผลการค้นพบของฉันแล้ว"
    },
    {
        "id": 290,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Quantify",
        "phonetic": "ควอน-ทิ-ไฟ",
        "th": "วัดปริมาณ",
        "type": "Verb",
        "example_en": "It is difficult to quantify the benefits.",
        "example_th": "เป็นการยากที่จะระบุจำนวนผลประโยชน์ออกมาเป็นตัวเลข"
    },
    {
        "id": 291,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Review",
        "phonetic": "รี-วิว",
        "th": "ทบทวน",
        "type": "Verb",
        "example_en": "Let's review the document together.",
        "example_th": "มาทบทวนเอกสารด้วยกันเถอะ"
    },
    {
        "id": 292,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Support",
        "phonetic": "ซัพ-พอร์ต",
        "th": "สนับสนุน",
        "type": "Verb",
        "example_en": "I fully support your decision.",
        "example_th": "ฉันสนับสนุนการตัดสินใจของคุณอย่างเต็มที่"
    },
    {
        "id": 293,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Tackle",
        "phonetic": "แทค-เคิล",
        "th": "รับมือกับ(ปัญหา)",
        "type": "Verb",
        "example_en": "We need to tackle this problem immediately.",
        "example_th": "เราจำเป็นต้องรับมือกับปัญหานี้ทันที"
    },
    {
        "id": 294,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Urge",
        "phonetic": "เอิร์จ",
        "th": "กระตุ้น/เร่งเร้า",
        "type": "Verb",
        "example_en": "I urge you to consider this option.",
        "example_th": "ฉันขอร้องให้คุณพิจารณาทางเลือกนี้"
    },
    {
        "id": 295,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Value",
        "phonetic": "แวล-ลู",
        "th": "ให้คุณค่า",
        "type": "Verb",
        "example_en": "We value your feedback.",
        "example_th": "เราให้คุณค่ากับความคิดเห็นของคุณ"
    },
    {
        "id": 296,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Weigh",
        "phonetic": "เวย์",
        "th": "ชั่งน้ำหนัก(พิจารณา)",
        "type": "Verb",
        "example_en": "We must weigh the pros and cons.",
        "example_th": "เราต้องชั่งน้ำหนักข้อดีข้อเสีย"
    },
    {
        "id": 297,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Examine",
        "phonetic": "เอ็ก-แซม-มิน",
        "th": "ตรวจสอบ",
        "type": "Verb",
        "example_en": "We will examine the issue closely.",
        "example_th": "เราจะตรวจสอบปัญหาอย่างใกล้ชิด"
    },
    {
        "id": 298,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Yield_alt",
        "phonetic": "ยิลด์",
        "th": "ยอมทำตาม",
        "type": "Verb",
        "example_en": "We cannot yield to pressure.",
        "example_th": "เราไม่สามารถยอมแพ้ต่อแรงกดดันได้"
    },
    {
        "id": 299,
        "category": "toeic_speaking",
        "level": 10,
        "en": "Zero",
        "phonetic": "ซี-โร",
        "th": "ศูนย์/ปรับศูนย์",
        "type": "Verb",
        "example_en": "Let's zero in on the main problem.",
        "example_th": "มาเจาะจงที่ปัญหาหลักกันเถอะ"
    },
    {
        "id": 300,
        "category": "toefl_listening",
        "level": 1,
        "en": "Lecture",
        "phonetic": "เลค-เชอร์",
        "th": "การบรรยาย",
        "type": "Noun",
        "example_en": "The professor gave a lecture on biology.",
        "example_th": "ศาสตราจารย์บรรยายวิชาชีววิทยา"
    },
    {
        "id": 301,
        "category": "toefl_listening",
        "level": 1,
        "en": "Professor",
        "phonetic": "โปร-เฟส-เซอร์",
        "th": "ศาสตราจารย์",
        "type": "Noun",
        "example_en": "Professor Smith is an expert in history.",
        "example_th": "ศาสตราจารย์สมิธเป็นผู้เชี่ยวชาญด้านประวัติศาสตร์"
    },
    {
        "id": 302,
        "category": "toefl_listening",
        "level": 1,
        "en": "Campus",
        "phonetic": "แคม-ปัส",
        "th": "วิทยาเขต",
        "type": "Noun",
        "example_en": "The new library is located on the main campus.",
        "example_th": "ห้องสมุดแห่งใหม่ตั้งอยู่ในวิทยาเขตหลัก"
    },
    {
        "id": 303,
        "category": "toefl_listening",
        "level": 1,
        "en": "Assignment",
        "phonetic": "แอส-ไซน์-เมนท์",
        "th": "งานที่ได้รับมอบหมาย",
        "type": "Noun",
        "example_en": "The assignment is due next Monday.",
        "example_th": "งานที่ได้รับมอบหมายมีกำหนดส่งในวันจันทร์หน้า"
    },
    {
        "id": 304,
        "category": "toefl_listening",
        "level": 1,
        "en": "Deadline",
        "phonetic": "เดด-ไลน์",
        "th": "กำหนดส่ง",
        "type": "Noun",
        "example_en": "Make sure you submit the paper before the deadline.",
        "example_th": "ตรวจสอบให้แน่ใจว่าคุณส่งรายงานก่อนกำหนด"
    },
    {
        "id": 305,
        "category": "toefl_listening",
        "level": 1,
        "en": "Library",
        "phonetic": "ไล-บรา-รี",
        "th": "ห้องสมุด",
        "type": "Noun",
        "example_en": "I spend most of my time studying in the library.",
        "example_th": "ฉันใช้เวลาส่วนใหญ่เรียนอยู่ในห้องสมุด"
    },
    {
        "id": 306,
        "category": "toefl_listening",
        "level": 1,
        "en": "Semester",
        "phonetic": "ซี-เมส-เตอร์",
        "th": "ภาคเรียน",
        "type": "Noun",
        "example_en": "We have three exams this semester.",
        "example_th": "เรามีการสอบสามครั้งในภาคเรียนนี้"
    },
    {
        "id": 307,
        "category": "toefl_listening",
        "level": 1,
        "en": "Credit",
        "phonetic": "เคร-ดิต",
        "th": "หน่วยกิต",
        "type": "Noun",
        "example_en": "This course is worth three academic credits.",
        "example_th": "หลักสูตรนี้มีค่าเท่ากับสามหน่วยกิตทางวิชาการ"
    },
    {
        "id": 308,
        "category": "toefl_listening",
        "level": 1,
        "en": "Enroll",
        "phonetic": "เอน-โรล",
        "th": "ลงทะเบียนเรียน",
        "type": "Verb",
        "example_en": "Over 500 students enrolled in this course.",
        "example_th": "มีนักเรียนลงทะเบียนเรียนหลักสูตรนี้กว่า 500 คน"
    },
    {
        "id": 309,
        "category": "toefl_listening",
        "level": 1,
        "en": "Syllabus",
        "phonetic": "ซิล-ละ-บัส",
        "th": "ประมวลรายวิชา",
        "type": "Noun",
        "example_en": "Please read the syllabus before the first class.",
        "example_th": "โปรดอ่านประมวลรายวิชาก่อนเข้าเรียนคาบแรก"
    },
    {
        "id": 310,
        "category": "toefl_listening",
        "level": 2,
        "en": "Experiment",
        "phonetic": "เอกซ์-เพอ-ริ-เมนท์",
        "th": "การทดลอง",
        "type": "Noun",
        "example_en": "The chemistry experiment was a success.",
        "example_th": "การทดลองทางเคมีประสบความสำเร็จ"
    },
    {
        "id": 311,
        "category": "toefl_listening",
        "level": 2,
        "en": "Theory",
        "phonetic": "เธีย-รี",
        "th": "ทฤษฎี",
        "type": "Noun",
        "example_en": "Darwin proposed the theory of evolution.",
        "example_th": "ดาร์วินเสนอทฤษฎีวิวัฒนาการ"
    },
    {
        "id": 312,
        "category": "toefl_listening",
        "level": 2,
        "en": "Hypothesis",
        "phonetic": "ไฮ-พอท-ธิ-ซิส",
        "th": "สมมติฐาน",
        "type": "Noun",
        "example_en": "We need more data to prove this hypothesis.",
        "example_th": "เราต้องการข้อมูลเพิ่มเติมเพื่อพิสูจน์สมมติฐานนี้"
    },
    {
        "id": 313,
        "category": "toefl_listening",
        "level": 2,
        "en": "Evidence",
        "phonetic": "เอฟ-วิ-เดนซ์",
        "th": "หลักฐาน",
        "type": "Noun",
        "example_en": "There is no scientific evidence to support this claim.",
        "example_th": "ไม่มีหลักฐานทางวิทยาศาสตร์มาสนับสนุนข้อกล่าวอ้างนี้"
    },
    {
        "id": 314,
        "category": "toefl_listening",
        "level": 2,
        "en": "Conclude",
        "phonetic": "คอน-คลูด",
        "th": "สรุป",
        "type": "Verb",
        "example_en": "The study concluded that the drug is safe.",
        "example_th": "การศึกษาสรุปว่ายาชนิดนี้มีความปลอดภัย"
    },
    {
        "id": 315,
        "category": "toefl_listening",
        "level": 2,
        "en": "Observe",
        "phonetic": "ออบ-เซิร์ฟ",
        "th": "สังเกต",
        "type": "Verb",
        "example_en": "We must carefully observe the changes in temperature.",
        "example_th": "เราต้องสังเกตการเปลี่ยนแปลงของอุณหภูมิอย่างระมัดระวัง"
    },
    {
        "id": 316,
        "category": "toefl_listening",
        "level": 2,
        "en": "Phenomenon",
        "phonetic": "ฟิ-นอม-มิ-นอน",
        "th": "ปรากฏการณ์",
        "type": "Noun",
        "example_en": "Eclipses are a rare natural phenomenon.",
        "example_th": "สุริยุปราคาเป็นปรากฏการณ์ทางธรรมชาติที่หาดูได้ยาก"
    },
    {
        "id": 317,
        "category": "toefl_listening",
        "level": 2,
        "en": "Concept",
        "phonetic": "คอน-เซปท์",
        "th": "แนวคิด",
        "type": "Noun",
        "example_en": "Gravity is a fundamental concept in physics.",
        "example_th": "แรงโน้มถ่วงเป็นแนวคิดพื้นฐานทางฟิสิกส์"
    },
    {
        "id": 318,
        "category": "toefl_listening",
        "level": 2,
        "en": "Identify",
        "phonetic": "ไอ-เดน-ทิ-ไฟ",
        "th": "ระบุ",
        "type": "Verb",
        "example_en": "Can you identify the main cause of the problem?",
        "example_th": "คุณช่วยระบุสาเหตุหลักของปัญหาได้ไหม?"
    },
    {
        "id": 319,
        "category": "toefl_listening",
        "level": 2,
        "en": "Explain",
        "phonetic": "เอ็กซ์-เพลน",
        "th": "อธิบาย",
        "type": "Verb",
        "example_en": "The professor asked the student to explain the answer.",
        "example_th": "ศาสตราจารย์ขอให้นักเรียนอธิบายคำตอบ"
    },
    {
        "id": 320,
        "category": "toefl_listening",
        "level": 3,
        "en": "Research",
        "phonetic": "รี-เสิร์ช",
        "th": "การวิจัย",
        "type": "Noun/Verb",
        "example_en": "The research took three years to complete.",
        "example_th": "การวิจัยใช้เวลาสามปีจึงจะเสร็จสมบูรณ์"
    },
    {
        "id": 321,
        "category": "toefl_listening",
        "level": 3,
        "en": "Journal",
        "phonetic": "เจอร์-นัล",
        "th": "วารสาร",
        "type": "Noun",
        "example_en": "The study was published in a medical journal.",
        "example_th": "การศึกษานี้ได้รับการตีพิมพ์ในวารสารทางการแพทย์"
    },
    {
        "id": 322,
        "category": "toefl_listening",
        "level": 3,
        "en": "Article",
        "phonetic": "อาร์-ทิ-เคิล",
        "th": "บทความ",
        "type": "Noun",
        "example_en": "Read the first article for homework.",
        "example_th": "อ่านบทความแรกเป็นการบ้าน"
    },
    {
        "id": 323,
        "category": "toefl_listening",
        "level": 3,
        "en": "Discuss",
        "phonetic": "ดิส-คัส",
        "th": "อภิปราย",
        "type": "Verb",
        "example_en": "Today we will discuss global warming.",
        "example_th": "วันนี้เราจะหารือเกี่ยวกับภาวะโลกร้อน"
    },
    {
        "id": 324,
        "category": "toefl_listening",
        "level": 3,
        "en": "Examine",
        "phonetic": "เอ็ก-ซาม-มิน",
        "th": "ตรวจสอบ",
        "type": "Verb",
        "example_en": "We need to examine the evidence closely.",
        "example_th": "เราต้องตรวจสอบหลักฐานอย่างใกล้ชิด"
    },
    {
        "id": 325,
        "category": "toefl_listening",
        "level": 3,
        "en": "Observe_alt",
        "phonetic": "ออบ-เซิร์ฟ",
        "th": "สังเกต",
        "type": "Verb",
        "example_en": "Students will observe the chemical reaction.",
        "example_th": "นักเรียนจะสังเกตปฏิกิริยาทางเคมี"
    },
    {
        "id": 326,
        "category": "toefl_listening",
        "level": 3,
        "en": "Method",
        "phonetic": "เมธ-ธอด",
        "th": "วิธีการ",
        "type": "Noun",
        "example_en": "The scientific method requires careful testing.",
        "example_th": "วิธีการทางวิทยาศาสตร์ต้องอาศัยการทดสอบอย่างระมัดระวัง"
    },
    {
        "id": 327,
        "category": "toefl_listening",
        "level": 3,
        "en": "Data",
        "phonetic": "เด-ต้า",
        "th": "ข้อมูล",
        "type": "Noun",
        "example_en": "The data supports our hypothesis.",
        "example_th": "ข้อมูลสนับสนุนสมมติฐานของเรา"
    },
    {
        "id": 328,
        "category": "toefl_listening",
        "level": 3,
        "en": "Survey",
        "phonetic": "เซอร์-เวย์",
        "th": "การสำรวจ",
        "type": "Noun/Verb",
        "example_en": "A recent survey shows interesting results.",
        "example_th": "การสำรวจล่าสุดแสดงให้เห็นผลลัพธ์ที่น่าสนใจ"
    },
    {
        "id": 329,
        "category": "toefl_listening",
        "level": 3,
        "en": "Participant",
        "phonetic": "พาร์-ทิ-ซิ-เพนท์",
        "th": "ผู้เข้าร่วม",
        "type": "Noun",
        "example_en": "There were 100 participants in the study.",
        "example_th": "มีผู้เข้าร่วมในการศึกษา 100 คน"
    },
    {
        "id": 330,
        "category": "toefl_listening",
        "level": 4,
        "en": "Academic",
        "phonetic": "อะ-แค-เด-มิค",
        "th": "ทางวิชาการ",
        "type": "Adjective",
        "example_en": "He wrote an academic paper on history.",
        "example_th": "เขาเขียนบทความทางวิชาการเกี่ยวกับประวัติศาสตร์"
    },
    {
        "id": 331,
        "category": "toefl_listening",
        "level": 4,
        "en": "Analyze",
        "phonetic": "แอน-นะ-ไลซ์",
        "th": "วิเคราะห์",
        "type": "Verb",
        "example_en": "Analyze the data thoroughly.",
        "example_th": "วิเคราะห์ข้อมูลอย่างถี่ถ้วน"
    },
    {
        "id": 332,
        "category": "toefl_listening",
        "level": 4,
        "en": "Assignment_alt",
        "phonetic": "แอส-ไซน์-เมนท์",
        "th": "งานที่มอบหมาย",
        "type": "Noun",
        "example_en": "The assignment is due next week.",
        "example_th": "งานที่ได้รับมอบหมายมีกำหนดส่งในสัปดาห์หน้า"
    },
    {
        "id": 333,
        "category": "toefl_listening",
        "level": 4,
        "en": "Campus_alt",
        "phonetic": "แคม-ปัส",
        "th": "วิทยาเขต",
        "type": "Noun",
        "example_en": "I live off campus this year.",
        "example_th": "ปีนี้ฉันอาศัยอยู่นอกวิทยาเขต"
    },
    {
        "id": 334,
        "category": "toefl_listening",
        "level": 4,
        "en": "Concept_alt",
        "phonetic": "คอน-เซปท์",
        "th": "แนวคิด",
        "type": "Noun",
        "example_en": "This is a difficult concept to grasp.",
        "example_th": "นี่เป็นแนวคิดที่ยากจะเข้าใจ"
    },
    {
        "id": 335,
        "category": "toefl_listening",
        "level": 4,
        "en": "Credit_alt",
        "phonetic": "เคร-ดิต",
        "th": "หน่วยกิต",
        "type": "Noun",
        "example_en": "You need 120 credits to graduate.",
        "example_th": "คุณต้องมี 120 หน่วยกิตเพื่อจบการศึกษา"
    },
    {
        "id": 336,
        "category": "toefl_listening",
        "level": 4,
        "en": "Curriculum",
        "phonetic": "เคอ-ริค-คิว-ลัม",
        "th": "หลักสูตร",
        "type": "Noun",
        "example_en": "Math is part of the core curriculum.",
        "example_th": "คณิตศาสตร์เป็นส่วนหนึ่งของหลักสูตรแกนกลาง"
    },
    {
        "id": 337,
        "category": "toefl_listening",
        "level": 4,
        "en": "Enroll_alt",
        "phonetic": "เอน-โรล",
        "th": "ลงทะเบียนเรียน",
        "type": "Verb",
        "example_en": "How many students enrolled this semester?",
        "example_th": "ภาคเรียนนี้มีนักเรียนลงทะเบียนกี่คน?"
    },
    {
        "id": 338,
        "category": "toefl_listening",
        "level": 4,
        "en": "Evaluate",
        "phonetic": "อี-แวล-ลู-เอท",
        "th": "ประเมินผล",
        "type": "Verb",
        "example_en": "Professors evaluate student performance.",
        "example_th": "ศาสตราจารย์ประเมินผลการเรียนของนักเรียน"
    },
    {
        "id": 339,
        "category": "toefl_listening",
        "level": 4,
        "en": "Faculty",
        "phonetic": "แฟค-คัล-ตี",
        "th": "คณาจารย์/คณะ",
        "type": "Noun",
        "example_en": "The faculty members are highly qualified.",
        "example_th": "คณาจารย์มีคุณสมบัติสูงมาก"
    },
    {
        "id": 340,
        "category": "toefl_listening",
        "level": 5,
        "en": "Hypothesis_alt",
        "phonetic": "ไฮ-พอท-ธิ-ซิส",
        "th": "สมมติฐาน",
        "type": "Noun",
        "example_en": "The experiment proved his hypothesis.",
        "example_th": "การทดลองพิสูจน์สมมติฐานของเขา"
    },
    {
        "id": 341,
        "category": "toefl_listening",
        "level": 5,
        "en": "Lecture_alt",
        "phonetic": "เลค-เชอร์",
        "th": "การบรรยาย",
        "type": "Noun/Verb",
        "example_en": "The lecture was very informative.",
        "example_th": "การบรรยายมีประโยชน์มาก"
    },
    {
        "id": 342,
        "category": "toefl_listening",
        "level": 5,
        "en": "Literature",
        "phonetic": "ลิท-เทอ-เร-เชอร์",
        "th": "วรรณกรรม",
        "type": "Noun",
        "example_en": "She studies English literature.",
        "example_th": "เธอเรียนวรรณคดีอังกฤษ"
    },
    {
        "id": 343,
        "category": "toefl_listening",
        "level": 5,
        "en": "Methodology",
        "phonetic": "เมธ-ธอด-ดอล-ลอ-จี",
        "th": "ระเบียบวิธี",
        "type": "Noun",
        "example_en": "The methodology used is flawed.",
        "example_th": "ระเบียบวิธีที่ใช้นั้นมีข้อบกพร่อง"
    },
    {
        "id": 344,
        "category": "toefl_listening",
        "level": 5,
        "en": "Objective",
        "phonetic": "ออบ-เจค-ทิฟ",
        "th": "ปรนัย/วัตถุประสงค์",
        "type": "Adjective/Noun",
        "example_en": "The test consists of objective questions.",
        "example_th": "แบบทดสอบประกอบด้วยคำถามแบบปรนัย"
    },
    {
        "id": 345,
        "category": "toefl_listening",
        "level": 5,
        "en": "Paragraph",
        "phonetic": "พา-รา-กราฟ",
        "th": "ย่อหน้า",
        "type": "Noun",
        "example_en": "Read the first paragraph carefully.",
        "example_th": "อ่านย่อหน้าแรกอย่างระมัดระวัง"
    },
    {
        "id": 346,
        "category": "toefl_listening",
        "level": 5,
        "en": "Plagiarism",
        "phonetic": "เพล-เจีย-ริส-ซึม",
        "th": "การคัดลอกผลงาน",
        "type": "Noun",
        "example_en": "Plagiarism is a serious academic offense.",
        "example_th": "การคัดลอกผลงานเป็นความผิดทางวิชาการที่ร้ายแรง"
    },
    {
        "id": 347,
        "category": "toefl_listening",
        "level": 5,
        "en": "Prerequisite",
        "phonetic": "พรี-เรค-ควิ-ซิท",
        "th": "วิชาบังคับก่อน",
        "type": "Noun",
        "example_en": "Biology 101 is a prerequisite.",
        "example_th": "ชีววิทยา 101 เป็นวิชาบังคับก่อน"
    },
    {
        "id": 348,
        "category": "toefl_listening",
        "level": 5,
        "en": "Scholarship",
        "phonetic": "สคอล-ลาร์-ชิป",
        "th": "ทุนการศึกษา",
        "type": "Noun",
        "example_en": "He won a scholarship to Harvard.",
        "example_th": "เขาได้รับทุนการศึกษาไปเรียนที่ฮาร์วาร์ด"
    },
    {
        "id": 349,
        "category": "toefl_listening",
        "level": 5,
        "en": "Semester_alt",
        "phonetic": "ซี-เมส-เตอร์",
        "th": "ภาคการศึกษา",
        "type": "Noun",
        "example_en": "The fall semester begins in September.",
        "example_th": "ภาคเรียนฤดูใบไม้ร่วงเริ่มในเดือนกันยายน"
    },
    {
        "id": 350,
        "category": "toefl_listening",
        "level": 6,
        "en": "Astronomy",
        "phonetic": "แอส-ตรอ-โน-มี",
        "th": "ดาราศาสตร์",
        "type": "Noun",
        "example_en": "The lecture on astronomy was fascinating.",
        "example_th": "การบรรยายเรื่องดาราศาสตร์น่าสนใจมาก"
    },
    {
        "id": 351,
        "category": "toefl_listening",
        "level": 6,
        "en": "Biology",
        "phonetic": "ไบ-ออล-โล-จี",
        "th": "ชีววิทยา",
        "type": "Noun",
        "example_en": "She is majoring in marine biology.",
        "example_th": "เธอเรียนวิชาเอกชีววิทยาทางทะเล"
    },
    {
        "id": 352,
        "category": "toefl_listening",
        "level": 6,
        "en": "Chemistry",
        "phonetic": "เค-มิส-ทรี",
        "th": "เคมี",
        "type": "Noun",
        "example_en": "The chemistry lab is on the second floor.",
        "example_th": "ห้องปฏิบัติการเคมีอยู่บนชั้นสอง"
    },
    {
        "id": 353,
        "category": "toefl_listening",
        "level": 6,
        "en": "Documentary",
        "phonetic": "ดอค-คิว-เมน-ทา-รี",
        "th": "สารคดี",
        "type": "Noun",
        "example_en": "We watched a documentary about climate change.",
        "example_th": "เราดูสารคดีเกี่ยวกับการเปลี่ยนแปลงสภาพภูมิอากาศ"
    },
    {
        "id": 354,
        "category": "toefl_listening",
        "level": 6,
        "en": "Ecology",
        "phonetic": "อี-คอล-โล-จี",
        "th": "นิเวศวิทยา",
        "type": "Noun",
        "example_en": "Ecology studies how organisms interact.",
        "example_th": "นิเวศวิทยาศึกษาว่าสิ่งมีชีวิตมีปฏิสัมพันธ์กันอย่างไร"
    },
    {
        "id": 355,
        "category": "toefl_listening",
        "level": 6,
        "en": "Fossil",
        "phonetic": "ฟอส-ซิล",
        "th": "ฟอสซิล/ซากดึกดำบรรพ์",
        "type": "Noun",
        "example_en": "They found a dinosaur fossil in the desert.",
        "example_th": "พวกเขาพบซากฟอสซิลไดโนเสาร์ในทะเลทราย"
    },
    {
        "id": 356,
        "category": "toefl_listening",
        "level": 6,
        "en": "Geology",
        "phonetic": "จี-ออล-โล-จี",
        "th": "ธรณีวิทยา",
        "type": "Noun",
        "example_en": "Geology is the study of the Earth.",
        "example_th": "ธรณีวิทยาคือการศึกษาเกี่ยวกับโลก"
    },
    {
        "id": 357,
        "category": "toefl_listening",
        "level": 6,
        "en": "Habitat",
        "phonetic": "แฮบ-บิ-แทท",
        "th": "ถิ่นที่อยู่",
        "type": "Noun",
        "example_en": "The destruction of their natural habitat is a problem.",
        "example_th": "การทำลายถิ่นที่อยู่ตามธรรมชาติของพวกมันเป็นปัญหา"
    },
    {
        "id": 358,
        "category": "toefl_listening",
        "level": 6,
        "en": "Institution",
        "phonetic": "อิน-สติ-ทิว-ชัน",
        "th": "สถาบัน",
        "type": "Noun",
        "example_en": "Harvard is a prestigious academic institution.",
        "example_th": "ฮาร์วาร์ดเป็นสถาบันการศึกษาที่มีชื่อเสียง"
    },
    {
        "id": 359,
        "category": "toefl_listening",
        "level": 6,
        "en": "Journalism",
        "phonetic": "เจอร์-นัล-ลิส-ซึม",
        "th": "วารสารศาสตร์",
        "type": "Noun",
        "example_en": "He is studying journalism at university.",
        "example_th": "เขากำลังศึกษาวารสารศาสตร์ที่มหาวิทยาลัย"
    },
    {
        "id": 360,
        "category": "toefl_listening",
        "level": 7,
        "en": "Kinetic",
        "phonetic": "คิ-เน-ติค",
        "th": "จลน์(เกี่ยวกับพลังงานการเคลื่อนที่)",
        "type": "Adjective",
        "example_en": "The professor explained kinetic energy.",
        "example_th": "ศาสตราจารย์อธิบายเรื่องพลังงานจลน์"
    },
    {
        "id": 361,
        "category": "toefl_listening",
        "level": 7,
        "en": "Linguistics",
        "phonetic": "ลิง-กวิส-ติคส์",
        "th": "ภาษาศาสตร์",
        "type": "Noun",
        "example_en": "Linguistics is the scientific study of language.",
        "example_th": "ภาษาศาสตร์คือการศึกษาภาษาในเชิงวิทยาศาสตร์"
    },
    {
        "id": 362,
        "category": "toefl_listening",
        "level": 7,
        "en": "Meteorology",
        "phonetic": "มี-ที-ออ-รอล-โล-จี",
        "th": "อุตุนิยมวิทยา",
        "type": "Noun",
        "example_en": "Meteorology helps us predict the weather.",
        "example_th": "อุตุนิยมวิทยาช่วยให้เราพยากรณ์อากาศได้"
    },
    {
        "id": 363,
        "category": "toefl_listening",
        "level": 7,
        "en": "Neanderthal",
        "phonetic": "นี-แอน-เดอร์-ธัล",
        "th": "มนุษย์นีแอนเดอร์ทัล",
        "type": "Noun",
        "example_en": "Neanderthals lived in Europe long ago.",
        "example_th": "มนุษย์นีแอนเดอร์ทัลเคยอาศัยอยู่ในยุโรปเมื่อนานมาแล้ว"
    },
    {
        "id": 364,
        "category": "toefl_listening",
        "level": 7,
        "en": "Organism",
        "phonetic": "ออร์-กา-นิส-ซึม",
        "th": "สิ่งมีชีวิต",
        "type": "Noun",
        "example_en": "Microscopic organisms are found in water.",
        "example_th": "พบสิ่งมีชีวิตขนาดเล็กในน้ำ"
    },
    {
        "id": 365,
        "category": "toefl_listening",
        "level": 7,
        "en": "Psychology",
        "phonetic": "ไซ-คอล-โล-จี",
        "th": "จิตวิทยา",
        "type": "Noun",
        "example_en": "Psychology studies the human mind and behavior.",
        "example_th": "จิตวิทยาศึกษาจิตใจและพฤติกรรมของมนุษย์"
    },
    {
        "id": 366,
        "category": "toefl_listening",
        "level": 7,
        "en": "Quotient",
        "phonetic": "โคว-เชียนท์",
        "th": "ผลหาร/ระดับ(เช่น IQ)",
        "type": "Noun",
        "example_en": "Intelligence quotient is commonly known as IQ.",
        "example_th": "Intelligence quotient เป็นที่รู้จักกันทั่วไปในชื่อ IQ"
    },
    {
        "id": 367,
        "category": "toefl_listening",
        "level": 7,
        "en": "Radiation",
        "phonetic": "เร-ดิ-เอ-ชัน",
        "th": "การแผ่รังสี",
        "type": "Noun",
        "example_en": "Exposure to high levels of radiation is dangerous.",
        "example_th": "การสัมผัสกับรังสีในระดับสูงเป็นอันตราย"
    },
    {
        "id": 368,
        "category": "toefl_listening",
        "level": 7,
        "en": "Sociology",
        "phonetic": "โซ-ซิ-ออล-โล-จี",
        "th": "สังคมวิทยา",
        "type": "Noun",
        "example_en": "Sociology focuses on human social relationships.",
        "example_th": "สังคมวิทยามุ่งเน้นไปที่ความสัมพันธ์ทางสังคมของมนุษย์"
    },
    {
        "id": 369,
        "category": "toefl_listening",
        "level": 7,
        "en": "Tectonic",
        "phonetic": "เทค-ทอน-นิค",
        "th": "เกี่ยวกับการแปรสัณฐานเปลือกโลก",
        "type": "Adjective",
        "example_en": "Earthquakes are caused by tectonic plate movement.",
        "example_th": "แผ่นดินไหวเกิดจากการเคลื่อนตัวของแผ่นเปลือกโลก"
    },
    {
        "id": 370,
        "category": "toefl_listening",
        "level": 8,
        "en": "Universe",
        "phonetic": "ยู-นิ-เวิร์ส",
        "th": "จักรวาล",
        "type": "Noun",
        "example_en": "The universe is constantly expanding.",
        "example_th": "จักรวาลกำลังขยายตัวอย่างต่อเนื่อง"
    },
    {
        "id": 371,
        "category": "toefl_listening",
        "level": 8,
        "en": "Volcano",
        "phonetic": "โวล-เค-โน",
        "th": "ภูเขาไฟ",
        "type": "Noun",
        "example_en": "The volcano erupted last night.",
        "example_th": "ภูเขาไฟปะทุเมื่อคืนนี้"
    },
    {
        "id": 372,
        "category": "toefl_listening",
        "level": 8,
        "en": "Zoology",
        "phonetic": "ซู-ออล-โล-จี",
        "th": "สัตววิทยา",
        "type": "Noun",
        "example_en": "Zoology is the scientific study of animals.",
        "example_th": "สัตววิทยาคือการศึกษาสัตว์ในเชิงวิทยาศาสตร์"
    },
    {
        "id": 373,
        "category": "toefl_listening",
        "level": 8,
        "en": "Abstract",
        "phonetic": "แอ็บ-สแทรคท์",
        "th": "บทคัดย่อ/นามธรรม",
        "type": "Noun/Adjective",
        "example_en": "Read the abstract before the full article.",
        "example_th": "อ่านบทคัดย่อก่อนอ่านบทความเต็ม"
    },
    {
        "id": 374,
        "category": "toefl_listening",
        "level": 8,
        "en": "Botany",
        "phonetic": "บอท-ทา-นี",
        "th": "พฤกษศาสตร์",
        "type": "Noun",
        "example_en": "Botany is a branch of biology focusing on plants.",
        "example_th": "พฤกษศาสตร์เป็นสาขาหนึ่งของชีววิทยาที่เน้นเรื่องพืช"
    },
    {
        "id": 375,
        "category": "toefl_listening",
        "level": 8,
        "en": "Chronological",
        "phonetic": "โคร-โน-ลอ-จิ-คัล",
        "th": "ตามลำดับเวลา",
        "type": "Adjective",
        "example_en": "The events are listed in chronological order.",
        "example_th": "เหตุการณ์ต่างๆ ถูกแสดงตามลำดับเวลา"
    },
    {
        "id": 376,
        "category": "toefl_listening",
        "level": 8,
        "en": "Deduce",
        "phonetic": "ดี-ดิวส์",
        "th": "สรุปจากหลักฐาน",
        "type": "Verb",
        "example_en": "We can deduce the age of the tree from its rings.",
        "example_th": "เราสามารถอนุมานอายุของต้นไม้ได้จากวงปีของมัน"
    },
    {
        "id": 377,
        "category": "toefl_listening",
        "level": 8,
        "en": "Empirical",
        "phonetic": "เอ็ม-พิ-ริ-คัล",
        "th": "เชิงประจักษ์/จากการทดลอง",
        "type": "Adjective",
        "example_en": "There is no empirical evidence to support this.",
        "example_th": "ไม่มีหลักฐานเชิงประจักษ์ใดมารองรับเรื่องนี้"
    },
    {
        "id": 378,
        "category": "toefl_listening",
        "level": 8,
        "en": "Fluctuation",
        "phonetic": "ฟลัค-ชู-เอ-ชัน",
        "th": "ความผันผวน",
        "type": "Noun",
        "example_en": "There is a natural fluctuation in temperature.",
        "example_th": "มีความผันผวนของอุณหภูมิตามธรรมชาติ"
    },
    {
        "id": 379,
        "category": "toefl_listening",
        "level": 8,
        "en": "Genetics",
        "phonetic": "เจ-เน-ติคส์",
        "th": "พันธุศาสตร์",
        "type": "Noun",
        "example_en": "Genetics plays a role in many diseases.",
        "example_th": "พันธุศาสตร์มีบทบาทในหลายโรค"
    },
    {
        "id": 380,
        "category": "toefl_listening",
        "level": 9,
        "en": "Herbivore",
        "phonetic": "เฮอร์-บิ-วอร์",
        "th": "สัตว์กินพืช",
        "type": "Noun",
        "example_en": "Cows and horses are herbivores.",
        "example_th": "วัวและม้าเป็นสัตว์กินพืช"
    },
    {
        "id": 381,
        "category": "toefl_listening",
        "level": 9,
        "en": "Implication",
        "phonetic": "อิม-พลิ-เค-ชัน",
        "th": "ความหมายแฝง/ผลที่ตามมา",
        "type": "Noun",
        "example_en": "What are the implications of this discovery?",
        "example_th": "ผลกระทบจากการค้นพบนี้คืออะไร?"
    },
    {
        "id": 382,
        "category": "toefl_listening",
        "level": 9,
        "en": "Justification",
        "phonetic": "จัส-ติ-ฟิ-เค-ชัน",
        "th": "การให้เหตุผล",
        "type": "Noun",
        "example_en": "There is no justification for his actions.",
        "example_th": "ไม่มีข้อแก้ตัวใดๆ สำหรับการกระทำของเขา"
    },
    {
        "id": 383,
        "category": "toefl_listening",
        "level": 9,
        "en": "Kinetics",
        "phonetic": "คิ-เน-ติคส์",
        "th": "จลนศาสตร์",
        "type": "Noun",
        "example_en": "We studied the kinetics of chemical reactions.",
        "example_th": "เราศึกษาจลนศาสตร์ของปฏิกิริยาเคมี"
    },
    {
        "id": 384,
        "category": "toefl_listening",
        "level": 9,
        "en": "Lunar",
        "phonetic": "ลู-นาร์",
        "th": "เกี่ยวกับดวงจันทร์",
        "type": "Adjective",
        "example_en": "A lunar eclipse occurs when the Earth blocks the sun.",
        "example_th": "จันทรุปราคาเกิดขึ้นเมื่อโลกบังดวงอาทิตย์"
    },
    {
        "id": 385,
        "category": "toefl_listening",
        "level": 9,
        "en": "Migration",
        "phonetic": "ไม-เกร-ชัน",
        "th": "การอพยพ",
        "type": "Noun",
        "example_en": "Bird migration happens every autumn.",
        "example_th": "การอพยพของนกเกิดขึ้นทุกฤดูใบไม้ร่วง"
    },
    {
        "id": 386,
        "category": "toefl_listening",
        "level": 9,
        "en": "Nutrient",
        "phonetic": "นิว-เทรียนท์",
        "th": "สารอาหาร",
        "type": "Noun",
        "example_en": "Plants absorb nutrients from the soil.",
        "example_th": "พืชดูดซับสารอาหารจากดิน"
    },
    {
        "id": 387,
        "category": "toefl_listening",
        "level": 9,
        "en": "Observation",
        "phonetic": "ออบ-เซิร์ฟ-เว-ชัน",
        "th": "การสังเกตการณ์",
        "type": "Noun",
        "example_en": "Careful observation is key to science.",
        "example_th": "การสังเกตอย่างระมัดระวังเป็นกุญแจสำคัญของวิทยาศาสตร์"
    },
    {
        "id": 388,
        "category": "toefl_listening",
        "level": 9,
        "en": "Predator",
        "phonetic": "พรี-เด-เตอร์",
        "th": "สัตว์นักล่า",
        "type": "Noun",
        "example_en": "Lions are apex predators.",
        "example_th": "สิงโตเป็นนักล่าจุดสูงสุด"
    },
    {
        "id": 389,
        "category": "toefl_listening",
        "level": 9,
        "en": "Quantitative",
        "phonetic": "ควอน-ทิ-เท-ทิฟ",
        "th": "เชิงปริมาณ",
        "type": "Adjective",
        "example_en": "The study uses quantitative research methods.",
        "example_th": "การศึกษาใช้วิธีการวิจัยเชิงปริมาณ"
    },
    {
        "id": 390,
        "category": "toefl_listening",
        "level": 10,
        "en": "Reptile",
        "phonetic": "เรป-ไทล์",
        "th": "สัตว์เลื้อยคลาน",
        "type": "Noun",
        "example_en": "Snakes and lizards are reptiles.",
        "example_th": "งูและกิ้งก่าเป็นสัตว์เลื้อยคลาน"
    },
    {
        "id": 391,
        "category": "toefl_listening",
        "level": 10,
        "en": "Species",
        "phonetic": "สปี-ชีส์",
        "th": "สายพันธุ์",
        "type": "Noun",
        "example_en": "There are thousands of species of spiders.",
        "example_th": "มีแมงมุมหลายพันสายพันธุ์"
    },
    {
        "id": 392,
        "category": "toefl_listening",
        "level": 10,
        "en": "Thermodynamics",
        "phonetic": "เธอร์-โม-ได-นาม-มิคส์",
        "th": "อุณหพลศาสตร์",
        "type": "Noun",
        "example_en": "The second law of thermodynamics is complex.",
        "example_th": "กฎข้อที่สองของอุณหพลศาสตร์มีความซับซ้อน"
    },
    {
        "id": 393,
        "category": "toefl_listening",
        "level": 10,
        "en": "Unprecedented",
        "phonetic": "อัน-พรี-เซ-เดนท์-เท็ด",
        "th": "ไม่เคยเกิดขึ้นมาก่อน",
        "type": "Adjective",
        "example_en": "This level of growth is unprecedented.",
        "example_th": "ระดับการเติบโตนี้ไม่เคยมีมาก่อน"
    },
    {
        "id": 394,
        "category": "toefl_listening",
        "level": 10,
        "en": "Variable",
        "phonetic": "แว-ริ-อะ-เบิล",
        "th": "ตัวแปร",
        "type": "Noun",
        "example_en": "Temperature is a key variable in this experiment.",
        "example_th": "อุณหภูมิเป็นตัวแปรสำคัญในการทดลองนี้"
    },
    {
        "id": 395,
        "category": "toefl_listening",
        "level": 10,
        "en": "Wavelength",
        "phonetic": "เวฟ-เลงธ์",
        "th": "ความยาวคลื่น",
        "type": "Noun",
        "example_en": "Red light has a longer wavelength than blue light.",
        "example_th": "แสงสีแดงมีความยาวคลื่นมากกว่าแสงสีน้ำเงิน"
    },
    {
        "id": 396,
        "category": "toefl_listening",
        "level": 10,
        "en": "X-ray",
        "phonetic": "เอกซ์-เรย์",
        "th": "รังสีเอกซ์",
        "type": "Noun",
        "example_en": "X-rays are used to see inside the body.",
        "example_th": "รังสีเอกซ์ใช้เพื่อดูภายในร่างกาย"
    },
    {
        "id": 397,
        "category": "toefl_listening",
        "level": 10,
        "en": "Yield",
        "phonetic": "ยิลด์",
        "th": "ผลผลิต(ทางการเกษตร)",
        "type": "Noun",
        "example_en": "The crop yield was lower than expected.",
        "example_th": "ผลผลิตทางการเกษตรต่ำกว่าที่คาดไว้"
    },
    {
        "id": 398,
        "category": "toefl_listening",
        "level": 10,
        "en": "Zone",
        "phonetic": "โซน",
        "th": "เขต/พื้นที่",
        "type": "Noun",
        "example_en": "The area is a protected ecological zone.",
        "example_th": "พื้นที่นี้เป็นเขตนิเวศวิทยาที่ได้รับการคุ้มครอง"
    },
    {
        "id": 399,
        "category": "toefl_listening",
        "level": 10,
        "en": "Aquatic",
        "phonetic": "อะ-ควา-ติค",
        "th": "เกี่ยวกับน้ำ",
        "type": "Adjective",
        "example_en": "Whales are aquatic mammals.",
        "example_th": "ปลาวาฬเป็นสัตว์เลี้ยงลูกด้วยนมในน้ำ"
    },
    {
        "id": 400,
        "category": "toefl_reading",
        "level": 1,
        "en": "Significant",
        "phonetic": "ซิก-นิฟ-ฟิ-แคนท์",
        "th": "สำคัญ/มีนัยสำคัญ",
        "type": "Adjective",
        "example_en": "There is a significant difference between the two results.",
        "example_th": "มีความแตกต่างอย่างมีนัยสำคัญระหว่างผลลัพธ์ทั้งสอง"
    },
    {
        "id": 401,
        "category": "toefl_reading",
        "level": 1,
        "en": "Consequence",
        "phonetic": "คอน-ซิ-เควนซ์",
        "th": "ผลที่ตามมา",
        "type": "Noun",
        "example_en": "Global warming is a consequence of human activity.",
        "example_th": "ภาวะโลกร้อนเป็นผลมาจากการกระทำของมนุษย์"
    },
    {
        "id": 402,
        "category": "toefl_reading",
        "level": 1,
        "en": "Evolve",
        "phonetic": "อี-โวลฟ์",
        "th": "วิวัฒนาการ",
        "type": "Verb",
        "example_en": "Birds evolved from dinosaurs millions of years ago.",
        "example_th": "นกวิวัฒนาการมาจากไดโนเสาร์เมื่อหลายล้านปีก่อน"
    },
    {
        "id": 403,
        "category": "toefl_reading",
        "level": 1,
        "en": "Adequate",
        "phonetic": "แอด-ดี-เควต",
        "th": "เพียงพอ",
        "type": "Adjective",
        "example_en": "Make sure you drink adequate amounts of water.",
        "example_th": "ตรวจสอบให้แน่ใจว่าคุณดื่มน้ำในปริมาณที่เพียงพอ"
    },
    {
        "id": 404,
        "category": "toefl_reading",
        "level": 1,
        "en": "Perspective",
        "phonetic": "เพอร์-สเปค-ทิฟ",
        "th": "มุมมอง",
        "type": "Noun",
        "example_en": "Try to look at the problem from a different perspective.",
        "example_th": "พยายามมองปัญหาจากมุมมองที่ต่างออกไป"
    },
    {
        "id": 405,
        "category": "toefl_reading",
        "level": 1,
        "en": "Incorporate",
        "phonetic": "อิน-คอร์-ปะ-เรท",
        "th": "รวมเข้าด้วยกัน",
        "type": "Verb",
        "example_en": "The architect incorporated solar panels into the design.",
        "example_th": "สถาปนิกได้รวมแผงโซลาร์เซลล์เข้าไว้ในการออกแบบ"
    },
    {
        "id": 406,
        "category": "toefl_reading",
        "level": 1,
        "en": "Assess",
        "phonetic": "แอส-เซส",
        "th": "ประเมิน",
        "type": "Verb",
        "example_en": "The committee will assess the impact of the new law.",
        "example_th": "คณะกรรมการจะประเมินผลกระทบของกฎหมายฉบับใหม่"
    },
    {
        "id": 407,
        "category": "toefl_reading",
        "level": 1,
        "en": "Derive",
        "phonetic": "ดิ-ไรฟ์",
        "th": "ได้รับมาจาก",
        "type": "Verb",
        "example_en": "The word is derived from a Latin root.",
        "example_th": "คำนี้มีรากศัพท์มาจากภาษาละติน"
    },
    {
        "id": 408,
        "category": "toefl_reading",
        "level": 1,
        "en": "Interpret",
        "phonetic": "อิน-เทอร์-พรีท",
        "th": "ตีความ",
        "type": "Verb",
        "example_en": "How do you interpret the ending of the novel?",
        "example_th": "คุณตีความตอนจบของนวนิยายเรื่องนี้อย่างไร?"
    },
    {
        "id": 409,
        "category": "toefl_reading",
        "level": 1,
        "en": "Structure",
        "phonetic": "สตรัค-เจอร์",
        "th": "โครงสร้าง",
        "type": "Noun",
        "example_en": "The cell structure of plants and animals is different.",
        "example_th": "โครงสร้างเซลล์ของพืชและสัตว์มีความแตกต่างกัน"
    },
    {
        "id": 410,
        "category": "toefl_reading",
        "level": 2,
        "en": "Maintain",
        "phonetic": "เมน-เทน",
        "th": "รักษาไว้",
        "type": "Verb",
        "example_en": "It is important to maintain a healthy diet.",
        "example_th": "การรักษาพฤติกรรมการกินเพื่อสุขภาพเป็นสิ่งสำคัญ"
    },
    {
        "id": 411,
        "category": "toefl_reading",
        "level": 2,
        "en": "Illustrate",
        "phonetic": "อิล-ลัส-เตรท",
        "th": "อธิบายด้วยภาพประกอบ",
        "type": "Verb",
        "example_en": "The author uses examples to illustrate his point.",
        "example_th": "ผู้เขียนยกตัวอย่างเพื่ออธิบายประเด็นของเขา"
    },
    {
        "id": 412,
        "category": "toefl_reading",
        "level": 2,
        "en": "Demonstrate",
        "phonetic": "เดม-มอน-สเตรท",
        "th": "สาธิต/แสดงให้เห็น",
        "type": "Verb",
        "example_en": "The data clearly demonstrates the need for reform.",
        "example_th": "ข้อมูลแสดงให้เห็นอย่างชัดเจนถึงความจำเป็นในการปฏิรูป"
    },
    {
        "id": 413,
        "category": "toefl_reading",
        "level": 2,
        "en": "Justify",
        "phonetic": "จัส-ติ-ไฟ",
        "th": "แสดงให้เห็นถึงเหตุผล",
        "type": "Verb",
        "example_en": "Can you justify your decision to quit the job?",
        "example_th": "คุณสามารถให้เหตุผลประกอบการตัดสินใจลาออกจากงานได้หรือไม่?"
    },
    {
        "id": 414,
        "category": "toefl_reading",
        "level": 2,
        "en": "Proportion",
        "phonetic": "โพร-พอร์-ชัน",
        "th": "สัดส่วน",
        "type": "Noun",
        "example_en": "A large proportion of the budget goes to education.",
        "example_th": "สัดส่วนส่วนใหญ่ของงบประมาณตกเป็นของการศึกษา"
    },
    {
        "id": 415,
        "category": "toefl_reading",
        "level": 2,
        "en": "Sequence",
        "phonetic": "ซี-เควนซ์",
        "th": "ลำดับ",
        "type": "Noun",
        "example_en": "Follow the sequence of steps in the manual.",
        "example_th": "ทำตามลำดับขั้นตอนในคู่มือ"
    },
    {
        "id": 416,
        "category": "toefl_reading",
        "level": 2,
        "en": "Valid",
        "phonetic": "แวล-ลิด",
        "th": "ถูกต้อง/มีเหตุผล",
        "type": "Adjective",
        "example_en": "You must have a valid passport to travel abroad.",
        "example_th": "คุณต้องมีหนังสือเดินทางที่ยังไม่หมดอายุเพื่อเดินทางไปต่างประเทศ"
    },
    {
        "id": 417,
        "category": "toefl_reading",
        "level": 2,
        "en": "Abstract",
        "phonetic": "แอ็บ-สแทรคท์",
        "th": "นามธรรม",
        "type": "Adjective",
        "example_en": "Truth and beauty are abstract concepts.",
        "example_th": "ความจริงและความงามเป็นแนวคิดที่เป็นนามธรรม"
    },
    {
        "id": 418,
        "category": "toefl_reading",
        "level": 2,
        "en": "Determine",
        "phonetic": "ดี-เทอร์-มิน",
        "th": "กำหนด",
        "type": "Verb",
        "example_en": "Your grades will determine which university you enter.",
        "example_th": "เกรดของคุณจะเป็นตัวกำหนดว่าคุณจะเข้าเรียนมหาวิทยาลัยใด"
    },
    {
        "id": 419,
        "category": "toefl_reading",
        "level": 2,
        "en": "Analyze",
        "phonetic": "แอน-นะ-ไลซ์",
        "th": "วิเคราะห์",
        "type": "Verb",
        "example_en": "We need to analyze the customer feedback.",
        "example_th": "เราจำเป็นต้องวิเคราะห์ความคิดเห็นของลูกค้า"
    },
    {
        "id": 420,
        "category": "toefl_reading",
        "level": 3,
        "en": "Abundant",
        "phonetic": "อะ-บัน-ดันท์",
        "th": "มากมาย",
        "type": "Adjective",
        "example_en": "There is an abundant supply of water.",
        "example_th": "มีแหล่งน้ำอุดมสมบูรณ์"
    },
    {
        "id": 421,
        "category": "toefl_reading",
        "level": 3,
        "en": "Crucial",
        "phonetic": "ครู-เชียล",
        "th": "สำคัญมาก",
        "type": "Adjective",
        "example_en": "Water is crucial for survival.",
        "example_th": "น้ำมีความสำคัญอย่างยิ่งต่อการอยู่รอด"
    },
    {
        "id": 422,
        "category": "toefl_reading",
        "level": 3,
        "en": "Diverse",
        "phonetic": "ได-เวิร์ส",
        "th": "หลากหลาย",
        "type": "Adjective",
        "example_en": "The rainforest has a diverse ecosystem.",
        "example_th": "ป่าฝนมีระบบนิเวศที่หลากหลาย"
    },
    {
        "id": 423,
        "category": "toefl_reading",
        "level": 3,
        "en": "Evident",
        "phonetic": "เอฟ-วิ-เดนท์",
        "th": "ชัดเจน",
        "type": "Adjective",
        "example_en": "It is evident that the climate is changing.",
        "example_th": "เป็นที่แน่ชัดว่าสภาพภูมิอากาศกำลังเปลี่ยนแปลง"
    },
    {
        "id": 424,
        "category": "toefl_reading",
        "level": 3,
        "en": "Flourish",
        "phonetic": "ฟลอ-ริช",
        "th": "เจริญงอกงาม",
        "type": "Verb",
        "example_en": "Plants flourish in this environment.",
        "example_th": "พืชเจริญงอกงามในสภาพแวดล้อมนี้"
    },
    {
        "id": 425,
        "category": "toefl_reading",
        "level": 3,
        "en": "Inherent",
        "phonetic": "อิน-เฮีย-เรนท์",
        "th": "โดยธรรมชาติ",
        "type": "Adjective",
        "example_en": "There are inherent risks in this procedure.",
        "example_th": "มีความเสี่ยงโดยธรรมชาติในขั้นตอนนี้"
    },
    {
        "id": 426,
        "category": "toefl_reading",
        "level": 3,
        "en": "Obscure",
        "phonetic": "ออบ-สเคียวร์",
        "th": "คลุมเครือ",
        "type": "Adjective/Verb",
        "example_en": "The meaning of the poem is obscure.",
        "example_th": "ความหมายของบทกวีค่อนข้างคลุมเครือ"
    },
    {
        "id": 427,
        "category": "toefl_reading",
        "level": 3,
        "en": "Profound",
        "phonetic": "โปร-ฟาวนด์",
        "th": "ลึกซึ้ง",
        "type": "Adjective",
        "example_en": "The discovery had a profound impact.",
        "example_th": "การค้นพบนี้มีผลกระทบอย่างลึกซึ้ง"
    },
    {
        "id": 428,
        "category": "toefl_reading",
        "level": 3,
        "en": "Resilient",
        "phonetic": "รี-ซิล-เลียนท์",
        "th": "ยืดหยุ่น/ฟื้นตัวเร็ว",
        "type": "Adjective",
        "example_en": "Children are often remarkably resilient.",
        "example_th": "เด็กๆ มักจะฟื้นตัวได้อย่างน่าทึ่ง"
    },
    {
        "id": 429,
        "category": "toefl_reading",
        "level": 3,
        "en": "Subtle",
        "phonetic": "ซับ-เทิล",
        "th": "เล็กน้อย/บอบบาง",
        "type": "Adjective",
        "example_en": "There is a subtle difference between the two.",
        "example_th": "มีความแตกต่างเพียงเล็กน้อยระหว่างสองสิ่งนี้"
    },
    {
        "id": 430,
        "category": "toefl_reading",
        "level": 4,
        "en": "Adequate_alt",
        "phonetic": "แอด-ดี-เควต",
        "th": "เพียงพอ",
        "type": "Adjective",
        "example_en": "The room size is adequate for two people.",
        "example_th": "ขนาดห้องเพียงพอสำหรับสองคน"
    },
    {
        "id": 431,
        "category": "toefl_reading",
        "level": 4,
        "en": "Alternative",
        "phonetic": "ออล-เทอร์-เน-ทิฟ",
        "th": "ทางเลือก",
        "type": "Noun/Adjective",
        "example_en": "We must find alternative energy sources.",
        "example_th": "เราต้องหาแหล่งพลังงานทางเลือก"
    },
    {
        "id": 432,
        "category": "toefl_reading",
        "level": 4,
        "en": "Apparent",
        "phonetic": "แอพ-พา-เรนท์",
        "th": "ชัดเจน",
        "type": "Adjective",
        "example_en": "It is apparent that he is lying.",
        "example_th": "เห็นได้ชัดว่าเขากำลังโกหก"
    },
    {
        "id": 433,
        "category": "toefl_reading",
        "level": 4,
        "en": "Approximate",
        "phonetic": "อะ-พร็อก-ซิ-เมท",
        "th": "โดยประมาณ",
        "type": "Adjective",
        "example_en": "What is the approximate cost?",
        "example_th": "ค่าใช้จ่ายโดยประมาณคือเท่าไร?"
    },
    {
        "id": 434,
        "category": "toefl_reading",
        "level": 4,
        "en": "Attribute",
        "phonetic": "แอท-ทริ-บิวท์",
        "th": "คุณลักษณะ/ถือว่าเป็นของ",
        "type": "Noun/Verb",
        "example_en": "Patience is a necessary attribute for a teacher.",
        "example_th": "ความอดทนเป็นคุณลักษณะที่จำเป็นสำหรับครู"
    },
    {
        "id": 435,
        "category": "toefl_reading",
        "level": 4,
        "en": "Capacity",
        "phonetic": "คา-พาส-ซิ-ตี",
        "th": "ความจุ/ความสามารถ",
        "type": "Noun",
        "example_en": "The stadium has a seating capacity of 50,000.",
        "example_th": "สนามกีฬาแห่งนี้มีความจุที่นั่ง 50,000 ที่"
    },
    {
        "id": 436,
        "category": "toefl_reading",
        "level": 4,
        "en": "Component",
        "phonetic": "คอม-โพ-เนนท์",
        "th": "ส่วนประกอบ",
        "type": "Noun",
        "example_en": "Trust is a key component of a relationship.",
        "example_th": "ความไว้วางใจเป็นส่วนประกอบสำคัญของความสัมพันธ์"
    },
    {
        "id": 437,
        "category": "toefl_reading",
        "level": 4,
        "en": "Consequently",
        "phonetic": "คอน-ซิ-เควนท์-ลี",
        "th": "ผลที่ตามมาคือ",
        "type": "Adverb",
        "example_en": "It rained; consequently, the game was delayed.",
        "example_th": "ฝนตก ผลที่ตามมาคือเกมถูกเลื่อนออกไป"
    },
    {
        "id": 438,
        "category": "toefl_reading",
        "level": 4,
        "en": "Demonstrate_alt",
        "phonetic": "เดม-มอน-สเตรท",
        "th": "แสดงให้เห็น",
        "type": "Verb",
        "example_en": "These numbers demonstrate the problem.",
        "example_th": "ตัวเลขเหล่านี้แสดงให้เห็นถึงปัญหา"
    },
    {
        "id": 439,
        "category": "toefl_reading",
        "level": 4,
        "en": "Emerge",
        "phonetic": "อี-เมิร์จ",
        "th": "ปรากฏออกมา",
        "type": "Verb",
        "example_en": "New details began to emerge.",
        "example_th": "รายละเอียดใหม่ๆ เริ่มปรากฏออกมา"
    },
    {
        "id": 440,
        "category": "toefl_reading",
        "level": 5,
        "en": "Equivalent",
        "phonetic": "อี-ควิ-วา-เลนท์",
        "th": "เทียบเท่า",
        "type": "Adjective/Noun",
        "example_en": "One mile is equivalent to 1.6 kilometers.",
        "example_th": "หนึ่งไมล์เทียบเท่ากับ 1.6 กิโลเมตร"
    },
    {
        "id": 441,
        "category": "toefl_reading",
        "level": 5,
        "en": "Fundamental",
        "phonetic": "ฟัน-ดะ-เมน-ทัล",
        "th": "พื้นฐาน",
        "type": "Adjective",
        "example_en": "Freedom of speech is a fundamental right.",
        "example_th": "เสรีภาพในการพูดเป็นสิทธิขั้นพื้นฐาน"
    },
    {
        "id": 442,
        "category": "toefl_reading",
        "level": 5,
        "en": "Hypothesis",
        "phonetic": "ไฮ-พอท-ธิ-ซิส",
        "th": "สมมติฐาน",
        "type": "Noun",
        "example_en": "The results support his hypothesis.",
        "example_th": "ผลลัพธ์สนับสนุนสมมติฐานของเขา"
    },
    {
        "id": 443,
        "category": "toefl_reading",
        "level": 5,
        "en": "Imply",
        "phonetic": "อิม-พลาย",
        "th": "บอกเป็นนัย",
        "type": "Verb",
        "example_en": "Are you implying that I am wrong?",
        "example_th": "คุณกำลังบอกเป็นนัยว่าฉันผิดใช่ไหม?"
    },
    {
        "id": 444,
        "category": "toefl_reading",
        "level": 5,
        "en": "Initial",
        "phonetic": "อิน-นิ-เชียล",
        "th": "เริ่มแรก",
        "type": "Adjective",
        "example_en": "My initial reaction was shock.",
        "example_th": "ปฏิกิริยาแรกของฉันคือความตกใจ"
    },
    {
        "id": 445,
        "category": "toefl_reading",
        "level": 5,
        "en": "Justify_alt",
        "phonetic": "จัส-ติ-ไฟ",
        "th": "แสดงเหตุผล",
        "type": "Verb",
        "example_en": "How can you justify this behavior?",
        "example_th": "คุณจะอธิบายพฤติกรรมนี้อย่างไร?"
    },
    {
        "id": 446,
        "category": "toefl_reading",
        "level": 5,
        "en": "Perspective_alt",
        "phonetic": "เพอร์-สเปค-ทิฟ",
        "th": "มุมมอง",
        "type": "Noun",
        "example_en": "Try looking from a different perspective.",
        "example_th": "ลองมองจากมุมมองที่ต่างออกไป"
    },
    {
        "id": 447,
        "category": "toefl_reading",
        "level": 5,
        "en": "Proportion_alt",
        "phonetic": "โพร-พอร์-ชัน",
        "th": "สัดส่วน",
        "type": "Noun",
        "example_en": "A large proportion of the land is forest.",
        "example_th": "พื้นที่ส่วนใหญ่เป็นป่าไม้"
    },
    {
        "id": 448,
        "category": "toefl_reading",
        "level": 5,
        "en": "Sequence_alt",
        "phonetic": "ซี-เควนซ์",
        "th": "ลำดับ",
        "type": "Noun",
        "example_en": "Follow the sequence of events.",
        "example_th": "ทำตามลำดับเหตุการณ์"
    },
    {
        "id": 449,
        "category": "toefl_reading",
        "level": 5,
        "en": "Subsequent",
        "phonetic": "ซับ-ซี-เควนท์",
        "th": "ตามมา/ภายหลัง",
        "type": "Adjective",
        "example_en": "Subsequent studies confirmed the finding.",
        "example_th": "การศึกษาในเวลาต่อมายืนยันการค้นพบนี้"
    },
    {
        "id": 450,
        "category": "toefl_reading",
        "level": 6,
        "en": "Aesthetic",
        "phonetic": "เอส-เธ-ติค",
        "th": "เกี่ยวกับความงาม",
        "type": "Adjective",
        "example_en": "The building has great aesthetic appeal.",
        "example_th": "อาคารนี้มีความดึงดูดใจด้านสุนทรียภาพอย่างมาก"
    },
    {
        "id": 451,
        "category": "toefl_reading",
        "level": 6,
        "en": "Bizarre",
        "phonetic": "บิ-ซาร์",
        "th": "แปลกประหลาด",
        "type": "Adjective",
        "example_en": "The story was completely bizarre.",
        "example_th": "เรื่องราวนั้นแปลกประหลาดอย่างสิ้นเชิง"
    },
    {
        "id": 452,
        "category": "toefl_reading",
        "level": 6,
        "en": "Coincide",
        "phonetic": "โค-อิน-ไซด์",
        "th": "เกิดขึ้นพร้อมกัน",
        "type": "Verb",
        "example_en": "Her arrival coincided with the storm.",
        "example_th": "การมาถึงของเธอเกิดขึ้นพร้อมกับพายุ"
    },
    {
        "id": 453,
        "category": "toefl_reading",
        "level": 6,
        "en": "Deviate",
        "phonetic": "ดี-วิ-เอท",
        "th": "เบี่ยงเบน",
        "type": "Verb",
        "example_en": "Never deviate from the original plan.",
        "example_th": "อย่าเบี่ยงเบนไปจากแผนเดิม"
    },
    {
        "id": 454,
        "category": "toefl_reading",
        "level": 6,
        "en": "Elicit",
        "phonetic": "อี-ลิส-ซิท",
        "th": "ดึงออกมา/ล้วงความลับ",
        "type": "Verb",
        "example_en": "The question elicited a defensive response.",
        "example_th": "คำถามนั้นกระตุ้นให้เกิดการตอบสนองเชิงป้องกันตัว"
    },
    {
        "id": 455,
        "category": "toefl_reading",
        "level": 6,
        "en": "Fluctuate",
        "phonetic": "ฟลัค-ชู-เอท",
        "th": "ผันผวน",
        "type": "Verb",
        "example_en": "Prices fluctuate based on supply and demand.",
        "example_th": "ราคาผันผวนตามอุปสงค์และอุปทาน"
    },
    {
        "id": 456,
        "category": "toefl_reading",
        "level": 6,
        "en": "Gregarious",
        "phonetic": "กริ-กา-เรียส",
        "th": "ชอบเข้าสังคม",
        "type": "Adjective",
        "example_en": "Dolphins are gregarious animals.",
        "example_th": "โลมาเป็นสัตว์ที่ชอบอยู่รวมฝูง"
    },
    {
        "id": 457,
        "category": "toefl_reading",
        "level": 6,
        "en": "Hinder",
        "phonetic": "ฮิน-เดอร์",
        "th": "ขัดขวาง",
        "type": "Verb",
        "example_en": "Lack of funding will hinder the project.",
        "example_th": "การขาดแคลนเงินทุนจะขัดขวางโครงการ"
    },
    {
        "id": 458,
        "category": "toefl_reading",
        "level": 6,
        "en": "Innate",
        "phonetic": "อิน-เนท",
        "th": "โดยกำเนิด",
        "type": "Adjective",
        "example_en": "Birds have an innate ability to fly.",
        "example_th": "นกมีความสามารถในการบินโดยกำเนิด"
    },
    {
        "id": 459,
        "category": "toefl_reading",
        "level": 6,
        "en": "Juxtapose",
        "phonetic": "จัค-สตา-โพส",
        "th": "วางเคียงกันเพื่อเปรียบเทียบ",
        "type": "Verb",
        "example_en": "The artist juxtaposes bright colors with dark ones.",
        "example_th": "ศิลปินนำสีสว่างมาวางคู่กับสีเข้มเพื่อเปรียบเทียบ"
    },
    {
        "id": 460,
        "category": "toefl_reading",
        "level": 7,
        "en": "Lethal",
        "phonetic": "ลี-ธัล",
        "th": "ถึงตาย",
        "type": "Adjective",
        "example_en": "The snake has a lethal bite.",
        "example_th": "งูตัวนี้มีพิษกัดถึงตาย"
    },
    {
        "id": 461,
        "category": "toefl_reading",
        "level": 7,
        "en": "Meticulous",
        "phonetic": "เม-ทิค-คิว-ลัส",
        "th": "พิถีพิถัน",
        "type": "Adjective",
        "example_en": "He is very meticulous about his work.",
        "example_th": "เขาพิถีพิถันกับการทำงานมาก"
    },
    {
        "id": 462,
        "category": "toefl_reading",
        "level": 7,
        "en": "Nomad",
        "phonetic": "โน-แมด",
        "th": "คนพเนจร",
        "type": "Noun",
        "example_en": "Nomads move from place to place.",
        "example_th": "คนเร่ร่อนย้ายจากที่หนึ่งไปยังอีกที่หนึ่ง"
    },
    {
        "id": 463,
        "category": "toefl_reading",
        "level": 7,
        "en": "Obsolete",
        "phonetic": "ออบ-โซ-ลีท",
        "th": "ล้าสมัย",
        "type": "Adjective",
        "example_en": "Typewriters are largely obsolete.",
        "example_th": "เครื่องพิมพ์ดีดส่วนใหญ่ล้าสมัยแล้ว"
    },
    {
        "id": 464,
        "category": "toefl_reading",
        "level": 7,
        "en": "Paradox",
        "phonetic": "พา-รา-ดอกซ์",
        "th": "ความขัดแย้งในตัวเอง",
        "type": "Noun",
        "example_en": "It is a paradox that technology makes us more isolated.",
        "example_th": "เป็นเรื่องย้อนแย้งที่เทคโนโลยีทำให้เราโดดเดี่ยวมากขึ้น"
    },
    {
        "id": 465,
        "category": "toefl_reading",
        "level": 7,
        "en": "Qualitative",
        "phonetic": "ควอล-ลิ-เท-ทิฟ",
        "th": "เชิงคุณภาพ",
        "type": "Adjective",
        "example_en": "We need a qualitative analysis of the data.",
        "example_th": "เราต้องการการวิเคราะห์ข้อมูลในเชิงคุณภาพ"
    },
    {
        "id": 466,
        "category": "toefl_reading",
        "level": 7,
        "en": "Redundant",
        "phonetic": "รี-ดัน-ดันท์",
        "th": "ซ้ำซ้อน",
        "type": "Adjective",
        "example_en": "The second paragraph is redundant.",
        "example_th": "ย่อหน้าที่สองมีความซ้ำซ้อน"
    },
    {
        "id": 467,
        "category": "toefl_reading",
        "level": 7,
        "en": "Skeptical",
        "phonetic": "สเคป-ติ-คัล",
        "th": "สงสัย/ไม่เชื่อ",
        "type": "Adjective",
        "example_en": "I am skeptical of his claims.",
        "example_th": "ฉันยังคงคลางแคลงใจในคำกล่าวอ้างของเขา"
    },
    {
        "id": 468,
        "category": "toefl_reading",
        "level": 7,
        "en": "Tangible",
        "phonetic": "แทน-จิ-เบิล",
        "th": "จับต้องได้/ชัดเจน",
        "type": "Adjective",
        "example_en": "We need tangible evidence.",
        "example_th": "เราต้องการหลักฐานที่จับต้องได้"
    },
    {
        "id": 469,
        "category": "toefl_reading",
        "level": 7,
        "en": "Ubiquitous",
        "phonetic": "ยู-บิค-ควิ-ตัส",
        "th": "มีอยู่ทุกหนทุกแห่ง",
        "type": "Adjective",
        "example_en": "Mobile phones are ubiquitous today.",
        "example_th": "โทรศัพท์มือถือมีอยู่ทุกหนทุกแห่งในปัจจุบัน"
    },
    {
        "id": 470,
        "category": "toefl_reading",
        "level": 8,
        "en": "Vacillate",
        "phonetic": "วา-ซิล-เลท",
        "th": "ลังเล",
        "type": "Verb",
        "example_en": "He vacillated between two choices.",
        "example_th": "เขาลังเลระหว่างสองตัวเลือก"
    },
    {
        "id": 471,
        "category": "toefl_reading",
        "level": 8,
        "en": "Warrant",
        "phonetic": "วอ-แรนท์",
        "th": "รับรอง/เป็นเหตุผลสมควร",
        "type": "Verb",
        "example_en": "The evidence does not warrant a trial.",
        "example_th": "หลักฐานไม่มีน้ำหนักพอที่จะนำไปสู่การพิจารณาคดี"
    },
    {
        "id": 472,
        "category": "toefl_reading",
        "level": 8,
        "en": "Alleviate",
        "phonetic": "อัล-ลี-วิ-เอท",
        "th": "บรรเทา",
        "type": "Verb",
        "example_en": "The medicine will alleviate your pain.",
        "example_th": "ยาจะช่วยบรรเทาอาการปวดของคุณ"
    },
    {
        "id": 473,
        "category": "toefl_reading",
        "level": 8,
        "en": "Benevolent",
        "phonetic": "บิ-เนฟ-โว-เลนท์",
        "th": "เมตตา",
        "type": "Adjective",
        "example_en": "He was a benevolent leader.",
        "example_th": "เขาเป็นผู้นำที่มีความเมตตา"
    },
    {
        "id": 474,
        "category": "toefl_reading",
        "level": 8,
        "en": "Candid",
        "phonetic": "แคน-ดิด",
        "th": "ตรงไปตรงมา",
        "type": "Adjective",
        "example_en": "She gave a candid interview.",
        "example_th": "เธอให้สัมภาษณ์อย่างตรงไปตรงมา"
    },
    {
        "id": 475,
        "category": "toefl_reading",
        "level": 8,
        "en": "Deter",
        "phonetic": "ดี-เทอร์",
        "th": "ขัดขวาง/ยับยั้ง",
        "type": "Verb",
        "example_en": "High prices will deter buyers.",
        "example_th": "ราคาสูงจะขัดขวางผู้ซื้อ"
    },
    {
        "id": 476,
        "category": "toefl_reading",
        "level": 8,
        "en": "Elucidate",
        "phonetic": "อิล-ลู-ซิ-เดท",
        "th": "อธิบายให้กระจ่าง",
        "type": "Verb",
        "example_en": "Please elucidate your point further.",
        "example_th": "โปรดอธิบายประเด็นของคุณให้กระจ่างยิ่งขึ้น"
    },
    {
        "id": 477,
        "category": "toefl_reading",
        "level": 8,
        "en": "Frivolous",
        "phonetic": "ฟริ-โว-ลัส",
        "th": "ไม่เอาจริงเอาจัง/ไร้สาระ",
        "type": "Adjective",
        "example_en": "Do not waste time on frivolous lawsuits.",
        "example_th": "อย่าเสียเวลากับคดีฟ้องร้องที่ไร้สาระ"
    },
    {
        "id": 478,
        "category": "toefl_reading",
        "level": 8,
        "en": "Gullible",
        "phonetic": "กัล-ลิ-เบิล",
        "th": "หลอกง่าย",
        "type": "Adjective",
        "example_en": "The gullible tourists paid too much.",
        "example_th": "นักท่องเที่ยวที่หลอกง่ายจ่ายเงินแพงเกินไป"
    },
    {
        "id": 479,
        "category": "toefl_reading",
        "level": 8,
        "en": "Homogeneous",
        "phonetic": "โฮ-โม-จี-เนียส",
        "th": "เป็นเนื้อเดียวกัน",
        "type": "Adjective",
        "example_en": "Japan is a largely homogeneous society.",
        "example_th": "ญี่ปุ่นเป็นสังคมที่มีความกลมกลืนเป็นเนื้อเดียวกันสูง"
    },
    {
        "id": 480,
        "category": "toefl_reading",
        "level": 9,
        "en": "Impending",
        "phonetic": "อิม-เพน-ดิง",
        "th": "ใกล้เข้ามา",
        "type": "Adjective",
        "example_en": "They braced for the impending storm.",
        "example_th": "พวกเขาเตรียมพร้อมรับมือพายุที่กำลังใกล้เข้ามา"
    },
    {
        "id": 481,
        "category": "toefl_reading",
        "level": 9,
        "en": "Jeopardize",
        "phonetic": "เจพ-พาร์-ไดซ์",
        "th": "เป็นอันตรายต่อ",
        "type": "Verb",
        "example_en": "His actions could jeopardize the mission.",
        "example_th": "การกระทำของเขาอาจทำให้ภารกิจตกอยู่ในอันตรายได้"
    },
    {
        "id": 482,
        "category": "toefl_reading",
        "level": 9,
        "en": "Lucrative",
        "phonetic": "ลู-ครา-ทิฟ",
        "th": "ทำกำไรได้ดี",
        "type": "Adjective",
        "example_en": "Real estate can be a lucrative business.",
        "example_th": "อสังหาริมทรัพย์สามารถเป็นธุรกิจที่ทำกำไรได้ดี"
    },
    {
        "id": 483,
        "category": "toefl_reading",
        "level": 9,
        "en": "Mitigate",
        "phonetic": "มิท-ทิ-เกท",
        "th": "บรรเทา(ความรุนแรง)",
        "type": "Verb",
        "example_en": "We must take steps to mitigate the risks.",
        "example_th": "เราต้องดำเนินการเพื่อบรรเทาความเสี่ยง"
    },
    {
        "id": 484,
        "category": "toefl_reading",
        "level": 9,
        "en": "Nostalgia",
        "phonetic": "นอส-ตัล-เจีย",
        "th": "ความหวนหาอดีต",
        "type": "Noun",
        "example_en": "Listening to that song brings back nostalgia.",
        "example_th": "การฟังเพลงนั้นทำให้รู้สึกคิดถึงอดีต"
    },
    {
        "id": 485,
        "category": "toefl_reading",
        "level": 9,
        "en": "Opaque",
        "phonetic": "โอ-เพค",
        "th": "ทึบแสง/เข้าใจยาก",
        "type": "Adjective",
        "example_en": "The glass is opaque, so you cannot see through it.",
        "example_th": "กระจกนั้นทึบแสง คุณจึงไม่สามารถมองทะลุผ่านได้"
    },
    {
        "id": 486,
        "category": "toefl_reading",
        "level": 9,
        "en": "Pragmatic",
        "phonetic": "แพรก-แมท-ติค",
        "th": "เน้นการปฏิบัติจริง",
        "type": "Adjective",
        "example_en": "We need a pragmatic solution to this problem.",
        "example_th": "เราต้องการวิธีการแก้ปัญหานี้ในเชิงปฏิบัติ"
    },
    {
        "id": 487,
        "category": "toefl_reading",
        "level": 9,
        "en": "Quaint",
        "phonetic": "เควนท์",
        "th": "น่ารักแบบโบราณ",
        "type": "Adjective",
        "example_en": "They visited a quaint little village.",
        "example_th": "พวกเขาไปเยี่ยมชมหมู่บ้านเล็กๆ ที่ดูแปลกตาน่ารัก"
    },
    {
        "id": 488,
        "category": "toefl_reading",
        "level": 9,
        "en": "Resilient_alt",
        "phonetic": "รี-ซิล-เลียนท์",
        "th": "ฟื้นตัวได้เร็ว/ยืดหยุ่น",
        "type": "Adjective",
        "example_en": "The economy has proven to be resilient.",
        "example_th": "เศรษฐกิจได้พิสูจน์ให้เห็นแล้วว่ามีความยืดหยุ่น"
    },
    {
        "id": 489,
        "category": "toefl_reading",
        "level": 9,
        "en": "Scrutinize",
        "phonetic": "สครู-ทิ-ไนซ์",
        "th": "พิจารณาอย่างละเอียด",
        "type": "Verb",
        "example_en": "The committee will scrutinize the documents.",
        "example_th": "คณะกรรมการจะตรวจสอบเอกสารอย่างละเอียด"
    },
    {
        "id": 490,
        "category": "toefl_reading",
        "level": 10,
        "en": "Tenacious",
        "phonetic": "เท-เน-เชียส",
        "th": "ดื้อดึง/เหนียวแน่น",
        "type": "Adjective",
        "example_en": "She is a tenacious advocate for animal rights.",
        "example_th": "เธอเป็นผู้สนับสนุนสิทธิสัตว์อย่างเหนียวแน่น"
    },
    {
        "id": 491,
        "category": "toefl_reading",
        "level": 10,
        "en": "Unambiguous",
        "phonetic": "อัน-แอม-บิก-กิว-อัส",
        "th": "ชัดเจน/ไม่กำกวม",
        "type": "Adjective",
        "example_en": "The rules are unambiguous.",
        "example_th": "กฎระเบียบมีความชัดเจนไม่กำกวม"
    },
    {
        "id": 492,
        "category": "toefl_reading",
        "level": 10,
        "en": "Vindicate",
        "phonetic": "วิน-ดิ-เคท",
        "th": "พิสูจน์ความบริสุทธิ์",
        "type": "Verb",
        "example_en": "The DNA evidence vindicated him.",
        "example_th": "หลักฐานดีเอ็นเอพิสูจน์ความบริสุทธิ์ของเขา"
    },
    {
        "id": 493,
        "category": "toefl_reading",
        "level": 10,
        "en": "Abundant_alt",
        "phonetic": "อะ-บัน-ดันท์",
        "th": "มากมายอุดมสมบูรณ์",
        "type": "Adjective",
        "example_en": "There is an abundant supply of fresh water.",
        "example_th": "มีแหล่งน้ำจืดที่อุดมสมบูรณ์"
    },
    {
        "id": 494,
        "category": "toefl_reading",
        "level": 10,
        "en": "Coherent",
        "phonetic": "โค-เฮีย-เรนท์",
        "th": "สอดคล้องกัน/มีเหตุผล",
        "type": "Adjective",
        "example_en": "His explanation was not coherent.",
        "example_th": "คำอธิบายของเขาไม่สอดคล้องและไม่มีเหตุผล"
    },
    {
        "id": 495,
        "category": "toefl_reading",
        "level": 10,
        "en": "Didactic",
        "phonetic": "ได-แดค-ติค",
        "th": "สั่งสอน",
        "type": "Adjective",
        "example_en": "The story has a didactic purpose.",
        "example_th": "เรื่องราวมีจุดประสงค์เพื่อสั่งสอน"
    },
    {
        "id": 496,
        "category": "toefl_reading",
        "level": 10,
        "en": "Ephemeral",
        "phonetic": "อิ-เฟม-เมอ-รัล",
        "th": "อยู่ได้ไม่นาน/ชั่วคราว",
        "type": "Adjective",
        "example_en": "Fame is often ephemeral.",
        "example_th": "ชื่อเสียงมักจะอยู่ได้ไม่นาน"
    },
    {
        "id": 497,
        "category": "toefl_reading",
        "level": 10,
        "en": "Fortuitous",
        "phonetic": "ฟอร์-ทิว-อิ-ตัส",
        "th": "บังเอิญ(ในทางดี)",
        "type": "Adjective",
        "example_en": "Their meeting was entirely fortuitous.",
        "example_th": "การพบกันของพวกเขาเป็นเรื่องบังเอิญอย่างแท้จริง"
    },
    {
        "id": 498,
        "category": "toefl_reading",
        "level": 10,
        "en": "Hackneyed",
        "phonetic": "แฮค-นีด",
        "th": "ซ้ำซากจำเจ",
        "type": "Adjective",
        "example_en": "The movie plot was somewhat hackneyed.",
        "example_th": "โครงเรื่องของภาพยนตร์ค่อนข้างจำเจ"
    },
    {
        "id": 499,
        "category": "toefl_reading",
        "level": 10,
        "en": "Impetuous",
        "phonetic": "อิม-เพท-ชู-อัส",
        "th": "ใจร้อน/หุนหันพลันแล่น",
        "type": "Adjective",
        "example_en": "He is an impetuous young man.",
        "example_th": "เขาเป็นชายหนุ่มที่ใจร้อน"
    },
    {
        "id": 500,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Opinion",
        "phonetic": "โอ-พิน-เยียน",
        "th": "ความคิดเห็น",
        "type": "Noun",
        "example_en": "In my opinion, learning English is essential.",
        "example_th": "ในความคิดเห็นของฉัน การเรียนภาษาอังกฤษเป็นสิ่งจำเป็น"
    },
    {
        "id": 501,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Reason",
        "phonetic": "รี-ซัน",
        "th": "เหตุผล",
        "type": "Noun",
        "example_en": "The main reason I chose this topic is its relevance.",
        "example_th": "เหตุผลหลักที่ฉันเลือกหัวข้อนี้คือความเกี่ยวข้องของมัน"
    },
    {
        "id": 502,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Example",
        "phonetic": "เอ็กซ์-แซม-เปิล",
        "th": "ตัวอย่าง",
        "type": "Noun",
        "example_en": "For example, many students struggle with time management.",
        "example_th": "ตัวอย่างเช่น นักเรียนหลายคนประสบปัญหาในการบริหารเวลา"
    },
    {
        "id": 503,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Detail",
        "phonetic": "ดี-เทล",
        "th": "รายละเอียด",
        "type": "Noun",
        "example_en": "Let me explain this in more detail.",
        "example_th": "ให้ฉันอธิบายรายละเอียดเพิ่มเติมเกี่ยวกับเรื่องนี้"
    },
    {
        "id": 504,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Compare",
        "phonetic": "คอม-แพร์",
        "th": "เปรียบเทียบ",
        "type": "Verb",
        "example_en": "If we compare city life and country life, there are many differences.",
        "example_th": "ถ้าเราเปรียบเทียบชีวิตในเมืองกับชีวิตในชนบท จะมีความแตกต่างมากมาย"
    },
    {
        "id": 505,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Contrast",
        "phonetic": "คอน-ทราสท์",
        "th": "เปรียบเทียบความต่าง",
        "type": "Verb",
        "example_en": "In contrast to her sister, she is very outgoing.",
        "example_th": "ในทางตรงกันข้ามกับน้องสาวของเธอ เธอเป็นคนเข้าสังคมเก่งมาก"
    },
    {
        "id": 506,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Advantage",
        "phonetic": "แอด-แวน-เทจ",
        "th": "ข้อดี",
        "type": "Noun",
        "example_en": "One major advantage of public transport is cost.",
        "example_th": "ข้อดีหลักอย่างหนึ่งของระบบขนส่งสาธารณะคือเรื่องค่าใช้จ่าย"
    },
    {
        "id": 507,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Disadvantage",
        "phonetic": "ดิส-แอด-แวน-เทจ",
        "th": "ข้อเสีย",
        "type": "Noun",
        "example_en": "The main disadvantage is the lack of privacy.",
        "example_th": "ข้อเสียหลักคือการขาดความเป็นส่วนตัว"
    },
    {
        "id": 508,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Solution",
        "phonetic": "โซ-ลู-ชัน",
        "th": "ทางออก/วิธีแก้ปัญหา",
        "type": "Noun",
        "example_en": "The best solution to pollution is using renewable energy.",
        "example_th": "ทางออกที่ดีที่สุดสำหรับมลพิษคือการใช้พลังงานหมุนเวียน"
    },
    {
        "id": 509,
        "category": "toefl_speaking",
        "level": 1,
        "en": "Problem",
        "phonetic": "พร็อบ-เบลม",
        "th": "ปัญหา",
        "type": "Noun",
        "example_en": "Traffic congestion is a serious problem in the city.",
        "example_th": "ปัญหาการจราจรติดขัดเป็นปัญหาร้ายแรงในเมือง"
    },
    {
        "id": 510,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Describe",
        "phonetic": "ดิ-สไครบ์",
        "th": "บรรยาย",
        "type": "Verb",
        "example_en": "Could you describe your favorite book?",
        "example_th": "คุณช่วยบรรยายหนังสือเล่มโปรดของคุณได้ไหม?"
    },
    {
        "id": 511,
        "category": "toefl_speaking",
        "level": 2,
        "en": "State",
        "phonetic": "สเตท",
        "th": "กล่าว",
        "type": "Verb",
        "example_en": "I would like to state that I completely agree.",
        "example_th": "ฉันอยากจะกล่าวว่าฉันเห็นด้วยอย่างยิ่ง"
    },
    {
        "id": 512,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Mention",
        "phonetic": "เมน-ชัน",
        "th": "กล่าวถึง",
        "type": "Verb",
        "example_en": "As the speaker mentioned earlier, teamwork is key.",
        "example_th": "ดังที่ผู้บรรยายได้กล่าวไว้ก่อนหน้านี้ การทำงานเป็นทีมคือกุญแจสำคัญ"
    },
    {
        "id": 513,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Argue",
        "phonetic": "อาร์-กิว",
        "th": "โต้แย้ง",
        "type": "Verb",
        "example_en": "Some people argue that technology isolates us.",
        "example_th": "บางคนโต้แย้งว่าเทคโนโลยีทำให้เราโดดเดี่ยว"
    },
    {
        "id": 514,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Support",
        "phonetic": "ซัพ-พอร์ต",
        "th": "สนับสนุน",
        "type": "Verb",
        "example_en": "I want to provide an example to support my claim.",
        "example_th": "ฉันต้องการยกตัวอย่างเพื่อสนับสนุนข้อกล่าวอ้างของฉัน"
    },
    {
        "id": 515,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Oppose",
        "phonetic": "ออป-โพส",
        "th": "คัดค้าน",
        "type": "Verb",
        "example_en": "Many citizens oppose the construction of the factory.",
        "example_th": "ประชาชนจำนวนมากคัดค้านการก่อสร้างโรงงานแห่งนี้"
    },
    {
        "id": 516,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Believe",
        "phonetic": "บิ-ลีฟ",
        "th": "เชื่อว่า",
        "type": "Verb",
        "example_en": "I strongly believe that education changes lives.",
        "example_th": "ฉันเชื่ออย่างยิ่งว่าการศึกษาเปลี่ยนแปลงชีวิตได้"
    },
    {
        "id": 517,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Consider",
        "phonetic": "คอน-ซิ-เดอร์",
        "th": "พิจารณา",
        "type": "Verb",
        "example_en": "We must consider the environmental impacts.",
        "example_th": "เราต้องพิจารณาถึงผลกระทบต่อสิ่งแวดล้อม"
    },
    {
        "id": 518,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Prefer",
        "phonetic": "พรี-เฟอร์",
        "th": "ชอบมากกว่า",
        "type": "Verb",
        "example_en": "I prefer working independently over group work.",
        "example_th": "ฉันชอบทำงานอิสระมากกว่าการทำงานกลุ่ม"
    },
    {
        "id": 519,
        "category": "toefl_speaking",
        "level": 2,
        "en": "Emphasize",
        "phonetic": "เอ็ม-ฟะ-ไซซ์",
        "th": "เน้นย้ำ",
        "type": "Verb",
        "example_en": "I want to emphasize the importance of sleep.",
        "example_th": "ฉันต้องการเน้นย้ำถึงความสำคัญของการนอนหลับ"
    },
    {
        "id": 520,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Furthermore",
        "phonetic": "เฟอร์-เธอร์-มอร์",
        "th": "นอกจากนี้",
        "type": "Adverb",
        "example_en": "Furthermore, the cost is relatively low.",
        "example_th": "นอกจากนี้ ค่าใช้จ่ายยังค่อนข้างต่ำอีกด้วย"
    },
    {
        "id": 521,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Moreover",
        "phonetic": "มอร์-โอ-เวอร์",
        "th": "ยิ่งไปกว่านั้น",
        "type": "Adverb",
        "example_en": "Moreover, it is an environmentally friendly option.",
        "example_th": "ยิ่งไปกว่านั้น มันยังเป็นทางเลือกที่เป็นมิตรต่อสิ่งแวดล้อม"
    },
    {
        "id": 522,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Consequently",
        "phonetic": "คอน-ซิ-เควนท์-ลี",
        "th": "ผลที่ตามมาคือ",
        "type": "Adverb",
        "example_en": "Consequently, many species are endangered.",
        "example_th": "ผลที่ตามมาคือ หลายสายพันธุ์กำลังใกล้สูญพันธุ์"
    },
    {
        "id": 523,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Nevertheless",
        "phonetic": "เน-เวอร์-เธอะ-เลส",
        "th": "อย่างไรก็ตาม",
        "type": "Adverb",
        "example_en": "Nevertheless, we must continue our efforts.",
        "example_th": "อย่างไรก็ตาม เราต้องพยายามต่อไป"
    },
    {
        "id": 524,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Illustrate",
        "phonetic": "อิล-ลัส-เตรท",
        "th": "อธิบายด้วยภาพประกอบ",
        "type": "Verb",
        "example_en": "To illustrate, consider the following example.",
        "example_th": "เพื่อเป็นภาพประกอบ ให้พิจารณาตัวอย่างต่อไปนี้"
    },
    {
        "id": 525,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Significant",
        "phonetic": "ซิก-นิฟ-ฟิ-แคนท์",
        "th": "สำคัญ",
        "type": "Adjective",
        "example_en": "This is a significant factor in our decision.",
        "example_th": "นี่เป็นปัจจัยสำคัญในการตัดสินใจของเรา"
    },
    {
        "id": 526,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Essentially",
        "phonetic": "เอส-เซน-เชียล-ลี",
        "th": "โดยพื้นฐานแล้ว",
        "type": "Adverb",
        "example_en": "Essentially, it boils down to two options.",
        "example_th": "โดยพื้นฐานแล้ว มันสรุปได้สองทางเลือก"
    },
    {
        "id": 527,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Perspective",
        "phonetic": "เพอร์-สเปค-ทิฟ",
        "th": "มุมมอง",
        "type": "Noun",
        "example_en": "From a global perspective, this is a crisis.",
        "example_th": "จากมุมมองระดับโลก นี่คือวิกฤต"
    },
    {
        "id": 528,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Alternative",
        "phonetic": "ออล-เทอร์-เน-ทิฟ",
        "th": "ทางเลือก",
        "type": "Noun/Adjective",
        "example_en": "We need to find an alternative energy source.",
        "example_th": "เราจำเป็นต้องหาแหล่งพลังงานทางเลือก"
    },
    {
        "id": 529,
        "category": "toefl_speaking",
        "level": 3,
        "en": "Accurate",
        "phonetic": "แอค-คิว-เรท",
        "th": "ถูกต้องแม่นยำ",
        "type": "Adjective",
        "example_en": "The weather forecast is not always accurate.",
        "example_th": "พยากรณ์อากาศไม่ได้แม่นยำเสมอไป"
    },
    {
        "id": 530,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Brief",
        "phonetic": "บรีฟ",
        "th": "สั้นๆ",
        "type": "Adjective",
        "example_en": "Let me give a brief summary.",
        "example_th": "ให้ฉันสรุปสั้นๆ"
    },
    {
        "id": 531,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Challenge",
        "phonetic": "แชล-เลนจ์",
        "th": "ความท้าทาย",
        "type": "Noun/Verb",
        "example_en": "Learning a new language is a challenge.",
        "example_th": "การเรียนรู้ภาษาใหม่เป็นความท้าทาย"
    },
    {
        "id": 532,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Contrast_alt",
        "phonetic": "คอน-ทราสท์",
        "th": "ความแตกต่าง/เปรียบเทียบ",
        "type": "Noun/Verb",
        "example_en": "In contrast to her sister, she is tall.",
        "example_th": "ในทางตรงกันข้ามกับน้องสาวของเธอ เธอตัวสูง"
    },
    {
        "id": 533,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Convince",
        "phonetic": "คอน-วินซ์",
        "th": "โน้มน้าวใจ",
        "type": "Verb",
        "example_en": "I tried to convince him to stay.",
        "example_th": "ฉันพยายามโน้มน้าวให้เขาอยู่ต่อ"
    },
    {
        "id": 534,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Define",
        "phonetic": "ดี-ไฟน์",
        "th": "ให้คำจำกัดความ",
        "type": "Verb",
        "example_en": "How would you define happiness?",
        "example_th": "คุณให้คำจำกัดความของความสุขว่าอย่างไร?"
    },
    {
        "id": 535,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Illustrate_alt",
        "phonetic": "อิล-ลัส-เตรท",
        "th": "อธิบายด้วยภาพ/ตัวอย่าง",
        "type": "Verb",
        "example_en": "To illustrate this point, let me show a graph.",
        "example_th": "เพื่ออธิบายประเด็นนี้ ขออนุญาตแสดงกราฟ"
    },
    {
        "id": 536,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Impact",
        "phonetic": "อิม-แพคท์",
        "th": "ผลกระทบ",
        "type": "Noun/Verb",
        "example_en": "Technology has a huge impact on society.",
        "example_th": "เทคโนโลยีมีผลกระทบอย่างมากต่อสังคม"
    },
    {
        "id": 537,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Issues",
        "phonetic": "อิช-ชิวส์",
        "th": "ประเด็น/ปัญหา",
        "type": "Noun",
        "example_en": "We discussed several environmental issues.",
        "example_th": "เราได้หารือเกี่ยวกับปัญหาสิ่งแวดล้อมหลายประการ"
    },
    {
        "id": 538,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Obvious",
        "phonetic": "ออบ-เวียส",
        "th": "ชัดเจน",
        "type": "Adjective",
        "example_en": "It is obvious that he is lying.",
        "example_th": "เห็นได้ชัดว่าเขากำลังโกหก"
    },
    {
        "id": 539,
        "category": "toefl_speaking",
        "level": 4,
        "en": "Point",
        "phonetic": "พอยท์",
        "th": "ประเด็น/ชี้",
        "type": "Noun/Verb",
        "example_en": "That is a very good point.",
        "example_th": "นั่นเป็นประเด็นที่ดีมาก"
    },
    {
        "id": 540,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Predict",
        "phonetic": "พรี-ดิคท์",
        "th": "ทำนาย",
        "type": "Verb",
        "example_en": "Experts predict an economic recovery.",
        "example_th": "ผู้เชี่ยวชาญทำนายว่าเศรษฐกิจจะฟื้นตัว"
    },
    {
        "id": 541,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Primary",
        "phonetic": "ไพร-มา-รี",
        "th": "หลัก/เบื้องต้น",
        "type": "Adjective",
        "example_en": "My primary concern is safety.",
        "example_th": "ความกังวลหลักของฉันคือความปลอดภัย"
    },
    {
        "id": 542,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Relate",
        "phonetic": "รี-เลท",
        "th": "เกี่ยวข้อง/เชื่อมโยง",
        "type": "Verb",
        "example_en": "These two events are closely related.",
        "example_th": "เหตุการณ์สองเหตุการณ์นี้มีความเกี่ยวข้องกันอย่างใกล้ชิด"
    },
    {
        "id": 543,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Respond",
        "phonetic": "รี-สปอนด์",
        "th": "ตอบสนอง",
        "type": "Verb",
        "example_en": "How did she respond to the news?",
        "example_th": "เธอตอบสนองต่อข่าวนี้อย่างไร?"
    },
    {
        "id": 544,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Role",
        "phonetic": "โรล",
        "th": "บทบาท",
        "type": "Noun",
        "example_en": "Diet plays a major role in health.",
        "example_th": "อาหารมีบทบาทสำคัญต่อสุขภาพ"
    },
    {
        "id": 545,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Similar",
        "phonetic": "ซิม-มิ-ลาร์",
        "th": "คล้ายกัน",
        "type": "Adjective",
        "example_en": "Our views on this issue are similar.",
        "example_th": "มุมมองของเราเกี่ยวกับประเด็นนี้คล้ายกัน"
    },
    {
        "id": 546,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Specific",
        "phonetic": "สเป-ซิฟ-ฟิค",
        "th": "เฉพาะเจาะจง",
        "type": "Adjective",
        "example_en": "I have a specific question about the assignment.",
        "example_th": "ฉันมีคำถามเฉพาะเจาะจงเกี่ยวกับงานที่ได้รับมอบหมาย"
    },
    {
        "id": 547,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Structure",
        "phonetic": "สตรัค-เจอร์",
        "th": "โครงสร้าง",
        "type": "Noun/Verb",
        "example_en": "The essay has a clear structure.",
        "example_th": "เรียงความมีโครงสร้างที่ชัดเจน"
    },
    {
        "id": 548,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Topic",
        "phonetic": "ทอป-ปิค",
        "th": "หัวข้อ",
        "type": "Noun",
        "example_en": "The topic of today's lecture is biology.",
        "example_th": "หัวข้อการบรรยายในวันนี้คือชีววิทยา"
    },
    {
        "id": 549,
        "category": "toefl_speaking",
        "level": 5,
        "en": "Acknowledge",
        "phonetic": "แอค-นอล-เลจ",
        "th": "ยอมรับ",
        "type": "Verb",
        "example_en": "I acknowledge that I made a mistake.",
        "example_th": "ฉันยอมรับว่าฉันทำผิดพลาด"
    },
    {
        "id": 550,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Argue_alt",
        "phonetic": "อาร์-กิว",
        "th": "โต้แย้ง",
        "type": "Verb",
        "example_en": "Some argue that homework is unnecessary.",
        "example_th": "บางคนโต้แย้งว่าการบ้านเป็นสิ่งที่ไม่จำเป็น"
    },
    {
        "id": 551,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Assume",
        "phonetic": "แอส-ซูม",
        "th": "สันนิษฐาน",
        "type": "Verb",
        "example_en": "Do not assume everything you read is true.",
        "example_th": "อย่าทึกทักเอาว่าทุกสิ่งที่คุณอ่านเป็นความจริง"
    },
    {
        "id": 552,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Claim",
        "phonetic": "เคลม",
        "th": "กล่าวอ้าง",
        "type": "Verb/Noun",
        "example_en": "The author claims that technology harms us.",
        "example_th": "ผู้เขียนอ้างว่าเทคโนโลยีเป็นอันตรายต่อเรา"
    },
    {
        "id": 553,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Conclude",
        "phonetic": "คอน-คลูด",
        "th": "สรุป",
        "type": "Verb",
        "example_en": "I would like to conclude by saying...",
        "example_th": "ฉันขอสรุปโดยกล่าวว่า..."
    },
    {
        "id": 554,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Criticize",
        "phonetic": "คริ-ติ-ไซซ์",
        "th": "วิจารณ์",
        "type": "Verb",
        "example_en": "Many people criticize the government's policy.",
        "example_th": "ผู้คนจำนวนมากวิพากษ์วิจารณ์นโยบายของรัฐบาล"
    },
    {
        "id": 555,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Defend",
        "phonetic": "ดี-เฟนด์",
        "th": "ปกป้อง/แก้ต่าง",
        "type": "Verb",
        "example_en": "She had to defend her thesis.",
        "example_th": "เธอต้องปกป้องวิทยานิพนธ์ของเธอ"
    },
    {
        "id": 556,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Discuss",
        "phonetic": "ดิส-คัส",
        "th": "อภิปราย",
        "type": "Verb",
        "example_en": "We will discuss the pros and cons.",
        "example_th": "เราจะหารือเกี่ยวกับข้อดีและข้อเสีย"
    },
    {
        "id": 557,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Emphasize_alt",
        "phonetic": "เอ็ม-ฟะ-ไซซ์",
        "th": "เน้นย้ำ",
        "type": "Verb",
        "example_en": "I want to emphasize the importance of education.",
        "example_th": "ฉันต้องการเน้นย้ำถึงความสำคัญของการศึกษา"
    },
    {
        "id": 558,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Examine",
        "phonetic": "เอ็ก-แซม-มิน",
        "th": "ตรวจสอบ/พิจารณา",
        "type": "Verb",
        "example_en": "Let us examine the facts.",
        "example_th": "เรามาตรวจสอบข้อเท็จจริงกันเถอะ"
    },
    {
        "id": 559,
        "category": "toefl_speaking",
        "level": 6,
        "en": "Explain",
        "phonetic": "เอ็กซ์-เพลน",
        "th": "อธิบาย",
        "type": "Verb",
        "example_en": "Can you explain why you disagree?",
        "example_th": "คุณช่วยอธิบายได้ไหมว่าทำไมคุณถึงไม่เห็นด้วย?"
    },
    {
        "id": 560,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Highlight",
        "phonetic": "ไฮ-ไลท์",
        "th": "เน้นให้เห็นเด่นชัด",
        "type": "Verb",
        "example_en": "The report highlights the key issues.",
        "example_th": "รายงานเน้นย้ำถึงประเด็นสำคัญ"
    },
    {
        "id": 561,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Illustrate_alt",
        "phonetic": "อิล-ลัส-เตรท",
        "th": "ยกตัวอย่างประกอบ",
        "type": "Verb",
        "example_en": "I will illustrate my point with an example.",
        "example_th": "ฉันจะยกตัวอย่างเพื่ออธิบายประเด็นของฉัน"
    },
    {
        "id": 562,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Interpret",
        "phonetic": "อิน-เทอร์-พรีท",
        "th": "ตีความ",
        "type": "Verb",
        "example_en": "How do you interpret this poem?",
        "example_th": "คุณตีความบทกวีนี้อย่างไร?"
    },
    {
        "id": 563,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Justify",
        "phonetic": "จัส-ติ-ไฟ",
        "th": "แสดงเหตุผลสนับสนุน",
        "type": "Verb",
        "example_en": "You must justify your answer.",
        "example_th": "คุณต้องให้เหตุผลประกอบคำตอบของคุณ"
    },
    {
        "id": 564,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Maintain",
        "phonetic": "เมน-เทน",
        "th": "ยืนกราน/รักษา",
        "type": "Verb",
        "example_en": "He maintains that he is innocent.",
        "example_th": "เขายืนกรานว่าเขาเป็นผู้บริสุทธิ์"
    },
    {
        "id": 565,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Mention_alt",
        "phonetic": "เมน-ชัน",
        "th": "กล่าวถึง",
        "type": "Verb",
        "example_en": "Did I mention that I have a dog?",
        "example_th": "ฉันเคยบอกหรือเปล่าว่าฉันมีสุนัข?"
    },
    {
        "id": 566,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Note",
        "phonetic": "โน้ท",
        "th": "สังเกต/กล่าวถึง",
        "type": "Verb",
        "example_en": "It is important to note that times have changed.",
        "example_th": "สิ่งสำคัญคือต้องสังเกตว่ายุคสมัยเปลี่ยนไปแล้ว"
    },
    {
        "id": 567,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Observe",
        "phonetic": "ออบ-เซิร์ฟ",
        "th": "สังเกตเห็น/ให้ความเห็น",
        "type": "Verb",
        "example_en": "He observed that the sky was getting dark.",
        "example_th": "เขาสังเกตเห็นว่าท้องฟ้าเริ่มมืดลง"
    },
    {
        "id": 568,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Persuade",
        "phonetic": "เพอร์-สเวด",
        "th": "โน้มน้าว",
        "type": "Verb",
        "example_en": "I am trying to persuade my parents.",
        "example_th": "ฉันพยายามเกลี้ยกล่อมพ่อแม่ของฉัน"
    },
    {
        "id": 569,
        "category": "toefl_speaking",
        "level": 7,
        "en": "Point out",
        "phonetic": "พอยท์ เอาท์",
        "th": "ชี้ให้เห็น",
        "type": "Phrasal Verb",
        "example_en": "I must point out a flaw in your argument.",
        "example_th": "ฉันต้องชี้ให้เห็นข้อบกพร่องในข้อโต้แย้งของคุณ"
    },
    {
        "id": 570,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Propose",
        "phonetic": "โปร-โพส",
        "th": "เสนอ",
        "type": "Verb",
        "example_en": "I propose a new solution.",
        "example_th": "ฉันขอเสนอวิธีแก้ปัญหาแบบใหม่"
    },
    {
        "id": 571,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Question",
        "phonetic": "เควส-ชัน",
        "th": "ตั้งคำถาม",
        "type": "Verb",
        "example_en": "I question the validity of this study.",
        "example_th": "ฉันตั้งคำถามถึงความถูกต้องของการศึกษานี้"
    },
    {
        "id": 572,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Recognize",
        "phonetic": "เรค-คอก-ไนซ์",
        "th": "ตระหนัก/ยอมรับ",
        "type": "Verb",
        "example_en": "We must recognize the danger.",
        "example_th": "เราต้องตระหนักถึงอันตราย"
    },
    {
        "id": 573,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Recommend",
        "phonetic": "เรค-คอม-เมนด์",
        "th": "แนะนำ",
        "type": "Verb",
        "example_en": "I strongly recommend reading this book.",
        "example_th": "ฉันขอแนะนำอย่างยิ่งให้อ่านหนังสือเล่มนี้"
    },
    {
        "id": 574,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Refute",
        "phonetic": "รี-ฟิวท์",
        "th": "หักล้าง(ข้อโต้แย้ง)",
        "type": "Verb",
        "example_en": "He failed to refute the evidence.",
        "example_th": "เขาล้มเหลวในการหักล้างหลักฐาน"
    },
    {
        "id": 575,
        "category": "toefl_speaking",
        "level": 8,
        "en": "State_alt",
        "phonetic": "สเตท",
        "th": "กล่าวระบุ",
        "type": "Verb",
        "example_en": "The speaker stated his opinion clearly.",
        "example_th": "ผู้พูดแสดงความคิดเห็นอย่างชัดเจน"
    },
    {
        "id": 576,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Suggest",
        "phonetic": "ซัก-เจสท์",
        "th": "เสนอแนะ",
        "type": "Verb",
        "example_en": "I suggest we take a different approach.",
        "example_th": "ฉันเสนอให้เราใช้วิธีการที่ต่างออกไป"
    },
    {
        "id": 577,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Summarize",
        "phonetic": "ซัม-มะ-ไรซ์",
        "th": "สรุป",
        "type": "Verb",
        "example_en": "To summarize, this is a complex issue.",
        "example_th": "โดยสรุปแล้ว นี่เป็นปัญหาที่ซับซ้อน"
    },
    {
        "id": 578,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Support_alt",
        "phonetic": "ซัพ-พอร์ต",
        "th": "สนับสนุน",
        "type": "Verb",
        "example_en": "Statistics support this claim.",
        "example_th": "สถิติสนับสนุนคำกล่าวอ้างนี้"
    },
    {
        "id": 579,
        "category": "toefl_speaking",
        "level": 8,
        "en": "Agree",
        "phonetic": "อะ-กรี",
        "th": "เห็นด้วย",
        "type": "Verb",
        "example_en": "I completely agree with the speaker.",
        "example_th": "ฉันเห็นด้วยกับผู้พูดอย่างสมบูรณ์"
    },
    {
        "id": 580,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Disagree",
        "phonetic": "ดิส-อะ-กรี",
        "th": "ไม่เห็นด้วย",
        "type": "Verb",
        "example_en": "I strongly disagree with that statement.",
        "example_th": "ฉันไม่เห็นด้วยอย่างยิ่งกับคำกล่าวนั้น"
    },
    {
        "id": 581,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Believe_alt",
        "phonetic": "บิ-ลีฟ",
        "th": "เชื่อว่า",
        "type": "Verb",
        "example_en": "I believe that early childhood education is vital.",
        "example_th": "ฉันเชื่อว่าการศึกษาปฐมวัยเป็นสิ่งสำคัญ"
    },
    {
        "id": 582,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Consider_alt",
        "phonetic": "คอน-ซิ-เดอร์",
        "th": "พิจารณา",
        "type": "Verb",
        "example_en": "We should consider the long-term effects.",
        "example_th": "เราควรพิจารณาถึงผลกระทบระยะยาว"
    },
    {
        "id": 583,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Compare_alt",
        "phonetic": "คอม-แพร์",
        "th": "เปรียบเทียบ",
        "type": "Verb",
        "example_en": "If we compare the two systems...",
        "example_th": "ถ้าเราเปรียบเทียบทั้งสองระบบ..."
    },
    {
        "id": 584,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Contrast_alt",
        "phonetic": "คอน-ทราสท์",
        "th": "เปรียบเทียบความแตกต่าง",
        "type": "Verb",
        "example_en": "By contrast, the new method is faster.",
        "example_th": "ในทางตรงกันข้าม วิธีการใหม่นั้นเร็วกว่า"
    },
    {
        "id": 585,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Elaborate",
        "phonetic": "อี-แลบ-โบ-เรท",
        "th": "อธิบายเพิ่มเติม",
        "type": "Verb",
        "example_en": "Could you elaborate on that point?",
        "example_th": "คุณช่วยอธิบายประเด็นนั้นเพิ่มเติมได้ไหม?"
    },
    {
        "id": 586,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Specify",
        "phonetic": "สเป-ซิ-ไฟ",
        "th": "ระบุรายละเอียด",
        "type": "Verb",
        "example_en": "Please specify what you need.",
        "example_th": "โปรดระบุรายละเอียดสิ่งที่คุณต้องการ"
    },
    {
        "id": 587,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Advocate",
        "phonetic": "แอด-โว-เคท",
        "th": "สนับสนุน/ทนาย",
        "type": "Verb/Noun",
        "example_en": "She advocates for environmental protection.",
        "example_th": "เธอสนับสนุนการปกป้องสิ่งแวดล้อม"
    },
    {
        "id": 588,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Deny",
        "phonetic": "ดี-นาย",
        "th": "ปฏิเสธ",
        "type": "Verb",
        "example_en": "The company denies any wrongdoing.",
        "example_th": "บริษัทปฏิเสธการกระทำผิดใดๆ"
    },
    {
        "id": 589,
        "category": "toefl_speaking",
        "level": 9,
        "en": "Evaluate",
        "phonetic": "อี-แวล-ลู-เอท",
        "th": "ประเมิน",
        "type": "Verb",
        "example_en": "We need to evaluate the risks carefully.",
        "example_th": "เราจำเป็นต้องประเมินความเสี่ยงอย่างรอบคอบ"
    },
    {
        "id": 590,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Forecast",
        "phonetic": "ฟอร์-คาสท์",
        "th": "พยากรณ์",
        "type": "Verb",
        "example_en": "They forecast an increase in population.",
        "example_th": "พวกเขาคาดการณ์ว่าประชากรจะเพิ่มขึ้น"
    },
    {
        "id": 591,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Generalize",
        "phonetic": "เจน-เนอ-รัล-ไลซ์",
        "th": "กล่าวสรุปทั่วๆ ไป",
        "type": "Verb",
        "example_en": "It is unfair to generalize about all teenagers.",
        "example_th": "มันไม่ยุติธรรมที่จะเหมารวมวัยรุ่นทั้งหมด"
    },
    {
        "id": 592,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Infer",
        "phonetic": "อิน-เฟอร์",
        "th": "อนุมาน",
        "type": "Verb",
        "example_en": "What can we infer from this passage?",
        "example_th": "เราสามารถอนุมานอะไรได้จากข้อความนี้?"
    },
    {
        "id": 593,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Perceive",
        "phonetic": "เพอร์-ซีฟ",
        "th": "รับรู้/เข้าใจ",
        "type": "Verb",
        "example_en": "How do people perceive this brand?",
        "example_th": "ผู้คนรับรู้ถึงแบรนด์นี้อย่างไร?"
    },
    {
        "id": 594,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Predict_alt",
        "phonetic": "พรี-ดิคท์",
        "th": "ทำนาย",
        "type": "Verb",
        "example_en": "No one can predict the future with certainty.",
        "example_th": "ไม่มีใครสามารถทำนายอนาคตได้อย่างแน่นอน"
    },
    {
        "id": 595,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Reiterate",
        "phonetic": "รี-อิท-เทอ-เรท",
        "th": "กล่าวย้ำ",
        "type": "Verb",
        "example_en": "Let me reiterate my main point.",
        "example_th": "ฉันขอกล่าวย้ำประเด็นหลักของฉันอีกครั้ง"
    },
    {
        "id": 596,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Stipulate",
        "phonetic": "สติ-พิว-เลท",
        "th": "ระบุเป็นเงื่อนไข",
        "type": "Verb",
        "example_en": "The contract stipulates a strict deadline.",
        "example_th": "สัญญาระบุเงื่อนไขกำหนดเวลาที่เข้มงวด"
    },
    {
        "id": 597,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Validate",
        "phonetic": "แวล-ลิ-เดท",
        "th": "ทำให้มีผล/พิสูจน์ว่าจริง",
        "type": "Verb",
        "example_en": "This data validates our earlier findings.",
        "example_th": "ข้อมูลนี้พิสูจน์ว่าผลการค้นพบก่อนหน้านี้ของเราเป็นความจริง"
    },
    {
        "id": 598,
        "category": "toefl_speaking",
        "level": 10,
        "en": "Verify",
        "phonetic": "เว-ริ-ไฟ",
        "th": "ตรวจสอบความถูกต้อง",
        "type": "Verb",
        "example_en": "I need to verify this information first.",
        "example_th": "ฉันต้องตรวจสอบข้อมูลนี้ก่อน"
    }
];
const quizData = {
    "toeic_listening": {
        "1": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Departure",
                "options": [
                    "Boarding",
                    "Arrival",
                    "Departure",
                    "Ticket"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Ticket",
                "options": [
                    "Luggage",
                    "Departure",
                    "Ticket",
                    "Passenger"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Luggage",
                "options": [
                    "Arrival",
                    "Announce",
                    "Delay",
                    "Luggage"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Passenger",
                "options": [
                    "Announce",
                    "Arrival",
                    "Passenger",
                    "Cancel"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Platform",
                "options": [
                    "Platform",
                    "Announce",
                    "Departure",
                    "Delay"
                ],
                "answer": 0
            }
        ],
        "2": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Colleague",
                "options": [
                    "Schedule",
                    "Colleague",
                    "Manager",
                    "Meeting"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Discuss",
                "options": [
                    "Meeting",
                    "Discuss",
                    "Manager",
                    "Client"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Manager",
                "options": [
                    "Report",
                    "Manager",
                    "Colleague",
                    "Office"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Schedule",
                "options": [
                    "Meeting",
                    "Client",
                    "Schedule",
                    "Office"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Meeting",
                "options": [
                    "Schedule",
                    "Client",
                    "Manager",
                    "Meeting"
                ],
                "answer": 3
            }
        ],
        "3": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Interview",
                "options": [
                    "Resume",
                    "Luggage_alt",
                    "Hire",
                    "Interview"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Briefcase",
                "options": [
                    "Overtime",
                    "Briefcase",
                    "Flight",
                    "Luggage_alt"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Resume",
                "options": [
                    "Interview",
                    "Commute",
                    "Hire",
                    "Resume"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Overtime",
                "options": [
                    "Commute",
                    "Hotel",
                    "Overtime",
                    "Briefcase"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Commute",
                "options": [
                    "Hotel",
                    "Flight",
                    "Commute",
                    "Hire"
                ],
                "answer": 2
            }
        ],
        "4": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Evaluate",
                "options": [
                    "Implement",
                    "Proposal",
                    "Evaluate",
                    "Budget"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Strategy",
                "options": [
                    "Deadline",
                    "Strategy",
                    "Proposal",
                    "Negotiate"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Feedback",
                "options": [
                    "Revenue",
                    "Launch",
                    "Proposal",
                    "Feedback"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Revenue",
                "options": [
                    "Strategy",
                    "Feedback",
                    "Proposal",
                    "Revenue"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Deadline",
                "options": [
                    "Feedback",
                    "Deadline",
                    "Launch",
                    "Negotiate"
                ],
                "answer": 1
            }
        ],
        "5": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Maintain",
                "options": [
                    "Objective",
                    "Maintain",
                    "Require",
                    "Procedure"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Update",
                "options": [
                    "Priority",
                    "Require",
                    "Update",
                    "Comply"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Priority",
                "options": [
                    "Objective",
                    "Priority",
                    "Maintain",
                    "Significant"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Ensure",
                "options": [
                    "Facility",
                    "Ensure",
                    "Update",
                    "Priority"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Procedure",
                "options": [
                    "Require",
                    "Procedure",
                    "Ensure",
                    "Significant"
                ],
                "answer": 1
            }
        ],
        "6": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Machine",
                "options": [
                    "Machine",
                    "Familiar",
                    "Information",
                    "Destination"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Counter",
                "options": [
                    "Occasion",
                    "Aisle",
                    "Counter",
                    "Guarantee"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Journal",
                "options": [
                    "Journal",
                    "Baggage",
                    "Counter",
                    "Information"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Occasion",
                "options": [
                    "Information",
                    "Occasion",
                    "Journal",
                    "Baggage"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Baggage",
                "options": [
                    "Destination",
                    "Baggage",
                    "Counter",
                    "Information"
                ],
                "answer": 1
            }
        ],
        "7": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Yield",
                "options": [
                    "Receipt",
                    "Quality",
                    "Yield",
                    "Terminal"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Quality",
                "options": [
                    "Valuable",
                    "Quality",
                    "Yield",
                    "Package"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Terminal",
                "options": [
                    "Receipt",
                    "Terminal",
                    "Accompany",
                    "Zone"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Accompany",
                "options": [
                    "Accompany",
                    "Signature",
                    "Valuable",
                    "Zone"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Signature",
                "options": [
                    "Terminal",
                    "Receipt",
                    "Signature",
                    "Accompany"
                ],
                "answer": 2
            }
        ],
        "8": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Board",
                "options": [
                    "Board",
                    "Cancel_alt",
                    "Luggage_alt",
                    "Forecast"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Damage",
                "options": [
                    "Economy",
                    "Gate",
                    "Damage",
                    "Join"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Join",
                "options": [
                    "Gate",
                    "Join",
                    "Forecast",
                    "Luggage_alt"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Gate",
                "options": [
                    "Handle",
                    "Gate",
                    "Damage",
                    "Economy"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Luggage_alt",
                "options": [
                    "Handle",
                    "Item",
                    "Luggage_alt",
                    "Cancel_alt"
                ],
                "answer": 2
            }
        ],
        "9": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Reservation",
                "options": [
                    "Track",
                    "Upgrade",
                    "Reservation",
                    "Option"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Notice",
                "options": [
                    "Security",
                    "Option",
                    "Notice",
                    "Quarter"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Quarter",
                "options": [
                    "Track",
                    "Security",
                    "Upgrade",
                    "Quarter"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Upgrade",
                "options": [
                    "Reservation",
                    "Track",
                    "Option",
                    "Upgrade"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Vehicle",
                "options": [
                    "Upgrade",
                    "Vehicle",
                    "Quarter",
                    "Option"
                ],
                "answer": 1
            }
        ],
        "10": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Estimate",
                "options": [
                    "Wait",
                    "Annual",
                    "Estimate",
                    "Frequent"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Charge",
                "options": [
                    "Issue",
                    "Charge",
                    "Frequent",
                    "Guest"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Direct",
                "options": [
                    "Direct",
                    "Charge",
                    "Frequent",
                    "Balance"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Wait",
                "options": [
                    "Estimate",
                    "Annual",
                    "Wait",
                    "Guest"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Issue",
                "options": [
                    "Estimate",
                    "Frequent",
                    "Annual",
                    "Issue"
                ],
                "answer": 3
            }
        ]
    },
    "toeic_reading": {
        "1": [
            {
                "type": "reading",
                "question": "The global ______ is highly competitive.\n\n(แปล: ตลาดโลกมีการแข่งขันสูงมาก)",
                "options": [
                    "Agreement",
                    "Propose",
                    "Investment",
                    "Market"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Our ______ increased by 20% this year.\n\n(แปล: รายได้ของเราเพิ่มขึ้น 20% ในปีนี้)",
                "options": [
                    "Implement",
                    "Market",
                    "Revenue",
                    "Strategy"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "We have a limited ______ for marketing.\n\n(แปล: เรามีงบประมาณจำกัดสำหรับการตลาด)",
                "options": [
                    "Implement",
                    "Investment",
                    "Profit",
                    "Budget"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "We need a new business ______ to win.\n\n(แปล: เราต้องการกลยุทธ์ทางธุรกิจใหม่เพื่อเอาชนะ)",
                "options": [
                    "Investment",
                    "Implement",
                    "Agreement",
                    "Strategy"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Both parties signed the ______ today.\n\n(แปล: ทั้งสองฝ่ายได้ลงนามในข้อตกลงวันนี้)",
                "options": [
                    "Investment",
                    "Agreement",
                    "Evaluate",
                    "Market"
                ],
                "answer": 1
            }
        ],
        "2": [
            {
                "type": "reading",
                "question": "Human ______s is an important department.\n\n(แปล: ฝ่ายทรัพยากรบุคคลเป็นแผนกที่สำคัญ)",
                "options": [
                    "Forecast",
                    "Launch",
                    "Allocate",
                    "Resource"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "The brand will ______ a new smartphone.\n\n(แปล: แบรนด์จะเปิดตัวสมาร์ทโฟนรุ่นใหม่)",
                "options": [
                    "Competitor",
                    "Allocate",
                    "Campaign",
                    "Launch"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "The government will ______ funds to schools.\n\n(แปล: รัฐบาลจะจัดสรรเงินทุนให้กับโรงเรียน)",
                "options": [
                    "Allocate",
                    "Promote",
                    "Launch",
                    "Target"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "He was ______d to the position of director.\n\n(แปล: เขาได้รับการเลื่อนตำแหน่งเป็นผู้อำนวยการ)",
                "options": [
                    "Promote",
                    "Target",
                    "Trend",
                    "Resource"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "Experts ______ a drop in housing prices.\n\n(แปล: ผู้เชี่ยวชาญคาดการณ์ว่าราคาบ้านจะลดลง)",
                "options": [
                    "Forecast",
                    "Launch",
                    "Competitor",
                    "Analyze"
                ],
                "answer": 0
            }
        ],
        "3": [
            {
                "type": "reading",
                "question": "The laptop comes with a one-year ______.\n\n(แปล: แล็ปท็อปมาพร้อมกับการรับประกันหนึ่งปี)",
                "options": [
                    "Policy",
                    "Discount",
                    "Inventory",
                    "Warranty"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "The ______ was sent to the client.\n\n(แปล: ใบแจ้งหนี้ถูกส่งไปยังลูกค้าแล้ว)",
                "options": [
                    "Invoice",
                    "Expense",
                    "Guarantee",
                    "Discount"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "We need to check the ______ level.\n\n(แปล: เราจำเป็นต้องตรวจสอบระดับสินค้าคงคลัง)",
                "options": [
                    "Warranty",
                    "Shipment",
                    "Inventory",
                    "Discount"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "We ______ the quality of our products.\n\n(แปล: เรารับประกันคุณภาพของสินค้าของเรา)",
                "options": [
                    "Guarantee",
                    "Expense",
                    "Contract",
                    "Inventory"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "The ______ will arrive next week.\n\n(แปล: การจัดส่งสินค้าจะมาถึงในสัปดาห์หน้า)",
                "options": [
                    "Shipment",
                    "Policy",
                    "Discount",
                    "Invoice"
                ],
                "answer": 0
            }
        ],
        "4": [
            {
                "type": "reading",
                "question": "You must ______ a visa before traveling.\n\n(แปล: คุณต้องได้รับวีซ่าก่อนเดินทาง)",
                "options": [
                    "Consult",
                    "Obtain",
                    "Exceed",
                    "Determine"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "We ______ the network 24/7.\n\n(แปล: เราเฝ้าสังเกตเครือข่ายตลอด 24 ชั่วโมง)",
                "options": [
                    "Investigate",
                    "Hesitate",
                    "Consult",
                    "Monitor"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Please do not ______ to contact us.\n\n(แปล: โปรดอย่าลังเลที่จะติดต่อเรา)",
                "options": [
                    "Obtain",
                    "Accommodation",
                    "Hesitate",
                    "Identify"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "Sales ______ed our expectations.\n\n(แปล: ยอดขายทะลุความคาดหมายของเรา)",
                "options": [
                    "Exceed",
                    "Investigate",
                    "Determine",
                    "Monitor"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "We need to ______ the core problem.\n\n(แปล: เราต้องระบุปัญหาหลัก)",
                "options": [
                    "Obtain",
                    "Identify",
                    "Determine",
                    "Consult"
                ],
                "answer": 1
            }
        ],
        "5": [
            {
                "type": "reading",
                "question": "Can you be more ______?\n\n(แปล: คุณช่วยระบุให้เฉพาะเจาะจงกว่านี้ได้ไหม?)",
                "options": [
                    "Specific",
                    "Recommend",
                    "Submit",
                    "Participate"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "Please ______ your email address.\n\n(แปล: โปรดตรวจสอบความถูกต้องของที่อยู่อีเมลของคุณ)",
                "options": [
                    "Verify",
                    "Sufficient",
                    "Recommend",
                    "Valid"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "The hotel ______s free Wi-Fi.\n\n(แปล: โรงแรมให้บริการ Wi-Fi ฟรี)",
                "options": [
                    "Submit",
                    "Recommend",
                    "Provide",
                    "Resolve"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "Everyone is encouraged to ______.\n\n(แปล: ทุกคนได้รับการส่งเสริมให้เข้าร่วม)",
                "options": [
                    "Provide",
                    "Recommend",
                    "Verify",
                    "Participate"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Your ticket is no longer ______.\n\n(แปล: ตั๋วของคุณใช้ไม่ได้อีกต่อไป)",
                "options": [
                    "Provide",
                    "Valid",
                    "Specific",
                    "Participate"
                ],
                "answer": 1
            }
        ],
        "6": [
            {
                "type": "reading",
                "question": "Taxes will be ______ed from your salary.\n\n(แปล: ภาษีจะถูกหักออกจากเงินเดือนของคุณ)",
                "options": [
                    "Broker",
                    "Gross",
                    "Deduct",
                    "Franchise"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "Non-profit organizations are tax-______.\n\n(แปล: องค์กรไม่แสวงหาผลกำไรได้รับการยกเว้นภาษี)",
                "options": [
                    "Exempt",
                    "Gross",
                    "Deduct",
                    "Headquarters"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "The real estate ______ showed us the house.\n\n(แปล: นายหน้าอสังหาริมทรัพย์พาเราไปดูบ้าน)",
                "options": [
                    "Broker",
                    "Franchise",
                    "Clause",
                    "Headquarters"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "Please read the penalty ______ carefully.\n\n(แปล: โปรดอ่านข้อสัญญาการปรับอย่างละเอียด)",
                "options": [
                    "Exempt",
                    "Clause",
                    "Headquarters",
                    "Jobless"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The company has many valuable ______s.\n\n(แปล: บริษัทมีสินทรัพย์ที่มีค่ามากมาย)",
                "options": [
                    "Headquarters",
                    "Asset",
                    "Jobless",
                    "Clause"
                ],
                "answer": 1
            }
        ],
        "7": [
            {
                "type": "reading",
                "question": "The ______ bills include water and electricity.\n\n(แปล: ค่าสาธารณูปโภคครอบคลุมค่าน้ำและค่าไฟฟ้า)",
                "options": [
                    "Patent",
                    "Utility",
                    "Lease",
                    "Net"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The company filed a ______ for the new technology.\n\n(แปล: บริษัทได้ยื่นจดสิทธิบัตรสำหรับเทคโนโลยีใหม่)",
                "options": [
                    "Margin",
                    "Net",
                    "Patent",
                    "Quota"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "He holds a 20% ______ in the business.\n\n(แปล: เขาถือหุ้น 20% ในธุรกิจนี้)",
                "options": [
                    "Quota",
                    "Utility",
                    "Output",
                    "Stake"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "New ______s on imported goods were introduced.\n\n(แปล: มีการนำอัตราภาษีใหม่สำหรับสินค้านำเข้ามาใช้)",
                "options": [
                    "Retail",
                    "Tariff",
                    "Margin",
                    "Quota"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "______ income rose by 10%.\n\n(แปล: รายได้สุทธิเพิ่มขึ้น 10%)",
                "options": [
                    "Quota",
                    "Output",
                    "Stake",
                    "Net"
                ],
                "answer": 3
            }
        ],
        "8": [
            {
                "type": "reading",
                "question": "The investment offers a high ______.\n\n(แปล: การลงทุนให้ผลตอบแทนสูง)",
                "options": [
                    "Yield",
                    "Approve",
                    "Compensation",
                    "Bankrupt"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "We buy materials at ______ prices.\n\n(แปล: เราซื้อวัสดุในราคาขายส่ง)",
                "options": [
                    "Approve",
                    "Wholesale",
                    "Vendor",
                    "Guarantee_alt"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "______: The television comes with a two-year guarantee.\n\n(แปล: โทรทัศน์มาพร้อมกับการรับประกันสองปี)",
                "options": [
                    "Vendor",
                    "Yield",
                    "Guarantee_alt",
                    "Entrepreneur"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "The new car has many advanced safety ______s.\n\n(แปล: รถยนต์รุ่นใหม่มีคุณลักษณะด้านความปลอดภัยขั้นสูงมากมาย)",
                "options": [
                    "Wholesale",
                    "Approve",
                    "Feature",
                    "Vendor"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "We ______ products worldwide.\n\n(แปล: เราจัดจำหน่ายสินค้าไปทั่วโลก)",
                "options": [
                    "Entrepreneur",
                    "Guarantee_alt",
                    "Distribute",
                    "Vendor"
                ],
                "answer": 2
            }
        ],
        "9": [
            {
                "type": "reading",
                "question": "______: The marketing team will launch the campaign next week.\n\n(แปล: ทีมการตลาดจะเปิดตัวแคมเปญในสัปดาห์หน้า)",
                "options": [
                    "Refund_alt",
                    "Incentive",
                    "Launch_alt",
                    "Hierarchical"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "We publish a ______ report.\n\n(แปล: เราจัดพิมพ์รายงานรายไตรมาส)",
                "options": [
                    "Portfolio",
                    "Merger",
                    "Quarterly",
                    "Niche"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "Many companies ______ their IT services.\n\n(แปล: บริษัทหลายแห่งจ้างบุคคลภายนอกให้บริการด้านไอที)",
                "options": [
                    "Outsource",
                    "Refund_alt",
                    "Portfolio",
                    "Merger"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "The ______ between the two banks was successful.\n\n(แปล: การควบรวมกิจการระหว่างสองธนาคารประสบความสำเร็จ)",
                "options": [
                    "Merger",
                    "Launch_alt",
                    "Portfolio",
                    "Hierarchical"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "You must ______ your business expenses.\n\n(แปล: คุณต้องแสดงเหตุผลสำหรับค่าใช้จ่ายทางธุรกิจของคุณ)",
                "options": [
                    "Portfolio",
                    "Justify",
                    "Merger",
                    "Refund_alt"
                ],
                "answer": 1
            }
        ],
        "10": [
            {
                "type": "reading",
                "question": "This product sets a new ______ for quality.\n\n(แปล: ผลิตภัณฑ์นี้สร้างเกณฑ์มาตรฐานใหม่สำหรับคุณภาพ)",
                "options": [
                    "Turnover",
                    "Benchmark",
                    "Warrant",
                    "Acquisition"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The ______ will double our market share.\n\n(แปล: การเข้าซื้อกิจการจะเพิ่มส่วนแบ่งการตลาดของเราเป็นสองเท่า)",
                "options": [
                    "Diversify",
                    "Benchmark",
                    "Acquisition",
                    "Viable"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "We need to ______ our product range.\n\n(แปล: เราจำเป็นต้องเพิ่มความหลากหลายของสายผลิตภัณฑ์)",
                "options": [
                    "Turnover",
                    "Diversify",
                    "Unanimous",
                    "Warrant"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The event is ______ed by local businesses.\n\n(แปล: กิจกรรมนี้ได้รับการสนับสนุนจากธุรกิจในท้องถิ่น)",
                "options": [
                    "Acquisition",
                    "Comply",
                    "Sponsor",
                    "Unanimous"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "We need to find a commercially ______ solution.\n\n(แปล: เราจำเป็นต้องหาวิธีแก้ปัญหาที่ทำกำไรได้ในเชิงพาณิชย์)",
                "options": [
                    "Unanimous",
                    "Warrant",
                    "Viable",
                    "Benchmark"
                ],
                "answer": 2
            }
        ]
    },
    "toeic_speaking": {
        "1": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'แนะนำ'",
                "answerText": "Suggest",
                "options": [
                    "Present",
                    "Summarize",
                    "Negotiate",
                    "Suggest"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ขอโทษ'",
                "answerText": "Apologize",
                "options": [
                    "Apologize",
                    "Recommend",
                    "Explain",
                    "Present"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ไม่เห็นด้วย'",
                "answerText": "Disagree",
                "options": [
                    "Recommend",
                    "Apologize",
                    "Disagree",
                    "Explain"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'นำเสนอ'",
                "answerText": "Present",
                "options": [
                    "Recommend",
                    "Present",
                    "Explain",
                    "Apologize"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทำให้ชัดเจน'",
                "answerText": "Clarify",
                "options": [
                    "Present",
                    "Disagree",
                    "Recommend",
                    "Clarify"
                ],
                "answer": 3
            }
        ],
        "2": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทำให้เชื่อ'",
                "answerText": "Convince",
                "options": [
                    "Persuade",
                    "Illustrate",
                    "Convince",
                    "Respond"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'โน้มน้าว'",
                "answerText": "Persuade",
                "options": [
                    "Communicate",
                    "Emphasize",
                    "Persuade",
                    "Introduce"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตอบกลับ'",
                "answerText": "Respond",
                "options": [
                    "Emphasize",
                    "Respond",
                    "Persuade",
                    "Convince"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เข้าร่วม'",
                "answerText": "Participate",
                "options": [
                    "Participate",
                    "Express",
                    "Introduce",
                    "Convince"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ยกตัวอย่าง'",
                "answerText": "Illustrate",
                "options": [
                    "Convince",
                    "Persuade",
                    "Illustrate",
                    "Express"
                ],
                "answer": 2
            }
        ],
        "3": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ซาบซึ้ง'",
                "answerText": "Appreciate",
                "options": [
                    "Provide",
                    "Notify",
                    "Appreciate",
                    "Confirm"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ยืนยัน'",
                "answerText": "Confirm",
                "options": [
                    "Discuss",
                    "Confirm",
                    "Ensure",
                    "Appreciate"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทำให้แน่ใจ'",
                "answerText": "Ensure",
                "options": [
                    "Appreciate",
                    "Ensure",
                    "Discuss",
                    "Confirm"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ขออภัย'",
                "answerText": "Apologize_alt",
                "options": [
                    "Apologize_alt",
                    "Notify",
                    "Clarify_alt",
                    "Appreciate"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'จัดหาให้'",
                "answerText": "Provide",
                "options": [
                    "Ensure",
                    "Provide",
                    "Apologize_alt",
                    "Notify"
                ],
                "answer": 1
            }
        ],
        "4": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'รวบรวม'",
                "answerText": "Gather",
                "options": [
                    "Address",
                    "Establish",
                    "Emphasize_alt",
                    "Gather"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สาธิต'",
                "answerText": "Demonstrate",
                "options": [
                    "Demonstrate",
                    "Explain_alt",
                    "Establish",
                    "Evaluate"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'จัดการกับ(ปัญหา)'",
                "answerText": "Address",
                "options": [
                    "Demonstrate",
                    "Explain_alt",
                    "Evaluate",
                    "Address"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'โน้มน้าว'",
                "answerText": "Convince_alt",
                "options": [
                    "Acknowledge",
                    "Anticipate",
                    "Evaluate",
                    "Convince_alt"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ประเมิน'",
                "answerText": "Evaluate",
                "options": [
                    "Evaluate",
                    "Convince_alt",
                    "Gather",
                    "Demonstrate"
                ],
                "answer": 0
            }
        ],
        "5": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เสนอ'",
                "answerText": "Propose",
                "options": [
                    "Indicate",
                    "Propose",
                    "Observe",
                    "Mention"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'แนะนำ'",
                "answerText": "Suggest_alt",
                "options": [
                    "Observe",
                    "Maintain",
                    "Persuade_alt",
                    "Suggest_alt"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'กล่าวถึง'",
                "answerText": "Mention",
                "options": [
                    "Mention",
                    "Propose",
                    "Inquire",
                    "Summarize_alt"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สรุป'",
                "answerText": "Summarize_alt",
                "options": [
                    "Mention",
                    "Summarize_alt",
                    "Persuade_alt",
                    "Indicate"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สอบถาม'",
                "answerText": "Inquire",
                "options": [
                    "Observe",
                    "Summarize_alt",
                    "Suggest_alt",
                    "Inquire"
                ],
                "answer": 3
            }
        ],
        "6": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ปรับตัว'",
                "answerText": "Adapt",
                "options": [
                    "Benefit",
                    "Justify",
                    "Adapt",
                    "Focus"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'มุ่งเน้น'",
                "answerText": "Focus",
                "options": [
                    "Essential",
                    "Benefit",
                    "Guideline",
                    "Focus"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'แนวทาง'",
                "answerText": "Guideline",
                "options": [
                    "Guideline",
                    "Essential",
                    "Adapt",
                    "Benefit"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'อธิบายเหตุผล'",
                "answerText": "Justify",
                "options": [
                    "Essential",
                    "Highlight",
                    "Justify",
                    "Focus"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'จำเป็นอย่างยิ่ง'",
                "answerText": "Essential",
                "options": [
                    "Benefit",
                    "Essential",
                    "Conclude",
                    "Adapt"
                ],
                "answer": 1
            }
        ],
        "7": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตระหนัก/จดจำได้'",
                "answerText": "Recognize",
                "options": [
                    "Recognize",
                    "Question",
                    "Locate",
                    "Outline"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทำให้สูงสุด'",
                "answerText": "Maximize",
                "options": [
                    "Maximize",
                    "Locate",
                    "Target",
                    "Persuade_alt"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สังเกต/จดจำ'",
                "answerText": "Note",
                "options": [
                    "Outline",
                    "Note",
                    "Locate",
                    "Target"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตั้งคำถาม'",
                "answerText": "Question",
                "options": [
                    "Question",
                    "Knowledge",
                    "Summarize_alt",
                    "Persuade_alt"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เป้าหมาย'",
                "answerText": "Target",
                "options": [
                    "Locate",
                    "Note",
                    "Recognize",
                    "Target"
                ],
                "answer": 3
            }
        ],
        "8": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ระดมสมอง'",
                "answerText": "Brainstorm",
                "options": [
                    "Clarify_alt",
                    "Facilitate",
                    "Brainstorm",
                    "Analyze"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'วิเคราะห์'",
                "answerText": "Analyze",
                "options": [
                    "Facilitate",
                    "Analyze",
                    "Welcome_alt",
                    "Yield"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทำให้ง่ายขึ้น/อำนวยความสะดวก'",
                "answerText": "Facilitate",
                "options": [
                    "Understand",
                    "Yield",
                    "Facilitate",
                    "Brainstorm"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เข้าใจ'",
                "answerText": "Understand",
                "options": [
                    "Brainstorm",
                    "Demonstrate_alt",
                    "Understand",
                    "Verify"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'แสดงให้เห็น'",
                "answerText": "Demonstrate_alt",
                "options": [
                    "Yield",
                    "Clarify_alt",
                    "Demonstrate_alt",
                    "Verify"
                ],
                "answer": 2
            }
        ],
        "9": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'จัดระเบียบ/จัดเตรียม'",
                "answerText": "Organize",
                "options": [
                    "Organize",
                    "Handle",
                    "Implement",
                    "Generate"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตัดสิน'",
                "answerText": "Judge",
                "options": [
                    "Organize",
                    "Keep",
                    "Judge",
                    "Manage"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'จัดการ'",
                "answerText": "Manage",
                "options": [
                    "Keep",
                    "Handle",
                    "Present_alt",
                    "Manage"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เจรจา'",
                "answerText": "Negotiate_alt",
                "options": [
                    "Lead",
                    "Handle",
                    "Negotiate_alt",
                    "Present_alt"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'นำ/เป็นผู้นำ'",
                "answerText": "Lead",
                "options": [
                    "Negotiate_alt",
                    "Manage",
                    "Judge",
                    "Lead"
                ],
                "answer": 3
            }
        ],
        "10": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ให้คุณค่า'",
                "answerText": "Value",
                "options": [
                    "Weigh",
                    "Support",
                    "Tackle",
                    "Value"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'รับมือกับ(ปัญหา)'",
                "answerText": "Tackle",
                "options": [
                    "Tackle",
                    "Review",
                    "Yield_alt",
                    "Weigh"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สนับสนุน'",
                "answerText": "Support",
                "options": [
                    "Weigh",
                    "Zero",
                    "Support",
                    "Review"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ศูนย์/ปรับศูนย์'",
                "answerText": "Zero",
                "options": [
                    "Examine",
                    "Zero",
                    "Value",
                    "Tackle"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'กระตุ้น/เร่งเร้า'",
                "answerText": "Urge",
                "options": [
                    "Urge",
                    "Zero",
                    "Weigh",
                    "Quantify"
                ],
                "answer": 0
            }
        ]
    },
    "toefl_listening": {
        "1": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Assignment",
                "options": [
                    "Library",
                    "Deadline",
                    "Assignment",
                    "Enroll"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Syllabus",
                "options": [
                    "Deadline",
                    "Credit",
                    "Syllabus",
                    "Assignment"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Credit",
                "options": [
                    "Credit",
                    "Library",
                    "Semester",
                    "Syllabus"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Semester",
                "options": [
                    "Syllabus",
                    "Lecture",
                    "Library",
                    "Semester"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Professor",
                "options": [
                    "Campus",
                    "Credit",
                    "Professor",
                    "Deadline"
                ],
                "answer": 2
            }
        ],
        "2": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Observe",
                "options": [
                    "Evidence",
                    "Observe",
                    "Hypothesis",
                    "Experiment"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Identify",
                "options": [
                    "Identify",
                    "Phenomenon",
                    "Explain",
                    "Experiment"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Explain",
                "options": [
                    "Hypothesis",
                    "Observe",
                    "Explain",
                    "Phenomenon"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Hypothesis",
                "options": [
                    "Hypothesis",
                    "Evidence",
                    "Observe",
                    "Theory"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Evidence",
                "options": [
                    "Experiment",
                    "Explain",
                    "Evidence",
                    "Hypothesis"
                ],
                "answer": 2
            }
        ],
        "3": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Article",
                "options": [
                    "Method",
                    "Research",
                    "Survey",
                    "Article"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Research",
                "options": [
                    "Research",
                    "Article",
                    "Method",
                    "Journal"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Method",
                "options": [
                    "Article",
                    "Method",
                    "Participant",
                    "Research"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Participant",
                "options": [
                    "Participant",
                    "Data",
                    "Method",
                    "Journal"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Survey",
                "options": [
                    "Observe_alt",
                    "Survey",
                    "Examine",
                    "Journal"
                ],
                "answer": 1
            }
        ],
        "4": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Analyze",
                "options": [
                    "Academic",
                    "Curriculum",
                    "Analyze",
                    "Enroll_alt"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Concept_alt",
                "options": [
                    "Concept_alt",
                    "Evaluate",
                    "Curriculum",
                    "Campus_alt"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Credit_alt",
                "options": [
                    "Assignment_alt",
                    "Academic",
                    "Analyze",
                    "Credit_alt"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Enroll_alt",
                "options": [
                    "Enroll_alt",
                    "Academic",
                    "Campus_alt",
                    "Curriculum"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Assignment_alt",
                "options": [
                    "Faculty",
                    "Enroll_alt",
                    "Assignment_alt",
                    "Concept_alt"
                ],
                "answer": 2
            }
        ],
        "5": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Prerequisite",
                "options": [
                    "Semester_alt",
                    "Prerequisite",
                    "Plagiarism",
                    "Methodology"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Semester_alt",
                "options": [
                    "Semester_alt",
                    "Literature",
                    "Plagiarism",
                    "Hypothesis_alt"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Scholarship",
                "options": [
                    "Methodology",
                    "Prerequisite",
                    "Scholarship",
                    "Semester_alt"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Objective",
                "options": [
                    "Literature",
                    "Lecture_alt",
                    "Objective",
                    "Methodology"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Paragraph",
                "options": [
                    "Scholarship",
                    "Plagiarism",
                    "Paragraph",
                    "Methodology"
                ],
                "answer": 2
            }
        ],
        "6": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Ecology",
                "options": [
                    "Documentary",
                    "Biology",
                    "Fossil",
                    "Ecology"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Fossil",
                "options": [
                    "Habitat",
                    "Fossil",
                    "Geology",
                    "Astronomy"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Geology",
                "options": [
                    "Fossil",
                    "Geology",
                    "Documentary",
                    "Astronomy"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Biology",
                "options": [
                    "Biology",
                    "Documentary",
                    "Ecology",
                    "Astronomy"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Chemistry",
                "options": [
                    "Chemistry",
                    "Journalism",
                    "Ecology",
                    "Geology"
                ],
                "answer": 0
            }
        ],
        "7": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Kinetic",
                "options": [
                    "Meteorology",
                    "Neanderthal",
                    "Psychology",
                    "Kinetic"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Psychology",
                "options": [
                    "Psychology",
                    "Neanderthal",
                    "Tectonic",
                    "Radiation"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Sociology",
                "options": [
                    "Kinetic",
                    "Quotient",
                    "Tectonic",
                    "Sociology"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Quotient",
                "options": [
                    "Kinetic",
                    "Radiation",
                    "Quotient",
                    "Psychology"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Organism",
                "options": [
                    "Linguistics",
                    "Radiation",
                    "Organism",
                    "Quotient"
                ],
                "answer": 2
            }
        ],
        "8": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Abstract",
                "options": [
                    "Empirical",
                    "Volcano",
                    "Genetics",
                    "Abstract"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Fluctuation",
                "options": [
                    "Empirical",
                    "Zoology",
                    "Deduce",
                    "Fluctuation"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Deduce",
                "options": [
                    "Deduce",
                    "Fluctuation",
                    "Universe",
                    "Botany"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Botany",
                "options": [
                    "Chronological",
                    "Zoology",
                    "Botany",
                    "Empirical"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Universe",
                "options": [
                    "Deduce",
                    "Volcano",
                    "Universe",
                    "Zoology"
                ],
                "answer": 2
            }
        ],
        "9": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Predator",
                "options": [
                    "Quantitative",
                    "Nutrient",
                    "Predator",
                    "Implication"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Observation",
                "options": [
                    "Herbivore",
                    "Predator",
                    "Observation",
                    "Quantitative"
                ],
                "answer": 2
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Justification",
                "options": [
                    "Observation",
                    "Justification",
                    "Implication",
                    "Predator"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Nutrient",
                "options": [
                    "Lunar",
                    "Nutrient",
                    "Kinetics",
                    "Implication"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Migration",
                "options": [
                    "Predator",
                    "Kinetics",
                    "Migration",
                    "Lunar"
                ],
                "answer": 2
            }
        ],
        "10": [
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Zone",
                "options": [
                    "Thermodynamics",
                    "Zone",
                    "Variable",
                    "Wavelength"
                ],
                "answer": 1
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Unprecedented",
                "options": [
                    "Unprecedented",
                    "Aquatic",
                    "Variable",
                    "X-ray"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Wavelength",
                "options": [
                    "Wavelength",
                    "Yield",
                    "Reptile",
                    "Unprecedented"
                ],
                "answer": 0
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Aquatic",
                "options": [
                    "Unprecedented",
                    "Variable",
                    "X-ray",
                    "Aquatic"
                ],
                "answer": 3
            },
            {
                "type": "listening",
                "question": "ฟังเสียงแล้วเลือกคำศัพท์ที่ถูกต้อง",
                "audioText": "Thermodynamics",
                "options": [
                    "Wavelength",
                    "Thermodynamics",
                    "Zone",
                    "Unprecedented"
                ],
                "answer": 1
            }
        ]
    },
    "toefl_reading": {
        "1": [
            {
                "type": "reading",
                "question": "Try to look at the problem from a different ______.\n\n(แปล: พยายามมองปัญหาจากมุมมองที่ต่างออกไป)",
                "options": [
                    "Structure",
                    "Perspective",
                    "Derive",
                    "Interpret"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The architect ______d solar panels into the design.\n\n(แปล: สถาปนิกได้รวมแผงโซลาร์เซลล์เข้าไว้ในการออกแบบ)",
                "options": [
                    "Interpret",
                    "Incorporate",
                    "Adequate",
                    "Assess"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The committee will ______ the impact of the new law.\n\n(แปล: คณะกรรมการจะประเมินผลกระทบของกฎหมายฉบับใหม่)",
                "options": [
                    "Assess",
                    "Evolve",
                    "Consequence",
                    "Adequate"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "How do you ______ the ending of the novel?\n\n(แปล: คุณตีความตอนจบของนวนิยายเรื่องนี้อย่างไร?)",
                "options": [
                    "Significant",
                    "Interpret",
                    "Incorporate",
                    "Perspective"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The word is ______d from a Latin root.\n\n(แปล: คำนี้มีรากศัพท์มาจากภาษาละติน)",
                "options": [
                    "Perspective",
                    "Consequence",
                    "Derive",
                    "Significant"
                ],
                "answer": 2
            }
        ],
        "2": [
            {
                "type": "reading",
                "question": "The author uses examples to ______ his point.\n\n(แปล: ผู้เขียนยกตัวอย่างเพื่ออธิบายประเด็นของเขา)",
                "options": [
                    "Illustrate",
                    "Sequence",
                    "Maintain",
                    "Valid"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "You must have a ______ passport to travel abroad.\n\n(แปล: คุณต้องมีหนังสือเดินทางที่ยังไม่หมดอายุเพื่อเดินทางไปต่างประเทศ)",
                "options": [
                    "Determine",
                    "Illustrate",
                    "Sequence",
                    "Valid"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Follow the ______ of steps in the manual.\n\n(แปล: ทำตามลำดับขั้นตอนในคู่มือ)",
                "options": [
                    "Determine",
                    "Demonstrate",
                    "Abstract",
                    "Sequence"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Can you ______ your decision to quit the job?\n\n(แปล: คุณสามารถให้เหตุผลประกอบการตัดสินใจลาออกจากงานได้หรือไม่?)",
                "options": [
                    "Justify",
                    "Maintain",
                    "Sequence",
                    "Analyze"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "We need to ______ the customer feedback.\n\n(แปล: เราจำเป็นต้องวิเคราะห์ความคิดเห็นของลูกค้า)",
                "options": [
                    "Valid",
                    "Determine",
                    "Analyze",
                    "Sequence"
                ],
                "answer": 2
            }
        ],
        "3": [
            {
                "type": "reading",
                "question": "It is ______ that the climate is changing.\n\n(แปล: เป็นที่แน่ชัดว่าสภาพภูมิอากาศกำลังเปลี่ยนแปลง)",
                "options": [
                    "Abundant",
                    "Crucial",
                    "Evident",
                    "Resilient"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "The discovery had a ______ impact.\n\n(แปล: การค้นพบนี้มีผลกระทบอย่างลึกซึ้ง)",
                "options": [
                    "Subtle",
                    "Diverse",
                    "Profound",
                    "Obscure"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "There is an ______ supply of water.\n\n(แปล: มีแหล่งน้ำอุดมสมบูรณ์)",
                "options": [
                    "Obscure",
                    "Abundant",
                    "Inherent",
                    "Subtle"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "There is a ______ difference between the two.\n\n(แปล: มีความแตกต่างเพียงเล็กน้อยระหว่างสองสิ่งนี้)",
                "options": [
                    "Abundant",
                    "Resilient",
                    "Subtle",
                    "Crucial"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "The rainforest has a ______ ecosystem.\n\n(แปล: ป่าฝนมีระบบนิเวศที่หลากหลาย)",
                "options": [
                    "Flourish",
                    "Diverse",
                    "Profound",
                    "Inherent"
                ],
                "answer": 1
            }
        ],
        "4": [
            {
                "type": "reading",
                "question": "Patience is a necessary ______ for a teacher.\n\n(แปล: ความอดทนเป็นคุณลักษณะที่จำเป็นสำหรับครู)",
                "options": [
                    "Attribute",
                    "Apparent",
                    "Demonstrate_alt",
                    "Capacity"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "______: These numbers demonstrate the problem.\n\n(แปล: ตัวเลขเหล่านี้แสดงให้เห็นถึงปัญหา)",
                "options": [
                    "Demonstrate_alt",
                    "Consequently",
                    "Component",
                    "Adequate_alt"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "We must find ______ energy sources.\n\n(แปล: เราต้องหาแหล่งพลังงานทางเลือก)",
                "options": [
                    "Alternative",
                    "Attribute",
                    "Consequently",
                    "Apparent"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "______: The room size is adequate for two people.\n\n(แปล: ขนาดห้องเพียงพอสำหรับสองคน)",
                "options": [
                    "Apparent",
                    "Consequently",
                    "Demonstrate_alt",
                    "Adequate_alt"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Trust is a key ______ of a relationship.\n\n(แปล: ความไว้วางใจเป็นส่วนประกอบสำคัญของความสัมพันธ์)",
                "options": [
                    "Apparent",
                    "Component",
                    "Approximate",
                    "Emerge"
                ],
                "answer": 1
            }
        ],
        "5": [
            {
                "type": "reading",
                "question": "The results support his ______.\n\n(แปล: ผลลัพธ์สนับสนุนสมมติฐานของเขา)",
                "options": [
                    "Justify_alt",
                    "Sequence_alt",
                    "Initial",
                    "Hypothesis"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "My ______ reaction was shock.\n\n(แปล: ปฏิกิริยาแรกของฉันคือความตกใจ)",
                "options": [
                    "Perspective_alt",
                    "Imply",
                    "Initial",
                    "Justify_alt"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "______: Follow the sequence of events.\n\n(แปล: ทำตามลำดับเหตุการณ์)",
                "options": [
                    "Proportion_alt",
                    "Imply",
                    "Sequence_alt",
                    "Subsequent"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "One mile is ______ to 1.6 kilometers.\n\n(แปล: หนึ่งไมล์เทียบเท่ากับ 1.6 กิโลเมตร)",
                "options": [
                    "Proportion_alt",
                    "Equivalent",
                    "Perspective_alt",
                    "Hypothesis"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "______: How can you justify this behavior?\n\n(แปล: คุณจะอธิบายพฤติกรรมนี้อย่างไร?)",
                "options": [
                    "Subsequent",
                    "Proportion_alt",
                    "Justify_alt",
                    "Initial"
                ],
                "answer": 2
            }
        ],
        "6": [
            {
                "type": "reading",
                "question": "Prices ______ based on supply and demand.\n\n(แปล: ราคาผันผวนตามอุปสงค์และอุปทาน)",
                "options": [
                    "Aesthetic",
                    "Fluctuate",
                    "Bizarre",
                    "Innate"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "The story was completely ______.\n\n(แปล: เรื่องราวนั้นแปลกประหลาดอย่างสิ้นเชิง)",
                "options": [
                    "Hinder",
                    "Bizarre",
                    "Elicit",
                    "Fluctuate"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "Dolphins are ______ animals.\n\n(แปล: โลมาเป็นสัตว์ที่ชอบอยู่รวมฝูง)",
                "options": [
                    "Coincide",
                    "Gregarious",
                    "Juxtapose",
                    "Fluctuate"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "Her arrival ______d with the storm.\n\n(แปล: การมาถึงของเธอเกิดขึ้นพร้อมกับพายุ)",
                "options": [
                    "Bizarre",
                    "Innate",
                    "Coincide",
                    "Fluctuate"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "Birds have an ______ ability to fly.\n\n(แปล: นกมีความสามารถในการบินโดยกำเนิด)",
                "options": [
                    "Innate",
                    "Hinder",
                    "Fluctuate",
                    "Deviate"
                ],
                "answer": 0
            }
        ],
        "7": [
            {
                "type": "reading",
                "question": "We need ______ evidence.\n\n(แปล: เราต้องการหลักฐานที่จับต้องได้)",
                "options": [
                    "Nomad",
                    "Qualitative",
                    "Tangible",
                    "Lethal"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "He is very ______ about his work.\n\n(แปล: เขาพิถีพิถันกับการทำงานมาก)",
                "options": [
                    "Paradox",
                    "Meticulous",
                    "Ubiquitous",
                    "Nomad"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "It is a ______ that technology makes us more isolated.\n\n(แปล: เป็นเรื่องย้อนแย้งที่เทคโนโลยีทำให้เราโดดเดี่ยวมากขึ้น)",
                "options": [
                    "Redundant",
                    "Obsolete",
                    "Paradox",
                    "Tangible"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "Typewriters are largely ______.\n\n(แปล: เครื่องพิมพ์ดีดส่วนใหญ่ล้าสมัยแล้ว)",
                "options": [
                    "Obsolete",
                    "Ubiquitous",
                    "Skeptical",
                    "Meticulous"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "The second paragraph is ______.\n\n(แปล: ย่อหน้าที่สองมีความซ้ำซ้อน)",
                "options": [
                    "Lethal",
                    "Obsolete",
                    "Redundant",
                    "Skeptical"
                ],
                "answer": 2
            }
        ],
        "8": [
            {
                "type": "reading",
                "question": "She gave a ______ interview.\n\n(แปล: เธอให้สัมภาษณ์อย่างตรงไปตรงมา)",
                "options": [
                    "Benevolent",
                    "Warrant",
                    "Deter",
                    "Candid"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "He ______d between two choices.\n\n(แปล: เขาลังเลระหว่างสองตัวเลือก)",
                "options": [
                    "Alleviate",
                    "Warrant",
                    "Vacillate",
                    "Frivolous"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "High prices will ______ buyers.\n\n(แปล: ราคาสูงจะขัดขวางผู้ซื้อ)",
                "options": [
                    "Benevolent",
                    "Warrant",
                    "Frivolous",
                    "Deter"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Please ______ your point further.\n\n(แปล: โปรดอธิบายประเด็นของคุณให้กระจ่างยิ่งขึ้น)",
                "options": [
                    "Elucidate",
                    "Benevolent",
                    "Gullible",
                    "Frivolous"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "Do not waste time on ______ lawsuits.\n\n(แปล: อย่าเสียเวลากับคดีฟ้องร้องที่ไร้สาระ)",
                "options": [
                    "Alleviate",
                    "Frivolous",
                    "Gullible",
                    "Homogeneous"
                ],
                "answer": 1
            }
        ],
        "9": [
            {
                "type": "reading",
                "question": "They visited a ______ little village.\n\n(แปล: พวกเขาไปเยี่ยมชมหมู่บ้านเล็กๆ ที่ดูแปลกตาน่ารัก)",
                "options": [
                    "Impending",
                    "Mitigate",
                    "Quaint",
                    "Resilient_alt"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "The glass is ______, so you cannot see through it.\n\n(แปล: กระจกนั้นทึบแสง คุณจึงไม่สามารถมองทะลุผ่านได้)",
                "options": [
                    "Opaque",
                    "Lucrative",
                    "Scrutinize",
                    "Resilient_alt"
                ],
                "answer": 0
            },
            {
                "type": "reading",
                "question": "His actions could ______ the mission.\n\n(แปล: การกระทำของเขาอาจทำให้ภารกิจตกอยู่ในอันตรายได้)",
                "options": [
                    "Opaque",
                    "Pragmatic",
                    "Quaint",
                    "Jeopardize"
                ],
                "answer": 3
            },
            {
                "type": "reading",
                "question": "Listening to that song brings back ______.\n\n(แปล: การฟังเพลงนั้นทำให้รู้สึกคิดถึงอดีต)",
                "options": [
                    "Jeopardize",
                    "Nostalgia",
                    "Scrutinize",
                    "Pragmatic"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "Real estate can be a ______ business.\n\n(แปล: อสังหาริมทรัพย์สามารถเป็นธุรกิจที่ทำกำไรได้ดี)",
                "options": [
                    "Quaint",
                    "Impending",
                    "Lucrative",
                    "Opaque"
                ],
                "answer": 2
            }
        ],
        "10": [
            {
                "type": "reading",
                "question": "The movie plot was somewhat ______.\n\n(แปล: โครงเรื่องของภาพยนตร์ค่อนข้างจำเจ)",
                "options": [
                    "Fortuitous",
                    "Hackneyed",
                    "Coherent",
                    "Ephemeral"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "Their meeting was entirely ______.\n\n(แปล: การพบกันของพวกเขาเป็นเรื่องบังเอิญอย่างแท้จริง)",
                "options": [
                    "Tenacious",
                    "Fortuitous",
                    "Vindicate",
                    "Abundant_alt"
                ],
                "answer": 1
            },
            {
                "type": "reading",
                "question": "Fame is often ______.\n\n(แปล: ชื่อเสียงมักจะอยู่ได้ไม่นาน)",
                "options": [
                    "Impetuous",
                    "Unambiguous",
                    "Ephemeral",
                    "Hackneyed"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "The DNA evidence ______d him.\n\n(แปล: หลักฐานดีเอ็นเอพิสูจน์ความบริสุทธิ์ของเขา)",
                "options": [
                    "Impetuous",
                    "Tenacious",
                    "Vindicate",
                    "Fortuitous"
                ],
                "answer": 2
            },
            {
                "type": "reading",
                "question": "She is a ______ advocate for animal rights.\n\n(แปล: เธอเป็นผู้สนับสนุนสิทธิสัตว์อย่างเหนียวแน่น)",
                "options": [
                    "Tenacious",
                    "Impetuous",
                    "Coherent",
                    "Didactic"
                ],
                "answer": 0
            }
        ]
    },
    "toefl_speaking": {
        "1": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'รายละเอียด'",
                "answerText": "Detail",
                "options": [
                    "Advantage",
                    "Solution",
                    "Disadvantage",
                    "Detail"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เหตุผล'",
                "answerText": "Reason",
                "options": [
                    "Solution",
                    "Reason",
                    "Problem",
                    "Contrast"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทางออก/วิธีแก้ปัญหา'",
                "answerText": "Solution",
                "options": [
                    "Compare",
                    "Advantage",
                    "Problem",
                    "Solution"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ข้อดี'",
                "answerText": "Advantage",
                "options": [
                    "Compare",
                    "Solution",
                    "Advantage",
                    "Opinion"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ความคิดเห็น'",
                "answerText": "Opinion",
                "options": [
                    "Reason",
                    "Problem",
                    "Solution",
                    "Opinion"
                ],
                "answer": 3
            }
        ],
        "2": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เน้นย้ำ'",
                "answerText": "Emphasize",
                "options": [
                    "Describe",
                    "Consider",
                    "Believe",
                    "Emphasize"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สนับสนุน'",
                "answerText": "Support",
                "options": [
                    "Emphasize",
                    "Argue",
                    "Support",
                    "Prefer"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'กล่าวถึง'",
                "answerText": "Mention",
                "options": [
                    "State",
                    "Support",
                    "Mention",
                    "Prefer"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'โต้แย้ง'",
                "answerText": "Argue",
                "options": [
                    "Believe",
                    "Argue",
                    "Oppose",
                    "Describe"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ชอบมากกว่า'",
                "answerText": "Prefer",
                "options": [
                    "Prefer",
                    "Argue",
                    "Believe",
                    "Emphasize"
                ],
                "answer": 0
            }
        ],
        "3": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ผลที่ตามมาคือ'",
                "answerText": "Consequently",
                "options": [
                    "Illustrate",
                    "Moreover",
                    "Consequently",
                    "Alternative"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'นอกจากนี้'",
                "answerText": "Furthermore",
                "options": [
                    "Alternative",
                    "Furthermore",
                    "Essentially",
                    "Accurate"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'อย่างไรก็ตาม'",
                "answerText": "Nevertheless",
                "options": [
                    "Nevertheless",
                    "Significant",
                    "Essentially",
                    "Alternative"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'อธิบายด้วยภาพประกอบ'",
                "answerText": "Illustrate",
                "options": [
                    "Consequently",
                    "Illustrate",
                    "Alternative",
                    "Moreover"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'มุมมอง'",
                "answerText": "Perspective",
                "options": [
                    "Accurate",
                    "Alternative",
                    "Illustrate",
                    "Perspective"
                ],
                "answer": 3
            }
        ],
        "4": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ความท้าทาย'",
                "answerText": "Challenge",
                "options": [
                    "Issues",
                    "Challenge",
                    "Point",
                    "Contrast_alt"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'โน้มน้าวใจ'",
                "answerText": "Convince",
                "options": [
                    "Brief",
                    "Convince",
                    "Point",
                    "Define"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ผลกระทบ'",
                "answerText": "Impact",
                "options": [
                    "Impact",
                    "Define",
                    "Obvious",
                    "Convince"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ความแตกต่าง/เปรียบเทียบ'",
                "answerText": "Contrast_alt",
                "options": [
                    "Brief",
                    "Challenge",
                    "Contrast_alt",
                    "Issues"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'อธิบายด้วยภาพ/ตัวอย่าง'",
                "answerText": "Illustrate_alt",
                "options": [
                    "Obvious",
                    "Impact",
                    "Illustrate_alt",
                    "Define"
                ],
                "answer": 2
            }
        ],
        "5": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เกี่ยวข้อง/เชื่อมโยง'",
                "answerText": "Relate",
                "options": [
                    "Respond",
                    "Role",
                    "Acknowledge",
                    "Relate"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'หลัก/เบื้องต้น'",
                "answerText": "Primary",
                "options": [
                    "Specific",
                    "Primary",
                    "Structure",
                    "Acknowledge"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'คล้ายกัน'",
                "answerText": "Similar",
                "options": [
                    "Similar",
                    "Topic",
                    "Respond",
                    "Specific"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทำนาย'",
                "answerText": "Predict",
                "options": [
                    "Structure",
                    "Relate",
                    "Acknowledge",
                    "Predict"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'หัวข้อ'",
                "answerText": "Topic",
                "options": [
                    "Specific",
                    "Topic",
                    "Structure",
                    "Role"
                ],
                "answer": 1
            }
        ],
        "6": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เน้นย้ำ'",
                "answerText": "Emphasize_alt",
                "options": [
                    "Emphasize_alt",
                    "Claim",
                    "Criticize",
                    "Assume"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'อภิปราย'",
                "answerText": "Discuss",
                "options": [
                    "Claim",
                    "Examine",
                    "Discuss",
                    "Assume"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สรุป'",
                "answerText": "Conclude",
                "options": [
                    "Defend",
                    "Assume",
                    "Conclude",
                    "Discuss"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'โต้แย้ง'",
                "answerText": "Argue_alt",
                "options": [
                    "Discuss",
                    "Defend",
                    "Argue_alt",
                    "Explain"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตรวจสอบ/พิจารณา'",
                "answerText": "Examine",
                "options": [
                    "Examine",
                    "Conclude",
                    "Discuss",
                    "Criticize"
                ],
                "answer": 0
            }
        ],
        "7": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตีความ'",
                "answerText": "Interpret",
                "options": [
                    "Mention_alt",
                    "Highlight",
                    "Interpret",
                    "Persuade"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สังเกตเห็น/ให้ความเห็น'",
                "answerText": "Observe",
                "options": [
                    "Note",
                    "Highlight",
                    "Justify",
                    "Observe"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ยกตัวอย่างประกอบ'",
                "answerText": "Illustrate_alt",
                "options": [
                    "Illustrate_alt",
                    "Mention_alt",
                    "Highlight",
                    "Persuade"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สังเกต/กล่าวถึง'",
                "answerText": "Note",
                "options": [
                    "Note",
                    "Interpret",
                    "Observe",
                    "Persuade"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เน้นให้เห็นเด่นชัด'",
                "answerText": "Highlight",
                "options": [
                    "Persuade",
                    "Note",
                    "Interpret",
                    "Highlight"
                ],
                "answer": 3
            }
        ],
        "8": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สนับสนุน'",
                "answerText": "Support_alt",
                "options": [
                    "Support_alt",
                    "Refute",
                    "State_alt",
                    "Recommend"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'แนะนำ'",
                "answerText": "Recommend",
                "options": [
                    "State_alt",
                    "Recommend",
                    "Support_alt",
                    "Refute"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตั้งคำถาม'",
                "answerText": "Question",
                "options": [
                    "Agree",
                    "Question",
                    "Summarize",
                    "Recommend"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เสนอแนะ'",
                "answerText": "Suggest",
                "options": [
                    "Suggest",
                    "State_alt",
                    "Support_alt",
                    "Recognize"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'สรุป'",
                "answerText": "Summarize",
                "options": [
                    "Question",
                    "Suggest",
                    "Summarize",
                    "Recognize"
                ],
                "answer": 2
            }
        ],
        "9": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ประเมิน'",
                "answerText": "Evaluate",
                "options": [
                    "Compare_alt",
                    "Advocate",
                    "Consider_alt",
                    "Evaluate"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เปรียบเทียบ'",
                "answerText": "Compare_alt",
                "options": [
                    "Contrast_alt",
                    "Advocate",
                    "Compare_alt",
                    "Believe_alt"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ระบุรายละเอียด'",
                "answerText": "Specify",
                "options": [
                    "Consider_alt",
                    "Specify",
                    "Deny",
                    "Advocate"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เปรียบเทียบความแตกต่าง'",
                "answerText": "Contrast_alt",
                "options": [
                    "Specify",
                    "Contrast_alt",
                    "Deny",
                    "Disagree"
                ],
                "answer": 1
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'เชื่อว่า'",
                "answerText": "Believe_alt",
                "options": [
                    "Evaluate",
                    "Deny",
                    "Advocate",
                    "Believe_alt"
                ],
                "answer": 3
            }
        ],
        "10": [
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ทำนาย'",
                "answerText": "Predict_alt",
                "options": [
                    "Predict_alt",
                    "Stipulate",
                    "Generalize",
                    "Validate"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'พยากรณ์'",
                "answerText": "Forecast",
                "options": [
                    "Stipulate",
                    "Validate",
                    "Forecast",
                    "Generalize"
                ],
                "answer": 2
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'อนุมาน'",
                "answerText": "Infer",
                "options": [
                    "Infer",
                    "Forecast",
                    "Predict_alt",
                    "Perceive"
                ],
                "answer": 0
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'กล่าวสรุปทั่วๆ ไป'",
                "answerText": "Generalize",
                "options": [
                    "Reiterate",
                    "Predict_alt",
                    "Perceive",
                    "Generalize"
                ],
                "answer": 3
            },
            {
                "type": "speaking",
                "question": "กดปุ่มไมโครโฟนแล้วพูดคำศัพท์ภาษาอังกฤษที่แปลว่า 'ตรวจสอบความถูกต้อง'",
                "answerText": "Verify",
                "options": [
                    "Verify",
                    "Perceive",
                    "Validate",
                    "Reiterate"
                ],
                "answer": 0
            }
        ]
    }
};
