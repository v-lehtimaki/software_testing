import chai from 'chai';
import keys from '../course_code/src/keys';

const expect = chai.expect;

describe('keys-function', () => {
    test('Should get the keys of simple objects', () => {
        const object = {
            a: 1,
            b: 'Hello',
            c: [1, 2],
            d: { e: 1 },
        };
        expect(keys(object)).to.have.members(['a', 'b', 'c', 'd']);
    });

    test('Should handle strings and arrays', () => {
        expect(keys('Test')).to.eql(['0', '1', '2', '3']);
        expect(keys([1, 4, 6])).to.eql(['0', '1', '2']);
    });

    test('Should return empty array for other types', () => {
        expect(keys(() => {})).to.eql([]);
        expect(keys(null)).to.eql([]);
        expect(keys(123)).to.eql([]);
        expect(keys(NaN)).to.eql([]);
        expect(keys()).to.eql([]);
    });
});
