"use strict";

// Example 4 - Using strict mode
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

fun();
bun();
console.log(teacher);
console.log(content); // ReferenceError: content is not defined
