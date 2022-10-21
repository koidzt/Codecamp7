// console.log("Codecamp#7");
// one-line comment
/*
Multiple-lines
comment
*/

// var message = "codecamp";
// console.log(message);

// Lab 1
// let name, human;
// name = "Koi";
// human = name;
// // console.log(name);
// console.log(human);

// Lab 2
// let myWallet, myDadName, myMomName, myAddress, universeAge;
// myWallet = 500;
// myDadName = "Dad";
// myMomName = "Mom";
// myAddress = "Address";
// universeAge = "3.5 M.";
// console.log("Lab 2", myWallet, myDadName, myMomName, myAddress, universeAge);

// // Test 1
// let name,Name;
// name = "Koi";
// Name = "KoiDzt";
// console.log("Test 1, name = ",name ,"and Name =",Name);

// // Test 2
// let message1 = 'Software Park',
// message2 = "Codecamp",
// message3 = `Koi`,
// message4 = `${message3} at ${message1} #7 ${message2} ${`end`}`;
// console.log("Test 2",message4);

// // Test 3
// let x=`15`;
// console.log("Test 3", typeof 5,typeof(5),typeof(x));

// // exercise 2
// let name = "Koi",
// age = 28,
// address = "Bangkok";

// // let myHistories = `${name} ${age} ${address}`;
// let myHistories = name + age + address;
// console.log(myHistories);

// alert ("CodeCamp");
// let messagePrompt = prompt();
// let messagePrompt2 = prompt(messagePrompt);
// console.log(messagePrompt+messagePrompt2);

// Test JavaScript 6.1
// let age = prompt("คุณอายุเท่าไร");
// if (age>=18) {
//     alert ("เว็บนี้สำหรับเด็กอายุต่ำกว่า18");
// }

// let year = prompt("ปีแรกที่จัด Codecap คือปีอะไร");
// if (year==2018) {
//     alert('ถูกต้อง');
//     alert('คุณเก่งมากๆ');
// }

// Test JavaScript 6.2
// let year = prompt("ปีแรกที่จัด Codecap คือปีอะไร");
// if (year==2018) {
//     alert('ถูกต้อง');
//     alert('คุณเก่งมากๆ');
// }
// else {
//     alert('ผิดจ้า');
//     alert('กด F5 แล้วตอบใหม่นะ');
// }

// Test JavaScript 6.3
/*let year = prompt("ปีแรกที่จัด Codecap คือปีอะไร");
year = Number(year);
if (year==2018) {
    alert('ถูกต้อง');
    alert('คุณเก่งมากๆ');
} 
else if (year>=2017 && year<=2019)//JavaScriptไม่สามารถใส่เงื่อนไขเป็นช่วงได้ เช่น 2017<=year<=2019 แบบนี้ไม่ได้ต้องแยกโดยใส่ทีละตัวแปลแล้วเชื่อมด้วย และ&& กับ  หรือ|| 
{
    alert('เกือบถูกแล้ว อีกนิดเดียว');
    // alert('กด F5 แล้วตอบใหม่นะ');
} 
else {
    alert('ไม่ใกล้เคียงเลย');
    // alert('กด F5 แล้วตอบใหม่นะ');
} */

// Test JavaScript 6.4
/*let age = prompt("โปรดใส่อายุคุณ");
let message;
if (age < 18) {
  message = 'คุณเข้าไปไม่ได้'
} else {
  message = 'คุณเข้าไปได้'
}
alert(message)*/

//การเขียนเงื่อนไขแบบ Ternary-Operator
//ตัวแปร = (เงื่อนไข)? ค่าเมื่อเป็นจริง : ค่าเมื่อเป็นเท็จ;
/*เป็นการเขียน if-else แบบย่อ
ใช้สำหรับการกำหนดค่าเท่านั้น*/
/*let age = prompt("โปรดใส่อายุคุณ");
let message;
message = (age < 18) ? 'คุณเข้าไปไม่ได้' : 'คุณเข้าไปได้';
alert(message)*/

// exercise JavaScript6.5
/*let name = prompt("ฉันชื่ออะไร?");
if (name == "ก้อย") {
    alert("เก่งมาก");
} else {
    alert("คุณไม่รู้จักชื่อฉัน");
}*/

// let name = prompt("ฉันชื่ออะไร?");
// let message;
// message = (name=="ก้อย")? 'เก่งมาก':'คุณไม่รู้จักชื่อฉัน';
// alert(message);

// exercise JavaScript6.5 แบบฝึกหัดข้อ 3
// let point = prompt("กรุณาใส่คะแนนของคุณ");
// point = Number(point);
// let grade;
// if (point>=80){
//     grade = "A";
// } else if (point>=70){
//     grade = "B";
// } else if (point>=60){
//     grade = "C";
// } else if (point>=50){
//     grade = "D";
// } else {
//     grade = "F";
// }
// alert(grade);

// exercise JavaScript6.5 แบบฝึกหัดข้อ 4
// let age = prompt('How old are you?');
// age = Number(age);
// let price;
// price = (age < 18)? 2000 : 3500;
// alert(price);

// Homework 16-SEp-2020
// แบบฝึกหัด
/* 2. เขียนคำสั่ง if ที่เช็คอายุว่าอยู่ระหว่าง 18 - 60*/
// 3. เขียนคำสั่ง if ที่เช็คอายุว่าไม่อยู่ระหว่าง 18 - 60
// let age = prompt('Please enter your age');
// age = Number(age);
// let message;
// message = (age >= 18 && age <=60 )? 'อายุคุณอยู่ในช่วง 18-60':'อายุคุณไม่อยู่ในช่วง 18-60';
// /*if (age >= 18 && age <=60 ) {
//     message = 'อายุคุณอยู่ในช่วง 18-60';
// } else {
//     message = 'อายุคุณไม่อยู่ในช่วง 18-60';
// }*/
// alert (message);

// 4. คำสั่ง alert ไหนที่จะถูกรันบ้าง
// if (-1 || 0) alert( 'first' ); รัน
// if (-1 && 0) alert( 'second' ); ไม่รัน
// if (null || -1 && 0) alert( 'third' ); ไม่รัน

// 5. ให้เขียนระบบ login
// let user = prompt("Please enter your username");
// let message, pass;
// if (user === "admin"){
//    pass = prompt("Please enter your password");
//    if (pass === "codecamp#7"){
//         message = "ยินดีตอนรับ";
//    } else if(pass === "" || pass === null) {
//         message = "ยกเลิก";
//    } else {
//         message = "Wrong password";
//    }
// }  else if (user === "" || user === null) {
//     message = "ยกเลิก";
// } else {
//     message = "ผมไม่รู้จักคุณ";
// }
// alert(message);
