import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar';
import { Home } from './components/Home/Home';
import About from './components/About/About';
import { Projects } from './components/Projects/Projects';
import { Achievements } from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import StarryBackground from './components/bg/newbg';
import { Education } from './components/Education/Education';
import Skills from './components/Skills/Skills';

const App = () => {
  return (
    <>
      <StarryBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </>
  );
};

export default App;
