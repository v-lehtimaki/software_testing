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
        expect(countBy(array, value => value.isTrue)).to.equal({ true: 1, false: 3 });
    });

    test('Should count irregular arrays successfully', () => {
        const array = [
            { isTrue: false, name: 'Hello' },
            3,
            [
                { isTrue: false, name: 'Hello' },
                { isTrue: false, name: 'Hello' },
            ],
            { isTrue: true, name: 'Hello' },
            { isTrue: true, name: 'Hello' },
            null,
            { name: 'Hello' },
        ];
        expect(countBy(array, value => value.isTrue)).to.equal({ true: 2, false: 5 });
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
        expect(countBy(array, value => value.isTrue.yes)).to.equal({ true: 2, false: 5 });
    });

    test('Should handle invalid parameters without crashing', () => {
        expect(countBy.bind('Test', () => true)).to.not.throw();
        expect(countBy.bind(null, () => true)).to.not.throw();
        expect(countBy.bind(undefined, () => true)).to.not.throw();
        expect(countBy.bind([{ isTrue: true }, { isTrue: true }], 'a')).to.not.throw();
        expect(countBy.bind([{ isTrue: true }, { isTrue: true }], null)).to.not.throw();
    });
});
