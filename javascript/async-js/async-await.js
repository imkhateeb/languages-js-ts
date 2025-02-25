async function greet() {
  let promise = new Promise((res, rej) => {
    setTimeout(() => {
      console.log("Khateeb");
    }, 2000);
  });

  const result = await promise;
  console.log(result);
}

greet(); // "Khateeb"
