var routes = require('../../../../src/common/config').routes;
var app    = require('../../../../src/common/config').app;

describe('common routes config', function()
{
    it('should contain routes config object', function()
    {
        expect(routes).toBeDefined();
        expect(typeof routes).toBe('object');
    });

    it('should contain root route', function()
    {
        expect(routes['/']).toBeDefined();
    });
});

describe('common app config', function()
{
    it('should contain app config object', function()
    {
        expect(app).toBeDefined();
        expect(typeof app).toBe('object');
    });
});