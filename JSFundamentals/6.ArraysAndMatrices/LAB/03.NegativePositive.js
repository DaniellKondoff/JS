/**
 * Created by Kondoff on 02-Oct-16.
 */
function NegativePositive(arr) {
    arr=arr.map(Number);
    let result=[];

    for(let num of arr){
        if(num <0){
            result.unshift(num)
        }
        else{
            result.push(num)
        }
    }

    console.log(result.join('\n'))

}

NegativePositive(['7','-2','8','9']);