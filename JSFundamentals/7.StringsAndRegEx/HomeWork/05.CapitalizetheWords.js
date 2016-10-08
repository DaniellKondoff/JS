function capitalWords([str]) {
    var words = str.split(" ");
    var arr = [];
    for (i in words)
    {
        temp = words[i].toLowerCase();
        temp = temp.charAt(0).toUpperCase() + temp.substring(1);
        arr.push(temp);
    }
    console.log( arr.join(" "));

}

capitalWords(['Capitalize these words']);