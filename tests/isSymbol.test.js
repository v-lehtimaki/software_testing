/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isSymbol from '../course_code/src/isSymbol';

const expect = chai.expect;

describe('isSymbol-function', () => {
    test('Should correctly identify a symbol', () => {
        expect(isSymbol(Symbol('Test'))).to.equal(true);
    });

    test('Should identify non-symbol things', () => {
        expect(isSymbol(() => {})).to.equal(false);
        expect(isSymbol()).to.equal(false);
        expect(isSymbol(1)).to.equal(false);
        expect(isSymbol('Hello')).to.equal(false);
        expect(isSymbol(null)).to.equal(false);
        expect(isSymbol(NaN)).to.equal(false);
        expect(isSymbol({ a: 1 })).to.equal(false);
        expect(isSymbol([1, 2])).to.equal(false);
        expect(isSymbol(new String('Hello'))).to.equal(false);
        expect(isSymbol(new RegExp('Hi'))).to.equal(false);
    });
});
