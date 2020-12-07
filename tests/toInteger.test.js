import chai from 'chai';
import toInteger from '../course_code/src/toInteger';

const expect = chai.expect;

describe('toInteger-function', () => {
    test('Should convert all kinds of numbers to an integer', () => {
        expect(Number.isInteger(toInteger(10))).to.equal(true);
        expect(Number.isInteger(toInteger(5.521))).to.equal(true);
        expect(Number.isInteger(toInteger(0))).to.equal(true);
        expect(Number.isInteger(toInteger(-19))).to.equal(true);
        expect(Number.isInteger(toInteger(-5.323))).to.equal(true);
        expect(Number.isInteger(toInteger(Number.MIN_VALUE))).to.equal(true);
        expect(Number.isInteger(toInteger(Number.MAX_VALUE))).to.equal(true);
        expect(Number.isInteger(toInteger(Infinity))).to.equal(true);
        expect(Number.isInteger(toInteger(-Infinity))).to.equal(true);
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(() => toInteger('Hello')).to.not.throw();
        expect(() => toInteger([123])).to.not.throw();
        expect(() => toInteger({ a: 234 })).to.not.throw();
        expect(() => toInteger(NaN)).to.not.throw();
        expect(() => toInteger(null)).to.not.throw();
        expect(() => toInteger(undefined)).to.not.throw();
    });
});
