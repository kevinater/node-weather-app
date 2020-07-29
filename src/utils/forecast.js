const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e3bfafc25fcc0eb743dea387a6216172&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, "Current temperature is " + body.current.temperature + " and it feels like " + body.current.feelslike + " and the humidity is " + body.current.humidity + "%");
        }
    })
}

module.exports = forecast