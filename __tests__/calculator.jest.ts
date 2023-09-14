import { calculator } from '../scripts/calculator'

describe('test calculator', () => {
    test('add function', () => {
        expect(calculator.add(1,2)).toEqual(3);
        
        expect(calculator.add(0, -2)).toEqual(-2);
    });

    test('subtract function', () => {
        expect(calculator.subtract(3, 5)).toEqual(-2);

        expect(calculator.subtract(69, 1)).toEqual(68);
    });

    test('multiply function', () => {
        expect(calculator.multiply(1,2)).toEqual(2);

        expect(calculator.multiply(3,5)).toEqual(15);
    });

    test('divide function', () => {
        expect(calculator.divide(15, 3)).toEqual(5);

        expect(calculator.divide(20, 1)).toEqual(20);
    });

});