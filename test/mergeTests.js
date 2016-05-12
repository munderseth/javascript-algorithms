'use strict';
require('chai').Should();
const merge = require('../algorithms/merge/merge');

describe('Merge', () => {
    it('Merges two sorted arrays', () => {
        let oneToSix = merge([1, 2, 3], [4, 5, 6]);
        oneToSix[0].should.be.equal(1);
        oneToSix[1].should.be.equal(2);
        oneToSix[2].should.be.equal(3);
        oneToSix[3].should.be.equal(4);
        oneToSix[4].should.be.equal(5);
        oneToSix[5].should.be.equal(6);

        let randomSortedArrays = merge([21, 33, 58], [0, 9, 18]);
        randomSortedArrays[0].should.be.equal(0);
        randomSortedArrays[1].should.be.equal(9);
        randomSortedArrays[2].should.be.equal(18);
        randomSortedArrays[3].should.be.equal(21);
        randomSortedArrays[4].should.be.equal(33);
        randomSortedArrays[5].should.be.equal(58);

        let arraysSwapped = merge([1, 3, 5], [2, 4, 6]);
        arraysSwapped[0].should.be.equal(1);
        arraysSwapped[1].should.be.equal(2);
        arraysSwapped[2].should.be.equal(3);
        arraysSwapped[3].should.be.equal(4);
        arraysSwapped[4].should.be.equal(5);
        arraysSwapped[5].should.be.equal(6);
    });
});
