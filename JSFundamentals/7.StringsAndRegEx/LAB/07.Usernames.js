/**
 * Created by Kondoff on 05-Oct-16.
 */
function extractUsernames(inputEmail) {
    let result=[];
    for(let email of inputEmail){
        let[alias,domain]=email.split('@');
        let username=alias + '.';
        let domainParts=domain.split('.');
        //domainParts.forEach(p=>username+= p[0]);
        for(let p of domainParts){
            username+=p[0]
        }
        result.push(username)
    }
    console.log(result.join(', '))
}