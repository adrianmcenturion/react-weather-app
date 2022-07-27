import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import store from "./redux/store";
import Home from "./pages/Home/Home";

const App = () => {

  return (
    <Provider store={store}>
      <Box bg={useColorModeValue('blue.200', 'blue.900')} w='100%' h='100vh'>
        <Container maxW={{lg:'container.lg', md: 'container.md', sm: 'container.sm'}} >
          <Home />
        </Container>
      </Box>
    </Provider>
  );
}

export default App;
