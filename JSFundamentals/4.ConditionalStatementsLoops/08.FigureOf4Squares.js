/**
 * Created by Kondoff on 25-Sep-16.
 */
function Figure(num) {
    let input = Number(num[0]);

     if(input<=2){
        console.log("+++")
     }
        else if (input%2==0){
        let lines = input - 1;
        let space =input-2;
        let spacelines=lines -3;
        let uper = spacelines/2;
            console.log('+' + '-'.repeat(input-2)+"+" + '-'.repeat(input-2) +"+");
            for (let i=0;i<uper;i++){
                console.log('|' + ' '.repeat(input-2)+"|" + ' '.repeat(input-2) +"|");
            }
            console.log('+' + '-'.repeat(input-2)+"+" + '-'.repeat(input-2) +"+");
        for (let i=0;i<uper;i++){
            console.log('|' + ' '.repeat(input-2)+"|" + ' '.repeat(input-2) +"|");
        }
        console.log('+' + '-'.repeat(input-2)+"+" + '-'.repeat(input-2) +"+");

    }
    else{
        let lines = input ;
        let space =input-2;
        let spacelines=lines -3;
        let uper = spacelines/2;
        console.log('+' + '-'.repeat(input-2)+"+" + '-'.repeat(input-2) +"+");
        for (let i=0;i<uper;i++){
            console.log('|' + ' '.repeat(input-2)+"|" + ' '.repeat(input-2) +"|");
        }
        console.log('+' + '-'.repeat(input-2)+"+" + '-'.repeat(input-2) +"+");
        for (let i=0;i<uper;i++){
            console.log('|' + ' '.repeat(input-2)+"|" + ' '.repeat(input-2) +"|");
        }
        console.log('+' + '-'.repeat(input-2)+"+" + '-'.repeat(input-2) +"+");
    }

}

Figure(['2']);