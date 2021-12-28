
const request = require('request');

// GEOCODING, client supplies address, api call to find lat and long, then req to weather stack


const url = 'http://api.weatherstack.com/current?access_key=ea9c083d5d840352627cce481d258e1c&query=37.8267,-122.4233&units=f'

request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather stack. Ja Ja.')
    } else if(response.body.error){
        console.log('Unable to get what you want.')
    } else {
        const data = response.body.current;
        console.log(`It is currently ${data.temperature} degrees celcius. There is a ${data.precip * 100}% chance of rain`);
        // console.log(data)
    }
  
})


const otherUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/gaudalajara.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2xpbWJpZ2d5IiwiYSI6ImNrbXFvcjd2azAwMDgybm50eXJocWR4cWsifQ.VzNz24swKwxCgnHWDoZGsw&limit=1'

request({ url: otherUrl, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to mapbox.')
    } else if(!response.body.features || response.body.features.length === 0){
        console.log('Unable to get what you want.')
    }  else {
        const data = response.body.features[0].center;
        console.log(`The latitude is ${data[1]} and the longitude is ${data[0]}`)
    }
   
})


// data.weather_descriptions[0]

// ea9c083d5d840352627cce481d258e1c    api key

// http://api.weatherstack.com/