// Let's see coding implementation of promises in JavaScript

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise((resolve, reject) => {
    const num = getRandomInt(100);

    setTimeout(() => {
      if (num % 2) {
        resolve("Success");
      } else {
        reject("Failed");
      }
    }, 5000);
  });
}

console.log("Heyyy - BEFORE");

const x = createPromiseWithLoop();

console.log("Heyyy - AFTER");

console.log(x);
