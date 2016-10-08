/**
 * Created by Kondoff on 08-Oct-16.
 */
let obj={name:"SoftUni",age:3};
console.log(obj);// Object {name: "SoftUni", age: 3}

obj['site']="https://softuni.bg";
obj.age=10;
obj['name']="Software University";
console.log(obj);// Object {name: "Software University", age: 10, site: "https://softuni.bg"}

delete obj.name;//Delete Propery
obj.site=undefined; //Delete a property Value
console.log(obj);

//More about Objects

let sofia={name:"Sofia",late:42.692,long:23.32};
console.log(Object.keys(sofia));
let emptyObj={ };
console.log(Object.keys(emptyObj))
console.log(Object.hasOwnProperty("name"));
//if(sofia.age==undefined){
    console.log("Key 'age' does not exist")//Key 'age' does not exist

//}
    if(sofia.name != undefined) {
    console.log("Key 'name' exist")//Key 'name' exis
}

