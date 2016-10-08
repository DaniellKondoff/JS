/**
 * Created by Kondoff on 05-Oct-16.
 */
function aggregateTable(lines) {
    let result=[]
    let sum=0;
    for (let line of lines) {
        let TownData=line.split('|');
        let TownName=TownData[1].trim();
        let TownNum=Number(TownData[2].trim());
        result.push(TownName)
        sum+=TownNum
    }
    console.log(result.join(', ') + '\n' + sum);
}