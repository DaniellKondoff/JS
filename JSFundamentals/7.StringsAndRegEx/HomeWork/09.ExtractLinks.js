/**
 * Created by Kondoff on 07-Oct-16.
 */
function link(input) {
    let pattern=/([www]{3}).([-]*[a-zA-Z0-9\-])+\.[a-z]+(?:\.[a-z]+)*/g;
    let regex = /www\.[A-Za-z0-9\-]+\.[a-z]+(?:\.[a-z]+)*/g;
    let text=input.join(' ');
    let result=[];
    let match;
    text=text.split(' ')
    for(let element of text){
        while(match=pattern.exec(element)) {
            //console.log(element)
            result.push(match[0])
        }
    }
    console.log(result.join('\n'));
}

link(['Need information about cheap hotels in London?','You can check us at www.london-hotels.co.uk!','We provide the best services in London.','"London Hotels are awesome!" - www.indigo.bloggers.com','"Best Hotel Services!" - www.rebel21.sedecrem.moc ']);