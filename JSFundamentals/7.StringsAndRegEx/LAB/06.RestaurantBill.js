/**
 * Created by Kondoff on 05-Oct-16.
 */
function restBill(input) {
    let product=input.filter((x,i)=>i%2==0);
    let sum=input.filter(((x,i)=>i%2==1))
        .map(Number)
        .reduce((a,b)=>a+b)
    //console.log(product.join(', '))
    //console.log(sum)
    console.log(`You purchased ${product.join(', ')} for a total sum of ${sum}`)

}