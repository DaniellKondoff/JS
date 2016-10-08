/**
 * Created by Kondoff on 22-Sep-16.
 */
function Tag(arr) {
    let location = arr[0];
    let text =arr[1];


    console.log(`<img src="${location}" alt="${text}">`)

}
Tag(['smiley.gif', 'Smiley Face'])