// การประกาศ Function ทัวไป
function add(a, b) {
  return a + b;
}
console.log(add);
console.log(add(1, 2));

// การเอา function ใส่ไว้ในตัวแปร
const addVar = function (a, b) {
  return a + b;
};
console.log(addVar);
console.log(addVar(1, 2));

// การเขียน Arrow Function
const addArrow = (a, b) => a + b;
console.log(addArrow);
console.log(addArrow(1, 2));

function sayHi(name, doActivity) {
  console.log(`Hi, ${name}`);
  doActivity();
}
const sayBye = () => {
  console.log('Bye, Codecamp#7');
};
sayHi('Codecamp#7', sayBye);

function greatherThan(n) {
  // n = 10
  return function (m) {
    return m > n;
  };
}
let greaterThan10 = greatherThan(10);
// let greaterThan10 = function (n) {
// m = 11
//     return m > n;
// }
console.log(greaterThan10(11));

// ที่มาของ function map
function map(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

function doSomthing(item) {
  return item + '-TAG';
}

const results = map(['1', '2', '3'], doSomthing);
console.log(results, ';;; results');

//การใช้ array.filter()
const numbers = [1, 2, 3];
const resultFilter = numbers.filter((item) => item > 1);
console.log(resultFilter);

// การใช้ array.reduce()
const characters = ['a', 'a', 'b', 'c'];
const resultsReduce = characters.reduce((arr, char) => {
  if (!arr[char]) {
    arr[char] = 1;
  } else {
    arr[char]++;
  }
  return arr;
}, {});
console.log(resultsReduce);
