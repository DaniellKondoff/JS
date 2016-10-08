/**
 * Created by Kondoff on 29-Sep-16.
 */
function isVolume(num) {
    for (let i=0; i< num.length; i+=3){
        let x = num[i];
        let y = num[i+1];
        let z = num[i+2];

        if (inVolume(x,y,z)){
            console.log("inside")
        }
        else{
            console.log("outside")
        }
    }

    function inVolume(x,y,z) {
        let x1=10, x2=50;
        let y1=20, y2=80;
        let z1=15,z2=50;

        if(x>=x1 && x<=x2){
            if(y>=y1 && y<=y2){
                if(z>=z1 && z<=z2){
                    return true
                }

            }
        }
        else{
            return false
        }
    }

}
isVolume(['13.1', '50', '31.5', '50', '80', '50', '-5', '18', '43']);