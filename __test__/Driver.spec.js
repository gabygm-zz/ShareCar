const Driver = require('../src/models/driver')
const moment = require('moment');

describe('Drive Service', function() {
  test('Should return true if today is days not available', () =>{
    const drive = new Driver('Gaby', 'G', 'Loja', ['Saturday', 'Wednesday'])
    const isAvailable = drive.isAvailable(moment.today);
    expect(isAvailable).toBe(true)
  })
  test('Should return false if Saturday  is a day not available', () =>{
    const drive = new Driver('Gaby', 'G', 'Loja', ['Saturday', 'Wednesday'])
    const isAvailable = drive.isAvailable('Saturday');
    expect(isAvailable).toBe(false)
  })
})
