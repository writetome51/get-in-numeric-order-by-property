# getInNumericOrderByProperty

## getInNumericOrderByProperty(property, objects): any[]

Returns new array of <b>objects</b> re-ordered by the numeric value of <b>property</b> in each.  
The <b>property</b> in each object must be type 'number' and must be a finite number.  
Does not modify passed <b>objects</b>.

## Examples
```
let players = [
	{team: 'mets', homeRuns: 15},
	{team: 'yankees', homeRuns: 25},
	{team: 'athletics', homeRuns: 5},
	{team: 'braves', homeRuns: 11},
	{team: 'padres', homeRuns: 1},
	{team: 'giants', homeRuns: 55},
	{team: 'angels', homeRuns: 20},
	{team: 'rockies', homeRuns: 31},
	{team: 'royals', homeRuns: 2},
	{team: 'rangers', homeRuns: 10},
	{team: 'marlins', homeRuns: 5},
	{team: 'mariners', homeRuns: 14},
	{team: 'red sox', homeRuns: 70},
	{team: 'white sox', homeRuns: 15}
];

let sortedPlayers = getInNumericOrderByProperty('homeRuns', players);

/***************************
sortedPlayers:

[ 
    { team: 'padres', homeRuns: 1 },
    { team: 'royals', homeRuns: 2 },
    { team: 'athletics', homeRuns: 5 },
    { team: 'marlins', homeRuns: 5 },
    { team: 'rangers', homeRuns: 10 },
    { team: 'braves', homeRuns: 11 },
    { team: 'mariners', homeRuns: 14 },
    { team: 'mets', homeRuns: 15 },
    { team: 'white sox', homeRuns: 15 },
    { team: 'angels', homeRuns: 20 },
    { team: 'yankees', homeRuns: 25 },
    { team: 'rockies', homeRuns: 31 },
    { team: 'giants', homeRuns: 55 },
    { team: 'red sox', homeRuns: 70 } 
]
***************************/
```

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/get-in-numeric-order-by-property
```

## Loading
```
// If using TypeScript:
import {getInNumericOrderByProperty} from '@writetome51/get-in-numeric-order-by-property';
// If using ES5 JavaScript:
var getInNumericOrderByProperty = 
    require('@writetome51/get-in-numeric-order-by-property').getObjectFromJSON;
```

