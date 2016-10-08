/**
 * Created by Kondoff on 21-Sep-16.
 */
function Distance(num) {
    let x1 = Number(num[0]);
    let y1 = Number(num[1]);
    let z1 = Number(num[2]);

    let x2 = Number(num[3]);
    let y2 = Number(num[4]);
    let z2 = Number(num[5]);

    let result = Math.pow((x2-x1),2) + Math.pow((y2 -y1),2) + Math.pow((z2 -z1),2)
    console.log(Math.sqrt(result))
}
Distance(['1', '1', '0', '5', '4', '0']);