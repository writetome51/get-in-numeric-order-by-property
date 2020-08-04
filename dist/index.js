import {getArrayCopy} from '@writetome51/get-array-copy';
import {getArrayFromProperty} from '@writetome51/get-array-from-property';
import {getAverageFromProperty} from '@writetome51/get-average-from-property';
import {getMergedArrays} from '@writetome51/array-get-merged-arrays';
import {getProperty} from '@writetome51/get-property';
import {isArray} from '@writetome51/is-array-not-array';
import {inNumericOrder} from '@writetome51/in-numeric-order';
import {not} from '@writetome51/not';


/*****
 Returns new array of objects, re-ordered numerically by `property`.
 `property` can contain dot-notation.
 *****/

export function getInNumericOrderByProperty(property, objects) {
	// This line returns a copy because this function is expected to return a new array.
	if (isArray(objects) && objects.length === 1) return getArrayCopy(objects);

	let [lessThanAverage, atLeastAverage] = get_lessThanAverage_and_atLeastAverage(objects, property);

	[lessThanAverage, atLeastAverage] =
		getInNumericOrder_ifTheyAreStillNot([lessThanAverage, atLeastAverage]);

	return getMergedArrays([lessThanAverage, atLeastAverage]);


	function get_lessThanAverage_and_atLeastAverage(objects, property) {
		let average = getAverageFromProperty(property, objects);

		for (var i = 0, lessThan = [], atLeast = []; i < objects.length; ++i) {

			let num = getProperty(property, objects[i]);
			if (num < average) lessThan.push(objects[i]);
			else atLeast.push(objects[i]);
		}
		return [lessThan, atLeast];
	}


	function getInNumericOrder_ifTheyAreStillNot(lists) {
		for (let i = 0; i < lists.length; ++i) {

			if (lists[i].length > 0) {
				let numbers = getArrayFromProperty(property, lists[i]);
				if (not(inNumericOrder(numbers))) {
					lists[i] = getInNumericOrderByProperty(property, lists[i]);
				}
			}
		}
		return lists;
	}

}
