'use strict';

describe('Airport', function(){
  var airport
  beforeEach(function(){
    airport = new Airport();
  })

  it('checks if airport exist', function(){
    expect(airport).not.toBeUndefined()
  });

  it('checks if airport has planes', function(){
    expect(airport._planes).toEqual([]);
  });

 
})