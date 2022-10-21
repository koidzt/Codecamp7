// Note
// CRUD ย่อมาจาก Create Read Update Delete
// Object
// การประกาศตัวแปร Object ทำดังนี้
// let user = {name: "Koi", age: 28, "computer skill": null};
// การใช้งานตัว Object สามารถเรียกใช้ได้ 2 แบบ
// 1 แบบ . ใช้โดย <ชื่อของ Object>.<ชื่อของ Properties> = <ค่าที่ต้องการใส่>
// 2 แบบ [] ใช้โดย <ชื่อของ Object>[<ชื่อของ Properties>] = <ค่าที่ต้องการใส่>

// Test Object
// let user = {
//     name : "Koi",
//     age : 28,
//     height : "167 cm",
//     weight : "62 kg",
//     isAdmin : false,
//     home : "Bangkok",
//     country : "Thailand",
//     salary : 30000,
//     haveCar : true,
//     blackCar : false,
// }
// for (key in user) {
//     console.log(`Key : ${key} value : ${user[key]}`)
// }

/* let user = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10
  }
// for (key in user) {
//     if(key ==="d" || key ==="e") {
//         continue;
//     }
//     console.log(`Key : ${key} \t Value : ${user[key]}`);
// }
    for (key in user) {
        if(key !=="d" && key !=="e") {
            console.log(`Key : ${key} \t Value : ${user[key]}`);
        }
        
    } */

// Exercise
// 1.10 การเขียน Code
/* function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", ''), n = prompt("n?", '');

if (n <= 0) {
    alert(`Power ${n} is not supported, 
  please enter an integer number greater than zero`);
} else {
    alert(pow(x, n));
} */

// 4.7 Computed Properties ข้อ 1
/* let key = prompt("Enter key",'');
let value;
let obj = {};

while (key !== "stop") {
    value = prompt("Enter value",'');
    obj[key] = value;
    key = prompt("Enter key",'');
}

console.log(obj); */

// 4.7 Computed Properties ข้อ 2
// let key = prompt("Enter key",'');
// let value;
// let obj = {};

// while (key !== "stop") {
//     value = +prompt("Enter value",'');
//     if (value > 1) {
//         key = key + 's';
//     }
//     obj[key] = value;
//     key = prompt("Enter key",'');
// }
// console.log(obj);

// 4.18.  Object
// ข้อ 2 ให้เขียนฟังก์ชันชื่อ isEmpty(obj)
// โดยจะมี parameters เป็น obj และ ฟังก์ชันนี้จะเช็คว่า obj
// นี้มี properties ไหม ถ้ามีให้คืนค่า true ถ้าไม่มีให้คืนค่า false
//  function isEmpty(obj){
//     for (let key in obj) {
//         return (true);
//     }
//     return (false);
// }
// console.log( isEmpty({}) );

// ข้อ 4 จงเขียนฟังก์ชัน sum(obj) ที่รับ obj ที่เก็บ properties
// โดยมี key เป็นชื่อพนักงานและมี value เป็นเงินเดือน
// ให้ฟังก์ชันคืนค่าเป็นผลรวมของเงินเดือนพนักงานทั้งหมด
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// function sum(obj){
//     let totalSalaries = 0;
//     for(let key in obj) {
//         totalSalaries = totalSalaries + obj[key];
//     }
//     return (totalSalaries);
// }
// console.log( sum(salaries) );

// 5.จงเขียนฟังก์ชัน multiplyNumeric(obj, times)
// โดยถ้า properties นั้นมี value เป็น number ให้คุณ value
// นั้นด้วย times ถ้าข้อมูลเเป็นอย่างอื่นไม่ต้องทำอะไร
function multiplyNumeric(obj, times) {
  for (let key in obj) {
    if (obj[key] > 0) {
      obj[key] = obj[key] * times;
    }
  }
  return obj;
}
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};
console.log(multiplyNumeric(menu, 2));

// ADVANCE 2
// let user = {
//     name: "John",
//     age: 30
// };

// user.sayhi = function() {
//     console.log("สวัสดีครับ วันนี้วันที่ 21 เดือน 9 ปี 2020")
// }

// user = {
//     sayHi: function() {
//         alert("Hello");
//     }
// };

// user = {
//     sayHi() {
//         alert("Hello");
//     }
// };

// Methods ของ Object
// แบบฝึกหัด 6.6 ข้อ 3
// let calculator = {
//     read() {
//          this.num1 = +prompt("Enter first number");
//          this.num2 = +prompt("Enter first second");
//     },
//     sum() {
//       return  this.num1 + this.num2;
//     },
//     mul() {
//       return  this.num1 * this.num2;
//     }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// 7. Constructor กับ New
// แบบฝึกหัด 7.4. ข้อ 1
// สร้าง constructor function ที่ใช้สำหรับ
// สร้าง Calculator โดยต้องมี 3 Methods นี
// read(): รับค่าจาก propmt สองตัว
// sum(): ให้คืนค่าจากการบวกกันของตัวแปรสองตัว
// mul(): ให้คืนค่าจากการคูณกันของตัวแปรสองตัว้

// let Calculator = function() {
//     this.read = function() {
//       this.num1 = +prompt("enter first number");
//       this.num2 = +prompt("enter second number");
//     },
//     this.sum = function() {
//       return this.num1 + this.num2;
//     },
//     this.mul = function() {
//       return this.num1*this.num2;
//     }
//   };
// let cal = new Calculator();

// 7.4.  แบบฝึกหัด ข้อ 2
// function Accumulator(startingValue) {
//   this.value = Number(startingValue);
//   this.read = function () {
//     const number = Number(prompt('Enter Number'));
//     this.value += number;
//   };
// }
