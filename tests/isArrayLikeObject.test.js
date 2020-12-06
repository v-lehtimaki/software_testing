/* eslint-disable no-new-wrappers */
/* eslint-disable prefer-rest-params */
import chai from 'chai';
import isArrayLikeObject from '../course_code/src/isArrayLikeObject';

const expect = chai.expect;

describe('isArrayLikeObject-function', () => {
    test('Should correctly identify array like objects', () => {
        expect(
            isArrayLikeObject(
                (function () {
                    return arguments;
                })(),
            ),
        ).to.equal(true);
        expect(isArrayLikeObject([1, 2, 3])).to.equal(true);
        expect(isArrayLikeObject(new String('Hello'))).to.equal(true);
    });

    test('Should identify self-made arrays according to the criteria', () => {
        const object = { length: 4, value: 'Test' };
        expect(isArrayLikeObject(object)).to.equal(true);
    });

    test('Should identify non array like object things', () => {
        expect(isArrayLikeObject('Hello')).to.equal(false);
        expect(isArrayLikeObject(1)).to.equal(false);
        expect(isArrayLikeObject({ a: 'Test' })).to.equal(false);
        expect(isArrayLikeObject(() => {})).to.equal(false);
        expect(isArrayLikeObject(null)).to.equal(false);
        expect(isArrayLikeObject(undefined)).to.equal(false);
        expect(isArrayLikeObject()).to.equal(false);
    });
});
