/**
 * Created by Kondoff on 05-Oct-16.
 */
function countStringInText([str, text]) {
    let count=0;
    let index=text.indexOf(str);
    while (index>-1) {
        count++;
        index = text.indexOf(str, index + 1);
    }
    // return count;
    console.log(count)
}