import chai from 'chai';
import defaultTo from '../course_code/src/defaultTo';

const expect = chai.expect;

describe('defaultTo-function', () => {
    test('Should return itself when truthy', () => {
        expect(defaultTo(0.5, 20)).to.equal(0.5);
        expect(defaultTo({a: "Hello"}, "Test")).to.eql({a: "Hello"});
        expect(defaultTo("Test", "Hello")).to.equal("Test");
        expect(defaultTo([1, 2], 3)).to.eql([1,2]);
    });

    test('Should return default value when falsy', () => {
        expect(defaultTo(NaN, 20)).to.equal(20);
        expect(defaultTo(null, "Test")).to.equal("Test");
        expect(defaultTo(undefined, [1, 2])).to.eql([1, 2]);
    });
});
