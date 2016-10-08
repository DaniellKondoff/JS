/**
 * Created by Kondoff on 02-Oct-16.
 */
let nums = ['one', 'two', 'three', 'four'];
console.log(nums.join('|'));

let filtredNums=nums.filter(x => x.startsWith('t'));
console.log(filtredNums.join("|"));

let lenght=nums.map(x => x.length);
console.log(lenght.join(" "));

let len=nums.map(x=>[x.length,x[0]]);
console.log(len.join("|"));