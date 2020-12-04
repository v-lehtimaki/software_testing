import chai from 'chai';
import drop from '../course_code/src/drop';

const expect = chai.expect;

describe('drop-function', () => {
    test('Should drop valid amounts of elements', () => {
        expect(drop([1, 2, 3])).to.eql([2, 3]);
        expect(drop([1, 2, 3], 2)).to.eql([3]);
        expect(drop([1, 2, 3], 3)).to.eql([]);
        expect(drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
    });

    test('Should return empty array when dropping too much', () => {
        expect(drop([1, 2, 3], 5)).to.eql([]);
        expect(drop([], 5)).to.eql([]);
    });

    test('Should not throw with invalid parameters', () => {
        expect(drop.bind([1, 2, 3], -5)).to.not.throw();
        expect(drop.bind([1, 2, 3], 'Hello')).to.not.throw();
        expect(drop.bind(null, 3)).to.not.throw();
        expect(drop.bind({ a: 3, b: 'Test' }, -5)).to.not.throw();
        expect(drop.bind([1, 2], null)).to.not.throw();
        expect(drop.bind(undefined, 3)).to.not.throw();
    });
});
