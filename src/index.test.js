import { expect } from 'chai';

import kenya from './index';

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

    it('Should return an array of random Counties if passed a number', function() {
      var randomcounties = kenya.randomcounty(3);
      expect(randomcounties).to.have.length(3);
      randomcounties.forEach(function(item) {
        expect(kenya.counties).to.include(item);
      });
    });
  });
});

describe('Constituencies List', function() {
  describe('constituencies', function() {
    it('Should be an array of objects', function() {
      expect(kenya.constituencies).to.satisfy(arraOfObjects);

      function arraOfObjects(args) {
        return typeof args === 'object';
      }
    });
  });

  describe('Random constituency', function() {
    it('Should return a random constituency from the list of all constituencies', function() {
      var randomconstituency = kenya.randomconstituency();
      console.log('CONSTITUENCY', randomconstituency);
      expect(kenya.constituencies).to.include(randomconstituency);
    });

    it('Should return an array of random items if passed a number', function() {
      var randomconstituencies = kenya.randomconstituency(3);
      expect(randomconstituencies).to.have.length(3);
      randomconstituencies.forEach(function(item) {
        expect(kenya.constituencies).to.include(item);
      });
    });
  });
});
