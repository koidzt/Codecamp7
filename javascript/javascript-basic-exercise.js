// console.log("Day8 17 Sep 20")
// +prompt("ใส่เลข", '') คือการสั่งให้เปลี่ยนค่าเป็น Number
// หรือก็คือ Number(prompt("ใส่เลข", '')) มีค่าเท่ากับ +prompt("ใส่เลข", '')

// เงื่อนไข ++i คือการบวกเพิ่มขึ้น 1 ค่าก่อน แล้วเช็คเงื่อนไข เสร็จแล้วแล้วทำงานใน loop ต่อ
/* let i = 0;
while (++i < 5) alert( i ); */

// เงื่อนไข i++ คือการเช็คเงื่อนไขก่อน เสร็จแล้วบวกเพิ่มขึ้น 1 ค่าแล้วทำงานใน loop ต่อ
/* let i = 0;
while (i++ < 5) alert( i ); */

// exercise
// 4.	ให้เขียน loop ทั้งแสดงเลข 2 ถึง 10 ออกมา
// for (let i = 2; i<=10 ; i++ ) alert(i);

// 5.	เปลี่ยน code for loop ด้านล่างนี้ให้เป็น while loop โดยที่ผลลัพธ์ยังเหมือนเดิม
//     /*for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//     } */
// let i = 0;
// while (i < 3) {
//     alert( `number ${i}!` );
//     i++
// }

// 6.	ให้เขียนเกมส์ทายตัวเลขสำหรับเล่นสองคน โดย ให้ผู้เล่นคนแรกพิมพ์เลขใส่ใน prompt ที่อยู่ระหว่าง 1 ถึง 100 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร และให้ผู้เล่นคนที่สองทายเลขโดยการพิมพ์เลขใส่ใน prompt จนกว่าจะถูก ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// let numQ = +prompt("Please set your number (1-100)");
// let numA;
// while (numA !== numQ) {
//     numA = +prompt("Please enter number (1-100)");
//     if (numQ === numA) break;
//     if (numA > numQ) alert(`Your number is higher anwser`);
//     else alert(`Your number is lower anwser`);

// }
// alert("Your Number is Correect!")

// let i, numA, numQ = +prompt("Please set your number (1-100)");
// for (i = 1; numA !== numQ; i++) {
//     numA = +prompt("Please enter number (1-100)");
//     if (numA === numQ) break;
//     if (numA > numQ) alert(`Your number is higher anwser`);
//     else alert(`Your number is lower anwser`);
// }
// alert(`Your Number is Correect!\n You used ${i} times`);

// Excercise Swtich Cases
// 1.แปลง Code ดังกล่าวเป็น if-else statement
// let browser = prompt('enter your browser');
/* switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  } */
// if (browser === 'Edge') {
//     alert( "You've got the Edge!" );
// }else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
//     alert( 'Okay we support these browsers too' );
// }else {
//     alert( 'We hope that this page looks ok!' );
// }

// 2. 	แปลง Code ดังกล่าวเป็น // Switch cases
// let a = +prompt('a?', '');
/* if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}
if (a == 2 || a == 3) {
  alert( '2,3' );
} */
// switch (a) {
//     case 0:
//         alert( 0 );
//         break;
//     case 1:
//         alert( 1 );
//         break;
//     case 2:
//     case 3:
//         alert( '2,3' );
//         break;
//     default:
// }

// function showMyName(){
//     alert('Koi');
// }

// showMyName();
// showMyName();

// Test game in function
/*function gameExcercise6() {
    let numQ = +prompt("Please set your number (1-100)");
let numA;
while (numA !== numQ) {
    numA = +prompt("Please enter number (1-100)");
    if (numQ === numA) break;
    if (numA > numQ) alert(`Your number is higher anwser`);
    else alert(`Your number is lower anwser`);
}
alert("Your Number is Correect!")
}

for (let i = 0 ; i < 3 ; i++) {
    gameExcercise6();
}*/

// Excercise Arrow Function
// แปลง function ข้างล่างให้อยู่ในรูป arrow function
/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
); */

let ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};

ask(
  'Do you agree?',
  () => alert('You agreed.'),
  () => alert('You canceled the execution.')
);
