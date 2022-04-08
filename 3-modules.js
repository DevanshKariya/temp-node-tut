//CommonJs, every file is module (by default)
// Modules - Encapsulated code (only share minimum )

// const names = require("./4-names.js");
// const sayHi = require("./5-utils.js");

// console.log(names);
// sayHi("Devansh");
// sayHi(names.john); //since john and peter are objects
// sayHi(names.peter);

// OR

const { john, peter } = require("./4-names.js"); //destructuring
const sayHi = require("./5-utils.js");
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");

// console.log(names);
console.log(data);
sayHi("Devansh");
sayHi(john); //since john and peter are objects
sayHi(peter);
