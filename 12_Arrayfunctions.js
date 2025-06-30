// const marvel = ["thor","Ironman","Spiderman"]
// const dc = ["Superman", "flash","Batman"]
// // marvel.push(dc)
// // console.log(marvel);
// // console.log(marvel[3][1]);

// const all = marvel.concat(dc)
// console.log(all);

// const all_new = [...marvel, ...dc]
// console.log(all_new);


const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real = another_arr.flat(Infinity)
console.log(real);

console.log(Array.isArray("Shubham"));
console.log(Array.from("Shubham"));
console.log(Array.from({name :"Shubham"}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));
