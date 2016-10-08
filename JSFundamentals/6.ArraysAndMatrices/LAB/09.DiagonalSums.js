/**
 * Created by Kondoff on 02-Oct-16.
 */
function diagonalSums(matrixRows) {

    //reading matrix
    let matrix = matrixRows.map(
        row => row.split(' ').map(Number));

    let mainSum = 0, secondarySum = 0;

    //обхождане на матрица по [i][i] element
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length-row-1];
    }

    console.log(mainSum + ' ' + secondarySum);
}
diagonalSums(['20 40', '10 60']);