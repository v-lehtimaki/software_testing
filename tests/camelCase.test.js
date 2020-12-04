import chai from 'chai';
import camelCase from '../course_code/src/camelCase';

const expect = chai.expect;

describe('camelCase-function', () => {
    test('Should camelify strings with only letters successfully', () => {
        expect(camelCase('Hello world')).to.equal('helloWorld');
        expect(camelCase('this iS a TEST senTEnce')).to.equal('thisIsATestSentence');
    });

    test('Should camelify strings with numbers and weird whitespaces successfully', () => {
        expect(camelCase('  2  He3llo    world2 ')).to.equal('2He3LloWorld2');
        expect(
            camelCase(`this      
        is a 
        tes\tt sente\nnce`),
        ).to.equal('thisIsATesTSenteNce');
    });

    test('Should camelify strings with symbols successfully', () => {
        expect(camelCase('.-!Hello!  !   !WO??RLD?,')).to.equal('helloWoRld');
    });

    test('Should handle invalid parameters without crashing', () => {
        expect(camelCase.bind(123)).to.not.throw();
        expect(camelCase.bind(null)).to.not.throw();
        expect(camelCase.bind(undefined)).to.not.throw();
        expect(camelCase.bind(['Hello', 'World'])).to.not.throw();
    });
});
