import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/NavBar/Navbar';
import { Home } from './components/Home/Home';
import About from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Achievements } from './components/Achievements/Achievements';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
    </ChakraProvider>
  );
}

export default App;
