/**
 * Created by Kondoff on 03-Oct-16.
 */
function sortArr(arr) {
    //let lenght=arr.sort((a,b)=>a.length-b.length);
    let lenght=arr.sort().sort((a,b)=>a.length-b.length)

    console.log(lenght.join("\n"));
}

sortArr(['Deny','test','omen','Default'])