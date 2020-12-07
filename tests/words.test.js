import chai from 'chai';
import words from '../course_code/src/words';

const expect = chai.expect;

describe('Words-function', () => {
    test('Should split strings into words', () => {
        expect(words('Today is a cold day')).to.eql(['Today', 'is', 'a', 'cold', 'day']);
        expect(words('Today is a cold & sunny day')).to.eql(['Today', 'is', 'a', 'cold', 'sunny', 'day']);
        expect(words('And now we have 5 days left')).to.eql(['And', 'now', 'we', 'have', '5', 'days', 'left']);
        expect(words('1 2 34 & / () ?')).to.eql(['1', '2', '34']);
    });

    test('Should return empty array for wordless strings', () => {
        expect(words('& / () ?')).to.eql([]);
        expect(words('')).to.eql([]);
    });

    test('Should reject the capitalized letters.', () => {
        expect(words('TODAY IS A cold DAY', '[a-z]+')).to.eql(['cold']);
    });

    test('Should handle invalid parameters without throwing an error', () => {
        expect(words.bind(null)).to.throw();
        expect(words.bind(undefined)).to.throw();
        expect(words.bind(123)).to.throw();
        expect(words.bind([])).to.throw();
        expect(words.bind('Test', null)).to.throw();
        expect(words.bind('Test', 123)).to.throw();
        expect(words.bind('Test', [1, 2])).to.throw();
    });
});
