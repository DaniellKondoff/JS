/**
 * Created by Kondoff on 22-Sep-16.
 */
function Prop(arr) {
    let obj={};
    let p1 =arr[0];
    let p2 =arr[1];
    let p3 =arr[2];

    let v1 =arr[3];
    let v2 =arr[4];
    let v3 =arr[5];

    obj[p1]=arr[1];
    obj[p3]=arr[3];
    obj[v2]=arr[5];

    console.log(obj)

    //console.log(`{ ${p1}: '${p2}', ${p3}: '${v1}', ${v2}: '${v3}' }`)


}
Prop(['ssid', '90127461', 'status', 'admin', 'expires', '600']);