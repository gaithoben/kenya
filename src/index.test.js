var expect = require('chai').expect;

var kenya = require('./index');

describe('Counties List', function() {
  describe('counties', function() {
    it('Should be an array of objects', function() {
      expect(kenya.counties).to.satisfy(arraOfObjects);

      function arraOfObjects(args) {
        return typeof args === 'object';
      }
    });
  });

  describe('Random county', function() {
    it('Should return a random county from the list of all counties', function() {
      var randomcounty = kenya.randomcounty();
      expect(kenya.counties).to.include(randomcounty);
    });
  });
});
