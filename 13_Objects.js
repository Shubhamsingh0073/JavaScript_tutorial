const MySym = Symbol("key1 ")
// object literals 

const js_user = {
    name : "Shubham",
    "full name":"Shubham Singh",
    [MySym] : "key1",
    age : 22,
    location :"Jamshedpur",
    email : "shubham@google.com",
    isLoggedIn : false,
    LastLogindays : ["monday", "Wednesday"]
}

// console.log(js_user["email"]);
// console.log(js_user[MySym]);

// Object.freeze(js_user)
js_user.email = "Shubham@yahoo"
// console.log(js_user.email);

js_user.greeting = function(){
    console.log("Hello JS user");
    
}
js_user.greeting_two = function(){
    console.log(`Hello JS user,${this.name}`);
    
    
}

console.log(js_user.greeting());
console.log(js_user.greeting_two());
