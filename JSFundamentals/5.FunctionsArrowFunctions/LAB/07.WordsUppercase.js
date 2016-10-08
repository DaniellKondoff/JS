/**
 * Created by Kondoff on 28-Sep-16.
 */
function wordsUppercase([str]) {
    var strUpper = str.toUpperCase();
    var words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');
    function extractWords() { return strUpper.split(/\W+/); }
}
wordsUppercase(['Hi, how are you?']); // "HI, HOW, ARE, YOU"
