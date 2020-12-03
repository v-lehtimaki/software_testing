import chai from 'chai';
import add from '../course_code/src/add.js';

const expect = chai.expect;

describe('Add-function', function () {
    it('Should add two integers successfully', () => {
        expect(add(12, 13)).to.equal(25);
    });

    it('Should add a postiive and a negative integer together successfully', () => {
        expect(add(-5, 7)).to.equal(2);
        expect(add(-15, 13)).to.equal(-2);
    });

    it('Should add two negative integers together successfully', () => {
        expect(add(-5, -7)).to.equal(-12);
    });

    it('Should handle the addition of two invalid inputs without throwing', () => {
        expect(add.bind('hello', [])).to.not.throw();
        expect(add.bind({}, ['hi'])).to.not.throw();
        expect(add.bind({ test: 1 }, [3])).to.not.throw();
    });
});
