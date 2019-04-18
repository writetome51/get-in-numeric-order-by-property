import { getInNumericOrderByProperty } from './index';
import { arraysMatch } from '@writetome51/arrays-match';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';


// Test 0: make sure it can sort a list of only 2 objects without problem.
let players: any[] = [
	{name: 'red sox', homeRuns: 13.05},
	{name: 'blue jays', homeRuns: 3.56}
];
let sortedPlayers = getInNumericOrderByProperty('homeRuns', players);
let homeRuns = getArrayFromProperty('homeRuns', sortedPlayers);
if (arraysMatch(homeRuns, [3.56, 13.05])) console.log('test 0 passed');
else console.log('test 0 FAILED');


players = [
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
	{team: 'white sox', homeRuns: 15},
	{team: 'mets', homeRuns: 15},
	{team: 'yankees', homeRuns: 25},
	{team: 'athletics', homeRuns: 5},
	{team: 'padres', homeRuns: 1}
];

// Test 1: make sure it can do a basic integer sort.
sortedPlayers = getInNumericOrderByProperty('homeRuns', players);
homeRuns = getArrayFromProperty('homeRuns', sortedPlayers);
if (arraysMatch(homeRuns, [1, 1, 2, 5, 5, 5, 10, 11, 14, 15, 15, 15, 20, 25, 25, 31, 55, 70]))
	console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1A: make sure it can do a float sort.
players = [
	{team: 'mets', homeRuns: 15.88},
	{team: 'yankees', homeRuns: 25.03},
	{team: 'athletics', homeRuns: 5.045},
	{team: 'braves', homeRuns: 11.2},
	{team: 'padres', homeRuns: 1.112},
	{team: 'giants', homeRuns: 55.2},
	{team: 'angels', homeRuns: 20.2},
	{team: 'rockies', homeRuns: 31.7},
	{team: 'white sox', homeRuns: 15.999},
	{team: 'royals', homeRuns: 2.6},
	{team: 'rangers', homeRuns: 10.1},
	{team: 'marlins', homeRuns: 5.044},
	{team: 'mariners', homeRuns: 14.2},
	{team: 'red sox', homeRuns: 70.2},
	{team: 'mets', homeRuns: 15.998},
	{team: 'yankees', homeRuns: 25.02},
	{team: 'athletics', homeRuns: 5.039},
	{team: 'padres', homeRuns: 1.111}
];
sortedPlayers = getInNumericOrderByProperty('homeRuns', players);
homeRuns = getArrayFromProperty('homeRuns', sortedPlayers);
if (arraysMatch(
	homeRuns,
	[1.111, 1.112, 2.6, 5.039, 5.044, 5.045, 10.1, 11.2, 14.2,
		15.88, 15.998, 15.999, 20.2, 25.02, 25.03, 31.7, 55.2, 70.2]
)) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 1B: make sure it can recognize a property with capitalization and underscores.
players = [
	{team: 'mets', Home__Runs: 15.88},
	{team: 'yankees', Home__Runs: 25.03},
	{team: 'athletics', Home__Runs: 5.045},
	{team: 'braves', Home__Runs: 11.2},
	{team: 'padres', Home__Runs: 1.112},
	{team: 'giants', Home__Runs: 55.2},
	{team: 'angels', Home__Runs: 20.2},
	{team: 'rockies', Home__Runs: 31.7}
];
sortedPlayers = getInNumericOrderByProperty('Home__Runs', players);
homeRuns = getArrayFromProperty('Home__Runs', sortedPlayers);
if (arraysMatch(homeRuns, [1.112, 5.045, 11.2, 15.88, 20.2, 25.03, 31.7, 55.2]))
	console.log('test 1B passed');
else console.log('test 1B FAILED');


// Test 1C: it should error if array is empty.
let errorTriggered = false;
try {
	sortedPlayers = getInNumericOrderByProperty('Home__Runs', []);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1C passed');
else console.log('test 1C FAILED');


// Test 1D: it should error if any of the objects doesn't have the specified property.
players = [
	{team: 'mets', Home__Runs: 15.88},
	{team: 'yankees', Home__Runs: 25.03},
	{team: 'athletics', Home__Runs: 5.045},
	{team: 'braves', Home__Runs: 11.2},
	{team: 'padres', Home__Runs: 1.112},
	{team: 'giants', Home__Runs: 55.2},
	{team: 'angels', Home__Runs: 20.2},
	{team: 'rockies'}
];
errorTriggered = false;
try {
	sortedPlayers = getInNumericOrderByProperty('Home__Runs', players);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1D passed');
else console.log('test 1D FAILED');


// Test 1E: it should work with dot-notation in the property.
players = [
	{team: {name: 'red sox', Home__Runs: 13.05}},
	{team: {name: 'blue jays', Home__Runs: 3.56}},
	{team: {name: 'padres', Home__Runs: 19.81}},
	{team: {name: 'rockies', Home__Runs: 15.88}}
];
sortedPlayers = getInNumericOrderByProperty('team.Home__Runs', players);
homeRuns = getArrayFromProperty('team.Home__Runs', sortedPlayers);
if (arraysMatch(homeRuns, [3.56, 13.05, 15.88, 19.81]))
	console.log('test 1E passed');
else console.log('test 1E FAILED');


// Test 2: it should error if first argument is not string.
errorTriggered = false;
try {
	let result = getInNumericOrderByProperty(0, players);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: it should error if second argument is not array.
errorTriggered = false;
try {
	let result = getInNumericOrderByProperty('team', 'players');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: speed test.
let objs = [];
for (let i = 10000; i > 0; --i) {
	objs.push({homeRuns: i});
}
let result = getInNumericOrderByProperty('homeRuns', objs);

console.log(result.length); // 10000
console.log(result[result.length - 1]); // { homeRuns: 10000 }


players = [
	{name: 'joe', numbers: [10, 5, 20]},
	{name: 'todd', numbers: [7, 15, 9]},
	{name: 'rick', numbers: [1, 2, 19]},
	{name: 'nelly', numbers: [4, 3, 21]}
];
// sort by the second number in each numbers array:
sortedPlayers = getInNumericOrderByProperty('numbers.1', players);
console.log(sortedPlayers);
