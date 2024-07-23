import './App.css';
import SkillsTools from './Components/Toolskills/Skills';
import About from './Components/about/about';
import Hero from './Components/hero/hero';
import PortNavBar from './Components/navBar.js';
import Projects from './Components/POProjects/Projects.jsx';
import { Contact }from './Components/Contact/contact.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <div className="App" >
      

      
          
          <Router>
                <PortNavBar />

<Routes>
                {/* <main> */}
                <Route path='/' element={<Hero/> }/>
                <Route path='/about' element={<About/> }/>
                <Route path='/skills-tools' element={<SkillsTools/>}/>
                <Route path='/projects' element={<Projects/>}/>
                <Route path='/contact' element={<Contact/>}/>
                {/* </main> */}
                </Routes>
          </Router>
     

    </div>
  );
}

export default App;
