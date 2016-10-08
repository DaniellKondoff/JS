/**
 * Created by Kondoff on 03-Oct-16.
 */
function extract(arr){
    arr=arr.map(Number);

    let result=[];
    let currentBigest=arr[0];

    for (let i=0;i<=arr.length;i++){
        if(currentBigest<=arr[i]){
            currentBigest=arr[i];
            result.push(arr[i]);
        }
    }
    return result.join('\n')
}

//extract(['1','3','8','4','10','12','24','3']);
extract(['20','25','2','15','6','1']);