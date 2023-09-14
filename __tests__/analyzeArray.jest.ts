import { analyzeArray, Obj } from "../scripts/analyzeArray";

describe("testing analyzeArray", () => {
    test("one length of array", () => {
        let object: Obj = analyzeArray([1]);

        expect(object.average).toEqual(1);
        expect(object.min).toEqual(1);
        expect(object.max).toEqual(1);
        expect(object.length).toEqual(1);
    });

    test("two length of array", () => {
        let object: Obj = analyzeArray([5,5]);

        expect(object.average).toEqual(5);
        expect(object.min).toEqual(5);
        expect(object.max).toEqual(5);
        expect(object.length).toEqual(2);
    });

    test("three length of array", () => {
        let object: Obj = analyzeArray([3,6,9]);

        expect(object.average).toEqual(6);
        expect(object.min).toEqual(3);
        expect(object.max).toEqual(9);
        expect(object.length).toEqual(3);
    });
});