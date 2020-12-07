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
            expect(endsWith.bind('Hello', 3)).to.throw();
            expect(endsWith.bind('Hello', null)).to.throw();
            expect(endsWith.bind('Hello', undefined)).to.throw();
            expect(endsWith.bind(3, 'Hello')).to.throw();
            expect(endsWith.bind(null, 'Hello')).to.throw();
            expect(endsWith.bind(undefined, 'Hello')).to.throw();
            expect(endsWith.bind('Hello', 'llo', null)).to.throw();
            expect(endsWith.bind('Hello', 'llo', NaN)).to.throw();
            expect(endsWith.bind('Hello', 'llo', 'Hello')).to.throw();
        });
    });
});
