function useSetTimeout() {
  console.log('How to use setTimeout');

  setTimeout(() => {
    console.log('A'); /* ใน setTimeout เป็น Asynchronous ไล่สั่งการทำงานทันทีไม่ต้องรอกันว่าทำเสร็จก่อนค่อยทำต่อ */
    setTimeout(() => {
      console.log('B');
      setTimeout(() => {
        console.log('C');
        setTimeout(() => {
          console.log('D');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}
// useSetTimeout();
