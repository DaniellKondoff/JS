/**
 * Created by Kondoff on 06-Oct-16.
 */
function variableName(input) {
    let text=input.join(' ')
    let pattern=/(_)(\w+)/g;
    let result=[];
    let match;

    for( element of input) {
        while (match = pattern.exec(element)) {
            result.push(match[2])
        }
    }
    console.log(result.join(','))

}

variableName(['The _id and _age variables are both integers.'])