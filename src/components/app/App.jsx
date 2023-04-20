import './App.css'
import Header from '../header/Header';
import About from '../about/About';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
// newly added projects are work in progress
//webflix at this time cant show the code but here's an image
//overflow-x on skills for mobile
//new component, projects im working on right now
//aspect-ratio 16/9 on images
function App() {
  return (
    <>
        <Header />
        <About />
        <Skills />
        <Projects/>
        <Contact />
    </>
  );
}

export default App;
