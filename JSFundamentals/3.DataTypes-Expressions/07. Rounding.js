/**
 * Created by Kondoff on 22-Sep-16.
 */
function Rounding(num) {
    let N = Number(num[0]);
    let P = Number(num[1]);
    if(P>15){
        p=15
    }
    let rounders = Math.pow(10,P);

    let result = Math.round(N*rounders)/rounders;
    console.log(result)

};
Rounding(['10.5', '3']);