import { Flex, Text, Spacer, Box, Image, SimpleGrid } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'

const MainCard = ({data, isLoading}) => {

    const [isMobile] = useMediaQuery('(max-width: 786px)')

  return (
    <Box bg={'rgba(255,255,255,0.06)'} borderRadius={6} border={'1px solid'} borderColor={'rgba(255,255,255,0.1)'} p={4} display={isLoading ? 'none' : 'block'} backdropBlur={'(20px)'}>
        <Flex>
            <Text fontSize={"2xl"}>Current Weather</Text>
            <Spacer />
        </Flex>
        <Flex align={'center'} justifyContent={'space-around'} flexDirection={isMobile ? 'column' : 'row'}>
            <Flex flexDirection={'column'} align="center" >
                {data.city ? <Text>{`${data.city}, ${data.country}`}</Text> : <Text>{`${data.state}, ${data.country}`}</Text>}
                <Image boxSize={'120px'} src={`/${data.icon}.svg`} ></Image>
                <Text fontSize={"2xl"}>{data.temp}°</Text>
                <Text textTransform={'capitalize'}>{data.description}</Text>
            </Flex>
            <Flex flexDirection={'column'} gap={4} mt={isMobile ? '6' : '0'} justifyContent={'space-around'}>
                <Flex align={'center'} gap={2} flexDirection={'column'} >
                    <Text>Feels Like {data.feelsLike}°</Text>
                </Flex>
                <SimpleGrid columns={2} spacing={4}>
                    <Flex alignItems={'center'}>
                        <Flex align="center">
                            <Image boxSize={'30px'} src="/caret-up-solid.svg"></Image>
                            <Text>{data.max}°</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Flex align="center">
                            <Image boxSize={'30px'} src="/caret-down-solid.svg"></Image>
                            <Text>{data.min}°</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Flex align={'center'}>
                                <Image boxSize={'30px'} src="/droplet-solid.svg"></Image>
                                <Text>Humidity</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Text>{data.humidity}%</Text>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Flex align="center">
                            <Image boxSize={'30px'} src="/wind-solid.svg"></Image>
                            <Text>Wind</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Text>{data.wind} km/h</Text>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Flex align={'center'}>
                                <Image boxSize={'30px'} src="/barometer.svg"></Image>
                                <Text>Pressure</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems={'center'}>
                        <Text>{data.pressure} hPa</Text>
                    </Flex>
                </SimpleGrid>
            </Flex>
        </Flex>
    </Box>
  )
}

export default MainCard