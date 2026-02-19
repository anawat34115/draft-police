# 🎬 Police Care - Video Setup Guide

## 📁 Folder Structure Created

✅ **Done:** Created video folders for all scenarios:
```
g:\Demo-pl\videos\
├── theft/          ✅ (4 mock files created)
├── accident/       ✅ (4 mock files created)  
├── assault/        ✅ (folder ready)
├── fire/           ✅ (folder ready)
└── missing/        ✅ (folder ready)
```

## 🎥 Mock Videos Created

### Theft Category (ลักทรัพย์)
- ✅ `saw_suspect.mp4` - "คุณเห็นหน้าคนร้ายไหม?"
- ✅ `has_cctv.mp4` - "มีกล้องวงจรปิดไหม?"
- ✅ `is_injured.mp4` - "มีผู้บาดเจ็บไหม?"
- ✅ `weapon_used.mp4` - "คนร้ายใช้อาวุธไหม?"

### Accident Category (อุบัติเหตุ)
- ✅ `has_injury.mp4` - "มีผู้บาดเจ็บไหม?"
- ✅ `vehicle_damage.mp4` - "รถเสียหายหนักไหม?"
- ✅ `hit_and_run.mp4` - "เป็นรถชนแล้วหนีไหม?"
- ✅ `need_ambulance.mp4` - "ต้องการรถพยาบาลไหม?"

## 🔧 Code Integration

✅ **Updated:** `interview.html` now loads real video files:

```javascript
// อัปเดต Source ของวิดีโอ (ใช้ไฟล์จริง)
const videoElement = document.querySelector('.video-placeholder');
if (videoElement && question.videoUrl) {
    videoElement.innerHTML = `
        <video id="interviewVideo" class="w-full h-full object-cover" controls autoplay muted>
            <source src="${question.videoUrl}" type="video/mp4">
            <p class="text-white">Your browser does not support the video tag.</p>
        </video>
    `;
}
```

## 📋 Next Steps

### 1. Replace Mock Files with Real Videos
- ถ่ายวิดีโอจริงของล่ามภาษามือ
- แปลงเป็น MP4 format
- ใส่ใน folder ที่สร้างไว้

### 2. Video Requirements
- **Format:** MP4
- **Resolution:** 720p (1280x720)
- **Duration:** ~5 seconds
- **Content:** ล่ามภาษามือแสดงคำถาม
- **Lighting:** สว่างชัดเจน
- **Background:** พื้นหลังสีเดียว

### 3. File Naming Convention
```
videos/[category]/[question_name].mp4
```

Examples:
- `videos/theft/saw_suspect.mp4`
- `videos/accident/has_injury.mp4`
- `videos/assault/needs_medical.mp4`

## 🎯 Testing

1. เปิด `interview.html` ใน browser
2. เลือกหมวด "ลักทรัพย์" 
3. วิดีโอควรโหลดจาก `videos/theft/` folder
4. ทดสอบทุกปุ่มและฟังก์ชัน

## 🚀 Ready for Production!

ระบบพร้อมใช้งานกับไฟล์วิดีโอจริงแล้ว! 🎥✋️
