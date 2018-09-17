describe('Split Array function', function () {
    it('is able to split an array into two halves', function () {
        expect(split([2, 4, 5, 12, 77, 54])).toEqual([[2, 4, 5], [12, 77, 54]]);
        expect(split([43, 68, 12, 8, 4])).toEqual([[43, 68], [12, 8, 4]]);
        expect(split([2, 1])).toEqual([[2], [1]]);
        expect(split([73])).toEqual([73]);

    });
});

describe('Merge function', function () {
    it('is able to merge two sorted arrays into one sorted array', function () {
       
    });
});

