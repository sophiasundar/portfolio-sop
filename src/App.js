import './App.css';
import SkillsTools from './Components/Toolskills/Skills';
import About from './Components/about/about';
import Hero from './Components/hero/hero';
import ItemCat from './Components/POProjects/itemcatalog.js'

function App() {
  return (
    <div className="App">
      
      <Hero/>
      <About/>
      <SkillsTools/>
      <ItemCat/>
      
    </div>
  );
}

export default App;
