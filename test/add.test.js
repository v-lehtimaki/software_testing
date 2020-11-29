import add from '../Material/src/add.js';
import chai from 'chai';

var assert = chai.assert;

describe('Adding two integers together with add-function', () => {
    it('Add-function should return 23', () => {
        assert.equal(add(12, 13), 25);
    });
    it('Add-function should return 0', () => {
        assert.equal(add(-1, 1), 0);
    });
});


