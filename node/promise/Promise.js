const promise = (callback) => {
  let respond = callback();

  return new Promise((resolve, reject) => {
    if (respond.error) {
      console.log(respond.massage);
      // reject(respond);
      reject(new Error(respond.massage));
    } else {
      console.log(respond.data);
      resolve(respond);
    }
  });
};

function randomNum() {
  let ranNum = Math.random();

  return ranNum < 0.5 ? { error: true, massage: 'number less 0.5' } : { data: ranNum, error: false };
}

function main() {
  const res = promise(randomNum);
  res
    .then((value) => {
      console.log(value);
    })
    .catch((error) => {
      // console.log(error);
      console.log(error.toString());
    });
}

main();
