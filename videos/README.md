# Police Care - Video Files Structure

## 📁 Folder Structure

```
videos/
├── theft/          # คำถามหมวดลักทรัพย์
│   ├── saw_suspect.mp4
│   ├── has_cctv.mp4
│   ├── is_injured.mp4
│   └── weapon_used.mp4
├── accident/       # คำถามหมวดอุบัติเหตุ
│   ├── has_injury.mp4
│   ├── vehicle_damage.mp4
│   ├── hit_and_run.mp4
│   └── need_ambulance.mp4
├── assault/        # คำถามหมวดทำร้ายร่างกาย
├── fire/           # คำถามหมวดไฟไหม้
└── missing/        # คำถามหมวดบุคคลสูญหาย
```

## 🎬 Video Specifications

- **Format:** MP4
- **Resolution:** 720p (1280x720)
- **Duration:** ~5 seconds per video
- **Audio:** Thai sign language interpretation
- **Language:** Thai Sign Language

## 📋 Video List

### Theft (ลักทรัพย์)
1. `saw_suspect.mp4` - "คุณเห็นหน้าคนร้ายไหม?"
2. `has_cctv.mp4` - "มีกล้องวงจรปิดไหม?"
3. `is_injured.mp4` - "มีผู้บาดเจ็บไหม?"
4. `weapon_used.mp4` - "คนร้ายใช้อาวุธไหม?"

### Accident (อุบัติเหตุ)
1. `has_injury.mp4` - "มีผู้บาดเจ็บไหม?"
2. `vehicle_damage.mp4` - "รถเสียหายหนักไหม?"
3. `hit_and_run.mp4` - "เป็นรถชนแล้วหนีไหม?"
4. `need_ambulance.mp4` - "ต้องการรถพยาบาลไหม?"

## 🔧 Usage in Code

The video files are referenced in `interview.html`:

```javascript
const SCENARIOS = {
    theft: {
        questions: [
            {
                videoUrl: "videos/theft/saw_suspect.mp4",
                // ...
            },
            // ...
        ]
    },
    // ...
};
```

## 📝 Notes

- These are **mock files** for demonstration purposes
- Replace with actual video recordings of sign language interpreters
- Each video should be ~5 seconds long
- Ensure clear sign language demonstration
- Include proper lighting and background
- Videos should be optimized for web streaming
