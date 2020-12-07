import chai from 'chai';
import difference from '../course_code/src/difference';

const expect = chai.expect;

describe('difference-function', () => {
    test('Should get the difference successfully', () => {
        expect(difference([1, 2, 3], [2, 4])).to.eql([1, 3]);
        expect(difference(['Hi', 'Hello'], ['Hi'])).to.eql(['Hello']);
        expect(
            difference(
                [
                    [1, 2],
                    [3, 4],
                ],
                [
                    [4, 5],
                    [1, 2],
                ],
            ),
        ).to.eql([3, 4]);
    });

    test('Should use SameValueZero', () => {
        expect(difference([undefined, 0, NaN, null, false], [0])).to.eql([undefined, NaN, null, false]);
        expect(difference([undefined, 0, NaN, null, false], [NaN])).to.eql([undefined, 0, null, false]);
    });

    test('Should return a new array', () => {
        const array = [1, 2, 3];
        const newArray = difference(array, [1, 2]);
        expect(array).to.not.eql(newArray);
    });

    test('Should not throw with invalid parameters', () => {
        expect(() => difference('Hello', [1, 2])).to.not.throw();
        expect(() => difference([1, 2], 'Hello')).to.not.throw();
        expect(() => difference(null, [1, 2])).to.not.throw();
        expect(() => difference([1, 2], NaN)).to.not.throw();
        expect(() => difference(undefined, [1, 2])).to.not.throw();
    });
});
