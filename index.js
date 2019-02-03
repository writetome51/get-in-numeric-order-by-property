"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var array_append_prepend_1 = require("@writetome51/array-append-prepend");
var array_get_copy_1 = require("@writetome51/array-get-copy");
var array_get_merged_arrays_1 = require("@writetome51/array-get-merged-arrays");
var get_average_from_property_1 = require("@writetome51/get-average-from-property");
var get_array_from_property_1 = require("@writetome51/get-array-from-property");
var get_property_1 = require("@writetome51/get-property");
var in_ascending_order_1 = require("@writetome51/in-ascending-order");
/*****
 Returns new array of objects, re-ordered numerically by property.
 property can contain dot-notation.
 *****/
function getInNumericOrderByProperty(property, objects) {
    // This line returns a copy because this function is expected to return an array independent
    // of the array passed in.
    if (isArray_notArray_1.isArray(objects) && objects.length === 1)
        return array_get_copy_1.getCopy(objects);
    var lessThanAverage_and_atLeastAverage = getLessThanAverage_and_atLeastAverage(objects, property);
    // It's possible that at least one of the two lists is now sorted.
    lessThanAverage_and_atLeastAverage =
        getListsInNumericOrder_ifTheyAreStillNot(lessThanAverage_and_atLeastAverage);
    return array_get_merged_arrays_1.getMergedArrays(lessThanAverage_and_atLeastAverage);
    function getLessThanAverage_and_atLeastAverage(objects, property) {
        var average = get_average_from_property_1.getAverageFromProperty(property, objects);
        return getSplitIntoTwoLists(average, objects, property);
    }
    function getSplitIntoTwoLists(separator, objects, property) {
        for (var i = 0, lessThan = [], atLeast = []; i < objects.length; ++i) {
            // getProperty() allows property to contain dot-notation.
            var value = get_property_1.getProperty(property, objects[i]);
            if (value < separator)
                array_append_prepend_1.append([objects[i]], lessThan);
            else
                array_append_prepend_1.append([objects[i]], atLeast);
        }
        return [lessThan, atLeast];
    }
    function getListsInNumericOrder_ifTheyAreStillNot(lists) {
        for (var i = 0; i < lists.length; ++i) {
            var numbers = get_array_from_property_1.getArrayFromProperty(property, lists[i]);
            if (in_ascending_order_1.notInAscendingOrder(numbers)) {
                lists[i] = getInNumericOrderByProperty(property, lists[i]);
            }
        }
        return lists;
    }
}
exports.getInNumericOrderByProperty = getInNumericOrderByProperty;
