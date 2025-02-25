const promise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Promise resolved");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
