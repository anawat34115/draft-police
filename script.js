// Police Care Website JavaScript

// Data
const vocabData = [
    "ตำรวจ", "บัตรประชาชน", "ขโมย", "ช่วยด้วย", "โรงพยาบาล", "รถยนต์", "บ้าน", "โทรศัพท์",
    "เงิน", "กระเป๋า", "มีด", "ปืน", "ยาเสพติด", "ชกต่อย", "ข่มขืน", "ไฟไหม้",
    "น้ำท่วม", "แผ่นดินไหว", "อุบัติเหตุ", "ตำแหน่ง", "เวลา", "วันที่", "ชื่อ", "นามสกุล",
    "อายุ", "ที่อยู่", "เบอร์โทร", "อีเมล", "อาชีพ", "สัญชาติ", "ศาสนา", "การศึกษา",
    "สูง", "หนัก", "สีผม", "สีตา", "รูปร่าง", "เครื่องแต่งกาย", "รอยสัก", "พิการ",
    "พยาน", "หลักฐาน", "วัตถุ", "อาวุธ", "ยานพาหนะ", "ทะเบียน", "สีรถ", "ยี่ห้อ",
    "นาฬิกา", "แหวน", "กำไล", "สร้อยคอ", "ต่างหู", "กระเป๋าเงิน", "โทรศัพท์มือถือ", "แล็ปท็อป",
    "ทีวี", "เครื่องเสียง", "กล้อง", "คอมพิวเตอร์", "เฟอร์นิเจอร์", "เครื่องใช้ไฟฟ้า", "เสื้อผ้า", "รองเท้า",
    "หนังสือ", "เอกสาร", "บัตร", "กุญแจ", "บัตรเครดิต", "บัญชีธนาคาร", "หุ้น", "พันธบัตร",
    "ทอง", "เงิน", "แหวน", "กำไล", "สร้อย", "ต่างหู", "จี้", "แหวนแต่งงาน",
    "รถจักรยาน", "รถมอเตอร์ไซค์", "รถยนต์", "รถบัส", "รถตู้", "รถกระบะ", "รถบรรทุก", "รถแท็กซี่",
    "เรือ", "เรือโดยสาร", "เรือประมง", "เรือบรรทุก", "เครื่องบิน", "เฮลิคอปเตอร์", "รถไฟ", "รถไฟฟ้า",
    "ทางด่วน", "ทางหลวง", "ซอย", "ถนน", "สะพาน",  "อุโมงค์", "ทางแยก", "ป้ายจราจร",
    "ไฟแดง", "ไฟเขียว", "ไฟเหลือง", "เครื่องหมายจราจร", "สัญญาณไฟ", "ป้ายห้าม", "ป้ายอนุญาต", "ป้ายเตือน",
    "ป้ายบอกทาง", "ป้ายชื่อถนน", "ป้ายชื่อซอย", "ป้ายบ้านเลขที่", "ป้ายร้าน", "ป้ายโฆษณา", "ป้ายประกาศ", "ป้ายราคา",
    "ธนาคาร", "ตลาด", "ร้านสะดวกซื้อ", "ร้านอาหาร", "โรงแรม", "โรงพยาบาล", "โรงเรียน", "วัด",
    "สถานีตำรวจ", "สถานีดับเพลิง", "ที่ทำการไปรษณีย์", "เทศบาล", "อำเภอ", "จังหวัด", "กรุงเทพ", "ต่างจังหวัด",
    "ศาล", "ที่ทำการทนาย", "สำนักงานทนาย", "ศาลแขวง", "ศาลจังหวัด", "ศาลฎีกา", "ศาลอุทธรณ์", "ศาลปกครอง",
    "คุก", "ทัณฑสถาน", "เรือนจำ", "สถานกักกัน", "สถานพักพัก", "สถานคุ้มครอง", "ศูนย์ฟื้นฟู", "โรงพัก",
    "ตำรวจ", "ผู้กำกับ", "รองผู้กำกับ", "สารวัตร", "รองสารวัตร", "รองสารวัตร", "สิบตำรวจ", "จ่าสิบตำรวจ",
    "พลตำรวจ", "ร้อยตำรวจ", "จ่าสิบตำรวจ", "สิบตำรวจ", "ตำรวจตระเวน", "ตำรวจจราจร", "ตำรวจสันตะบาล", "ตำรวจภูธร",
    "ผู้ต้องสงสัย", "ผู้ต้องหา", "จำเลย", "โจทก์", "จำเลย", "พยาน", "ทนายความ", "ผู้พิพากษา",
    "อัยการ", "ผู้พิพากษา", "ประธานศาล", "รองประธานศาล", "ผู้พิพากษาหัวหน้า", "เลขานุการ", "เจ้าหน้าที่", "ลูกจ้าง",
    "แพทย์", "พยาบาล", "เภสัชกร", "ทันตแพทย์", "สัตวแพทย์", "นักกายภาพ", "นักจิตวิทยา", "นักรักษา",
    "ครู", "อาจารย์", "นักเรียน", "นักศึกษา", "ผู้ปกครอง", "ผู้บริหาร", "พนักงาน", "แม่บ้าน",
    "พ่อ", "แม่", "ลูกชาย", "ลูกสาว", "สามี", "ภรรยา", "พี่ชาย", "พี่สาว",
    "น้องชาย", "น้องสาว", "ปู่", "ย่า", "ตา", "ยาย", "ลุง", "ป้า",
    "อา", "น้า", "หลาน", "หลานสาว", "หลานชาย", "ญาติ", "ญาติพี่น้อง", "เพื่อน",
    "เพื่อนร่วมงาน", "เพื่อนร่วมชั้น", "เพื่อนบ้าน", "เพื่อนสนิท", "คนรู้จัก", "คนแปลกหน้า", "ผู้บังเอิญ", "ผู้พบเห็น",
    "เจ้าของ", "ผู้เช่า", "ลูกค้า", "คู่ค้า", "พนักงาน", "หัวหน้า", "ผู้จัดการ", "เจ้าของกิจการ"
];

const sentenceData = [
    // การแจ้งเหตุ (Reporting Incidents)
    "ขอแจ้งเหตุด่วน",
    "มีคนรุนแรงในบ้าน",
    "มีคนบุกรุกบ้าน",
    "มีคนขโมยของ",
    "มีคนปล้นร้าน",
    "มีคนชิงทรัพย์",
    "มีคนลักทรัพย์",
    "มีคนฉ้อโกง",
    "มีคนหลอกลวง",
    "มีคนข่มขืน",
    "มีคนทำร้ายร่างกาย",
    "มีคนชกต่อย",
    "มีคนทำร้าย",
    "มีคนคุกคาม",
    "มีคนตามรังควาน",
    "มีคนข่มเหง",
    "มีคนทารุณกรรม",
    "มีคนทำผิดกฎหมาย",
    "มีคนกระทำผิด",
    "มีคนก่อเหตุ",
    
    // การสอบสวน (Investigation)
    "เกิดเหตุเมื่อไหร่?",
    "เกิดเหตุที่ไหน?",
    "ใครเป็นผู้กระทำ?",
    "มีพยานหรือไม่?",
    "มีหลักฐานหรือไม่?",
    "มีวัตถุพยานหรือไม่?",
    "มีอาวุธหรือไม่?",
    "มีผู้ได้รับบาดเจ็บหรือไม่?",
    "มีผู้เสียชีวิตหรือไม่?",
    "มีทรัพย์สินสูญหายหรือไม่?",
    "มีความเสียหายหรือไม่?",
    "มีทรัพย์สินเสียหายหรือไม่?",
    "มีความเสียหายอย่างไร?",
    "มีมูลค่าเท่าไหร่?",
    "มีจำนวนเท่าไหร่?",
    "มีลักษณะอย่างไร?",
    "มีสีอย่างไร?",
    "มีขนาดอย่างไร?",
    "มีลักษณะเด่นอย่างไร?",
    
    // การให้ข้อมูลส่วนตัว (Personal Information)
    "ชื่อของคุณคืออะไร?",
    "นามสกุลของคุณคืออะไร?",
    "อายุของคุณเท่าไหร่?",
    "วันเกิดของคุณเมื่อไหร่?",
    "ที่อยู่ของคุณที่ไหน?",
    "บ้านเลขที่ของคุณเท่าไหร่?",
    "ซอยของคุณอะไร?",
    "ถนนของคุณอะไร?",
    "แขวงของคุณอะไร?",
    "เขตของคุณอะไร?",
    "จังหวัดของคุณอะไร?",
    "รหัสไปรษณีย์ของคุณเท่าไหร่?",
    "เบอร์โทรศัพท์ของคุณเท่าไหร่?",
    "อีเมลของคุณอะไร?",
    "อาชีพของคุณอะไร?",
    "สถานที่ทำงานของคุณที่ไหน?",
    "เบอร์ที่ทำงานของคุณเท่าไหร่?",
    "สัญชาติของคุณอะไร?",
    "ศาสนาของคุณอะไร?",
    
    // การบริการ (Services)
    "ต้องการความช่วยเหลือหรือไม่?",
    "ต้องการให้เจ้าหน้าที่ไปหรือไม่?",
    "ต้องการรถพยาบาลหรือไม่?",
    "ต้องการให้ลูกจ้างมาหรือไม่?",
    "ต้องการให้ทนายมาหรือไม่?",
    "ต้องการให้ล่ามมาหรือไม่?",
    "ต้องการให้แปลภาษาหรือไม่?",
    "ต้องการให้ช่วยเหลือด้านอื่นหรือไม่?",
    "ต้องการให้ติดต่อญาติหรือไม่?",
    "ต้องการให้ติดต่อใครหรือไม่?",
    "ต้องการให้แจ้งใครหรือไม่?",
    "ต้องการให้บอกใครหรือไม่?",
    "ต้องการให้ทำอะไรเพิ่มเติมหรือไม่?",
    "ต้องการให้ช่วยอะไรเพิ่มเติมหรือไม่?",
    "ต้องการให้ทำอย่างไรต่อไป?",
    "ต้องการให้ดำเนินการอย่างไร?",
    "ต้องการให้แก้ไขปัญหาอย่างไร?",
    "ต้องการให้แก้ไขสถานการณ์อย่างไร?",
    "ต้องการให้แก้ไขเหตุการณ์อย่างไร?",
    
    // การสอบถามเพิ่มเติม (Additional Questions)
    "มีอาการบาดเจ็บอย่างไรบ้าง?",
    "มีเลือดออกไหม?",
    "โดนทำร้ายด้วยอะไร?",
    "เคยมีเรื่องกันมาก่อนไหม?",
    
    // ขั้นตอนกฎหมาย (Procedure)
    "กรุณาเซ็นชื่อตรงนี้",
    "ปั๊มลายนิ้วมือตรงนี้",
    "นั่งรอสักครู่",
    "ตำรวจกำลังไปตรวจสอบที่เกิดเหตุ",
    "ต้องไปตรวจร่างกายที่โรงพยาบาล",
    "คุณต้องการแจ้งความดำเนินคดีไหม?",
    "หรือแค่ลงบันทึกประจำวัน?",
    "คุณถูกจับข้อหา...",
    "คุณมีสิทธิ์เรียกทนายความ",
    "คุณให้การรับสารภาพหรือไม่?",
    "ติดต่อญาติได้ไหม?",
    "เรื่องนี้เป็นคดีแพ่ง (ตำรวจทำไม่ได้)",
    "ใบแจ้งความนี้ใช้เป็นหลักฐานได้",
    "เสร็จเรียบร้อยแล้ว กลับบ้านได้ครับ"
];

// Functions
function switchTab(tab) {
    const btnVocab = document.getElementById('tab-vocab');
    const btnSentences = document.getElementById('tab-sentences');
    const contentVocab = document.getElementById('content-vocab');
    const contentSentences = document.getElementById('content-sentences');

    if (tab === 'vocab') {
        btnVocab.classList.add('tab-active');
        btnVocab.classList.remove('text-white/70', 'hover:bg-white/10');
        btnSentences.classList.remove('tab-active');
        btnSentences.classList.add('text-white/70', 'hover:bg-white/10');
        contentVocab.classList.remove('hidden');
        contentSentences.classList.add('hidden');
    } else {
        btnSentences.classList.add('tab-active');
        btnSentences.classList.remove('text-white/70', 'hover:bg-white/10');
        btnVocab.classList.remove('tab-active');
        btnVocab.classList.add('text-white/70', 'hover:bg-white/10');
        contentSentences.classList.remove('hidden');
        contentVocab.classList.add('hidden');
    }
}

function renderContent() {
    const vocabContainer = document.getElementById('content-vocab');
    let vocabHTML = '';
    vocabData.forEach((word, index) => {
        vocabHTML += `
        <div onclick="showSingleWord('${word}')" class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-police-red hover:shadow-md transition cursor-pointer text-center group">
            <div class="w-10 h-10 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-gray-400 text-lg mb-2 group-hover:bg-red-50 group-hover:text-police-red transition">
                <i class="fa-solid fa-hand-holding-hand"></i>
            </div>
            <h3 class="font-bold text-gray-800 text-sm">${word}</h3>
            <span class="text-[10px] text-gray-400 block mt-1">ID: ${1000 + index}</span>
        </div>`;
    });
    vocabContainer.innerHTML = vocabHTML;

    const sentenceContainer = document.getElementById('content-sentences');
    let sentenceHTML = '';
    sentenceData.forEach((sentence, index) => {
        sentenceHTML += `
        <div onclick="showSingleWord('${sentence}')" class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-police-red hover:bg-red-50 transition cursor-pointer group flex items-start gap-4">
            <div class="w-8 h-8 bg-police-red text-white rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-sm mt-1">
                ${index + 1}
            </div>
            <div>
                <p class="font-bold text-gray-800 text-lg group-hover:text-police-red transition">"${sentence}"</p>
                <button class="mt-3 text-xs bg-gray-100 hover:bg-white text-gray-600 px-3 py-1 rounded-full border border-gray-200 flex items-center gap-2 transition">
                    <i class="fa-solid fa-video"></i> ดูตัวอย่างท่ามือ
                </button>
            </div>
        </div>`;
    });
    sentenceContainer.innerHTML = sentenceHTML;
}

function performSearch() {
    try {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        const activeTab = document.querySelector('.tab-active')?.id;
        
        if (!activeTab) {
            console.error('No active tab found');
            return;
        }
        
        if (activeTab === 'tab-vocab') {
            const filteredVocab = vocabData.filter(word => 
                word.toLowerCase().includes(searchTerm)
            );
            renderFilteredVocab(filteredVocab);
        } else {
            const filteredSentences = sentenceData.filter(sentence => 
                sentence.toLowerCase().includes(searchTerm)
            );
            renderFilteredSentences(filteredSentences);
        }
    } catch (error) {
        console.error('Search error:', error);
        alert('เกิดข้อผิดพลาดในการค้นหา กรุณาลองใหม่อีกครั้ง');
    }
}

function renderFilteredVocab(filteredData) {
    const vocabContainer = document.getElementById('content-vocab');
    if (filteredData.length === 0) {
        vocabContainer.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">ไม่พบคำศัพท์ที่ค้นหา</div>';
        return;
    }
    
    let vocabHTML = '';
    filteredData.forEach((word, index) => {
        const originalIndex = vocabData.indexOf(word);
        vocabHTML += `
        <div onclick="showSingleWord('${word}')" class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-police-red hover:shadow-md transition cursor-pointer text-center group">
            <div class="w-10 h-10 mx-auto bg-gray-50 rounded-full flex items-center justify-center text-gray-400 text-lg mb-2 group-hover:bg-red-50 group-hover:text-police-red transition">
                <i class="fa-solid fa-hand-holding-hand"></i>
            </div>
            <h3 class="font-bold text-gray-800 text-sm">${word}</h3>
            <span class="text-[10px] text-gray-400 block mt-1">ID: ${1000 + originalIndex}</span>
        </div>`;
    });
    vocabContainer.innerHTML = vocabHTML;
}

function renderFilteredSentences(filteredData) {
    const sentenceContainer = document.getElementById('content-sentences');
    if (filteredData.length === 0) {
        sentenceContainer.innerHTML = '<div class="col-span-full text-center py-12 text-gray-500">ไม่พบประโยคที่ค้นหา</div>';
        return;
    }
    
    let sentenceHTML = '';
    filteredData.forEach((sentence, index) => {
        const originalIndex = sentenceData.indexOf(sentence);
        sentenceHTML += `
        <div onclick="showSingleWord('${sentence}')" class="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-police-red hover:bg-red-50 transition cursor-pointer group flex items-start gap-4">
            <div class="w-8 h-8 bg-police-red text-white rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-sm shadow-sm mt-1">
                ${originalIndex + 1}
            </div>
            <div>
                <p class="font-bold text-gray-800 text-lg group-hover:text-police-red transition">"${sentence}"</p>
                <button class="mt-3 text-xs bg-gray-100 hover:bg-white text-gray-600 px-3 py-1 rounded-full border border-gray-200 flex items-center gap-2 transition">
                    <i class="fa-solid fa-video"></i> ดูตัวอย่างท่ามือ
                </button>
            </div>
        </div>`;
    });
    sentenceContainer.innerHTML = sentenceHTML;
}

function showSingleWord(word) {
    try {
        if (!word) {
            console.error('No word provided');
            return;
        }
        
        const breadcrumb = document.querySelector('#single .font-bold.text-police-red');
        if (breadcrumb) {
            breadcrumb.textContent = word;
        }
        
        const titleElement = document.querySelector('#single h1');
        if (titleElement) {
            titleElement.textContent = word;
        }
        
        showPage('single');
    } catch (error) {
        console.error('Error showing single word:', error);
        alert('เกิดข้อผิดพลาดในการแสดงข้อมูล กรุณาลองใหม่อีกครั้ง');
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function showPage(pageId) {
    try {
        if (!pageId) {
            console.error('No page ID provided');
            return;
        }
        
        const pageElement = document.getElementById(pageId);
        if (!pageElement) {
            console.error('Page not found:', pageId);
            return;
        }
        
        document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
        pageElement.classList.add('active');
        window.scrollTo(0, 0);
        
        const mobileMenu = document.getElementById('mobileMenu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    } catch (error) {
        console.error('Error switching page:', error);
        alert('เกิดข้อผิดพลาดในการเปลี่ยนหน้า กรุณาลองใหม่อีกครั้ง');
    }
}

// Emergency Reporting Functions
let selectedIncidentType = '';

function selectIncidentType(button, type) {
    document.querySelectorAll('.incident-type-btn').forEach(btn => {
        btn.classList.remove('border-police-red', 'bg-red-50');
        btn.classList.add('border-gray-200');
    });
    
    button.classList.remove('border-gray-200');
    button.classList.add('border-police-red', 'bg-red-50');
    
    selectedIncidentType = type;
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                document.getElementById('location').value = `พิกัดปัจจุบัน: ${lat.toFixed(6)}, ${lng.toFixed(6)}`;
            },
            (error) => {
                console.error('Error getting location:', error);
                alert('ไม่สามารถดึงตำแหน่งปัจจุบันได้ กรุณากรอกข้อมูลด้วยตนเอง');
            }
        );
    } else {
        alert('เบราว์เซอร์ของคุณไม่รองรับบริการระบุตำแหน่ง');
    }
}

function submitReport(event) {
    event.preventDefault();
    
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    const reporterName = document.getElementById('reporterName').value;
    const reporterPhone = document.getElementById('reporterPhone').value;
    
    if (!selectedIncidentType || !location) {
        alert('กรุณาเลือกประเภทเหตุการณ์และระบุสถานที่');
        return;
    }
    
    const reportData = {
        incidentType: selectedIncidentType,
        location: location,
        description: description,
        reporterName: reporterName,
        reporterPhone: reporterPhone,
        timestamp: new Date().toISOString()
    };
    
    console.log('Report submitted:', reportData);
    alert('รับเรื่องแจ้งเหตุเรียบร้อยแล้ว! เจ้าหน้าที่ตำรวจจะดำเนินการต่อไป');
    clearForm();
}

function clearForm() {
    document.getElementById('location').value = '';
    document.getElementById('description').value = '';
    document.getElementById('reporterName').value = '';
    document.getElementById('reporterPhone').value = '';
    
    document.querySelectorAll('.incident-type-btn').forEach(btn => {
        btn.classList.remove('border-police-red', 'bg-red-50');
        btn.classList.add('border-gray-200');
    });
    selectedIncidentType = '';
}

function callEmergency(number) {
    if (confirm(`คุณต้องการโทรหมายเลข ${number} ใช่ไหม?`)) {
        window.location.href = `tel:${number}`;
    }
}

function callTTRS() {
    if (confirm('คุณต้องการโทรหมายเลข 1414 สำหรับบริการล่ามภาษามือใช่ไหม?')) {
        window.location.href = 'tel:1414';
    }
}

function startSignLanguageReport() {
    alert('ฟีเจอร์บันทึกวิดีโอภาษามือจะเปิดใช้งานในเวอร์ชันถัดไป');
}

function shareLocation() {
    if (navigator.share) {
        navigator.share({
            title: 'ตำแหน่งฉุกเฉิน',
            text: 'กรุณาช่วยเหลือหรือที่ตำแหน่งปัจจุบัน',
            url: window.location.href
        });
    } else {
        alert('เบราว์เซอร์ของคุณไม่รองรับบริการแชร์ตำแหน่ง');
    }
}

function addPhoto() {
    alert('ฟีเจอร์ถ่ายรูปและอัปโหลดรูปภาพจะเปิดใช้งานในเวอร์ชันถัดไป');
}

function contactInterpreter() {
    callTTRS();
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    try {
        renderContent();
        console.log('Police Care app initialized successfully');
    } catch (error) {
        console.error('Initialization error:', error);
        alert('เกิดข้อผิดพลาดในการโหลดข้อมูล กรุณารีเฟรชหน้าเว็บ');
    }
});
