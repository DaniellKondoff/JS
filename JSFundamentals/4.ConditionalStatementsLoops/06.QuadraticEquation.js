/**
 * Created by Kondoff on 25-Sep-16.
 */
function Quadratic(num) {
    let a = Number(num[0]);
    let b = Number(num[1]);
    let c = Number(num[2]);

    let D = (b*b) - (4*a*c);

    if(D >0){
        let x1=(-b + Math.sqrt(D)) / (2*a);
        let x2=(-b - Math.sqrt(D)) / (2*a);
        if (x1>x2){
            console.log(x2);
            console.log(x1);
        }
        else{
            console.log(x1);
            console.log(x2);
        }
    }

    else if(D == 0){
        x = -b /(2*a);
        console.log(x)
    }

    else if ( D <0){
        console.log("No")
    }

}
Quadratic(['5', '2','1']);