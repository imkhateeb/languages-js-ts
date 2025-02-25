// While we can use let here for better scoping

function fun(x) {
  for (let i = 0; i < x; i++) {
    console.log(i);
  }

  // console.log(i); // error

  // If we have used var i instead of let i, it would have been accesible here
}

function process(x, y) {
  if (x > y) {
    let temp = x;
    x = y;
    y = temp;
  }

  // console.log(temp); // error
  // If we have used var temp instead of let temp, it would have been accessible here
}
