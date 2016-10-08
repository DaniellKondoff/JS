/**
 * Created by Kondoff on 21-Sep-16.
 */
function Distance(num) {
    let V1 = Number(num[0]);
    let V2 = Number(num[1]);
    let T = Number(num[2]);

    let convertV2=V2*1000
    let convertV1=V1*1000
    let convertT=T/3600

    let S1=convertV1 *convertT;
    let S2 =convertV2*convertT;

    let distance = Math.abs(S1 - S2) ;
    console.log(distance)

}

Distance(['0','60','3600']);