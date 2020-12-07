import chai from 'chai';
import toFinite from '../course_code/src/toFinite';

const expect = chai.expect;

describe('toFinite-function', () => {
    test("Should return itself for finite numbers", () => {
        expect(toFinite(10500)).to.equal(10500);
        expect(toFinite(3.101)).to.equal(3.101);
        expect(toFinite(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
        expect(toFinite(-55)).to.equal(-55);
        expect(toFinite(-4.5)).to.equal(-4.5);
        expect(toFinite(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
    })

<<<<<<< HEAD
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
=======
    test("Should convert infinite numbers", () => {
        expect([Infinity, -Infinity]).to.not.include(toFinite(Infinity));
        expect([Infinity, -Infinity]).to.not.include(toFinite(-Infinity));
    })
>>>>>>> 2a522f6fb753e4d53da8ca1e5e2ba653399ec1bb

    test('Should handle invalid parameters without throwing', () => {
        expect(toFinite.bind('Hello')).to.not.throw();
        expect(toFinite.bind([123])).to.not.throw();
        expect(toFinite.bind({ 1: 234 })).to.not.throw();
        expect(toFinite.bind(NaN)).to.not.throw();
        expect(toFinite.bind(null)).to.not.throw();
        expect(toFinite.bind(undefined)).to.not.throw();
    });
});
