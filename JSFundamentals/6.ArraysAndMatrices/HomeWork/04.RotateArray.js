/**
 * Created by Kondoff on 03-Oct-16.
 */
function rotateArr(arr) {

    let cmd=Number(arr[arr.length-1]);
    arr.pop();

    for(let i=0;i<cmd;i++){
        arr.unshift(arr[arr.length-1])
        arr.pop()
    }
    console.log(arr.join(" "))

}

rotateArr(['1','2','3','4','2'])