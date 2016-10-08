/**
 * Created by Kondoff on 08-Oct-16.
 */
function sumByTown(data) {
    let sums={};
    for(let i=0;i<data.length;i+=2){
        let[town,income]=[data[i],Number(data[i+1])];
       if(sums[town]==undefined){
           sums[town]=income
       }
       else {
           sums[town]+=income
       }
    }
    return JSON.stringify(sums)
}

sumByTown(['Sofia','20', 'Varna','10', 'Sofia','5']);
console.log(sumByTown(['Sofia','20', 'Varna','10', 'Sofia','5']))