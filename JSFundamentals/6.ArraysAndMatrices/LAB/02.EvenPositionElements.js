/**
 * Created by Kondoff on 02-Oct-16.
 */
function EvenPosition(arr) {
    let line= [];
    for(let i=0;i<=arr.length-1;i+=2){
        line.push(arr[i]);
    }
    console.log(line.join(" "))
}

EvenPosition(['20', '30', '40']);