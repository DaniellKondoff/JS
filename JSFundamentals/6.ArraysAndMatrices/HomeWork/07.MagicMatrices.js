/**
 * Created by Kondoff on 03-Oct-16.
 */
function MagicMatrix(matrixRows) {

    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));


    let sum = matrix[0].reduce((a, b) => (a + b)); // sum na 1vi red

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = matrix[row].reduce((a, b) => (a + b));
        if (sumRow != sum)
            return false
    }

    for (let row = 0; row < matrix[0].length; row++) {
        let currentSum = 0;
        for (let col = 0; col < matrix.length; col++) {
            currentSum += matrix[col][row];
        }

        if (currentSum != sum)
            return false;
    }

    return true
}


MagicMatrix(['11 32 45','21 0 1','21 1 1'])


