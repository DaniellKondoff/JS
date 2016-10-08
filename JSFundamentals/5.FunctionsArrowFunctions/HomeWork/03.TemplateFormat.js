/**
 * Created by Kondoff on 29-Sep-16.
 */
function Format(input) {

    console.log('<?xml version="1.0" encoding="UTF-8"?>')
    console.log('<quiz>');
    for (let i=0; i<input.length; i+=2) {
        let ques = input[i];
        let answer = input[i+1];
        printLetter(ques,answer)

    }
    console.log('</quiz>');

    function printLetter(ques,answer) {
        console.log('  <question>')
        console.log('    ' +ques);
        console.log('  </question>')
        console.log('  <answer>')
        console.log('    ' +answer);
        console.log('  </answer>')
    }


}

Format(["Who was the forty-second president of the U.S.A.?","William Jefferson Clinton"]);