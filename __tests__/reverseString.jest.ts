import { reverseString } from '../scripts/reverseString';



describe('testing reverseString', () => {
    test('empty strings', ()=> {
        let str = "";
        expect(reverseString(str)).toMatch("");
    });

    test('one letter strings', () => {
        let str = "a";
        expect(reverseString(str)).toMatch(str);
    });

    test('two letter strings', () => {
        expect(reverseString("12")).toMatch("21");
    });

    test('three letter strings', () => {
        expect(reverseString("123")).toMatch("321");
    });

    test('long string with spaces', () => {
        expect(reverseString("123 324a")).toMatch("a423 321");
    });
});