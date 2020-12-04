import chai from 'chai';
import compact from '../course_code/src/compact';

const expect = chai.expect;

describe('compact-function', () => {
    test('Should compact valid arrays successfully', () => {
        expect(compact([1, NaN, 0.1, 0, null, 'Hello', '', undefined, 2])).to.equal([1, 0.1, 'Hello', 2]);
        expect(compact([])).to.equal([]);
        expect(compact([null])).to.equal([]);
    });

    test('Should handle invalid parameters without crashing', () => {
        expect(compact.bind(null)).to.not.throw();
        expect(compact.bind(undefined)).to.not.throw();
        expect(compact.bind('Test')).to.not.throw();
        expect(compact.bind(3)).to.not.throw();
        expect(compact.bind({ a: 'Test', b: 1 })).to.not.throw();
    });
});
