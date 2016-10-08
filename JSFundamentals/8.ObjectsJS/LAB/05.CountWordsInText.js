/**
 * Created by Kondoff on 08-Oct-16.
 */
function countWords(text) {
    let allText=text.join('\n')
   let words=allText.split(/[^A-Za-z0-9_]+/)
       .filter(w=> w!='');
    let wordsCount={};

    for(let word of words){
        if(wordsCount[word]==undefined){
            wordsCount[word]=1
        }
        else {
            wordsCount[word]++
        }
    }

    console.log(JSON.stringify(wordsCount))
}

countWords(['JS and Node.js', 'JS again and again', 'Oh, JS?'])

// for (let w of words)
// wordsCount[w] ? wordsCount[w]++ :
//    wordsCount[w] = 1;
