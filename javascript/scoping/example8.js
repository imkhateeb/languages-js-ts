// Example of var

function fun() {
  var i = 5;

  while (i < 10) {
    var x = i;
    i++;
  }

  // We can access x here
  console.log(x);
}
fun();

// We can do redeclaration of the variable x using var
var name = "Khateeb";
var name = "Siva"; // No error

// We can use var here for a more cleaner code
function gun(x) {
  if (x & 1) {
    var i = 0;
  } else {
    var i = 1;
  }

  console.log(i);
}

gun(10);
