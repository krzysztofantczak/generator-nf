var container = require('../../../../src/client').container;

describe('container content', function()
{
    it('should contain inserted text', function()
    {
        container('foo', 'bar');

        expect(document.getElementById('foo').innerHTML).toEqual('bar');
    });
});
