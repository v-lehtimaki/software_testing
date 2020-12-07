import chai from 'chai';
import filter from '../course_code/src/filter';

const expect = chai.expect;

describe('filter-function', () => {
    test('Should filter simple values successfully', () => {
        expect(filter([1, null, 'Hello', undefined, '', 0, [1, 2]], Boolean)).to.eql([1, 'Hello', [1, 2]]);
    });

    test('Should callback with value successfully', () => {
        expect(filter([1, 2, 3], value => value > 1)).to.eql([2, 3]);
    });

    test('Should callback with index successfully', () => {
        expect(filter([1, 2, 3], (value, index) => index > 1)).to.eql([3]);
    });

    test('Should callback with array successfully', () => {
        expect(filter([1, 2, 3], (value, index, array) => JSON.stringify(array) === JSON.stringify([1, 2, 3]))).to.eql([
            1,
            2,
            3,
        ]);
    });

    test('Should not throw with invalid parameters', () => {
        expect(() => filter(null, Boolean)).to.throw();
        expect(() => filter([1, 2, 3], 'Hello')).to.throw();
        expect(() => filter([1, 2, 3], null)).to.throw();
        expect(() => filter([1, 2, 3], undefined)).to.throw();
        expect(() => filter('Test', Boolean)).to.throw();
        expect(() => filter(3, Boolean)).to.throw();
        expect(() => filter(undefined, Boolean)).to.throw();
    });
});
