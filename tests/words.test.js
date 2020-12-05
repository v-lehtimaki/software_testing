import chai from 'chai';
import words from '../course_code/src/words';

const expect = chai.expect;

describe('Words-function', () => {
    test('Should split the string and return an array of words', () => {
        expect(words('Today is a cold day')).to.equal([
            'Today','is','a','cold','day']);
        expect(words('Today is a cold & sunny day')).to.equal([
            'Today','is','a','cold','sunny','day']);
        expect(words('And now we have 5 days left')).to.equal([
            'And','now','we','have','5','days','left']);
        expect(words('1 2 34 & / () ?')).to.equal([
            '1','2','34']);      
    });

    test('Should reject the capitalized letters.', () => {
        expect(words('TODAY IS A cold DAY'),'[a-z]+'.to.equal(['cold']));
    });
});