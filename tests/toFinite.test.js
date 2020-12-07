import chai from 'chai';
import toInteger from '../course_code/src/toInteger';

const expect = chai.expect;


describe('toFinite-function', () => {
    test('Should convert the value to a finite number', () => {
        expect(toInteger(10500)).to.equal(10500);
        expect(toInteger(3.101)).to.equal(3);
        expect(toInteger(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toInteger(Infinity)).to.equal(1.7976931348623157e+308);
        expect(toInteger(-0.5)).to.equal(-1);
        expect(toInteger(-4.5)).to.equal(-5);
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