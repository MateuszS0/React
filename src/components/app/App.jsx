import './App.css'
import Header from '../header/Header';
import About from '../about/About';
import Contact from '../contact/Contact';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
//overflow-x on skills for mobile
//aspect-ratio 16/9 on images
//learn scrolling from component to component
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
