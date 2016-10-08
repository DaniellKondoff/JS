/**
 * Created by Kondoff on 28-Sep-16.
 */
function Palindrome([arr]) {
    for(let i=0;i<=arr.length/2;i++){
        if(arr[i] != arr[arr.length-i-1])
            return false;
        return true;
    }
}
Palindrome(['haha']);

function isPalindrome([str]) {
    for (let i=0; i<str.length/2; i++)
        if (str[i] != str[str.length-i-1])
            return false;
    return true;
}
