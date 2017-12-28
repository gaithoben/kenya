var counties = require('./json/counties.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  counties: counties,
  randomcounty: uniqueRandomArray(counties),
};
