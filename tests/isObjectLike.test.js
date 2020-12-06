/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isObjectLike from '../course_code/src/isObjectLike';

const expect = chai.expect;

describe('isObjectLike-function', () => {
    test('Should correctly identify real objects', () => {
        expect(isObjectLike({ a: 1 })).to.equal(true);
        expect(isObjectLike([1, 2])).to.equal(true);
        expect(isObjectLike(new String('Hello'))).to.equal(true);
        expect(isObjectLike(new RegExp('Hi'))).to.equal(true);
    });

    test('Should correctly identify other things', () => {
        expect(isObjectLike(() => {})).to.equal(false);
        expect(isObjectLike()).to.equal(false);
        expect(isObjectLike(1)).to.equal(false);
        expect(isObjectLike('Hello')).to.equal(false);
        expect(isObjectLike(null)).to.equal(false);
        expect(isObjectLike(NaN)).to.equal(false);
    });
});
