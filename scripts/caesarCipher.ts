export let caesarCipher = function(str: string, shift: number) : string {
    let cipher = "";
    shift %= 25;
    for(let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        if(check_lowercase(str[i])) {
            char = shift_char(char, shift, 122);
        } else if(check_uppercase(str[i])) {
            char = shift_char(char, shift, 97);
        }
        cipher+= String.fromCharCode(char);
    }

    return cipher;
}

let check_lowercase = function(char: string) : boolean {
    if(char[0].charCodeAt(0) >= 97 && char[0].charCodeAt(0) <= 122) {
        return true;
    }
    return false;
}

let check_uppercase = function(char: string) : boolean {
    if(char[0].charCodeAt(0) >= 65 && char[0].charCodeAt(0) <= 92) {
        return true;
    }
    return false;
}

let shift_char = function(num: number, shift: number, limit: number): number {
    if(num + shift > limit) {
        let k = (num + shift) % limit;
        return 65 + k;
    } else {
        return num + shift;
    }
}