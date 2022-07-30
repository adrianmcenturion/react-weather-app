import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode('purple.200', 'black')(props),
        color: mode('black', 'white')(props),
      },
    }),
  },
})

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
