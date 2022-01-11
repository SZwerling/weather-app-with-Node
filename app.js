const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');



//accept a location via a command line arg
//access the command line arg without yargs
//use string value as input for geocode
//only geocode if a location was provided
//test work with a couple of locations

const local = process.argv[2]


geocode(local, (error, { latitude, longitude, location }) => {
    if(!local){
      return console.log('Please supply a valid location.')
    }
    if(error){
      return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if(error){
        return console.log(error)
      }
      console.log(location)
      console.log(forecastData)
    })
})




