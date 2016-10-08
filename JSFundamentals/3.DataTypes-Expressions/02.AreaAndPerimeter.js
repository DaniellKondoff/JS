/**
 * Created by Kondoff on 21-Sep-16.
 */
function Area(num) {
    let a = Number(num[0]);
    let b = Number(num[1]);
    let area = (a*b);
    let per= 2*(a + b);

    console.log(area);
    console.log(per);


}

Area(['1','3'])