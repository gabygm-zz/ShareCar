const Driver = function(firstName, lastName, city, daysNoAvailable){
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
    this.daysNoAvailable = daysNoAvailable;

}

Driver.prototype.names = function() {
    return `${this.firstName} ${this.lastName}, ${this.city}`
}

Driver.prototype.isAvailable = function(getDayFn) {
    const today = getDayFn();
    if(this.daysNoAvailable.includes(today)){
      return false
    }
    return true
}

module.exports = Driver;
