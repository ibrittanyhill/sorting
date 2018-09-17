describe('Bubble Sort', function(){
    let swapCounter = 0;
    let comparisonCounter = 0;

    beforeEach(function() {
        spyOn(window, 'swap').and.callThrough();





        //const swap2 = bubbleSort([3, 2, 1]);

        //expect(swap2.calls.count()).toEqual(3);

        spyOn(window, 'comparison').and.callThrough();

        //expect(swap2.calls)

    })

    it('swap is called 0 times', function(){
        bubbleSort([3,2]);
        expect(swap.calls.count()).toEqual(1);
    })

    it('is a function', function() {
        expect(typeof bubbleSort).toEqual('function');
    });

    it('handles an empty array', function(){
      let array = [];
      expect( bubbleSort(array) ).toEqual( [] );
      expect(swap.calls.count()).toEqual(0)

      expect(comparison.calls.count()).toEqual((array.length-1)*(array.length)/2);
    });

    it('returns properly sorted array', function() {
        expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3])
        expect(swap.calls.count()).toEqual(3);
    });

    it('handles duplicate numbers', function() {
        let array = [2,2,3];
        expect(bubbleSort(array)).toEqual([2, 2, 3])
        expect(swap.calls.count()).toEqual(2);
        expect(comparison.calls.count()).toEqual((array.length-1)*(array.length)/2)
    });

    it('returns singly sorted item', function() {
        expect(bubbleSort([3])).toEqual([3])
        expect(swap.calls.count()).toEqual(0);
    });



  });
