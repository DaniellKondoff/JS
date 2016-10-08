/**
 * Created by Kondoff on 05-Oct-16.
 */
function emailValid(input) {
    let mail=input[0];
    let pattern=/^[a-zA-Z0-9]+\@[a-z]+\.[a-z]+$/g

    let result=pattern.test(mail)

    if(result)
        console.log("Valid")
    else
        console.log("Invalid")
}

emailValid(['valid@email.bg'])