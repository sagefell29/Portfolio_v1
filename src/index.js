import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app';

// Create the container and root for rendering
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Extend theme to include dark mode
const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  fonts: {
    heading: `'Inter', Didot`,
    body: `'Inter', Didot`,
  },
  styles: {
    global: {
      body: {
        color: 'white',
      },
      'button, .chakra-button': {
        color: 'white',
        backgroundColor: '#2d3748',
        _hover: {
          backgroundColor: '#4a5568',
        },
      },
      'a, .chakra-link': {
        color: 'white', 
        _hover: {
          color: '#a0aec0', 
        },
      },
    },
  },
});

root.render(
  <StrictMode>
    {/* Set ColorModeScript for Chakra */}
    <ChakraProvider theme={theme}>
      <ColorModeScript />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
