function buildHeap(input) {
    const arrayLength = input.length;

    for (let i = Math.floor(arrayLength / 2); i >= 0; i--) {
        heapify(input, i, arrayLength);
    }

    return input;
}

function heapify(input, i, arrayLength) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < arrayLength && input[left] > input[largest]) {
        largest = left;
    }

    if (right < arrayLength && input[right] > input[largest]) {
        largest = right;
    }

    if (largest != i) {
        swap(input, i, largest);
        heapify(input, largest, arrayLength);
    }
}

function swap(input, a, b) {
    const temp = input[a];

    input[a] = input[b];
    input[b] = temp;
}

module.exports = buildHeap;
