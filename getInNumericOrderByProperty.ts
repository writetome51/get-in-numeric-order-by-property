import { getAverageFromProperty } from '@writetome51/get-average-from-property';
import { getMergedArrays } from '@writetome51/array-get-merged-arrays';
import { append } from '@writetome51/array-append-prepend';
import { notInAscendingOrder } from '@writetome51/in-ascending-order';
import { isArray } from 'basic-data-handling/isArray_notArray';
import { getCopy } from '@writetome51/array-get-copy';
import { getArrayFromProperty } from '@writetome51/get-array-from-property';


/*****
 Returns new array of objects, re-ordered numerically by property.
 *****/

export function getInNumericOrderByProperty(property, objects): any[] {

	// This line returns a copy because this function is expected to return an array independent
	// of the array passed in.
	if (isArray(objects) && objects.length === 1) return getCopy(objects);

	let lessThanAverage_and_atLeastAverage = getLessThanAverage_and_atLeastAverage(objects, property);

	// It's possible that at least one of the two lists is now sorted.
	lessThanAverage_and_atLeastAverage =
		getListsInNumericOrder_ifTheyAreStillNot(lessThanAverage_and_atLeastAverage);

	return getMergedArrays(lessThanAverage_and_atLeastAverage);


	function getLessThanAverage_and_atLeastAverage(objects, property) {
		var average = getAverageFromProperty(property, objects);
		return getSplitIntoTwoLists(average, objects, property);
	}


	function getSplitIntoTwoLists(separator, objects, property) {
		for (var i = 0, lessThan = [], atLeast = []; i < objects.length; ++i) {

			if (objects[i][property] < separator) append([objects[i]], lessThan);

			else append([objects[i]], atLeast);
		}
		return [lessThan, atLeast];
	}


	function getListsInNumericOrder_ifTheyAreStillNot(lists) {
		for (let i = 0; i < lists.length; ++i) {
			let numbers = getArrayFromProperty(property, lists[i]);

			if (notInAscendingOrder(numbers)) {
				lists[i] = getInNumericOrderByProperty(property, lists[i]);
			}
		}
		return lists;
	}


}
