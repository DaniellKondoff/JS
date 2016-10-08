/**
 * Created by Kondoff on 06-Oct-16.
 */
function startWith([sentence,word]) {
    let end=word.length;
    let start=0;
    let check=sentence.substring(start,end)
    if(word==check){
        console.log("true")
    }
    else {
        console.log("false")
    }
}

startWith(['Marketing Fundamentals, starting 19/10/2016','Marketing Fundamentals, sta'])