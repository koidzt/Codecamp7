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
  }, 1000);
}

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
    }, 1000);
  });
}

function main() {
  const noPromise = () => {
    console.log('No Promise');
    taskOne();
    taskTwo();
    taskThree();
  };

  const usedPromise = () => {
    console.log('Used Promise');
    promiseTaskOne().then(() => {
      promiseTaskTwo().then(() => {
        promiseTaskThree();
      });
    });
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
        usedPromise();
      }, 2000);
    })
    .catch((error) => {
      console.log(error);
    });
}

main();
