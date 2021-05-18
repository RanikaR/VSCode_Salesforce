import { sum } from '../sum';

describe('sum()', () => {
    it('should add 1 and 2 return 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});

/* 
ln 1 - imports exported sum function from sum.js file
ln 3 - start of the Jest test suite. describe function accepts two arguments. 
    the first is the description of the unit being tested.
    second is the callback function that holds test(s)
ln 4 - the test. "it" is an alias for test. the "it" function accepts two arguments.
    first - description of what is expected
    second - callback function that builds up the test and holds the assertions 
    or expectations for the test
ln 5 - expect statement asserting the success condition. toBe is a Jest matcher

More assertions can be inserted following line 5, including using different matchers. 
expect(sum(1, 2)).not.toBeGreaterThan(3); - ensures value is not greater than 3.
*/ 