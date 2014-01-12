var sum  = require('../../../../src/server').sum;

describe('simple calc', function()
{
    it('should sum two numbers', function()
    {
        expect(sum(1,1)).toEqual(2);
    });
});
