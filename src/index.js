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
  styles: {
    global: {
      body: {
        color: 'white', // Ensure all text is white
      },
      'button, .chakra-button': {
        color: 'white', // Make sure buttons have white text
        backgroundColor: '#2d3748', // Customize background for buttons if needed
        _hover: {
          backgroundColor: '#4a5568', // Button hover color in dark mode
        },
      },
      'a, .chakra-link': {
        color: 'white', // Ensure links are white
        _hover: {
          color: '#a0aec0', // Slight hover color adjustment for links
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
