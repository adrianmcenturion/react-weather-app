
  export const weatherDataAdapter = (weather) => ({
    city: weather.geoData.results[0].components.city,
    country: weather.geoData.results[0].components.country,
    state: weather.geoData.results[0].components.state,
    lat: weather.geoData.results[0].geometry.lat,
    lon: weather.geoData.results[0].geometry.lng,
    temp: (weather.weatherData.current.temp).toFixed(0),
    description: weather.weatherData.current.weather[0].description,
    feelsLike: (weather.weatherData.current.feels_like).toFixed(0),
    min: (weather.weatherData.daily[0].temp.min).toFixed(0),
    max: (weather.weatherData.daily[0].temp.min).toFixed(0),
    humidity: weather.weatherData.current.humidity,
    pressure: weather.weatherData.current.pressure,
    wind: weather.weatherData.current.wind_speed,
    icon: weather.weatherData.current.weather[0].icon,
    daily: [ 
      {
        dt: weather.weatherData.daily[1].dt,
        description: weather.weatherData.daily[1].weather[0].description,
        min: (weather.weatherData.daily[1].temp.min).toFixed(0),
        max: weather.weatherData.daily[1].temp.max.toFixed(0),
        icon: weather.weatherData.daily[1].weather[0].icon,
      },
      {
        dt: weather.weatherData.daily[2].dt,
        description: weather.weatherData.daily[2].weather[0].description,
        min: weather.weatherData.daily[2].temp.min.toFixed(0),
        max: weather.weatherData.daily[2].temp.max.toFixed(0),
        icon: weather.weatherData.daily[2].weather[0].icon,
      },
      {
        dt: weather.weatherData.daily[3].dt,
        description: weather.weatherData.daily[3].weather[0].description,
        min: weather.weatherData.daily[3].temp.min.toFixed(0),
        max: weather.weatherData.daily[3].temp.max.toFixed(0),
        icon: weather.weatherData.daily[3].weather[0].icon,
      },
      {
        dt: weather.weatherData.daily[4].dt,
        description: weather.weatherData.daily[4].weather[0].description,
        min: weather.weatherData.daily[4].temp.min.toFixed(0),
        max: weather.weatherData.daily[4].temp.max.toFixed(0),
        icon: weather.weatherData.daily[4].weather[0].icon,
      },
      {
        dt: weather.weatherData.daily[5].dt,
        description: weather.weatherData.daily[5].weather[0].description,
        min: weather.weatherData.daily[5].temp.min.toFixed(0),
        max: weather.weatherData.daily[5].temp.max.toFixed(0),
        icon: weather.weatherData.daily[5].weather[0].icon,
      },
      {
        dt: weather.weatherData.daily[6].dt,
        description: weather.weatherData.daily[6].weather[0].description,
        min: weather.weatherData.daily[6].temp.min.toFixed(0),
        max: weather.weatherData.daily[6].temp.max.toFixed(0),
        icon: weather.weatherData.daily[6].weather[0].icon,
      },
      {
        dt: weather.weatherData.daily[7].dt,
        description: weather.weatherData.daily[7].weather[0].description,
        min: weather.weatherData.daily[7].temp.min.toFixed(0),
        max: weather.weatherData.daily[7].temp.max.toFixed(0),
        icon: weather.weatherData.daily[7].weather[0].icon,
      },
  ]

  })

  