import chai from 'chai';
import toString from '../course_code/src/toString';

const expect = chai.expect;

describe('capitalize-function', () => {
    test('Should convert the value to a string', () => {
        expect(toString(123456)).to.equal('123456');
        expect(toString('')).to.equal(null);
        expect(toString('')).to.equal(undefined);
        expect(toString([1, 2, 3])).to.equal('1,2,3');
        expect(toString(['How','are','you','?'])).to.equal('How,are,you,?');
        expect(toString(-1+2-3/8*4/0)).to.equal('-1+2-3/8*4/0');
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(toString.bind({ 1 : 'hello' })).to.not.throw();
        expect(toString.bind([])).to.not.throw();
        expect(toString.bind(-Infinity)).to.not.throw();
        expect(toString.bind(Infinity)).to.not.throw();
    });
});