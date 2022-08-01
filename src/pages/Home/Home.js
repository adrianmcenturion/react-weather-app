import { Box } from "@chakra-ui/react";
import Header from "../../components/Header/Header";
import Searchbar from "../../components/Searchbar/Searchbar";
import WeatherComponent from "../../components/weather/weather.component";
import { useSelector } from "react-redux";
import Loading from "../../components/utils/loading";

const Home = () => {
  
  const isLoading = useSelector(store => store.app.isLoading)
  
  return (
    <Box display={'flex'} h='100%' flexDirection="column" gap={2} py={4}>
      <Header/>
      <Searchbar />
      {isLoading ? <Loading /> : <WeatherComponent/>}
    </Box>
  )
}

export default Home