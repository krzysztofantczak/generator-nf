describe('Home Pages', function() {

    var ptor = protractor.getInstance();
    ptor.ignoreSynchronization = true;

    it('should load the homepage', function() {
        ptor.get('http://459aa26c.tun.tradero.net');
        expect(ptor.findElement(protractor.By.css('h1')).getText()).toBe('Cooperative Action Framework v0.0.1');
    });
    it('should load the hub page', function() {
        ptor.get('http://459aa26c.tun.tradero.net/hub');
        expect(ptor.findElement(protractor.By.id('main')).getText()).toBe('');
    });

});
