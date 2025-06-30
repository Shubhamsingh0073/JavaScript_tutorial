// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "Shubham"
tinderUser.isLoggedin = false

// console.log(tinderUser);


const regularuser = {
    email: "shubham@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shubham",
            lastname: "Singh"
        }
    }
}
// console.log(regularuser.fullname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}
const obj3 = {
    5: "e",
    6: "f"
}

// const obj3 = {obj1,obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)
// console.log(obj4);
const obj4 = { ...obj1, ...obj2 }
// console.log(obj4);

const user = [
    {
    id: 1,
    email: "112@gmail.com"
    },
    {
    id: 1,
    email: "112@gmail.com"
    },
    {
    id: 1,
    email: "112@gmail.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course ={
    coursename : "JavaScript",
    price : "999",
    courseInstructor: "Shubham"
}

const {courseInstructor : instructor} = course

console.log(instructor);

// {
//     "name" : "Shubham",
//     "coursename" :"JavaScript",
//     "price" :  "free"
// }

