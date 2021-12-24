const { randomInt } = require('crypto');
const request = require('request');


const url = 'http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=37.8267,-122.4233'

request({ url: url, json: true }, (error, response) => {
    const data = response.body.current
    console.log(`It is currently ${data.temperature} degrees celcius. There is a ${data.precip * 100}% chance of rain`)
})





// ea9c083d5d840352627cce481d258e1c

// http://api.weatherstack.com/