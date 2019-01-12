import counties from './json/kenyacounties.json';
import constituencies from './json/kenyaconstituencies.json';
import tribesofkenya from './json/tribesofkenya.json';
import ethnicpopulation2009 from './json/kenyaethnicpopulation2009.json';
import nationalities from './json/nationalities.json';

import uniqueRandomArray from 'unique-random-array';

module.exports = {
  counties: counties,
  randomcounty: randomcounty,
  constituencies: constituencies,
  randomconstituency: randomconstituency,
  tribesofkenya,
  ethnicpopulation2009,
  nationalities,
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
