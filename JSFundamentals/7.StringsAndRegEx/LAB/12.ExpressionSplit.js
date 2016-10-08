/**
 * Created by Kondoff on 05-Oct-16.
 */
function split(input) {
    let text=input[0];
    let expression=text.split(/[\s.(),;]+/)
    console.log(expression.join('\n'))
}

split(['let sum = 4 * 4,b = "wow";'])