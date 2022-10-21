/* Basic */
console.log('Basic');
function sum(a, b) {
  // ฟังก์ชันประกาศแค่ 2 Parameters
  return a + b;
}
console.log('fn sum(a,b)');
console.log('sum(1,2,3,4,5) = ', sum(1, 2, 3, 4, 5)); // เวลาเรียกจะใส่กี่ Arguments ก็ได้ แต่ function ทำ 2 ตัวแรกตามที่ประกาศรับ Parameters ตาม function ตัวที่เกินไม่สนใจเพราะไม่ได้ใช้ทำอะไร

console.log(''); //<br/>

function sumAll(...args) {
  // args คือชื่อของ array ที่เก็บ Parameters ไว้
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}
console.log('fn sumAll(...arg)');
console.log('sumAll(1) = ', sumAll(1)); // 1
console.log('sumAll(1,2) = ', sumAll(1, 2)); // 3
console.log('sumAll(1,2,3) = ', sumAll(1, 2, 3)); // 6

console.log(''); //<br/>

function mergeChar(...args) {
  let character = '';
  for (let arg of args) character += arg;
  return character;
}
console.log('fn mergeChar(...args)');
console.log(`mergeChar('G', 'o', 'o', 'g', 'l', 'e') = `, mergeChar('G', 'o', 'o', 'g', 'l', 'e'));

console.log(''); //<br/>

console.log('fn showName(firstName, lastName, ...titles)');
function showName(firstName, lastName, ...titles) {
  console.log(firstName + ' ' + lastName); // Julius Caesar
  // ที่เหลือ (the rest) กลายเป็น array ชื่อ titles
  // เช่น titles = ["Consul", "Imperator"]
  console.log(titles[0]);
  console.log(titles[1]);
  console.log(titles.length);
}
showName('Julius', 'Caeser', 'Consul', 'Imperator');

console.log(''); //<br/>

console.log('fn showNumber(first, second, ...numbers)');
function showNumber(first, second, ...numbers) {
  console.log(numbers);
  console.log(arguments);
}
showNumber(1, 2, 3, 4, 5, 6);

console.log(''); //<br/>

console.log('show Array [3, 5, 1] each form');
let arr = [3, 5, 1];
console.log('Array = ', arr);
console.log('...Array = ', ...arr);
console.log('Math.max(...Array) = ', Math.max(...arr));

console.log(''); //<br/>

console.log('show spread 2 Array');
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
console.log(...arr1, ...arr2); // 1, -2, 3, 4, 8, 3, -8, 1
console.log(Math.max(...arr1, ...arr2)); // 1, -2, 3, 4, 8, 3, -8, 1

console.log(''); //<br/>

console.log('show merged 2 Array');
let arrMerge1 = [3, 5, 1];
let arrMerge2 = [8, 9, 15];
let mergedArr = [0, ...arrMerge1, 2, ...arrMerge2]; // [0, 3, 5, 1, 2, 8, 9, 15];
console.log(mergedArr);

console.log(''); //<br/>

console.log('show copy array before push');
let arrManage = [1, 2, 3];
let arrCopyManage = [...arr];
arrManage.push(4);
console.log(arrManage); // [ 1, 2, 3, 4 ]
console.log(arrCopyManage); // [ 1, 2, 3 ]

console.log(''); //<br/>

console.log('show Destructuring');
let [firstNameArr, , titleArr] = ['Julius', 'Caeser', 'Consul', 'Of the Roman Republic'];
console.log(titleArr);

console.log(''); //<br/>

console.log('show new Map()');
let userBasic = new Map();
userBasic.set('name', 'John');
userBasic.set('age', '30');
console.log(userBasic);
for (let [key, value] of userBasic) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

console.log(''); //<br/>

console.log('show Object');
let menuOptions = {
  titleObj: 'Menu',
  widthObj: 100,
  heightObj: 200,
};
let { titleObj, widthObj, heightObj } = menuOptions;
console.log(titleObj); // Menu
console.log(widthObj); // 100
console.log(heightObj); // 200

console.log(''); //<br/>

console.log('Change valueName from property (sourceProperty: targetVariable)');
let { widthObj: w, heightObj: h, titleObj: titleObject } = menuOptions;
// widthObj -> w
// heightObj -> h
// titleObj -> titleObject
console.log(titleObject); // Menu
console.log(w); // 100
console.log(h); // 200

console.log(''); //<br/>

console.log('Destructuring assignment split in multiple lines for clarity');
let largeOptions = {
  size: {
    width: 100,
    height: 200,
  },
  items: ['Cake', 'Donut'],
  extra: true,
};
let {
  size: {
    // put size here
    width,
    height,
  },
  items: [item1, item2], // assign items here
  title = 'Menu', // not present in the object (default value is used)
} = largeOptions;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
console.log(item1); // Cake
console.log(item2); // Donut

console.log('\n\n'); //<br/>

/* Advance */
console.log('Advance');

console.log(''); //<br/>

console.log('Function userAdvance have method into function');
let userAdvance = {
  name: 'John',
  surname: 'Smith',

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(' '); // ใส่ value ใหม่ แทนที่ค่าเดิม
  },
};
console.log('init name = ', userAdvance.name); // Alice
console.log('init surname = ', userAdvance.surname); // Cooper
console.log('get full name = ', userAdvance.fullName);
userAdvance.fullName = 'Alice Cooper';
console.log('set "Alice Cooper" is full name');
console.log('get full name = ', userAdvance.fullName);

console.log(''); //<br/>

console.log('Proto in object');
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// Object.keys คืนค่าแค่ keys ของมันเอง
console.log('Object.keys(rabbit) = ', Object.keys(rabbit), " // show only object's key (excluding __proto__)"); // jumps

// for..in loops คืนค่าทั้ง keys ของมันและ key ที่ถูกถ่ายทอดมาด้วย
console.log('for..in loops // show all key in Object (including __proto__)');
for (let prop in rabbit) {
  console.log(prop);
} // jumps, then eats
