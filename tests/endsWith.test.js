import chai from 'chai';
import endsWith from '../course_code/src/endsWith';

const expect = chai.expect;

describe('endsWith-function', () => {
    test('Should work with simple strings', () => {
        expect(endsWith('Hello', 'lo')).to.equal(true);
        expect(endsWith('Hello', '')).to.equal(true);
        expect(endsWith('Hello', 'no')).to.equal(false);
        expect(endsWith('Hello', 'Hello')).to.equal(true);
        expect(endsWith('Hello', 'SHello')).to.equal(false);
        expect(endsWith('', '')).to.equal(true);
    });

    test('Should work with position', () => {
        expect(endsWith('Hello', 'll', 4)).to.equal(true);
        expect(endsWith('Hello', 'H', 1)).to.equal(true);
        expect(endsWith('Hello', 'Hello', 7)).to.equal(true);
        expect(endsWith('Hello', 'll', 3)).to.equal(false);
        expect(endsWith('', '', 0)).to.equal(true);
    });

    test('Should not throw with invalid parameters', () => {
        expect(endsWith.bind('Hello', 3)).to.throw();
        expect(endsWith.bind(3, 'Hello')).to.throw();
        expect(endsWith.bind(null, 'Hello')).to.throw();
        expect(endsWith.bind('Hello', 'llo', null)).to.throw();
        expect(endsWith.bind('Hello', 'llo', 'Test')).to.throw();
    });
});
