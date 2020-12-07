import chai from 'chai';
import divide from '../course_code/src/divide';

const expect = chai.expect;

describe('divide-function', () => {
    test('Should get the quotient for valid values', () => {
        expect(divide(10, 2)).to.equal(5);
        expect(divide(5, 2.5)).to.equal(2);
        expect(divide(-10.5, 2)).to.equal(-5.25);
        expect(divide(-3.75, -1.5)).to.equal(2.5);
        expect(divide(0, 2)).to.equal(0);
    });

    test("Should not throw with invalid parameters", () => {
        expect(() => divide(10, null)).to.not.throw();
        expect(() => divide(undefined, 3)).to.not.throw();
        expect(() => divide([1, 2], 3)).to.not.throw();
        expect(() => divide(3, "Hello")).to.not.throw();
    })
});
