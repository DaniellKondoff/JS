/**
 * Created by Kondoff on 22-Sep-16.
 */
function Imperial(num) {
    let N = Number(num[0]);
    let inch = 12;

    let result = N/inch;
    let final = Number.parseInt(result)
    let foot = N%inch;

    console.log(`${final}'-${foot}"`)


};
Imperial(['11']);