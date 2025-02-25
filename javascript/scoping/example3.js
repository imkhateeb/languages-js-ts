// Example 3 - Automatic Global Variable
var teacher = "Khateeb";
function fun() {
  var student1 = "Siva";
  content = "JS";
  console.log(student1);
}

function bun() {
  var student2 = "Asma";
  console.log(student2);
}

// console.log(content); // Reference Error: content is not defined
fun();
bun();
console.log(teacher);
console.log(content);

/**
But for strict mode, it will throw a ReferenceError: content is not defined. even though it is declared inside the function.
See example in example4.js
 */
