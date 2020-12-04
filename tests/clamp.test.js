import chai from 'chai';
import clamp from '../course_code/src/clamp';

const expect = chai.expect;

describe('clamp-function', () => {
    test('Should clamp numbers successfully within the range', () => {
        expect(clamp(2.2, -5, 5.5)).to.equal(2.2);
        expect(clamp(-5, -5, 5.5)).to.equal(-5);
        expect(clamp(5.5, -5, 5.5)).to.equal(5.5);
    });

    test('Should clamp numbers successfully within the range', () => {
        expect(clamp(-9.5, -5, 5.5)).to.equal(-5);
        expect(clamp(10, -5, 5.5)).to.equal(5.5);
    });

    test('Should handle invalid range without crashing', () => {
        expect(clamp.bind(5, 2, -2)).to.not.throw();
    });

    test('Should handle invalid parameters without crashing', () => {
        expect(clamp.bind('Test', -2, 2)).to.not.throw();
        expect(clamp.bind(3, [2], 2)).to.not.throw();
        expect(clamp.bind(-4, -2, null)).to.not.throw();
        expect(clamp.bind(-4, undefined, -5)).to.not.throw();
    });
});
