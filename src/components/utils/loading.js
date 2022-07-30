import { Center, Spinner } from "@chakra-ui/react"

const Loading = () => {
  return (
        <Center w={'100%'} h={'100%'} mt={20}>
          <Spinner thickness="4px" size={'xl'} backdropBlur='4px'/>
        </Center>

  )
}

export default Loading