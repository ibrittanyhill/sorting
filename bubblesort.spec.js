describe('Bubble Sort', function(){
    let swapCounter = 0;
    let comparisonCounter = 0;
    
    beforeEach(function() {
        spyOn(window, 'swap').and.callThrough();
        bubbleSort([]);

        expect(swap.calls.count()).toEqual(0);

        bubbleSort([3, 2, 1]);

        expect(swap.calls.count()).toEqual(3);

    })

    it('is a function', function() {
        expect(typeof bubbleSort).toEqual('function');
    });

    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });

    it('returns properly sorted array', function() {
        expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3])
    });

    it('handles duplicate numbers', function() {
        expect(bubbleSort([3, 2, 2])).toEqual([2, 2, 3])
    });

    it('returns singly sorted item', function() {
        expect(bubbleSort([3])).toEqual([3])
    });

    

  });