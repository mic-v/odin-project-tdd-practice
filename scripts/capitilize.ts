
/**
 * takes a string a returns it with the first character capitalized
 */
export let capitilize = function(str: string) : string {
    let char = str.charCodeAt(0);
    if(char >= 97 && char <= 122) {
        char-= 32;
        str = String.fromCharCode(char) + str.substring(1);
    }
    return str;
}

