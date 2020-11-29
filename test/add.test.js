import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import add from '../Material/src/add.js';
const assert = require('chai').assert;


describe('Adding two integers together with add-function', () => {
    it('Add-function should return 23', () => {
        assert.equal(add(12, 13), 25);
    });
});


