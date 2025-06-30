// primitive datatypes
// 7 types : string, number, boolean, null, undefined,symbol,bigint

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 979638612575613536n;


// javascript is dynamically typed

// non peimitive or reference datatype
// arrays, objects,functions

const heros = ["apple","mango","grapes"]
let myObj = {
    name:"shubham",
    age :22,
}

const myFunc = function(){
    console.log("hello world")
}

console.log(typeof myObj);
