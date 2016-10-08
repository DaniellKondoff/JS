/**
 * Created by Kondoff on 26-Sep-16.
 */
function Table(num) {
    let n = Number(num[0]);
    let line ='<tr><th>x</th>';
    let row = "";
    console.log('<table border="1">')

    for(let i=1;i<=n;i++){
        line+= "<th>"+i+"</th>"+"";
    }
   console.log(line+ "" +"</tr>")

    for(var m = 1; m <= n; m++) {

        for(var j = 1; j <= n; j++) {

             //console.log(m*j)
             row+= ("<td>"+m*j +"</td>")
        }
        console.log("<tr><th>" + m +"</th>" + "" + row + "</tr>");
        row=""
    }
    console.log('</table>')

}

Table(['3'])