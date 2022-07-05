import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import EducationSkills from './components/EducationSkills';
import Experience from './components/Experience';
import FrontIntro from './components/FrontIntro';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <FrontIntro />    
      <AboutMe />
      <Experience />
      <EducationSkills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
