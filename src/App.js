import React from 'react';
import { ChakraProvider, theme, useColorMode } from '@chakra-ui/react';
import Navbar from './components/NavBar/Navbar';
import { Home } from './components/Home/Home';
import About from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Achievements } from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import ParticleBackgroundDark from './components/bg/bgDark';
import ParticleBackgroundLight from './components/bg/bgLight';
import { MyParticleBackground } from './components/bg/bgSwitch';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ChakraProvider theme={theme}>
      <MyParticleBackground />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
