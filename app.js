// write code here
const array1 = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const array2 = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array3 = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]

let result1 = array1.map(x => x.toFixed(2));
let result2 = array2.map(x => months[x]);
let result3 = array3.map(x => Math.sqrt(Math.sqrt(x)));

console.log(result1);
console.log(result2);
console.log(result3);