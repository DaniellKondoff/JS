/**
 * Created by Kondoff on 08-Oct-16.
 */
function JSONtoHTML([str]) {
    let html = "<table>\n";
    html += "  <tr>";
    let arr=JSON.parse(str);

    for (let key of Object.keys(arr[0])){
        html += `<th>${htmlEscape(key)}</th>`;
    }
    html += "</tr>\n";

    for (let obj of arr) { //{"Name":"Tomatoes & Chips","Price":2.35}
        html += "  <tr>";
        for(let value of Object.keys(obj)){//Name
            html += `<td>${htmlEscape(obj[value])}</td>`; //Tomatoes & Chips
        }
        html += '</tr>\n';
    }
    html += '</table>';

        console.log(html)

    function htmlEscape(text) {
        text = '' + text;
        let tokensToReplace = {'<': '&lt;', '>': '&gt;', '&': '&amp;', '\'': '&#39;', '"': '&quot;'};
        return text.replace(/[<>&'"]/g, m => tokensToReplace[m]);
    }

}

JSONtoHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])