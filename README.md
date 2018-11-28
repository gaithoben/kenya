# kenya

[![travis build](https://img.shields.io/travis/gaithoben/kenya.svg?style=flat-square)](https://travis-ci.org/gaithoben/kenya)
[![version](https://img.shields.io/npm/v/kenya.svg?style=flat-square)](http://npm.im/kenya)
[![downloads](https://img.shields.io/npm/dm/kenya.svg?style=flat-square)](http://npm-stat.com/charts.html?package=kenya&from=2015-08-01)
[![MIT License](https://img.shields.io/npm/l/kenya.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

## Usage

```javascript

npm install kenya
```

Then import

```javascript
import { counties } from 'kenya';
```

Output

```javascript
[
{
"code": "01",
"name": "MOMBASA",
"center": { "lat": -4.018804, "lon": 39.650008 },
"no_of_polling_stations": "934",
"no_of_polling_centers": "934",
"registered_voters": 580223,
"geopolygon":
"https://raw.githubusercontent.com/gaithoben/kenya-geo/master/county/polygons/01.json"
},
...
]
```

import { constituencies } from 'kenya';

```javascript

        [
            {
            "code": "001",
            "name": "CHANGAMWE",
            "center": { "lat": -4.026797, "lon": 39.614571 },
            "no_of_polling_stations": "136",
            "no_of_polling_centers": "136",
            "registered_voters": 86331,
            "geopolygon":
            "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/constituency/constituencypolygons/001.json"
        },
        ...]
```
