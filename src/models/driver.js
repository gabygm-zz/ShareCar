const Driver = function(firstName, lastName, city){
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;

}

Driver.prototype.names = function() {
    return `${this.firstName} ${this.lastName}, ${this.city}`
}

module.exports = Driver;
