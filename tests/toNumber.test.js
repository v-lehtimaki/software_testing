import chai from 'chai';
import toNumber from '../course_code/src/toNumber';

const expect = chai.expect;

describe('toNumber-function', () => {
    test('Should do nothing to numbers', () => {
        expect(toNumber(10)).to.equal(10);
        expect(toNumber(-5.521)).to.equal(-5.521);
        expect(toNumber(0)).to.equal(0);
        expect(toNumber(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
        expect(toNumber(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
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
