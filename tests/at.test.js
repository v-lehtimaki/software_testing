import chai from 'chai';
import at from '../course_code/src/at';

const expect = chai.expect;

describe('At-function', () => {
    test('Should select from simple objects', () => {
        const object = { a: 123, b: 'Hello', c: [] };
        expect(at(object, ['a', 'c'])).to.eql([123, []]);
    });

    test('Should select from arrays successfully', () => {
        const object = { a: [3, 6, 7], b: 'Hello', c: [1] };
        expect(at(object, ['a[2]', 'c[0]'])).to.eql([7, 1]);
    });

    test('Should select from nested objects successfully', () => {
        const object = { a: [3, [10, 24], 7] };
        expect(at(object, ['a[1][0]'])).to.eql([10]);
        const object2 = { a: { b: 3, c: 4 }, d: 0 };
        expect(at(object2, ['a.b', 'd'])).to.eql([3, 0]);
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

        expect(at(object, ['a.y[1].ab'])).to.eql(['Hello']);
        expect(at(object, ['c[1]'])).to.eql([[3, 5, { ac: [3] }]]);
        expect(at(object, ['c[1][1]'])).to.eql([5]);
        expect(at(object, ['c[1][2].ac[0]'])).to.eql([3]);
    });

    test('Should handle invalid paths successfully', () => {
        const object = { a: 123, b: 'Hello', c: [] };
        expect(at(object, ['d', 'c[0]'])).to.eql([undefined, undefined]);
    });

    test('Should handle invalid parameters without crashing', () => {
        expect(at.bind(1, 'Test')).to.not.throw();
        expect(at.bind('Hello', 2)).to.not.throw();
    });
});
