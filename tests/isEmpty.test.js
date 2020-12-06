/* eslint-disable no-new-wrappers */
/* eslint-disable no-buffer-constructor */
/* eslint-disable prefer-rest-params */
import chai from 'chai';
import isEmpty from '../course_code/src/isEmpty';

const expect = chai.expect;

describe('isEmpty-function', () => {
    test('Should correctly test basic empty elements', () => {
        expect(isEmpty('')).to.equal(true);
        expect(isEmpty(1)).to.equal(true);
        expect(isEmpty(null)).to.equal(true);
        expect(isEmpty()).to.equal(true);
        expect(isEmpty({})).to.equal(true);
        expect(isEmpty([])).to.equal(true);
        expect(isEmpty(Buffer.from(''))).to.equal(true);
        expect(isEmpty(new String(''))).to.equal(true);
        expect(isEmpty(new Uint8Array())).to.equal(true);
        expect(
            isEmpty(
                (function () {
                    return arguments;
                })(),
            ),
        ).to.equal(true);
        expect(isEmpty(() => {})).to.equal(true);
        expect(isEmpty(new Set())).to.equal(true);
        expect(isEmpty(new Map())).to.equal(true);
    });

    test('Should correctly detect non-empty things', () => {
        expect(isEmpty('Hello')).to.equal(false);
        expect(isEmpty([1])).to.equal(false);
        expect(isEmpty({ a: 1 })).to.equal(false);
    });
});
