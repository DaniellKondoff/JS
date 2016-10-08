/**
 * Created by Kondoff on 05-Oct-16.
 */
function concatenateAndReverse(arr) {
    let allStrings = arr.join('');
    let chars=Array.from(allStrings);
    let revChars=chars.reverse();
    let revStr=revChars.join('');
    console.log(revStr)
}