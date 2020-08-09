const Trip = function(price, passengers){
    this.price = price;
    this.passengers = passengers;
}

Trip.prototype.calculateAmount = function(){
    return this.price * this.passengers;
}

module.exports = Trip;
