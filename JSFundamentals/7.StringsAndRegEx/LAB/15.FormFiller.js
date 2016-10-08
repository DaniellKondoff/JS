/**
 * Created by Kondoff on 06-Oct-16.
 */
function formFiller(input) {
    let[username, mail, phone]=[input.shift(), input.shift(), input.shift()];
    for(let line of input){
        line=line.replace(/<![a-zA-Z]+!>/g,username )
        line=line.replace(/<@[a-zA-Z]+@>/g,mail )
        line=line.replace(/<\+[a-zA-Z]+\+>/g,phone )
        console.log(line)
    }
}