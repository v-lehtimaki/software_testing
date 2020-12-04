import chai from 'chai';
import castArray from '../course_code/src/castArray';

const expect = chai.expect;

describe('castArray-function', () => {
    test('Should cast non-arrays into arrays', () => {
        expect(castArray(1)).eql([1]);
        expect(castArray({ a: 'b' })).eql([{ a: 'b' }]);
        expect(castArray('Hello')).eql(['Hello']);
        expect(castArray(null)).eql([null]);
        expect(castArray(undefined)).eql([undefined]);
    });

    test('Should not cast arrays', () => {
        const simpleArray = [1, 2];
        expect(castArray(simpleArray)).eql(simpleArray);
        const complexArray = [1, [3], [4, 5]];
        expect(castArray(complexArray)).eql(complexArray);
    });
});
