import { Flex, Input, IconButton, useColorModeValue, FormErrorMessage, useToast, useColorMode } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { toastSearch } from "../utils/toasts";
import UbicationButton from "./ubicationButton";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch"
import { setData, setIsLoading } from "../../redux/states/app";
import { modifyWeather } from "../../redux/states/weather";
import { weatherDataAdapter } from "../../adapters/weather.adapter";

const Searchbar = () => {

  const { colorMode } = useColorMode();

  const toast = useToast()

  const dispatch = useDispatch()
  const fetch = useFetch()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target.search.value
    if(data === '' || data.length < 4) {
      toast(toastSearch)
      return
    }
    dispatch(setIsLoading(true))
    dispatch(modifyWeather(weatherDataAdapter(await fetch.requestByCity(data))))
    dispatch(setIsLoading(false))
    dispatch(setData(true))
  }
  

  return (

    <Flex align={'center'} bg={'rgba(255,255,255,0.06)'} borderRadius={6} border={'1px solid'} borderColor={'rgba(255,255,255,0.1)'} p={2}>
      <UbicationButton />
      <Flex as={'form'} w='100%' align={'center'} onSubmit={handleSubmit}>
        <Input borderColor={useColorModeValue('black.300')} size='sm' name="search" placeholder="Search cities" _hover={{borderColor: useColorModeValue('black.400')}}/>
        <FormErrorMessage>Write a city to search.</FormErrorMessage>
        <IconButton
          type="submit"
          aria-label="github"
          variant="ghost"
          size="lg"
          _hover={colorMode === 'light' ? { bg: 'purple.300' } : { bg: 'blackAlpha.700' }}
          icon={<Search2Icon size="28px" />}>
        </IconButton>
      </Flex>
    </Flex>
    
  )
}

export default Searchbar