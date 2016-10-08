/**
 * Created by Kondoff on 24-Sep-16.
 */

function oddEven(num) {
    let rem = num % 2
    if (rem == 0)
        console.log("even")
    else if (rem == Math.round(rem))
        console.log("odd")
    else console.log("invalid")
}
oddEven(['1.5'])

