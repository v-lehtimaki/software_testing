/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isDate from '../course_code/src/isDate';

const expect = chai.expect;

describe('isDate-function', () => {
    test('Should correctly identify real dates', () => {
        expect(isDate(new Date())).to.equal(true);
    });

    test('Should identify date strings as not dates', () => {
        const date = new Date();
        expect(isDate(date.toISOString)).to.equal(false);
        expect(isDate(date.toDateString)).to.equal(false);
    });

    test('Should identify non-date things', () => {
        expect(isDate(1)).to.equal(false);
        expect(isDate()).to.equal(false);
        expect(isDate('Hello')).to.equal(false);
        expect(isDate(null)).to.equal(false);
        expect(isDate(undefined)).to.equal(false);
    });
});
