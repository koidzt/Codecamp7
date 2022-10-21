// // Exercise 1 มี Object ชื่อ user ดังนี้
// let user = {
//     name: "John",
//     years: 30
// };
// // ให้เขียน Destructuring assignment ที่ให้

// //1.1 property ที่ชื่อ name ไปอยู่ในตัวแปร name
// let {name} = user;
// console.log(name);

// //1.2 property ที่ชื่อ years ไปอยู่ในตัวแปร age
// let {years:age} = user;
// console.log(age);

// //1.3 property ที่ชื่อ isAdmin ไปอยู่ในตัวแปร isAdmin (ให้เป็น false ถ้าไม่มีค่าให้กำหนด)
// let {isAdmin = false} = user;
// console.log(isAdmin);

// Exercise 2 มี Object ชื่อ salaries ให้
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
// ให้สร้าง function topSalary(salaries) ที่คืนค่าชื่อคนที่มีเงินเดือนสูงสุด
// 2.1 ถ้า salaries ไม่มีข้อมูลให้คืนค่าเป็น null
function topSalary(obj) {
  let max = -Infinity;
  let name = '';
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      name = key;
    }
  }
  return name;
}

// function topSalary(salaries) {
//     let max = -Infinity;
//     let manName = null;
//     for (const [name,salary] of Object.entries(salaries)) {
//         if (max < salary) {
//             max = salary;
//             maxName = name;
//         }
//     }
//     return maxName;
// }
console.log(topSalary(salaries));

// 2.2 ถ้าสูงสุดมีหลายคน ก็ให้คืนใครก็ได้สักคน

// // Exercise 3. ใช้ __proto__ ในการกำหนด prototype object ดังนี้
// // pockets → bed → table → head.
// let head = {
//   glasses: 1,
// };

// let table = {
//   pen: 3,
//   __proto__: head,
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table,
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed,
// };

// // Exercise 4. การเขียนโค๊ดแบบนี้ object ไหนจะเป็นคนได้ property full ไป
// let animal = {
//   eat() {
//     this.full = true;
//   },
// };

// let rabbit = {
//   __proto__: animal,
// };

// rabbit.eat();
// rabbit;
