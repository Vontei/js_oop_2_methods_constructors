function Taxi(driverName, maxNumberOfPassengers) {
  this.driverName = 'Phil Collins';
  this.maxNumberOfPassengers = maxNumberOfPassengers;
  this.passengers = []

}

Taxi.prototype.addPassenger = function(passengerName) {
  this.passengerName = passengerName
  this.passengers.push(this.passengerName)
};

Taxi.prototype.passengerCount = function(passengerName){
  if(this.passengers == null){
    return 0
  } else {
      return this.passengers.length
  }
};

Taxi.prototype.full = function(){
  if(this.passengers.length == this.maxNumberOfPassengers){
    return true
  }
  if(this.passengers.length < this.maxNumberOfPassengers){
    return false
  }
};


Taxi.prototype.dropOffPassengers = function(){
  this.passengers = []
  return this.passengers
};

// DO NOT MODIFY BELOW THIS COMMENT:
module.exports = Taxi;
