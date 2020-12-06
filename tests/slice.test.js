import chai from 'chai';
import slice from '../course_code/src/slice';

const expect = chai.expect;

describe('slice-function', () => {
    test('Should return a sliced array', () => {
        expect(slice([1, 2, 3, 4], 2, 3)).to.eql([3, 4]);
        expect(slice([1, 2, 3, 4], 0, 3)).to.eql([1, 2, 3, 4]);
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(slice.bind([])).to.not.throw();
        expect(slice.bind({})).to.not.throw();
        expect(slice.bind([1, 2, 3, 4], -1, -1)).to.not.throw();
        expect(slice.bind([1, 2, 3, 4], -1, 8)).to.not.throw();
        expect(slice.bind([1, 2, 3, 4], 3, 1)).to.not.throw();
        expect(slice.bind([1, 2, 3, 4], NaN, NaN)).to.not.throw();
        expect(slice.bind({ 'a' : [1, 2, 3, 4] }, 2, 3)).to.not.throw();
        expect(slice.bind(null, 1, 3)).to.not.throw();
        expect(slice.bind(undefined, 1, 3)).to.not.throw();
    });
});