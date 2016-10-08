/**
 * Created by Kondoff on 08-Oct-16.
 */
function townsToJSON(towns) {
   let townsArr=[];
    for(let town of towns.slice(1)){
        let [empty,townName,lat,lng]=town.split(/\s*\|\s*/);
        let townObj={Town:townName,Latitude:Number(lat),Longitude:Number(lng)}
        townsArr.push(townObj)
    }
    let objString=JSON.stringify(townsArr);
    console.log(objString)
}

townsToJSON(['|Town|Lat|Lng','|Sofia |42|23','|Beijing |45|48'])