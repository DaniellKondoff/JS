/**
 * Created by Kondoff on 01-Oct-16.
 */
function Checker(input) {
    let x1=Number(input[0]);
    let y1=Number(input[1]);
    let x2=Number(input[2]);
    let y2=Number(input[3]);

    printResult(x1, y1, 0, 0, isInteger(calcDistance(x1, y1)));
    printResult(x2, y2, 0, 0, isInteger(calcDistance(x2, y2)));
    printResult(x1, y1, x2, y2, isInteger(calcDistance(x1, y1, x2, y2)));

    function calcDistance(x1,y1,x2=0,y2=0) {
        return Math.sqrt( Math.pow((x2-x1),2)+Math.pow((x2-x1),2))
    }

   function isInteger(num) {
       return num === Math.round(num);
   }

    function printResult(x1, y1, x2, y2, isInteger) {
        if (isInteger) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

}

Checker(['3','0','0','4'])