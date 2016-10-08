/**
 * Created by Kondoff on 08-Oct-16.
 */
let phonebook={};
console.log(phonebook)
phonebook["Kondov"]='0886021544'; //Add
phonebook["Daniel"]="2548654";
phonebook["Lisa Smith"] = "+1-555-1234";
phonebook["Sam Doe"] = "+1-555-5030";
phonebook["Daniel"]="2"; //Replace
delete phonebook['Daniel']; //Delete
console.log(phonebook);

console.log(Object.keys(phonebook).length)
console.log(Object.keys(phonebook))

console.log(phonebook['Kondov'])

for (let key in phonebook){
    console.log(`${key} -> ${phonebook[key]}`);
}

for (let key of Object.keys(phonebook)){
    console.log(`${key} -> ${phonebook[key]}`);
}

let obj = {
    "1": 'one',
    "3": 'three',
    "2": 'two',
    "z": 'z',
    "a": 'a'
}

console.log(Object.keys(obj));// ["1", "2", "3", "z", "a"]

console.log(obj);Object //{1: "one", 2: "two", 3: "three", z: "z", a: "a"}
