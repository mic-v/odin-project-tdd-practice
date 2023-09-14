export let reverseString = function(str: string) : string {
    if(str.length === 0) {
        return "";
    } else {
        return reverseString(str.substring(1, str.length)) + str[0];
    }
}