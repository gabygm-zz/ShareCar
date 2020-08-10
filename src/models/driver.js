const Driver = function(firstName, lastName, city, daysNoAvailable){
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.daysNoAvailable = daysNoAvailable;

}

Driver.prototype.names = function() {
    return `${this.firstName} ${this.lastName}, ${this.city}`
}

Driver.prototype.isAvailable = function(currentDay) {
    if(this.daysNoAvailable.includes(currentDay)){
      return false
    }
    return true
}

module.exports = Driver;
