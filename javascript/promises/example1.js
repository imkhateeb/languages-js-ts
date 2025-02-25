// Let's see coding implementation of promises in JavaScript

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise((resolve, reject) => {
    const num = getRandomInt(100);
    for (let i = 0; i < 10000000000; i++) {
      /* some code 8 */
    }
    if (num % 2) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  });
}

console.log("Hey - BEFORE");
const x = createPromiseWithLoop();
console.log("Hey - AFTER");

console.log(x);
