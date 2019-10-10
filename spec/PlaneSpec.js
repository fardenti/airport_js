'use strict';

describe('Plane', function(){
  var plane
  var airport
  beforeEach(function(){
    plane = new Plane();
    airport = new Airport();
  });
  
  it('checks if plane exist', function(){
    expect(plane).not.toBeUndefined()
  });
  it('lands a plane at airport', function(){
    expect(plane.land).not.toBeUndefined()
  });

  it('checks the type', function(){
    expect(typeof plane.land).toBe('function')
  });

  it('lands a plane', function(){
    expect(airport._planes).toEqual([]);
    plane.land(airport);
    expect(airport._planes).toEqual([plane]);
  });

  it('take off a plane from airport', function(){
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport._planes).toEqual([]);
  });

  it('take off plane2 from airport', function(){
    const p1 = new Plane();
    const p2 = new Plane();
    const p3 = new Plane();
    airport._planes = [p1, p2, p3]
    p2.takeOff(airport);
    expect(airport._planes[1]).toBe(p3);
  });

  it('raises an error if weather is stormy', function(){
    plane.land(airport);
    expect(plane.stormy()).toThrow('cannot land: weather is stormy')
  });
});