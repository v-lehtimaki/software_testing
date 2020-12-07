import chai from 'chai';
import slice from '../course_code/src/slice';

const expect = chai.expect;

describe('slice-function', () => {
    test('Should slice with normal start', () => {
        const array = [1, 2, 3, 4];
        expect(slice(array, 0)).to.eql([1, 2, 3, 4]);
        expect(slice(array, 2)).to.eql([3, 4]);
    });

    test('Should slice with negative start', () => {
        const array = [1, 2, 3, 4];
        expect(slice(array, -3)).to.eql([2, 3, 4]);
    });

    test('Should slice with normal end', () => {
        const array = [1, 2, 3, 4];
        expect(slice(array, 1, 3)).to.eql([2, 3]);
    });

    test('Should slice with negative end', () => {
        const array = [1, 2, 3, 4];
        expect(slice(array, 1, -1)).to.eql([2, 3]);
    });

    test('Should return empty with negative length', () => {
        const array = [1, 2, 3, 4];
        expect(slice(array, 3, 2)).to.eql([]);
    });

    test('Should return empty with too large values', () => {
        const array = [1, 2, 3, 4];
        expect(slice(array, 5, 6)).to.eql([]);
    });

    test('Should not throw with invalid parameters', () => {
        expect(slice.bind({ a: 1 }, 1, 2)).to.not.throw();
        expect(slice.bind(null, 1, 2)).to.not.throw();
        expect(slice.bind(undefined, 1, 2)).to.not.throw();
        expect(slice.bind('Hello', 1, 2)).to.not.throw();
        expect(slice.bind([1], null, 2)).to.not.throw();
        expect(slice.bind([1], 1, null)).to.not.throw();
        expect(slice.bind([1], 'Hello', 2)).to.not.throw();
    });
});
