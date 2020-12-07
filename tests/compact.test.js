import chai from 'chai';
import compact from '../course_code/src/compact';

const expect = chai.expect;

describe('compact-function', () => {
    test('Should compact valid arrays successfully', () => {
        expect(compact([1, NaN, 0.1, 0, null, 'Hello', '', undefined, 2])).to.equal([1, 0.1, 'Hello', 2]);
        expect(compact([])).to.equal([]);
        expect(compact([null])).to.equal([]);
    });

    test('Should handle invalid parameters by throwing', () => {
        expect(() => compact(null)).to.throw();
        expect(() => compact(undefined)).to.throw();
        expect(() => compact(3)).to.throw();
        expect(() => compact({ a: 'Test', b: 1 })).to.throw();
    });
});
