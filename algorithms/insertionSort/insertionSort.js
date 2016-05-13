'use strict';

/**
 * ### .insertionSort(arr)
 *
 * Sorts an array using insertionSort.
 *
 * @name insertionSort
 * @param {Array} arr
 * @returns array with ordered elements
 */
function insertionSort(arr) {
    // We start getting the second element because we need a previous one to compare
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        let currIndex = i - 1;
        let localPos = i;

        // We iterate through all the items before the one we've got
        while (currIndex >= 0) {
            // If an item before it is smaller than the current item we swap
            if (arr[currIndex] > element) {
                let temp = arr[currIndex];
                arr[currIndex] = element;
                arr[localPos] = temp;

                // After swapping we store the new index of the element we've got
                localPos = currIndex;
            }

            currIndex--;
        }
    }

    return arr;
}

module.exports = insertionSort;
