import chai from 'chai';
import countBy from '../course_code/src/countBy';

const expect = chai.expect;

describe('countBy-function', () => {
    test('Should count simple cases successfully', () => {
        const array = [
            { isTrue: false, name: 'Hello' },
            { isTrue: true, name: 'Hello' },
            { isTrue: false, name: 'Hello' },
            { isTrue: null, name: 'Hello' },
        ];
        expect(countBy(array, value => value.isTrue)).to.equal({ true: 1, false: 2, null: 1 });
    });

    test('Should count irregular arrays successfully', () => {
        const array = [
            { isTrue: 'a', name: 'Hello' },
            3,
            [
                { isTrue: 'b', name: 'Hello' },
                { isTrue: 'a', name: 'Hello' },
            ],
            { isTrue: 'b', name: 'Hello' },
            { isTrue: 'a', name: 'Hello' },
            null,
            { name: 'Hello' },
        ];
        expect(countBy(array, value => value?.isTrue)).to.equal({ a: 2, b: 1, undefined: 4 });
    });

    test('Should count arrays with nested objects successfully', () => {
        const array = [
            { isTrue: { yes: true }, name: 'Hello' },
            { isTrue: { yes: false }, name: 'Hello' },
            { isTrue: 3, name: 'Hello' },
            { name: 'Hello' },
            2,
            { isTrue: null, name: 'Hello' },
            { isTrue: { yes: true }, name: 'Hello' },
        ];
        expect(countBy(array, value => value?.isTrue?.yes)).to.equal({ true: 2, false: 1, undefined: 4 });
    });

    test('Should handle invalid arrays without throwing', () => {
        expect(() => countBy('Test', () => true)).to.not.throw();
        expect(() => countBy(null, () => true)).to.not.throw();
        expect(() => countBy(undefined, () => true)).to.not.throw();
    });

    test('Should handle invalid iteratee function by throwing', () => {
        expect(() => countBy([{ isTrue: true }, { isTrue: true }], 'a')).to.throw();
        expect(() => countBy([{ isTrue: true }, { isTrue: true }], null)).to.throw();
    });
});
