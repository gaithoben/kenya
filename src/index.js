import counties from './json/counties.json';
import constituencies from './json/constituencies.json';
import uniqueRandomArray from 'unique-random-array';

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
