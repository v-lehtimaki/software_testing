import chai from 'chai';
import toString from '../course_code/src/toString';

const expect = chai.expect;

describe('toString-function', () => {
<<<<<<< HEAD
    test('Should convert the value to a string', () => {
=======
    test('Should convert simple things to a string', () => {
>>>>>>> 2a522f6fb753e4d53da8ca1e5e2ba653399ec1bb
        expect(toString(123456)).to.equal('123456');
        expect(toString([1, 2])).to.equal('1,2');
        expect(toString(Symbol('Hello'))).to.equal('Symbol(Hello)');
    });

    test('Should preserve sign of 0', () => {
        expect(toString(+0)).to.equal('0');
        expect(toString(-0)).to.equal('-0');
    });

    test('Should return empty for null and undefined', () => {
        expect(toString(null)).to.equal('');
        expect(toString(undefined)).to.equal('');
    });

    test('Should return a string for other things', () => {
        expect(typeof toString(() => {})).to.equal('string');
        expect(typeof toString(NaN)).to.equal('string');
        expect(typeof toString(Infinity)).to.equal('string');
        expect(typeof toString({ a: 3 })).to.equal('string');
    });
});
