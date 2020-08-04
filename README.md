# getInNumericOrderByProperty(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects: object[]<br>): object[]

Returns new array of `objects` re-ordered by the numeric value of `property` in each.  
The `property` in each object must be type 'number' and must be a finite number.  
Does not modify original `objects` array.  

NOTE: `property` can include dot notation ( i.e,  `'property.subproperty.subsubproperty'` ).  

NOTE:  `property` does not have to be an object key.  It can also be an array index.  
If referring to array indexes, here you need to use dot-notation and not  
square braces.  Example: `'1.0' instead of [1][0]`.  

NOTE: if any object in `objects` does not have `property`, the function will error.  


## Examples
```js
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
```bash
npm i @writetome51/get-in-numeric-order-by-property
```

## Loading
```js
import {getInNumericOrderByProperty} 
    from '@writetome51/get-in-numeric-order-by-property';
```

