/**
 * Created by Kondoff on 02-Oct-16.
 */
function EveryN(arr) {

    let N=Number(arr[arr.length-1])

    arr.pop()

    for(let i=0;i<arr.length; i+=N){
        console.log(arr[i])
    }
}

EveryN(['5','20','31','4','20','2'])