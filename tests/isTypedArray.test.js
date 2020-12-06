/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isTypedArray from '../course_code/src/isTypedArray';

const expect = chai.expect;

describe('isTypedArray-function', () => {
    test('Should correctly identify typed arrays', () => {
        expect(isTypedArray(new Int8Array())).to.equal(true);
        expect(isTypedArray(new Uint8ClampedArray())).to.equal(true);
        expect(isTypedArray(new BigUint64Array())).to.equal(true);
        expect(isTypedArray(Buffer.from('Hi'))).to.equal(true);
    });

    test('Should correctly identify other things', () => {
        expect(isTypedArray(() => {})).to.equal(false);
        expect(isTypedArray()).to.equal(false);
        expect(isTypedArray(1)).to.equal(false);
        expect(isTypedArray('Hello')).to.equal(false);
        expect(isTypedArray(null)).to.equal(false);
        expect(isTypedArray(NaN)).to.equal(false);
        expect(isTypedArray({ a: 1 })).to.equal(false);
        expect(isTypedArray([1, 2])).to.equal(false);
        expect(isTypedArray(new String('Hello'))).to.equal(false);
        expect(isTypedArray(new RegExp('Hi'))).to.equal(false);
        expect(isTypedArray(Symbol("Test"))).to.equal(false);
    });
});

/**
 * Checks if `value` is classified as a typed array.
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
