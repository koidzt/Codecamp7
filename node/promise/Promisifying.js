/* How to manage Promise */
function logAndLor(alphabet, time) {
  /* การสร้าง Promise เป็นการทำงานแบบ Synchronous เพราะเมื่อทำงานเสร็จแล้วจึงจะส่งค่ากลับไปทาง resolve(ค่าที่ส่งคืนเมื่อทำงาน Promise เสร็จ) */
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /* ใน setTimeout เป็น Asynchronous ไล่สั่งการทำงานทันทีไม่ต้องรอกันว่าทำเสร็จก่อนค่อยทำต่อ */
      console.log(alphabet);
      resolve();
    }, time);
  });
}

/* How to manage Promise by Then-Catch  */
//ถ้าไม่มี return มันจะ log B-F ออกมาพร้อมกันหมด
function promiseByThenCatchByReturn() {
  console.log('How to manage Promise by Then-Catch (return)');

  logAndLor('A', 1000)
    .then(() => {
      return logAndLor('B', 1000);
    })
    .then(() => {
      return logAndLor('C', 1000);
    })
    .then(() => {
      return logAndLor('D', 1000);
    });
}
// promiseByThenCatch();
//ถ้าไม่มี return จะต้อง .then เข้าชั้นในเรื่อยๆ
function promiseByThenCatchNoReturn() {
  console.log('How to manage Promise by Then-Catch (no return)');
  console.log(logAndLor('A', 0));
  logAndLor('A', 1000).then(() => {
    logAndLor('B', 1000).then(() => {
      logAndLor('C', 1000).then(() => {
        logAndLor('D', 1000).then(() => {
          logAndLor('E', 1000).then(() => {
            logAndLor('F', 1000);
          });
        });
      });
    });
  });
}

/* How to manage Promise by async-await  */
async function promiseByAsyncAwait() {
  console.log('How to manage Promise by async-await');
  await logAndLor('A', 1000);
  await logAndLor('B', 1000);
  await logAndLor('C', 1000);
  await logAndLor('D', 1000);
  await logAndLor('E', 1000);
}
// promiseByAsyncAwait();

// function runCode() {
//   promiseByThenCatchByReturn(); // เริ่มจากทำ fn นี้ก่อน (ใช้เวลาประมาณ 4 วินาที)
//   setTimeout(() => {
//     // เริ่มทำคำสั่งในนี้หลังจากเวลาที่กำหนด (4100 millisec)
//     promiseByThenCatchNoReturn();
//     setTimeout(promiseByAsyncAwait, 6100); // เริ่มทำงานคำสั่ง promiseByAsyncAwait หลังจาก promiseByThenCatch ไป 6100 millisec นับเป็นเวลาหลังคำสั่งแรกคือ 4100+6100 millisec
//   }, 4100);
// }

function runCode() {
  promiseByThenCatchByReturn(); // 4 sec intro,A,B,C,D
  setTimeout(promiseByThenCatchNoReturn, 4100); // 6 sec intro A,B,C,D,E,F
  setTimeout(promiseByAsyncAwait, 10200);
}

runCode();
