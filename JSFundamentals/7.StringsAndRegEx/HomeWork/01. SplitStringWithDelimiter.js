/**
 * Created by Kondoff on 06-Oct-16.
 */
function SplitDelimiter([str, delim]) {

    let splitText=str.split(delim);
    for(let i=0;i<splitText.length;i++){
        console.log(splitText[i])
    }
}

SplitDelimiter(['One-Two-Three-Four-Five','-'])