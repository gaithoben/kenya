var counties = require('./json/counties.json');
var constituencies = require('./json/constituencies.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
  counties: counties,
  randomcounty: randomcounty,
  constituencies: constituencies,
  randomconstituency: randomconstituency,
};

function randomcounty(number) {
  var arr = uniqueRandomArray(counties);
  if (number === undefined) {
    return arr();
  } else {
    var randomitems = [];
    for (var i = 0; i < number; i++) {
      randomitems.push(arr());
    }
    return randomitems;
  }
}

function randomconstituency(number) {
  var arr = uniqueRandomArray(constituencies);
  if (number === undefined) {
    return arr();
  } else {
    var randomitems = [];
    for (var i = 0; i < number; i++) {
      randomitems.push(arr());
    }
    return randomitems;
  }
}
