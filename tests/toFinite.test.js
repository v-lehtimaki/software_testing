import chai from 'chai';
import toFinite from '../course_code/src/toFinite';

const expect = chai.expect;

describe('toFinite-function', () => {
    test("Should return itself for finite numbers", () => {
        expect(toFinite(10500)).to.equal(10500);
        expect(toFinite(3.101)).to.equal(3.101);
        expect(toFinite(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
        expect(toFinite(-55)).to.equal(-55);
        expect(toFinite(-4.5)).to.equal(-4.5);
        expect(toFinite(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
    })

    test("Should convert infinite numbers", () => {
        expect([Infinity, -Infinity]).to.not.include(toFinite(Infinity));
        expect([Infinity, -Infinity]).to.not.include(toFinite(-Infinity));
    })

    test('Should handle invalid parameters without throwing', () => {
        expect(() => toFinite('Hello')).to.not.throw();
        expect(() => toFinite([123])).to.not.throw();
        expect(() => toFinite({ 1: 234 })).to.not.throw();
        expect(() => toFinite(NaN)).to.not.throw();
        expect(() => toFinite(null)).to.not.throw();
        expect(() => toFinite(undefined)).to.not.throw();
    });
});
