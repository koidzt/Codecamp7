## Basic Structure Folder for React

#### Assets

เก็บองค์ประกอบต่างๆของเราที่นำมาใช้ในโปรเจค เช่น images icons fonts ฯลฯ

#### Components

เก็บ Component ที่สร้างมาเพื่อเรียกใช้ในโปรเจค เช่น inputs buttons loader modals ฯลฯ

#### Config

เก็บไฟล์จัดการตัวแปรที่เป็นค่าไม่เปลี่ยนแปลงใน .env (environment) ในไฟล์ config.js หรือเราจะใช้ไฟล์นี้เพื่อตั้งค่าหริอกำหนดค่าตัวแปลที่มีหลาย .env ในแอปพลิเคชัน

#### Pages

เก็บไฟล์ที่นำมาขึ้นหน้าต่างๆเป็นแอพพลิเคชั่น

#### Routes

เก็บไฟล์ในการตัดการ route ทั้งหมดของแอพพลิเคชั่น ว่าในแอพพลิเคชั่นของเรามีหน้าอะไรบ้าง

#### Services

เก็บไฟล์ที่เป็นตัวจัดการการเชื่อมโยงกับข้อมูลที่นำมาแสดงบนแอปพลิเคชัน หรือไฟล์ services ต่างๆ เช่น axios APIs ฯลฯ

#### Store

เก็บไฟล์ที่เป็นตัวจัดการข้อมูลที่อยู่ฝั่ง frontend เช่น Context Redux Storage(local, session) ฯลฯ
ถ้าเป็น Redux ควรแบ่ง foler ย่อยๆเพื่อจัดการต่อไปดังนี้

- actions : เก็บ ACTION TYPE ต่างๆ
- reducers : function จัดการเมื่อเข้าเงื่อนไขตาม action type เช่น create store, update, remove
- constants : ค่าตั้งต้นของ redux ข้อมูลแต่ละตัวในตอนเพื่อสร้าง store

#### Styles

เก็บไฟล์ style ต่างๆ ของแอพพลิเคชั่น อาจจะสร้างเป็น folder ล้อไปกับ pages และ components

#### Utils

เก็บ functions กลางที่มีการเรียกใช่บ่อยๆในแอพพลิเคชั่น
