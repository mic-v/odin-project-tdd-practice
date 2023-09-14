import { caesarCipher } from "../scripts/caesarCipher";

describe("test caesarCipher function", () => {
    test("empty string", () => {
        expect(caesarCipher("", 5)).toMatch("");
    });

    test("one letter, one shift", () => {
        expect(caesarCipher("a", 1)).toMatch("b");
    });

    test("one letter, random shift", () => {
        let char = "a";
        let randomShift = Math.random() * 25;
        let shiftedChar = char.charCodeAt(0);
        if(shiftedChar + randomShift > 122) {
            let k = (shiftedChar + randomShift) % 122;
            shiftedChar = 97 + k;
        } else {
            shiftedChar+= randomShift;
        }

        expect(caesarCipher(char, randomShift)).toMatch(String.fromCharCode(shiftedChar));
    }); 

    test("phrase with set shift", () => {
        let string = "batman";
        let shift = 3;

        expect(caesarCipher(string, shift)).toMatch("edwpdq");
    });

});