import { Flex, Text, Spacer, colorMode, useColorMode, IconButton, Heading } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Header = () => {

    const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex align={'center'} bgColor='blue.400' borderRadius={6} p={4}>
        <Heading fontSize={"2xl"} fontWeight="bold">React Weather App</Heading>
        <Spacer />
        <Flex>
                <IconButton
                    as={'a'}
                    href={'https://www.linkedin.com/in/adrian-centurion/'}
                    target="_blank" rel="noopener noreferrer"
                    aria-label="linkedin"
                    variant="ghost"
                    size="md"
                    // isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsLinkedin size="28px" />}
                />
                <IconButton 
                    as={'a'}
                    href={'https://github.com/adrianmcenturion'}
                    target="_blank" rel="noopener noreferrer"
                    aria-label="github"
                    variant="ghost"
                    size="md"
                    // isRound={true}
                    _hover={{ bg: '#0D74FF' }}
                    icon={<BsGithub size="28px" />}
                />
            <IconButton onClick={toggleColorMode}
                    variant="ghost"
                    size="md"
                    // isRound={true}
                    _hover={{ bg: '#0D74FF' }}>
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </IconButton>
        </Flex>

    </Flex>
  )
}

export default Header