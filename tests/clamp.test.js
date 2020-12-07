import chai from 'chai';
import clamp from '../course_code/src/clamp';

const expect = chai.expect;

describe('clamp-function', () => {
    test('Should not touch the value within the range', () => {
        expect(clamp(2.2, -5, 5.5)).to.equal(2.2);
    });

    test('Should not touch the value if its equal to the maximum', () => {
        expect(clamp(5.5, -5, 5.5)).to.equal(5.5);
    });

    test('Should not touch the value if its equal to the minimum', () => {
        expect(clamp(-5, -5, 5.5)).to.equal(-5);
    });

    test('Should clamp the value to the maximum if its too large', () => {
        expect(clamp(10, -5, 5.5)).to.equal(5.5);
    });

    test('Should clamp the value to the minumum if its too small', () => {
        expect(clamp(-9.5, -5, 5.5)).to.equal(-5);
    });

    test('Should handle invalid ranges without throwing', () => {
        expect(() => clamp(5, 2, -2)).to.not.throw();
    });

    describe('Should handle invalid parameters in a consistent way', () => {
        test('Null should not throw', () => {
            expect(() => clamp(-4, -2, null)).to.not.throw();
            expect(() => clamp(-4, null, 5)).to.not.throw();
            expect(() => clamp(null, -2, 5)).to.not.throw();
        });

        test('Undefined should not throw', () => {
            expect(() => clamp(-4, -2, undefined)).to.not.throw();
            expect(() => clamp(-4, undefined, 5)).to.not.throw();
            expect(() => clamp(undefined, -2, 5)).to.not.throw();
        });

        test('Other wrong types of parameters should not throw', () => {
            expect(() => clamp('Test', -2, 2)).to.not.throw();
            expect(() => clamp(3, [2], 2)).to.not.throw();
            expect(() => clamp(-4, -2, { a: 3 })).to.not.throw();
        });
    });
});
