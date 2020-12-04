import chai from 'chai';
import eq from '../course_code/src/eq';

const expect = chai.expect;

describe('eq-function', () => {
    test('Should return true with equal parameters', () => {
        expect(eq(1, 1)).to.equal(true);
        expect(eq('Test', 'Test')).to.equal(true);
        expect(eq(null, null)).to.equal(true);
        expect(eq(undefined, undefined)).to.equal(true);
        expect(eq(NaN, NaN)).to.equal(true);
        expect(eq(+0, -0)).to.equal(true);
    });

    test('Should return false with unequal parameters', () => {
        expect(eq(1, '1')).to.equal(false);
        expect(eq([1], 1)).to.equal(false);
        expect(eq([1], '1')).to.equal(false);
        expect(eq('', false)).to.equal(false);
        expect(eq(null, undefined)).to.equal(false);
        expect(eq({ a: 'Hello' }, { a: 'Hello' })).to.equal(false);
        expect(eq([1, 2], [1, 2])).to.equal(false);
    });
});
