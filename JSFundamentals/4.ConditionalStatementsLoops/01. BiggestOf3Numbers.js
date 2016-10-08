/**
 * Created by Kondoff on 24-Sep-16.
 */
function BigestNum(num) {
    let num1 = Number(num[0]);
    let num2 = Number(num[1]);
    let num3 = Number(num[2]);

    let result = Math.max(num1,num2,num3)
    console.log(result)
}
BigestNum(['5', '-2','7']);