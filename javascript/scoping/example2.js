console.log("Hi");
console.lo("Hello");
console.log("Bye");

/**
Above code will throw an error at execution time.
It will print Hi and then throw an error at console.lo("Hello");
Reason: console.lo is not a function. It is console.log, but we have the console object so it didn't throw error at the time of parsing.
 */

//  console.log("Hi");
//  console..log("Hello");
//  console.log("Bye");

/**
 Above code will throw an error at parsing time.
 It will directly throw an error and will not print anything.
  Reason: console..log is not a valid syntax. It will throw an error at the time of parsing.
  */
