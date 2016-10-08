/**
 * Created by Kondoff on 22-Sep-16.
 */
function Compound(num) {
    let P = Number(num[0]);
    let i = Number(num[1]);
    let n = Number(num[2]);
    let t = Number(num[3]);
    let year = 12;
    let ii = i/100;
    let nn = year / n;

    let F = (1+(ii/nn));
    let stepen = nn * t;
    let resultF= Math.pow(F,stepen) * P;
    console.log(resultF.toFixed(2))
}
Compound(['1500', '4.3', '3', '6']);