const Trip = require('../src/models/trip')
const Car = require('../src/models/car')

beforeEach(() => {

});

afterEach(() => {
  
});

beforeAll(() => {

});

afterAll(() => {

});

describe('Trip service', function() {
  test('should return total amount trip given price and number passengers', () =>{
    const trip = new Trip(2.5,2)
  
    const amount = trip.calculateAmount()
  
    expect(amount).toBe(5)
  })

  test('Should return an error message given a price as a string parameter', () => {
    const trip = new Trip('number', 2)

    expect(() => {
      trip.calculateAmount()
    }).toThrow('Price must be a number')
  })

  test('Should return true if car accept pets', () => {
    const car = new Car('chevrolet', '4', true)
    const trip = new Trip('number', 2, new Date(), car)
    expect(trip.acceptPets()).toBeTruthy()
  })
})

