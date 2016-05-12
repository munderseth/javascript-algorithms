'use strict';
const merge = require('../merge/merge');

/**
 * ### .mergeSort(arr)
 *
 * Sorts an array using mergeSort.
 *
 * @name merge
 * @param {Array} arr
 * @returns array with ordered elements
 */
function mergeSort(arr) {
    // If this is called with a single item array we can consider it's already sorted
    if (arr.length === 1) {
        return [arr[0]];
    }

    // Here we split the array in two
    let middleIndex = Math.floor(arr.length/2);
    let left = arr.slice(0, Math.floor(arr.length/2));
    let right = arr.slice(middleIndex, arr.length);

    // Now we keep splitting the parts and merging then in order
    // When merge gets two arrays with a single elements it sorts those two
    // Then we merge those two with another two which were already sorted and so on...
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;
