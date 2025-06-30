const userEmail = []

if (userEmail) {
  console.log("Got user Email");
    
}
else {
  console.log("Don't have user Email");
    
}

// fasly values 
// false, 0, ,-0 ,BigInt 0n,"", null, undefined, NaN

// truthy values
// "0", " ", [], {}, true, 1, -1, BigInt 1n, 'false', function(){},

// if (userEmail.length===0) {
//   console.log("User Email is empty");
    
// }

const emptyObj ={}

// if (Object.keys(emptyObj).length === 0) {
//   console.log("Object is empty");
    
// }

// nullish coalescing Operator

// let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null??10??20
// console.log(val1);


// ternary operator
// condition ? true: false

const iceteaPrice = 100
iceteaPrice<=80 ? console.log("Less than 80") : console.log("Greater than 80");

