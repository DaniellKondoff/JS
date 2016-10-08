/**
 * Created by Kondoff on 05-Oct-16.
 */
function printLetters(str) {
    if (Array.isArray(str))
        str = str[0];
    for(let i in str){
        console.log(`str[${i}] -> ${str[i]}`)

    }
}