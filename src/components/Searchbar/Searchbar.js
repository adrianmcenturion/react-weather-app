import { Flex, Input, IconButton, useColorModeValue } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { BiCurrentLocation } from "react-icons/bi";

const Searchbar = ({handleClick, handleSubmit}) => {

  return (

    <Flex align={'center'} bg={'rgba(255,255,255,0.06)'} borderRadius={6} border={'1px solid'} borderColor={'rgba(255,255,255,0.1)'} p={2}>
      <IconButton
      onClick={handleClick}
        aria-label="github"
        variant="ghost"
        size="lg"
        _hover={{ bg: '#0D74FF' }}
        icon={<BiCurrentLocation size="28px" />}>
      </IconButton>
      <Flex as={'form'} w='100%' align={'center'} onSubmit={handleSubmit}>
        <Input borderColor={useColorModeValue('black.300')} size='sm' name="search" placeholder="Search cities"/>
        <IconButton
          type="submit"
          aria-label="github"
          variant="ghost"
          size="lg"
          _hover={{ bg: '#0D74FF' }}
          icon={<Search2Icon size="28px" />}>
        </IconButton>
      </Flex>
    </Flex>
    
  )
}

export default Searchbar