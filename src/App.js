import React from 'react';
import { 
  BrowserRouter as Router,  
  Route,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Projects from './contents/Projects';
import Skills from './contents/Skills';
import Contact from './contents/Contact';

function App() {
  return (
     <Router>
            <Navbar></Navbar>
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Route exact path = '/' component= {Home} /> 
            <Route path = '/about' component= {About}/>
            <Route path = '/projects' component = {Projects} />	
            <Route path = '/skills' component = {Skills} />	
            <Route path = '/contact' component = {Contact} />							
     </Router>
  );
}

export default App;
