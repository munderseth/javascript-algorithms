'use strict';
require('chai').Should();
const insertionSort = require('../algorithms/insertionSort/insertionSort');

describe('InsertionSort', () => {
    it('Sorts ordered arrays', () => {
        let oneToSix = insertionSort([1, 2, 3, 4, 5, 6]);
        oneToSix[0].should.be.equal(1);
        oneToSix[1].should.be.equal(2);
        oneToSix[2].should.be.equal(3);
        oneToSix[3].should.be.equal(4);
        oneToSix[4].should.be.equal(5);
        oneToSix[5].should.be.equal(6);

        let orderedRandomArray = insertionSort([0, 9, 18, 21, 33, 58]);
        orderedRandomArray[0].should.be.equal(0);
        orderedRandomArray[1].should.be.equal(9);
        orderedRandomArray[2].should.be.equal(18);
        orderedRandomArray[3].should.be.equal(21);
        orderedRandomArray[4].should.be.equal(33);
        orderedRandomArray[5].should.be.equal(58);
    });

    it('Sorts randomly ordered arrays', () => {
        let oneToSix = insertionSort([1, 5, 3, 2, 4, 6]);
        oneToSix[0].should.be.equal(1);
        oneToSix[1].should.be.equal(2);
        oneToSix[2].should.be.equal(3);
        oneToSix[3].should.be.equal(4);
        oneToSix[4].should.be.equal(5);
        oneToSix[5].should.be.equal(6);

        let randomlySortedArray = insertionSort([21, 18, 0, 33, 9, 58]);
        randomlySortedArray[0].should.be.equal(0);
        randomlySortedArray[1].should.be.equal(9);
        randomlySortedArray[2].should.be.equal(18);
        randomlySortedArray[3].should.be.equal(21);
        randomlySortedArray[4].should.be.equal(33);
        randomlySortedArray[5].should.be.equal(58);
    });

    it('Sorts reversed arrays', () => {
        let oneToSix = insertionSort([6, 5, 4, 3, 2, 1]);
        oneToSix[0].should.be.equal(1);
        oneToSix[1].should.be.equal(2);
        oneToSix[2].should.be.equal(3);
        oneToSix[3].should.be.equal(4);
        oneToSix[4].should.be.equal(5);
        oneToSix[5].should.be.equal(6);

        let randomlySortedArray = insertionSort([58, 33, 21, 18, 9, 0]);
        randomlySortedArray[0].should.be.equal(0);
        randomlySortedArray[1].should.be.equal(9);
        randomlySortedArray[2].should.be.equal(18);
        randomlySortedArray[3].should.be.equal(21);
        randomlySortedArray[4].should.be.equal(33);
        randomlySortedArray[5].should.be.equal(58);
    });
});
