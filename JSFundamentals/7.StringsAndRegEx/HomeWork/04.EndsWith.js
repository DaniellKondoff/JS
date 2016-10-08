/**
 * Created by Kondoff on 06-Oct-16.
 */
function endWith([str, check]) {
    let end=check.length;
    let all=str.length;
    let start=all-end;
    let result=str.substring(start,all)
    if(result==check)
        console.log("true")
    else
        console.log("false")
}
endWith(['This is Houston, we have…','We have…']);