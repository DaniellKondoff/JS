/**
 * Created by Kondoff on 01-Oct-16.
 */
function Locator(input) {

    for(let i=0;i<input.length;i+=2){
        let x= Number(input[i]);
        let y= Number(input[i+1]);
        printResult(isSamoe(x,y),isCook(x,y),isTonga(x,y),isTuvalu(x,y),isTokelau(x,y));
    }

    function isSamoe(x,y) {
        return(x>=5 && x<=7 && y>=3 &&y<=6)
    }
    function isCook(x,y) {
        return (x>=4 && x<=9 && y>=7 &&y<=8)
    }
    function isTonga(x,y) {
        return (x>=0 && x<=2 && y>=6 &&y <=8)

    }
    function isTuvalu(x,y) {
        return (x>=1 && x<=3 && y>=1 &&y<=3)
    }
    function isTokelau(x,y) {
        return (x>=8 && x<=9 && y>=0 &&y<=1)
    }
    function printResult(isSamoe,isCook,isTonga,isTuvalu,isTokelau) {
        if(isSamoe){
            console.log("Samoa")
        }
        else if(isCook){
            console.log("Cook")
        }
        else if(isTonga){
            console.log("Tonga")
        }
        else if(isTuvalu){
            console.log("Tuvalu")
        }
        else if(isTokelau){
            console.log("Tokelau")
        }
        else{
            console.log("On the bottom of the ocean")
        }
    }
}
Locator(['4','2','1.5','6.5','1','3'])