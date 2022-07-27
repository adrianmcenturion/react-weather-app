import { Box } from "@chakra-ui/react";
import ExtendedCard from "./extendedCard"
import MainCard from "./mainCard"
import { useSelector } from "react-redux";

const WeatherComponent = () => {

    const weatherState = useSelector(store => store.weather)
    const isLoading = useSelector(store => store.app.isLoading)
    const data = useSelector(store => store.app.data)

  return (
    <Box display={'flex'} h={'100%'} flexDirection="column" gap={2} pb={4}>
        {!data ? null : <MainCard data={weatherState} loading={isLoading}/>}
        {!data ? null : <ExtendedCard data={weatherState.daily} loading={isLoading}/>}
    </Box>
  )
}

export default WeatherComponent