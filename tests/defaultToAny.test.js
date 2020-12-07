import chai from 'chai';
import defaultToAny from '../course_code/src/defaultToAny';

const expect = chai.expect;

describe('defaultToAny-function', () => {
    test('Should return itself when truthy', () => {
        expect(defaultToAny(0.5, 20)).to.equal(0.5);
        expect(defaultToAny({ a: 'Hello' }, 'Test')).to.eql({ a: 'Hello' });
        expect(defaultToAny('Test', 'Hello')).to.equal('Test');
        expect(defaultToAny([1, 2], 3)).to.eql([1, 2]);
    });

    test('Should return first default value when falsy', () => {
        expect(defaultToAny(NaN, 20)).to.equal(20);
        expect(defaultToAny(null, 'Test')).to.equal('Test');
        expect(defaultToAny(undefined, [1, 2])).to.eql([1, 2]);
    });

    test('Should return first acceptable default value when falsy', () => {
        expect(defaultToAny(undefined, null, 'Test')).to.equal('Test');
        expect(defaultToAny(null, undefined, 30, null, 20)).to.equal(30);
    });

    test('Should return last default value when everything is falsy', () => {
        expect(defaultToAny(undefined, undefined, null)).to.equal(null);
        expect(defaultToAny(null, null, undefined)).to.equal(undefined);
    });
});
