import { ChakraProvider, theme } from '@chakra-ui/react';
import Navbar from './components/NavBar/Navbar';
import { Home } from './components/Home/Home';
import About from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Achievements } from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import { MyParticleBackground } from './components/bg/bgSwitch';
import { Education } from './components/Education/Education';
import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import reportWebVitals from './External/reportWebVitals';
import * as serviceWorker from './External/serviceWorker';
import './index.css';
import Experience from './components/Experience/Experience';
import { ModeSwitcherComponent } from './components/modeSwitcher/ModeSwitcherComponent';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <MyParticleBackground />
      <ModeSwitcherComponent />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
    </ChakraProvider>
  </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
