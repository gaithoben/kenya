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
    "_id": "30",
    "code": "30",
    "name": "BARINGO",
    "center": {
      "lat": 0.6717,
      "lon": 35.945852
    },
    "constituencies": [
      {
        "code": "158",
        "name": "BARINGO  NORTH",
        "center": {
          "lat": 0.753312,
          "lon": 35.794812
        },
        "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/constituency/constituencypolygons/158.json"
      },
      ...
    ],
    "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/county/countypolygons/30.json"
  },
  ...
]
```

```javascript
import { constituencies } from 'kenya';
```

Output

```javascript

        [
    {
        "_id": "144",
        "code": "144",
        "name": "AINABKOI",
        "center": {
            "lat": 0.316909,
            "lon": 35.454233
        },
        "wards": [
            {
                "code": "0721",
                "name": "AINABKOI/OLARE",
                "center": {
                    "lat": 0.20469,
                    "lon": 35.500608
                },
                "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/ward/wardpolygons/0721.json"
            },
            {
                "code": "0719",
                "name": "KAPSOYA",
                "center": {
                    "lat": 0.520393,
                    "lon": 35.320549
                },
                "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/ward/wardpolygons/0719.json"
            },
            {
                "code": "0720",
                "name": "KAPTAGAT",
                "center": {
                    "lat": 0.42814,
                    "lon": 35.422417
                },
                "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/ward/wardpolygons/0720.json"
            }
        ],
        "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/constituency/constituencypolygons/144.json"
    },
    {
        "_id": "190",
        "code": "190",
        "name": "AINAMOI",
        "center": {
            "lat": -0.303028,
            "lon": 35.276669
        },
        "wards": [
            {
                "code": "0945",
                "name": "AINAMOI",
                "center": {
                    "lat": -0.26719,
                    "lon": 35.282392
                },
                "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/ward/wardpolygons/0945.json"
            },
          ...
        ],
        "polygon": "https://raw.githubusercontent.com/gaithoben/kenya-geo/master/constituency/constituencypolygons/190.json"
    },
    ...
]
```
