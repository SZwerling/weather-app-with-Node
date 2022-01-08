const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=' + latitude + ',' + longitude + '&units=f';
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather stack.')
        } else if(response.body.error){
            callback('Unable to find location.')
        } else {
            const data = response.body.current;
            callback(undefined, `It is currently ${data.temperature} degrees fareinheight. There is a ${data.precip * 100}% chance of rain`) 
        }
    } )
}

module.exports = forecast;


// data.weather_descriptions[0]

// ea9c083d5d840352627cce481d258e1c    api key

// http://api.weatherstack.com/
