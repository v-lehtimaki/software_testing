import chai from 'chai';
import get from '../course_code/src/get';

const expect = chai.expect;

describe('get-function', () => {
    test('Should select from simple objects', () => {
        const object = { a: 123, b: 'Hello', c: [] };
        expect(get(object, ['a'])).to.equal(123);
        expect(get(object, 'a')).to.equal(123);
    });

    test('Should select from arrays successfully', () => {
        const object = { a: [3, 6, 7], b: 'Hello', c: [1] };
        expect(get(object, 'a[2]')).to.equal(7);
        expect(get(object, ['a', '2'])).to.equal(7);
    });

    test('Should select from nested objects successfully', () => {
        const object = { a: [3, [10, 24], 7] };
        expect(get(object, 'a[1][0]')).to.equal(10);
        const object2 = { a: { b: 3, c: 4 }, d: 0 };
        expect(get(object2, 'a.b')).to.equal(3);
    });

    test('Should select from complex objects successfully', () => {
        const object = {
            a: {
                x: 1,
                y: [3, { ab: 'Hello' }],
            },
            b: 'Hello',
            c: [1, [3, 5, { ac: [3] }]],
        };

        expect(get(object, 'a.y[1].ab')).to.equal('Hello');
        expect(get(object, 'c[1]')).to.eql([3, 5, { ac: [3] }]);
        expect(get(object, 'c[1][1]')).to.equal(5);
        expect(get(object, 'c[1][2].ac[0]')).to.equal(3);
    });

    test('Should select using arrays successfully', () => {
        const object = {
            a: {
                x: 1,
                y: [3, { ab: 'Hello' }],
            },
            b: 'Hello',
            c: [1, [3, 5, { ac: [3] }]],
        };

        expect(get(object, ['a', 'y', '1', 'ab'])).to.equal('Hello');
        expect(get(object, ['c', '1'])).to.eql([3, 5, { ac: [3] }]);
        expect(get(object, ['c', '1', '1'])).to.equal(5);
        expect(get(object, ['c', '1', '2', 'ac', '0'])).to.equal(3);
    });

    test('Should handle invalid paths successfully', () => {
        const object = { a: 123, b: 'Hello', c: [] };
        expect(get(object, 'c[0]')).to.equal(undefined);
        expect(get(object, ['d', '0'])).to.equal(undefined);
    });

    test('Should return default value with invalid path', () => {
        const object = { a: 123, b: 'Hello', c: [] };
        expect(get(object, 'c[0]', 'Hello')).to.equal('Hello');
        expect(get(object, ['d', '0'], null)).to.equal(null);
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(() => get(1, 'Test')).to.not.throw();
        expect(() => get('Hello', 2)).to.not.throw();
        expect(() => get(null, 'a')).to.not.throw();
        expect(() => get({ a: 123, b: 'Hello' }, undefined)).to.not.throw();
    });
});
