import chai from 'chai';
import toInteger from '../course_code/src/toInteger';

const expect = chai.expect;


describe('ceil-function', () => {
    test('Should convert the value to an integer', () => {
        expect(toInteger(10500)).to.equal(10500);
        expect(toInteger(3.101)).to.equal(3.101);
        expect(toInteger(Number.MIN_VALUE)).to.equal(0);
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
        expect(toInteger(-0.5)).to.equal(-0.5);
        expect(toInteger(-4.5)).to.equal(-4.5);
        expect(toInteger(-4)).to.equal(-4);
        expect(toInteger(-0)).to.equal(0);
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(toInteger.bind('Hello')).to.not.throw();
        expect(toInteger.bind([123])).to.not.throw();
        expect(toInteger.bind({ 1 : 234 })).to.not.throw();
        expect(toInteger.bind(NaN)).to.not.throw();
        expect(toInteger.bind(null)).to.not.throw();
        expect(toInteger.bind(undefined)).to.not.throw();
    });
});