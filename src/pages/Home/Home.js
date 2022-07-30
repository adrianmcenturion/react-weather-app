import { Box } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import WeatherComponent from "../../components/weather/weather.component";

import { useDispatch, useSelector } from "react-redux";
import { modifyWeather } from "../../redux/states/weather";
import { weatherDataAdapter } from "../../adapters/weather.adapter";

import { setData, setIsLoading } from "../../redux/states/app";

import useGeoLocation from '../../hooks/useGeoLocation'
import useFetch from "../../hooks/useFetch"
import Loading from "../../components/utils/loading";

const Home = () => {
  
  const dispatch = useDispatch()
  const geo = useGeoLocation()
  const fetch = useFetch()

  const isLoading = useSelector(store => store.app.isLoading)

  const handleGeoLocation = async () => {
    const latLon = geo.getGeoLocation()
    dispatch(setIsLoading(true))
    dispatch(modifyWeather(weatherDataAdapter(await fetch.requestByUbication(latLon))))
    dispatch(setIsLoading(false))
    dispatch(setData(true))

  }
  
  const functionSubmit = async (data) => {
    dispatch(setIsLoading(true))
    dispatch(modifyWeather(weatherDataAdapter(await fetch.requestByCity(data))))
    dispatch(setIsLoading(false))
    dispatch(setData(true))

  }


  return (
    <Box display={'flex'} h='100%' flexDirection="column" gap={2} py={4}>
      <Header/>
      <Searchbar handleDispatchSubmit={functionSubmit} handleClick={handleGeoLocation}/>
      {isLoading ? <Loading /> : <WeatherComponent/>}
    </Box>
  )
}

export default Home