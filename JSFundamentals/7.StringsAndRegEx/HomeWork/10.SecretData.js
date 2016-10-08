/**
 * Created by Kondoff on 07-Oct-16.
 */
function secretData(input) {
    let namePattern=/(\*[A-Z][a-zA-Z]*)(?= |\t|$)/g;
    let phonePattern=/(\+[0-9-]{10})(?= |\t|$)/g;
    let idPattern=/(![0-9a-zA-Z]+)(?= |\t|$)/g;
    let secretPatter=/(_[0-9a-zA-Z]+)(?= |\t|$)/g

    for(let line of input){
        line=line.replace(namePattern,(m) => '|'.repeat(m.length));
        line=line.replace(phonePattern,(m) => '|'.repeat(m.length));
        line=line.replace(idPattern,(m) => '|'.repeat(m.length));
        line=line.replace(secretPatter,(m) => '|'.repeat(m.length));
        console.log(line)
    }
}

secretData(['Agent *Ivankov was in the room when it all happened.','I think it was +555-49-796','with subject !2491a23BVB34Q and returning to Base _Aurora21'])