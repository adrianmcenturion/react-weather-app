
export const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`

export const geoApi = `https://api.opencagedata.com/geocode/v1/json?key=${process.env.REACT_APP_GEO_API_KEY}`
