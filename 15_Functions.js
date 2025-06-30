


function saymyname(){
    console.log("S");
    console.log("H");
    console.log("U");
    console.log("B");
    console.log("H");
    console.log("A");
    console.log("M");
}

// saymyname()
// function addtwonumbers(num1,num2){
//     console.log(num1 + num2)
// }
function addtwonumbers(num1,num2){
    // let result = num1 +num2
    // return result

    return num1+num2
}

const result = addtwonumbers(3,5)
// console.log("result:",result);


function loginusermesssage(username = "sam"){
    if(username === undefined){
        // console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermesssage("Shubham"));
// console.log(loginusermesssage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,500,700,2000));
const user={
    username:"Shubham",
    Prices : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
    
}
// handleObject(user)
handleObject({
    username:"Shubham",
    price:199
})

const newArray = [100,200,300,400]

function returnsecondvalue(getArray){
    return getArray[1]
}

console.log(returnsecondvalue(newArray));
