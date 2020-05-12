const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


const city = process.argv[2]

if (!city) {
    console.log('Please provide an address')
} else {
    geocode(city, (error, {longitude, latitude, location} = {}) => {
        if (error) {
            return console.log('Error', error)
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
}
