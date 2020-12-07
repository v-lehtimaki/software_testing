import chai from 'chai';
import add from '../course_code/src/add';

const expect = chai.expect;

describe('Add-function', () => {
    test('Should add two integers successfully', () => {
        expect(add(12, 13)).to.equal(25);
    });

    test('Should add a postiive and a negative integer together successfully', () => {
        expect(add(-5, 7)).to.equal(2);
        expect(add(-15, 13)).to.equal(-2);
    });

    test('Should add two negative integers together successfully', () => {
        expect(add(-5, -7)).to.equal(-12);
    });

    test('Should handle the addition of two invalid inputs without throwing', () => {
        expect(() => add('hello', [])).to.not.throw();
        expect(() => add({}, ['hi'])).to.not.throw();
        expect(() => add({ test: 1 }, [3])).to.not.throw();
        expect(() => add(undefined, 2)).to.not.throw();
        expect(() => add(null, 3)).to.not.throw();
    });
});
