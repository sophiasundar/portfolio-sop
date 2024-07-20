import './App.css';
import SkillsTools from './Components/Toolskills/Skills';
import About from './Components/about/about';
import Hero from './Components/hero/hero';
import PortNavBar from './Components/navBar.js';
import Projects from './Components/POProjects/Projects.jsx';
import Contact from './Components/Contact/contact.jsx';



function App() {
  return (
    <div className="App">
      

          
                <PortNavBar/>

                <Hero/>
                <About/>
                <SkillsTools/>
                <Projects/>
                <Contact/>

    </div>
  );
}

export default App;
