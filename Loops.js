for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5) {
        // console.log("Element is 5");
        // continue; // Skip the rest of the loop when element is 5
    }
    // console.log(element+1);
}

// console.log(elemant);

// for (let i = 0; i < 10; i++) {
//     console.log(`Outer Loop value :${i}`);
//     for (let j = 0; j < 10; j++) {
//         // console.log(`Inner Loop Value ${j} and ${i}`);
//         console.log(i +'*' + j + '=' + i*j);
        
//     }
    
// }

let myArray = ["A","B","C"]

// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
    
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index ==5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of i is ${index}`);

for (let index = 1; index <= 20; index++) {
    if (index ==5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of i is ${index}`);
}