import './App.css';
import AboutMe from './components/AboutMe';
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
    </>
  );
}

export default App;
