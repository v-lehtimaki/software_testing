/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isBoolean from '../course_code/src/isBoolean';

const expect = chai.expect;

describe('isBoolean-function', () => {
    test('Should correctly identify real booleans', () => {
        expect(isBoolean(true)).to.equal(true);
        expect(isBoolean(false)).to.equal(true);
        expect(isBoolean(new Boolean(true))).to.equal(true);
        expect(isBoolean(new Boolean(false))).to.equal(true);
    });

    test('Should identify non-boolean things', () => {
        expect(isBoolean(1)).to.equal(false);
        expect(isBoolean()).to.equal(false);
        expect(isBoolean('false')).to.equal(false);
        expect(isBoolean(null)).to.equal(false);
        expect(isBoolean(undefined)).to.equal(false);
    });
});
