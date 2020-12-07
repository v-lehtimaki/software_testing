import chai from 'chai';
import chunk from '../course_code/src/chunk';

const expect = chai.expect;

describe('chunk-function', () => {
    test('Should chunk arrays successfully', () => {
        expect(chunk(['a', 'b', 'c', 'd'], 2)).to.equal([
            ['a', 'b'],
            ['c', 'd'],
        ]);
        expect(chunk(['Hello', { a: 2 }, 3, 'b', 5], 2)).to.equal([
            ['Hello', { a: 2 }, 3],
            ['b', 5],
        ]);
        expect(chunk([1, 2, 3, 4, 5], 6)).to.equal([[1, 2, 3, 4, 5]]);
    });

    test('Should handle bad chunk sizes without throwing', () => {
        expect(chunk.bind([1, 2, 3, 4, 5], 0)).to.not.throw();
        expect(chunk.bind([1, 2, 3, 4, 5], -2)).to.not.throw();
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(() => chunk({ a: 'Test', b: 3 }, 0)).to.not.throw();
        expect(() => chunk([1, 2, 3, 4, 5], 'Hello')).to.not.throw();
        expect(() => chunk([1, 2, 3, 4, 5], null)).to.not.throw();
        expect(() => chunk(undefined, 5)).to.not.throw();
    });
});
