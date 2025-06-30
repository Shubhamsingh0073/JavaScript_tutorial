const user={
    username : "Shubham",
    price : 999,
    welcomeMessage : function (){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let username = "shubhu"
//     console.log(this.username);
    
// }
// chai()


// const chai = function(){
    //     let username = "shubhu"
    //     console.log(this.username);
// }

const chai = ()=> {
        let username = "shubhu"
        console.log(this.username);
}
chai()


// const addtwo =(num1,num2) => {
//     return num1 + num2
// }
// console.log(addtwo(3,4));


// const addtwo =(num1,num2) =>  num1 + num2

// const addtwo =(num1,num2) =>  (num1 + num2)

const addtwo =(num1,num2) =>  ({username:"Shubham"})
console.log(addtwo(3,4));


