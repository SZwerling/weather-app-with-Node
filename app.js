const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


forecast(34.059761, -118.276802, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })




geocode('Houston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
})




