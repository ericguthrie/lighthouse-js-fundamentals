

const sayHello  = function (name) {
  console.log("Hello, " + name);
}
sayHello('Claire');

//return and console.log//
const sayHelloToConsole  = function (name) {
  console.log("Howdy, " + name);
}
sayHelloToConsole('partner');

const returnSayHello  = function (name) {
  return "Howdy, " + name;
}
const greeting = returnSayHello('Matey');
console.log(greeting)