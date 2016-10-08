/**
 * Created by Kondoff on 05-Oct-16.
 */
function Censorship(input) {
    let text=input[0];
    let words=input.slice(1);

    for (let current of words){
        let repeat= '-'.repeat(current.length)

        while(text.indexOf(current)>-1){
            text =text.replace(current,repeat)
        }

    }
    console.log(text)
}

Censorship(['roses are red, violets are blue', ', violets are', 'red'])