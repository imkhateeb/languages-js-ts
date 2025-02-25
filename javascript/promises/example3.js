// Let's see coding implementation of promises in JavaScript

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createPromiseWithLoop() {
  return new Promise((resolve, reject) => {
    console.log("Entering Promise");
    const num = getRandomInt(100);
    for (let i = 0; i < 10000000000; i++) {
      /* some code */
    }
    if (num % 2) {
      resolve(num);
    } else {
      reject(num);
    }
    console.log("Leaving Promise");
  });
}

// This is the
const x = createPromiseWithLoop();

console.log("Some code here - BEFORE");
for (let i = 0; i < 10000000000; i++) {
  /* some code */
}
console.log("Some code here - AFTER");

x.then(
  function fulfillmentHabdler(value) {
    console.log("Fulfilled Value is: ", value);
  },
  function rejectionHandler(reason) {
    console.log("Rejected Reason is: ", reason);
  }
);
