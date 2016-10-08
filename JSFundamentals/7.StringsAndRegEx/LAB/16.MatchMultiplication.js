function Multi([input]) {
    input=input.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2) => Number(num1)* Number(num2));
    console.log(input)

}/**
 * Created by Kondoff on 06-Oct-16.
 */
