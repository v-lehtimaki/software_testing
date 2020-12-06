import chai from 'chai';
import upperFirst from '../course_code/src/upperFirst';

const expect = chai.expect;

describe('capitalize-function', () => {
    test('Should capitalize the first letter of the word', () => {
        expect(upperFirst('hello')).to.equal('Hello');
        expect(upperFirst('Hello')).to.equal('Hello');
        expect(upperFirst('hello world')).to.equal('Hello world');
        expect(upperFirst('this is a test.')).to.equal('This is a test.');
    });

    test('Should not capitalize anything if first character is not a letter', () => {
        expect(upperFirst('1hello')).to.equal('1hello');
        expect(upperFirst("'hello")).to.equal("'hello");
        expect(upperFirst("  hello")).to.equal("  hello");
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(upperFirst.bind(123)).to.not.throw();
        expect(upperFirst.bind(['Hello'])).to.not.throw();
        expect(upperFirst.bind(null)).to.not.throw();
        expect(upperFirst.bind(undefined)).to.not.throw();
    });
});