import chai from 'chai';
import map from '../course_code/src/map';

const expect = chai.expect;

describe('map-function', () => {
    test('Should map arrays with values correctly', () => {
        const array = [1, 2, 5, 6];
        expect(map(array, value => 2 * value)).to.eql([2, 4, 10, 12]);
    });

    test('Should map arrays with index correctly', () => {
        const array = [1, 2, 5, 6];
        expect(map(array, (value, index) => 2 * index)).to.eql([0, 2, 4, 6]);
    });

    test('Should map arrays with array correctly', () => {
        const originalArray = [1, 2, 5, 6];
        expect(map(originalArray, (value, index, array) => array[1])).to.eql([2, 2, 2, 2]);
    });

    test('Should not throw for invalid parameters', () => {
        expect(() => map('Hello', () => 1)).to.not.throw();
        expect(() => map(null, () => 1)).to.not.throw();
        expect(() => map(undefined, () => 1)).to.not.throw();
        expect(() => map(133, () => 1)).to.not.throw();
        expect(() => map({ a: 1 }, () => 1)).to.not.throw();
        expect(() => map([1, 2], 'Hello')).to.not.throw();
        expect(() => map([1, 2], null)).to.not.throw();
        expect(() => map([1, 2], undefined)).to.not.throw();
    });
});
