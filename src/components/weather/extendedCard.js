import { Flex, Text, Box, Image, Grid, GridItem } from "@chakra-ui/react"
import { useMediaQuery } from '@chakra-ui/react'
import getDate from "../../services/getDate"

const ExtendedCard =  ({data, loading}) => {
    
    const [isMobile] = useMediaQuery('(max-width: 990px)')
    
    return (

    <Box bg={'rgba(255,255,255,0.06)'} borderRadius={6} border={'1px solid'} borderColor={'rgba(255,255,255,0.1)'} p={4}>
            <Text fontSize={"2xl"}>Extended Weather</Text>
        <Flex flexDirection={isMobile ? 'column' : 'row'} mt={4}>
            {data.map((d, i) => {
                return(
                    <Flex flexDirection={'column'} align="center" key={i} display={isMobile ? 'none' : 'flex'} mx={'auto'}>
                        <Text>{getDate(d.dt)}</Text>
                        <Image boxSize={'100px'} src={`/${d.icon}.svg`}></Image>
                        <Text textTransform={'capitalize'}>{d.description}</Text>
                        <Flex>
                            <Image boxSize={'30px'} src="/caret-up-solid.svg"></Image>
                            <Text>{d.max}</Text>
                            <Image boxSize={'30px'} src="/caret-down-solid.svg"></Image>
                            <Text>{d.min}</Text>
                        </Flex>
                    </Flex>)
                                })
            }
            {data.map((d, i) => {                     
                return(
                    <Grid display={isMobile ? 'grid' : 'none'} templateColumns='25% 15% 30% 30%' key={i}>
                        <GridItem w='100%' h='10' justifyContent={'center'} ><Text fontSize={'smaller'}>{getDate(d.dt)}</Text></GridItem>
                        <GridItem w='100%' h='10' align="center" justifyContent={'center'} ><Image boxSize={'30px'} src={`/${d.icon}.svg`}></Image></GridItem>
                        <GridItem w='100%' h='10' align="center" justifyContent={'center'} ><Text fontSize={'small'} textTransform={'capitalize'}>{d.description}</Text></GridItem>
                        <GridItem w='100%' h='10' align="center" justifyContent={'center'} >
                            <Flex align="center" justifyContent={'center'}>
                                <Image boxSize={'30px'} src="/caret-up-solid.svg"></Image>
                                <Text fontSize={'smaller'}>{d.max}</Text>
                                <Image boxSize={'30px'} src="/caret-down-solid.svg"></Image>
                                <Text fontSize={'smaller'}>{d.min}</Text>
                            </Flex>
                        </GridItem>
                    </Grid>)
                })
            }
        </Flex>
    </Box>
  )
}

export default ExtendedCard