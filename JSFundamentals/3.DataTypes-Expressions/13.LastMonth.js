/**
 * Created by Kondoff on 22-Sep-16.
 */
function calcLastDay([day, month, year])  {

    let date = new Date(year, month-1,0);
    console.log(date.getDate())

}
calcLastDay(['17', '3', '2002']);
