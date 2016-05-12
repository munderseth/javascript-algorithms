'use strict';

/**
 * ### .merge(left, right)
 *
 * Merges two sorted arrays in order.
 *
 * @name merge
 * @param {Array} left
 * @param {Array} right
 * @returns array with ordered elements from both inputs
 */
function merge(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let merged = [];

    // Iterate until one of the arrays reaches its end
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex++]);
        } else {
            merged.push(right[rightIndex++]);
        }
    }

    // When one of the arrays reached its end we concat what's left from both (nothing in the case of the array which reached its end)
    return merged.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = merge;
