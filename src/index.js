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
