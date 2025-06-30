// let MyDate = new Date();
// console.log(MyDate);
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toISOString());
// console.log(MyDate.toJSON());
// console.log(MyDate.toLocaleString());
// console.log(typeof(MyDate));

let MyCreatedDate = new Date(2025, 0,23 , 5, 3)
// let MyCreatedDate = new Date("2025-01-10")
// console.log(MyCreatedDate.toLocaleString());

let MyTimeStamp = Date.now()
// console.log(MyTimeStamp);
// console.log(MyCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log((newDate));
console.log((newDate.getMonth()));

newDate.toLocaleString('default',{
    weekday:"long"
})