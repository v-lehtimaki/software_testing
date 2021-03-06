import chai from 'chai';
import every from '../course_code/src/every';

const expect = chai.expect;

describe('every-function', () => {
    test('Should evaluate simple arrays successfully', () => {
        expect(every([1, 'string', [1, 2], { a: 'Test' }], Boolean)).to.equal(true);
        expect(every([null, 'string', [1, 2], { a: 'Test' }], Boolean)).to.equal(false);
        expect(every([1, 'string', undefined, { a: 'Test' }], Boolean)).to.equal(false);
    });

    test('Should evaluate with special functions successfully', () => {
        expect(every(['1', '2', '3'], value => typeof value === 'string')).to.equal(true);
        expect(every(['1', '2', 4, '3'], value => typeof value === 'string')).to.equal(false);
        expect(every([1, 'string', [1, 2], { a: 'Test' }], value => value?.length > 3)).to.equal(false);
    });

    test('Should evaluate empty arrays successfully', () => {
        expect(every([], value => value === 'Test')).to.equal(true);
    });

    test('Should not throw with invalid parameters', () => {
        expect(() => every(123, Boolean)).to.not.throw();
        expect(() => every({ a: 'Hello' }, Boolean)).to.not.throw();
        expect(() => every(['1', '2', '3'], 'Hello')).to.not.throw();
        expect(() => every(null, Boolean)).to.not.throw();
        expect(() => every(NaN, Boolean)).to.not.throw();
        expect(() => every(undefined, Boolean)).to.not.throw();
    });
});
