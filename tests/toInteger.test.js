import chai from 'chai';
import toInteger from '../course_code/src/toInteger';

const expect = chai.expect;

<<<<<<< HEAD

describe('toInteger-function', () => {
    test('Should convert the value to an integer', () => {
        expect(toInteger(10500)).to.equal(10500);
        expect(toInteger(3.101)).to.equal(3.101);
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
        expect(toInteger(-0.5)).to.equal(-0.5);
        expect(toInteger(-4.5)).to.equal(-4.5);
        expect(toInteger(-4)).to.equal(-4);
        expect(toInteger(-0)).to.equal(0);
=======
describe('toInteger-function', () => {
    test('Should convert the all kinds of numbers to an integer', () => {
        expect(Number.isInteger(toInteger(10))).to.equal(true);
        expect(Number.isInteger(toInteger(5.521))).to.equal(true);
        expect(Number.isInteger(toInteger(0))).to.equal(true);
        expect(Number.isInteger(toInteger(-19))).to.equal(true);
        expect(Number.isInteger(toInteger(-5.323))).to.equal(true);
        expect(Number.isInteger(toInteger(Number.MIN_VALUE))).to.equal(true);
        expect(Number.isInteger(toInteger(Number.MAX_VALUE))).to.equal(true);
        expect(Number.isInteger(toInteger(Infinity))).to.equal(true);
        expect(Number.isInteger(toInteger(-Infinity))).to.equal(true);
>>>>>>> 2a522f6fb753e4d53da8ca1e5e2ba653399ec1bb
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
