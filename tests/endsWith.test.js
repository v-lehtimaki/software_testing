import chai from 'chai';
import endsWith from '../course_code/src/endsWith';

const expect = chai.expect;

describe('endsWith-function', () => {
    describe('Should correctly identify simple strings', () => {
        test('With the ending', () => {
            expect(endsWith('Hello', 'lo')).to.equal(true);
        });

        test('Without the ending', () => {
            expect(endsWith('Hello', 'no')).to.equal(false);
        });
    });

    describe('Should correctly identify strings with a position', () => {
        test('With the ending', () => {
            expect(endsWith('Hello', 'll', 4)).to.equal(true);
        });

        test('Without the ending', () => {
            expect(endsWith('Hello', 'll', 3)).to.equal(false);
        });
    });

    test('Should return false with too long endings', () => {
        expect(endsWith('llo', 'Hello')).to.equal(false);
    });


    test('Should work with empty strings', () => {
        expect(endsWith('', '')).to.equal(true);
        expect(endsWith('', 'Hello')).to.equal(false);
    });

    describe('Should handle invalid parameters in a consistent way', () => {
        test('Invalid positions should not throw', () => {
            expect(() => endsWith('Hello', 'H', 10)).to.not.throw();
            expect(() => endsWith('Hello', 'H', -10)).to.not.throw();
        });

        test('Invalid parameter types should throw', () => {
            expect(() => endsWith('Hello', [3])).to.not.throw();
            expect(() => endsWith('Hello', null)).to.not.throw();
            expect(() => endsWith('Hello', undefined)).to.not.throw();
            expect(() => endsWith([3], 'Hello')).to.not.throw();
            expect(() => endsWith(null, 'Hello')).to.not.throw();
            expect(() => endsWith(undefined, 'Hello')).to.not.throw();
            expect(() => endsWith('Hello', 'llo', null)).to.not.throw();
            expect(() => endsWith('Hello', 'llo', NaN)).to.not.throw();
            expect(() => endsWith('Hello', 'llo', 'Hello')).to.not.throw();
        });
    });
});
