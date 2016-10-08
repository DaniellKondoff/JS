/**
 * Created by Kondoff on 28-Sep-16.
 */
function Stars(n) {

    function printStars(count = n) {
        console.log("*" + " *".repeat(count-1));
    }


    for (let i=1; i<=n ;i++){
        printStars()
    }


}
Stars(['3'])