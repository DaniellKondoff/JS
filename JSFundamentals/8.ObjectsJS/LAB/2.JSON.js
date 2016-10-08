/**
 * Created by Kondoff on 08-Oct-16.
 */
let obj={name:"SoftUni",age:3};
let str=JSON.stringify(obj);
console.log(str); //{"name":"SoftUni","age":3}
console.log(obj);//{ name: 'SoftUni', age: 3 }

let obj2 = "{\"name\":\"Nakov\",\"age\":24}";
let str2=JSON.parse(obj2);
console.log(str2) //{ name: 'Nakov', age: 24 }
console.log(obj2) //{"name":"Nakov","age":24}

