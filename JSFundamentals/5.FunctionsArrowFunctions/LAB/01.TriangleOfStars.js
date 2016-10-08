/**
 * Created by Kondoff on 28-Sep-16.
 */
function Triangle(n) {
    function printStars(count) {
        console.log("*".repeat(count))
    }

    for (let i=1;i<=n;i++){
        printStars(i)
    }
    for (let i=n-1;i>=1;i--){
        printStars(i)
    }

}
Triangle(['1'])