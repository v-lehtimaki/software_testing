/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isObject from '../course_code/src/isObject';

const expect = chai.expect;

describe('isObject-function', () => {
    test('Should correctly identify real objects', () => {
        expect(isObject({ a: 1 })).to.equal(true);
        expect(isObject([1, 2])).to.equal(true);
        expect(isObject(new String('Hello'))).to.equal(true);
        expect(isObject(() => {})).to.equal(true);
        expect(isObject(new RegExp('Hi'))).to.equal(true);
    });

    test('Should correctly identify other things', () => {
        expect(isObject()).to.equal(false);
        expect(isObject(1)).to.equal(false);
        expect(isObject('Hello')).to.equal(false);
        expect(isObject(null)).to.equal(false);
        expect(isObject(NaN)).to.equal(false);
    });
});
