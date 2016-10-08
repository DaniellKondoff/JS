/**
 * Created by Kondoff on 24-Sep-16.
 */
function Triangle(num) {
    let input = Number(num[0]);

    let line='';
    let sign='$';

    for(let i=1; i<=input;i++){
        line +=sign;
        console.log(line)

    }
}
Triangle(['7']);
