import axios from 'axios'

// Use your own tokens!
const mapBoxToken = process.env.REACT_APP_MAPBOX_TOKEN
const proxy = 'https://cors-anywhere.herokuapp.com/'
const darkSkyToken = process.env.REACT_APP_DARKSKY_TOKEN

export const fetchWeather =  location => {
  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    location
  )}.json?limit=1&access_token=${mapBoxToken}`
  const darkSkiesUrl = `https://api.darksky.net/forecast/${darkSkyToken}/`

  return dispatch => {
    // Get coordinates and place name
    axios
    .get(mapBoxUrl)
    .then(async geocodeData => {
      const long = geocodeData.data.features[0].center[0]
      const lat = geocodeData.data.features[0].center[1]
      const place = geocodeData.data.features[0].place_name

      // Use coordinates to get weather data.
      await axios
        .get(`${proxy}${darkSkiesUrl}${lat},${long}?exclude=flags`)
        .then(request => {
          const weatherData = request.data
          dispatch(displayedPlace(place))
          dispatch(fetchWeatherSuccess(weatherData))
        })
        .catch(error =>
          console.log('Error making darksky call: ', error)
        )
    })
    .catch(error => console.log('Error making geocode call: ', error))
  }

}

const fetchWeatherSuccess = weatherData => ({
  type: 'FETCH_WEATHER',
  weatherData
})

const displayedPlace = place => ({
  type: 'DISPLAYED_PLACE',
  place
})

export const locationTextInput = (location = '') => ({
  type: 'LOCATION_TEXT_INPUT',
  location
})

export const logSearchHistory = location => ({
  type: 'LOG_LAST_CITY',
  location
})