const name = "Shubham"
const repoCount = "5"
console.log(name + repoCount + "value");
console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sh-ubh-am")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf("u"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherstring = gameName.slice(-7,4)
console.log(anotherstring);

console.log(gameName.split("-"));

