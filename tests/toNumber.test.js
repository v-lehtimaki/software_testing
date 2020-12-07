import chai from 'chai';
import toNumber from '../course_code/src/toNumber';

const expect = chai.expect;


describe('toNumber-function', () => {
    test('Should convert the value to a number', () => {
        expect(toNumber(10500)).to.equal(10500);
        expect(toNumber(3.101)).to.equal(3.101);
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
        expect(toNumber(Infinity)).to.equal(Infinity);
        expect(toNumber(-0.5)).to.equal(-0.5);
        expect(toNumber(-4.5)).to.equal(-4.5);
        expect(toNumber(-4)).to.equal(-4);
        expect(toNumber(-0)).to.equal(0);
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(toNumber.bind('Hello')).to.not.throw();
        expect(toNumber.bind([123])).to.not.throw();
        expect(toNumber.bind({ 1 : 234 })).to.not.throw();
        expect(toNumber.bind(NaN)).to.not.throw();
        expect(toNumber.bind(null)).to.not.throw();
        expect(toNumber.bind(undefined)).to.not.throw();
    });
});