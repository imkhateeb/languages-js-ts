var teacher = "Khateeb";

function fun() {
  console.log(teacher);
  // console.log(student); // ReferenceError: student is not defined
  /**
   * TDZ - Temporal Dead Zone
   * It is the time between the variable creation and initialization
   */

  var teacher = "Siva";
  console.log(teacher);

  let student = "Asma"; // Only accessible within the block and post declaration

  if (student == "Asma") {
    let hours = +"120";
    console.log(hours);
  }
  console.log(student);

  // console.log(hours); // ReferenceError: hours is not defined
}

fun();
console.log(teacher);
