/**
 * Created by Kondoff on 02-Oct-16.
 */
var matrix = [
    ['0,0', '0,1', '0,2'],
    ['1,0', '1,1', '1,2'],
    ['2,0', '2,1', '2,2']
];

console.log(
    matrix.map(row => row.join(' '))
        .join('\n'));
