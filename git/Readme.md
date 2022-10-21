### <h3>Git</h3>

    git status ใช้เพื่อดูว่าตอนนี้มีไฟล์ไหนอัพโหลดแล้วและยังไม่อัพโหลด
    git add <file> ใช้เพื่อขอเพิ่มไฟล์เข้าไปใน git แต่ยังไม่ได้เพิ่ม
    git commit ใช้เพื่อสร้างsnapshotให้gitเพื่อบันทึกว่ามีการแก้ไขอะไรและอัพเดตไฟล์ขึ้น git

### <h4>คำสั่ง Git</h4>

      git status ใช้เพื่อดูว่าตอนนี้มีไฟล์ไหนอัพโหลดแล้วและยังไม่อัพโหลด
      git add <file>. ใช้เพื่อขอเพิ่มไฟล์เข้าไปใน git แต่ยังไม่ได้เพิ่ม
      git commit -m "massage ที่จะ Note การเปลี่ยนแปลงนี้" ใช้เพื่อสร้างsnapshotให้gitเพื่อบันทึกว่ามีการแก้ไขอะไรและอัพเดตไฟล์ขึ้น git
      git log --all --graph --decorate --oneline
      git checkout <* code ตำแหน่งงาน>
      git checkout -b <feature>
      git merge <ชื่อ feature>
      git remote add origin <url> คือการตั้งค่า remote เชื่อมไปที่ url ชื่อ origin
      git remote origin คือเลือกว่าจะเชื่อมกับ url ที่ชื่อ origin
      git push -u origin master ใช้สำหรับครั้งแรกในการ push ขึ้น github ครั้งต่อๆไปใช้แค่ git push ก็พอ
      git push ใช้ในการอัพเเดตไฟล์ที่แก้ไข แต่ทุกครั้งที่แก้ไขไฟล์ต้องมีคำสั่งดังนี้ด้วย
      git add .
      git commit -m "---"
      git push หรือบางครั้งที่ไฟล์ไม่ตรงอาจจ้องมีการ git pull ดึงไฟล์ลงมาก่อนจะ git push
