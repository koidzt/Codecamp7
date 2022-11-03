const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

readFilePromise('./text.txt') //ถ้ามีไฟล์ชื่อ text.txt จะอ่านไฟล์นั้น แต่ถ้าไม่มีจะขึ้น error
  .then((data) => {
    console.log(`THEN`);
    console.log(`Data in file : ${data}`);
  })
  .catch((err) => {
    console.log('CATCH');
    console.log(err);
  });
