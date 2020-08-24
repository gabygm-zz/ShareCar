const Driver = require('../src/models/driver')
const moment = require('moment');

describe('Drive Service', function() {
  const driver = new Driver('Gaby', 'G', 'Loja', ['Saturday', 'Wednesday'])

  test('Should return true if today is days not available', () =>{
    const today = () => moment.today
    const isAvailable = driver.isAvailable(today);
    expect(isAvailable).toBe(true)
  })

  test('Should return false if Saturday  is a day not available', () =>{
    const sunday = () => 'Saturday'
    const isAvailable = driver.isAvailable(sunday);
    expect(isAvailable).toBe(false)
  })
})
