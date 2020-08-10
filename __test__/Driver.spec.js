const Driver = require('../src/models/driver')
const moment = require('moment');

describe('Drive Service', function() {
  test('Should return true if today is days not available', () =>{
    const drive = new Driver('Gaby', 'G', 'Loja', ['Saturday', 'Wednesday'])
    const today = () => moment.today
    const isAvailable = drive.isAvailable(today);
    expect(isAvailable).toBe(true)
  })
  test('Should return false if Saturday  is a day not available', () =>{
    const drive = new Driver('Gaby', 'G', 'Loja', ['Saturday', 'Wednesday'])
    const sunday = () => 'Saturday'
    const isAvailable = drive.isAvailable(sunday);
    expect(isAvailable).toBe(false)
  })
})
