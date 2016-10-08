/**
 * Created by Kondoff on 02-Oct-16.
 */
function LastKSeq(arr) {
    let [n, k] = arr.map(Number);

    let res = [1];
    for (let i = 1; i < n; i++) {
        res[i] = res.slice(Math.max(0, i - k), i + 1).reduce((a, b) => a + b);
    }

    //return res.join(' ');
    console.log(res.join(" "))

}
LastKSeq(['6','3'])