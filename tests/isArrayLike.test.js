/* eslint-disable no-new-wrappers */
/* eslint-disable prefer-rest-params */
import chai from 'chai';
import isArrayLike from '../course_code/src/isArrayLike';

const expect = chai.expect;

describe('isArrayLike-function', () => {
    test('Should correctly identify arrays', () => {
        expect(
            isArrayLike(
                (function () {
                    return arguments;
                })(),
            ),
        ).to.equal(true);
        expect(isArrayLike([1, 2, 3])).to.equal(true);
        expect(isArrayLike('Hello')).to.equal(true);
        expect(isArrayLike(new String('Hello'))).to.equal(true);
    });

    test('Should identify self-made arrays according to the criteria', () => {
        const object = { length: 4, value: 'Test' };
        expect(isArrayLike(object)).to.equal(true);
    });

    test('Should identify non-arraylike things', () => {
        expect(isArrayLike(1)).to.equal(false);
        expect(isArrayLike({ a: 'Test' })).to.equal(false);
        expect(isArrayLike(() => {})).to.equal(false);
        expect(isArrayLike(null)).to.equal(false);
        expect(isArrayLike(undefined)).to.equal(false);
        expect(isArrayLike()).to.equal(false);
    });
});
