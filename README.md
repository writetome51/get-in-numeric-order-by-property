# getInNumericOrderByProperty

## getInNumericOrderByProperty(property, objects): any[]

Returns new array of <b>objects</b> re-ordered by the numeric value of <b>property</b> in each.  
The <b>property</b> in each object must be type 'number' and must be a finite number.  
The parameter <b>property</b> is a string that can include dot notation ( i.e,  `'property.subproperty.subsubproperty'` ) .  
Does not modify passed <b>objects</b>.  
NOTE: if any object in <b>objects</b> does not have the <b>property</b>, the function will error.

## Examples
```
let players = [
	{team: 'mets', homeRuns: 15},
	{team: 'yankees', homeRuns: 25},
	{team: 'athletics', homeRuns: 5},
	{team: 'braves', homeRuns: 11},
	{team: 'padres', homeRuns: 1},
	{team: 'giants', homeRuns: 55},
	{team: 'royals', homeRuns: 2},
	{team: 'rangers', homeRuns: 10},
	{team: 'marlins', homeRuns: 5},
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
    { team: 'mets', homeRuns: 15 },
    { team: 'white sox', homeRuns: 15 },
    { team: 'yankees', homeRuns: 25 },
    { team: 'giants', homeRuns: 55 },
    { team: 'red sox', homeRuns: 70 } 
]
***************************/

players = [
	{name: 'joe', numbers: [10, 5, 20]},
	{name: 'todd', numbers: [7, 15, 9]},
	{name: 'rick', numbers: [1, 2, 19]},
	{name: 'nelly', numbers: [4, 3, 21]}
];
// sort by the second number in each numbers array:
sortedPlayers = getInNumericOrderByProperty('numbers.1', players);

/***************************
sortedPlayers:
[ 
    { name: 'rick', numbers: [ 1, 2, 19 ] },
    { name: 'nelly', numbers: [ 4, 3, 21 ] },
    { name: 'joe', numbers: [ 10, 5, 20 ] },
    { name: 'todd', numbers: [ 7, 15, 9 ] } 
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

