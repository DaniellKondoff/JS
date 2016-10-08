/**
 * Created by Kondoff on 01-Oct-16.
 */
function Average(num){

    let sum=(a,b)=> a+b;

    function average(arr) {
        currentSum=0;
        for (let n of arr) {
            currentSum = sum(currentSum, n);
        }

        return currentSum / arr.length;
    }
    let digits = num.split('').map(Number);

    while (average(digits) <= 5) {
        digits.push(9);
    }

    return digits.join('');


}
Average(['101'])