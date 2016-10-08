/**
 * Created by Kondoff on 08-Oct-16.
 */
function scoreToHTML([str]) {
    let html = "<table>\n";
    html += "  <tr><th>name</th><th>score</th></tr>\n";
    let arr=JSON.parse(str)
    for (let obj of arr){
        html += `  <tr><td>${htmlEscape(obj['name'])}` +
            `</td><td>${obj['score']}</td></tr>\n`;
    }
    html+="</table>";
    console.log(html)

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
}
scoreToHTML(['[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]']);