/**
 * Created by Kondoff on 29-Sep-16.
 */
function Cooking(input){
    let num = Number(input[0]);

    for(let i=1;i<input.length;i++){
        let cmd = input[i];

        isresult(num,cmd)

    }

            //let result = function isResult(num, cmd) {return cmd(num) };

    function isresult(num,cmd) {

        let result = function(num, cmd) {return cmd(num) }

        let chop = function (num) { num=num / 2; console.log(num) };
        let dice = function (num) { return Math.sqrt(num)};
        let spice = function (num) { return num + 1};
        let bake = function (num) { return num*3};
        let fillet = function (num) { return num* 0.8};
        switch (cmd) {
            case 'chop': return result(num, chop);
            case 'dice': return result(num, dice);
            case 'spice': return result(num, spice);
            case 'bake': return result(num, bake);
            case 'fillet': return result(num, fillet);
        }
    }

}

Cooking(['32','chop','chop','chop','chop','chop']);

//console.log(Cooking(['32','chop','chop','chop','chop','chop']))

function solve(input) {
    let num = Number(input[0]);

    for (let i = 1; i < input.length; i++) {

        if (input[i] === 'chop') {
            num = num / 2;
            console.log(num);
        }
        else if (input[i] === 'dice') {
            num = Math.sqrt(num);
            console.log(num);
        }
        else if (input[i] === 'spice') {
            num += 1;
            console.log(num);
        }
        else if (input[i] === 'bake') {
            num *= 3;
            console.log(num);
        }
        else  {
            num = num *0.8;
            console.log(num);
        }
    }
}
solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);