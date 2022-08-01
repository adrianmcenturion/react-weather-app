import { useState } from 'react';
import { weatherUrl, geoApi } from "../config/api";
import { axiosWeatherInstance, axiosGeoDataInstance, axiosReverseGeoDataInstance } from '../services/apiCalls';

const useFetch = () => {

  const [data, setData] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  let ubication = {}

  let result = {
    geoData: null,
    weatherData: null,
  }

  const requestByUbication = async (latLon) => {

    setIsLoading(true)
    try {
      const response = await Promise.all([axiosGeoDataInstance(geoApi, latLon).get(), axiosWeatherInstance(weatherUrl, latLon).get()])
      result = {
        geoData: response[0].data,
        weatherData: response[1].data
        }
    } catch (error) {
      setError(true)
      console.error(error);
      setIsLoading(false)
    }
    setIsLoading(false)
    setData(true)
    return result
  }

  const requestByCity = async (cityName) => {

    setIsLoading(true)

    try {
      
      const responseGeo = await axiosReverseGeoDataInstance(geoApi, cityName).get()
    
        ubication = {
          lat: responseGeo.data.results[0].geometry.lat,
          lon: responseGeo.data.results[0].geometry.lng,
        }

        result = {...result, geoData: responseGeo.data}
        const responseWeather = await Promise.all([axiosWeatherInstance(weatherUrl, ubication).get()])
        result = {...result, weatherData: responseWeather[0].data}

    } catch (error) {

      setError(true)
      console.log(error)
      setIsLoading(false)
      throw new Error(error)
      
    }

    setIsLoading(false)
    setData(true)
    return result

  }

  return {requestByUbication, requestByCity, isLoading, error, data, ubication}
}

export default useFetch