/*global browser, by */

'use strict';

describe('E2E: Example', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should show the number defined in the controller', function(done) {
    element(by.css('.number-example')).getText().then(function(text) {
      expect(parseInt(text) > 0).toBeTruthy();
      done();
    });
  });

});