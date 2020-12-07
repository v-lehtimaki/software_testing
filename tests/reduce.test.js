import chai from 'chai';
import reduce from '../course_code/src/reduce';

const expect = chai.expect;

describe('reduce-function', () => {
    test('Should reduce with initial value', () => {
        const array = [1, 4, 5];
        expect(reduce(array, result => result + 1, 3)).to.equal(6);
    });

    test('Should reduce arrays with value', () => {
        const array = [1, 4, 5];
        expect(reduce(array, (result, value) => result + value, 1)).to.equal(11);
    });

    test('Should reduce objects with value', () => {
        const object = { a: 1, b: 3, c: 5 };
        expect(reduce(object, (result, value) => result + value, 1)).to.eql(10);
    });

    test('Should reduce arrays with index', () => {
        const array = [1, 4, 5];
        expect(reduce(array, (result, value, index) => result + index, 1)).to.equal(4);
    });

    test('Should reduce objects with key', () => {
        const object = { a: 1, b: 3, c: 5 };
        expect(reduce(object, (result, value, key) => result + key, 'd')).to.equal('dabc');
    });

    test('Should reduce arrays with collection', () => {
        const array = [1, 4, 5];
        expect(reduce(array, (result, value, index, collection) => result + collection[1], 1)).to.equal(13);
    });

    test('Should reduce objects with collection', () => {
        const object = { a: 1, b: 3, c: 5 };
        expect(reduce(object, (result, value, key, collection) => collection.b + result, 1)).to.equal(10);
    });

    test('Should reduce arrays without initial value', () => {
        const array = [1, 4, 5];
        expect(reduce(array, result => result + 1)).to.equal(4);
    });

    test('Should reduce objects without initial value', () => {
        const object = { a: 1 };
        expect(
            reduce(object, result => {
                return { a: result.a + 1 };
            }),
        ).to.eql({ a: 4 });
    });

    test('Should not throw with invalid parameters', () => {
        expect(() => reduce('Hello', Boolean)).to.not.throw();
        expect(() => reduce(13, Boolean)).to.not.throw();
        expect(() => reduce(null, Boolean)).to.not.throw();
        expect(() => reduce(undefined, Boolean)).to.not.throw();
        expect(() => reduce([1], null)).to.not.throw();
        expect(() => reduce([1], undefined)).to.not.throw();
        expect(() => reduce([1], 3)).to.not.throw();
        expect(() => reduce([1], 'Test')).to.not.throw();
    });
});
