'use strict';
require('chai').Should();
const buildHeap = require('../algorithms/buildHeap/buildHeap');
const checkMaxHeap = require('../algorithms/checkMaxHeap/checkMaxHeap');

describe('BuildHeap', () => {
    it('Builds max heaps from max heaps', () => {
        let oneToSix = buildHeap([6, 4, 5, 2, 3, 1]);
        checkMaxHeap(oneToSix).should.be.true;
    });

    it('Builds max heaps from random arrays', () => {
        for (let i = 0; i < 10; i++) {
            let arr = [];
            for (let j = 0; j < 30; j++) {
                arr[j] = Math.floor(Math.random() * 200);
            }
            let heap = buildHeap([1, 5, 3, 2, 4, 6])
            checkMaxHeap(heap).should.be.true;
        }
    });

    it('Builds max heaps from min heaps', () => {
        let oneToSix = buildHeap([1, 2, 3, 4, 5, 6]);
        checkMaxHeap(oneToSix).should.be.true;
    });
});
