'use strict';

function Plane(){
};

Plane.prototype.land = function(airport){
  airport._planes.push(this)
};

Plane.prototype.takeOff = function(airport){
  const position = airport._planes.indexOf(this)
  airport._planes.splice(position,1)
};

Plane.prototype.stormy = function(){
  throw new Error("cannot land: weather is stormy");
};