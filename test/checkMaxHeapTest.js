'use strict';
require('chai').Should();
const checkMaxHeap = require('../algorithms/checkMaxHeap/checkMaxHeap');

describe('CheckMaxHeap', () => {
    it('Returns true for max heaps', () => {
        checkMaxHeap([6, 4, 5, 2, 3, 1]).should.be.true;
        checkMaxHeap([77, 60, 74, 30, 36, 38, 39, 22]).should.be.true;
    });

    it('Returns false for non-max heaps', () => {
        checkMaxHeap([4, 6, 5, 2, 3, 1]).should.be.false;
        checkMaxHeap([60, 77, 74, 30, 36, 38, 39, 22]).should.be.false;
    });
});
