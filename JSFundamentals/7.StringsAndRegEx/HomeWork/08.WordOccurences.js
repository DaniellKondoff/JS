/**
 * Created by Kondoff on 07-Oct-16.
 */
function findOccur([text,cmd]) {
    let input=text.toLowerCase();
    let checker =`\\b${cmd}\\b`;
    let pattern=new RegExp(checker,`gi`);
    //let regex=/[\s.();,?\-\-\#!@$%*&\[\]{\\\/<>"'_`}|]+/;
    input=input.split(' ');
    let count=0
    for(let l of input){
        if(l.match(pattern)) {
            //console.log(l)
            count++
        }

    }
    console.log(count)
}

findOccur(['The waterfall was so high, that the child couldn’t see its peak.','the'])