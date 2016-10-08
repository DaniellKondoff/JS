/**
 * Created by Kondoff on 24-Sep-16.
 */
function BigestNum(num) {
    let x = Number(num[0]);
    let y = Number(num[1]);
    let xMin = Number(num[2]);
    let xMax = Number(num[3]);
    let yMin = Number(num[4]);
    let yMax = Number(num[5]);

    if (x>=xMin && x <= xMax&& y>=yMin && y <= yMax){
        console.log("inside")
    }
    else
        console.log("outside")

}

BigestNum(['5', '-2','7']);