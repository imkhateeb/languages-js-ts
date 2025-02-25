// const d = (t) => new Promise((resolve, reject) => setTimeout(resolve, t));

// const s = () => d(500).then(() => console.log(1));

// const t = async () => {
//   await s();
//   console.log("2");
// };

// t();

const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved");
  }, 2000);
});

async function timer() {
  const result = await promise;
  console.log(result);
  console.log("Timer done");
}

timer(); // "Promise resolved" "Timer done"
