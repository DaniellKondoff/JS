/**
 * Created by Kondoff on 02-Oct-16.
 */
function BiggestElement(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));

    let biggestNum = Number.NEGATIVE_INFINITY;

    matrix.forEach(
        r => r.forEach(
            c => biggestNum = Math.max(biggestNum, c)));

    return biggestNum;
}

BiggestElement(['20 50 10', '8 33 145']);