import { Flex, Input, IconButton, useColorModeValue, FormErrorMessage, useToast, useColorMode } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { BiCurrentLocation } from "react-icons/bi";
import { toastSearch } from "../utils/toasts";

const Searchbar = ({handleClick, handleDispatchSubmit}) => {

  const { colorMode } = useColorMode();

  const toast = useToast()

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.search.value
    if(data === '' || data.length < 4) {
      toast(toastSearch)
      return
    }
    handleDispatchSubmit(data)
  }
  

  return (

    <Flex align={'center'} bg={'rgba(255,255,255,0.06)'} borderRadius={6} border={'1px solid'} borderColor={'rgba(255,255,255,0.1)'} p={2}>
      <IconButton
      onClick={handleClick}
        aria-label="github"
        variant="ghost"
        size="lg"
        _hover={colorMode === 'light' ? { bg: 'purple.300' } : { bg: 'blackAlpha.700' }}
        icon={<BiCurrentLocation size="28px" />}>
      </IconButton>
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