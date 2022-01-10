const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');



//accept a location via a command line arg
//access the command line arg without yargs
//use string value as input for geocode
//only geocode if a location was provided
//test work with a couple of locations



geocode('Los Angeles', (error, data) => {
    if(error){
      return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if(error){
        return console.log(error)
      }
      console.log(data.location)
      console.log(forecastData)
    })
})




