import { Flex, Spacer, useColorMode, IconButton, Heading } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align={'center'} bg={'rgba(255,255,255,0.06)'} borderRadius={6} border={'1px solid'} borderColor={'rgba(255,255,255,0.1)'} p={4}>
        <Heading fontSize={{md: "2xl", base: 'xl'}} fontWeight="bold">React Weather App</Heading>
        <Spacer />
        <Flex>
                <IconButton
                    as={'a'}
                    href={'https://www.linkedin.com/in/adrian-centurion/'}
                    target="_blank" rel="noopener noreferrer"
                    aria-label="linkedin"
                    variant="ghost"
                    size="md"
                    _hover={colorMode === 'light' ? { bg: 'purple.300' } : { bg: 'blackAlpha.700' }}
                    icon={<BsLinkedin size="28px" />}
                />
                <IconButton 
                    as={'a'}
                    href={'https://github.com/adrianmcenturion'}
                    target="_blank" rel="noopener noreferrer"
                    aria-label="github"
                    variant="ghost"
                    size="md"
                    _hover={colorMode === 'light' ? { bg: 'purple.300' } : { bg: 'blackAlpha.700' }}
                    icon={<BsGithub size="28px" />}
                />
            <IconButton onClick={toggleColorMode}
                    variant="ghost"
                    size="md"
                    _hover={colorMode === 'light' ? { bg: 'purple.300' } : { bg: 'blackAlpha.700' }}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
        </Flex>

    </Flex>
  )
}

export default Header