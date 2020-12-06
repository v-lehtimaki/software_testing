/* eslint-disable no-buffer-constructor */
/* eslint-disable no-new-wrappers */
import chai from 'chai';
import isBuffer from '../course_code/src/isBuffer';

const expect = chai.expect;

describe('isBuffer-function', () => {
    test('Should correctly identify real buffers', () => {
        expect(isBuffer(new Buffer(2))).to.equal(true);
        expect(isBuffer(Buffer.from([1, 2]))).to.equal(true);
        expect(isBuffer(Buffer.from('Hello'))).to.equal(true);
    });

    test('Should identify non-buffer things', () => {
        expect(isBuffer(new Uint8Array(2))).to.equal(false);
        expect(isBuffer([1, 2, 3])).to.equal(false);
        expect(isBuffer(true)).to.equal(false);
        expect(isBuffer(undefined)).to.equal(false);
        expect(isBuffer(null)).to.equal(false);
    });
});
