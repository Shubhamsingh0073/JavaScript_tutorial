// var c =300
let a = 100

if(true){
    let a = 10
    const b = 20
    // var c = 30
    // console.log("Inner",a);
    
}

function one(){
    const username = "Shubham"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}
// one()

if(true){
    const username = "Shubham"
    if(username === "Shubham"){
        const website = "Youtube"
        // console.log(username+website);
            
    }
    // console.log(website);
    

}
// console.log(username);


// console.log(a);
// console.log(b);
// console.log(c);



/////////////////+++++++++++++++++++ interesting+++++++++++++++++++++++++++++///////////
console.log(addone(5))

function addone(num){
    return num+1
}

console.log(addtwo(5))

const addtwo = function(num){
    return num+2
}


