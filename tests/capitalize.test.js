import chai from 'chai';
import capitalize from '../course_code/src/capitalize';

const expect = chai.expect;

describe('capitalize-function', () => {
    test('Should capitalize basic strings successfully', () => {
        expect(capitalize('hello world')).to.equal('Hello world');
        expect(capitalize('this iS a TEST senTEnce')).to.equal('This is a test sentence');
    });

    test('Should not capitalize anything if first character is not a letter', () => {
        expect(capitalize('1hello')).to.equal('1hello');
        expect(capitalize("'hello")).to.equal("'hello");
    });

    test('Should handle invalid parameters without throwing', () => {
        expect(capitalize.bind(123)).to.not.throw();
        expect(capitalize.bind(['Hello'])).to.not.throw();
        expect(capitalize.bind(null)).to.not.throw();
        expect(capitalize.bind(undefined)).to.not.throw();
    });
});
