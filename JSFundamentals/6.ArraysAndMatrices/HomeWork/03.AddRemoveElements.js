/**
 * Created by Kondoff on 02-Oct-16.
 */
function AddRemove(arr) {

    let result =[];
    let index=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]=="add"){
            result.push(index)
        }
        else if(arr[i]=="remove"){
            result.pop()
        }
        index++;
    }

    if(result.length<=0){
        console.log("Empty")
    }
    else {
        for (let num of result) {
            console.log(num)
        }
    }

}

AddRemove(['add','add','remove','add','add'])