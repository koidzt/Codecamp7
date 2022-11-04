function taskOne() {
  setTimeout(function () {
    console.log('this is task 1');
  }, 500);
}
function taskTwo() {
  console.log('this is task 2');
}
function taskThree() {
  setTimeout(function () {
    console.log('this is task 3');
  }, 750);
}

/* setTimeout ใน Promise คือเสมือนยิ่ง APIs แล้วหน่วงรอ APIs return ค่าคือนกลับมา โดยค่า return กลับมาจะมาใน resolve(ค่าที่ return มา) */
function promiseTaskOne() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('this is task 1');
      resolve();
    }, 500);
  });
}
function promiseTaskTwo() {
  return new Promise((resolve, reject) => {
    console.log('this is task 2');
    resolve();
  });
}
function promiseTaskThree() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('this is task 3');
      resolve();
    }, 750);
  });
}

function main() {
  const noPromise = () => {
    console.log('No Promise');
    taskOne();
    taskTwo();
    taskThree();
  };

  const promiseChaining = () => {
    console.log('Promise Chaining');
    promiseTaskOne().then(() => {
      promiseTaskTwo().then(() => {
        promiseTaskThree();
      });
    });
  };

  const usedPromiseByThenCatch = () => {
    console.log('Used Promise by then-catch');
    promiseTaskOne()
      .then(() => {
        promiseTaskTwo();
      })
      .then(() => {
        promiseTaskThree();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const usedPromiseByAsyncAwait = async () => {
    console.log('Used Promise by async-await');
    await promiseTaskOne();
    await promiseTaskTwo();
    await promiseTaskThree();
  };

  const showLog = true; // true : show resolve, false : show reject

  return new Promise((resolve, reject) => {
    if (showLog) {
      noPromise();
      resolve('THEN : showLog is true.');
    } else {
      reject('CATCH : showLog is false.');
    }
  })
    .then(() => {
      setTimeout(() => {
        // promiseChaining();
        // usedPromiseByThenCatch();
        usedPromiseByAsyncAwait();
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
    });
}

main();
