describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles single item cases', function(){
    expect( bubbleSort([1]) ).toEqual([1]);
  });
  it('the index of the largest integer is in the last index of the array', function(){
    expect( bubbleSort([2,1])).toEqual([1,2])
  });

});
