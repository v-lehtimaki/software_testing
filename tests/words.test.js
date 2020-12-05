import chai from 'chai';
import words from '../course_code/src/words';

const expect = chai.expect;

describe('Words-function', () => {
    test('Should split the string and return an array of words', () => {
        expect(words('Today is a cold day')).to.eql([
            'Today','is','a','cold','day']);
        expect(words('Today is a cold & sunny day')).to.eql([
            'Today','is','a','cold','sunny','day']);
        expect(words('And now we have 5 days left')).to.eql([
            'And','now','we','have','5','days','left']);
        expect(words('1 2 34 & / () ?')).to.eql([
            '1','2','34']);      
    });

    test('Should reject the capitalized letters.', () => {
        expect(words('TODAY IS A cold DAY','[a-z]+').to.eql(['cold']));
    });

    test('Should handle invalid parameters without throwing an error', () => {
        expect(words.bind(null)).to.not.throw();
        expect(words.bind(undefined)).to.not.throw();
        expect(words.bind(123)).to.not.throw();
        expect(words.bind('')).to.not.throw();
        expect(words.bind([])).to.not.throw();
    });
});