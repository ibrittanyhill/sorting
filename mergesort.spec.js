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
       expect(merge([2],[1])).toEqual([1,2])
       expect(merge([1,2],[3,4])).toEqual([1,2,3,4])
       expect(merge([27,38],[3,43])).toEqual([3,27,38,43])
       expect(merge([3,27,38,43],[9,10,82])).toEqual([3,9,10,27,38,43,82])
    });
});

