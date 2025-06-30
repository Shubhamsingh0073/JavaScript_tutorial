// primitive types use stack memory
// non primitive types uses heap memory

let name = "shubham"

let another = name
another = "chaiaurcode"
console.log(another);

let user1={
    email :"tom@gmail.com",
    upi :"tom@ybl",

}

let user2 = user1

user2.email = "shubham@gmail.com"
console.log(user1.email);
console.log(user2.email);

