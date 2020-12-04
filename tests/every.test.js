import chai from 'chai';
import every from '../course_code/src/every';

const expect = chai.expect;

describe('every-function', () => {
    test('Should evaluate simple arrays successfully', () => {
        expect(every([1, "string", [1,2], {a: "Test"}], Boolean)).to.equal(true);
        expect(every([null, "string", [1,2], {a: "Test"}], Boolean)).to.equal(false);
        expect(every([1, "string", undefined, {a: "Test"}], Boolean)).to.equal(false);
    });

    test('Should evaluate with special functions successfully', () => {
        expect(every(["1", "2", "3"], value => typeof(value) === "string")).to.equal(true);
        expect(every(["1", "2", 4, "3"], value => typeof(value) === "string")).to.equal(false);
        expect(every([1, "string", [1,2], {a: "Test"}], value => value?.length > 3)).to.equal(false);
    });

    test('Should evaluate empty arrays successfully', () => {
        expect(every([], (value) => value === "Test")).to.equal(true);
    });

    test('Should not throw with invalid parameters', () => {
        expect(every.bind(123, Boolean)).to.throw()
        expect(every.bind({a: "Hello"}, Boolean)).to.throw()
        expect(every.bind([1, 2], "Test")).to.throw()
    });
});
