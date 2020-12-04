import chai from 'chai';
import ceil from '../course_code/src/ceil';

const expect = chai.expect;

describe('ceil-function', () => {
    test('Should cast positive doubles and integers successfully', () => {
        expect(ceil(0.5)).to.equal(1);
        expect(ceil(4.5)).to.equal(5);
        expect(ceil(4)).to.equal(4);
        expect(ceil(0)).to.equal(0);
    });

    test('Should cast negative doubles and integers successfully', () => {
        expect(ceil(-0.5)).to.equal(0);
        expect(ceil(-4.5)).to.equal(-4);
        expect(ceil(-4)).to.equal(-4);
        expect(ceil(-0)).to.equal(0);
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(ceil.bind('Hello')).to.not.throw();
        expect(ceil.bind([123])).to.not.throw();
        expect(ceil.bind(null)).to.not.throw();
        expect(ceil.bind(undefined)).to.not.throw();
    });
});
