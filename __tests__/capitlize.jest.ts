
import { capitilize } from '../scripts/capitilize';

describe('Testing capitlize function', () => {
    test('empty strings', () => {
        let str = "";
        expect(capitilize(str)).toMatch("");
    });

    test('strings starting with symbols', () => {
        let str = "-";
        expect(capitilize(str)).toMatch("-");

        str = "|";
        expect(capitilize(str)).toMatch("|");
    });

    test('strings starting with numbers', () => {
        let str = "0";
        expect(capitilize(str)).toMatch("0");

        str = "68";
        expect(capitilize(str)).toMatch("68");
    });

    test('strings with lowercase', () => {
        let str = "asdf";
        expect(capitilize(str)).toMatch("Asdf");

        str = "cfat-123";
        expect(capitilize(str)).toMatch("Cfat-123");
    });

    test('strings with uppercase', () => {
        let str = "Atwer";
        expect(capitilize(str)).toMatch("Atwer");

        str = "Blamo";
        expect(capitilize(str)).toMatch("Blamo");
    });

});