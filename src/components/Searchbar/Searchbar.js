import { Flex, Input, IconButton, useColorModeValue } from "@chakra-ui/react"
import { Search2Icon } from "@chakra-ui/icons"
import { BiCurrentLocation } from "react-icons/bi";

const Searchbar = ({handleClick, handleSubmit}) => {

  const handleSubmit2 = (e) => {
    e.preventDefault();
    console.log(e.target.search.value)
  }

  return (

    <Flex align={'center'} bgColor='blue.400' borderRadius={6} p={2}>
      <IconButton
      onClick={handleClick}
        aria-label="github"
        variant="ghost"
        size="lg"
        _hover={{ bg: '#0D74FF' }}
        icon={<BiCurrentLocation size="28px" />}>
      </IconButton>
      <Flex as={'form'} w='100%' align={'center'} onSubmit={handleSubmit}>
        <Input borderColor={useColorModeValue()} size='sm' name="search" />
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