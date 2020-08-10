const PropTypes = require('prop-types')

const Trip = function(price, passengers, date, Car){
    this.price = price
    this.passengers = passengers
    this.date = date
    this.car = Car
}

Trip.prototype.calculateAmount = function() {
    try {
        if(isNaN(this.price) || isNaN(this.passengers)){
            throw 'Price must be a number'
        }
        return this.price * this.passengers;
       
    } catch(e) {
       throw e
    }
}

Trip.prototype.acceptPets = function() {
    return this.car.acceptPets
}

Trip.propTypes = {
    price : PropTypes.string,
    passengers : PropTypes.number,
    date: PropTypes.date
}

module.exports = Trip;
