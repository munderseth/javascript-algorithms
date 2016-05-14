'use strict';

/**
 * ### .checkMaxHeap(heap)
 *
 * Sorts an array using insertionSort.
 *
 * @name checkMaxHeap
 * @param {Array} heap
 * @returns boolean value indicating whether a heap is max heap or not
 */
function checkMaxHeap(heap) {
    // Here we iterate through every node getting its parent
    for (let i = heap.length - 1; i > 0; i--) {
        let parentNodeIndex = Math.floor((i - 1) / 2);
        // If any node is bigger than its parent, we do not have a max heap
        if (heap[i] > heap[parentNodeIndex]) {
            return false;
        }
    }

    return true;
}

module.exports = checkMaxHeap;
