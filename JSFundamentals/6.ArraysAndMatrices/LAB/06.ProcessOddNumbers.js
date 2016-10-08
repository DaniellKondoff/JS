/**
 * Created by Kondoff on 02-Oct-16.
 */
function OddNums(arr) {
    arr=arr.map(Number);
    let result=[];
    for(let i=1;i<=arr.length;i+=2){
        result.push(arr[i]*2)
    }
    result.reverse();
    console.log(result.join(" "))

}

OddNums(['10','15','20','25']);

function firstLastKElements(arr) {
    let result = arr
        .filter((num, i) => i % 2 == 1)
        .map(x => 2*x)
        .reverse();
    console.log(result.join(" "))
}
firstLastKElements(['10','15','20','25']);