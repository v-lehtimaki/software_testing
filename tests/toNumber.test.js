import chai from 'chai';
import toNumber from '../course_code/src/toNumber';

const expect = chai.expect;

<<<<<<< HEAD

describe('toNumber-function', () => {
    test('Should convert the value to a number', () => {
        expect(toNumber(10500)).to.equal(10500);
        expect(toNumber(3.101)).to.equal(3.101);
        expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
=======
describe('toNumber-function', () => {
    test('Should do nothing to numbers', () => {
        expect(toNumber(10)).to.equal(10);
        expect(toNumber(-5.521)).to.equal(-5.521);
        expect(toNumber(0)).to.equal(0);
        expect(toNumber(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
        expect(toNumber(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
>>>>>>> 2a522f6fb753e4d53da8ca1e5e2ba653399ec1bb
        expect(toNumber(Infinity)).to.equal(Infinity);
        expect(toNumber(-Infinity)).to.equal(-Infinity);
    });

    test('Should convert number strings to numbers', () => {
        expect(toNumber('12.14')).to.equal(12.14);
        expect(toNumber('0b0110')).to.equal(6);
        expect(toNumber('0o12')).to.equal(10);
        expect(toNumber('0x0a1')).to.equal(161);
    });

    test('Should convert other things to some number', () => {
        expect(typeof toNumber('Hello')).to.equal('number');
        expect(typeof toNumber([123])).to.equal('number');
        expect(typeof toNumber({ a: 1 })).to.equal('number');
        expect(typeof toNumber(() => {})).to.equal('number');
        expect(typeof toNumber(Symbol('Hello'))).to.equal('number');
    });
});
