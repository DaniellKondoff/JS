/**
 * Created by Kondoff on 21-Sep-16.
 */
function Degree(input) {
    let grads = Number(input[0]);
    let diff = (400 / 360);

    if (grads > 360) {
        grads = (grads % 400) / diff;
    }
    else if (grads < 0) {
        if (grads < -400) {
            grads = grads % 400;
        }
        grads = 360 + grads / diff;
    }
    else {
        grads = grads / diff;
    }
    console.log(grads);
}

Degree(['100']);