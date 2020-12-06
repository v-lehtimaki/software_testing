/* eslint-disable prefer-rest-params */
/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isArguments from '../course_code/src/isArguments';

const expect = chai.expect;

describe('isArguments-function', () => {
    test('Should correctly identify real arguments objects', () => {
        expect(
            isArguments(
                (function () {
                    return arguments;
                })(),
            ),
        ).to.equal(true);
    });

    test('Should correctly identify other objects', () => {
        expect(isArguments(1)).to.equal(false);
        expect(isArguments(null)).to.equal(false);
        expect(isArguments(undefined)).to.equal(false);
        expect(isArguments(new String('Hello'))).to.equal(false);
        expect(isArguments([1, 2])).to.equal(false);
        expect(isArguments({ a: 'Hello' })).to.equal(false);
        const func = (...params) => {
            return params;
        };
        expect(isArguments(func('a', 3))).to.equal(false);
    });
});
