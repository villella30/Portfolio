import './App.css';
import React, { useEffect } from 'react';
import particlesConfig from "./animations/particlesConfig";
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Me from './components/Me';
import 'particles.js'; // Asegúrate de importar particles.js


function App() {
  useEffect(() => {
    window.particlesJS('particles-js', particlesConfig); // Inicializa particles.js
  }, []);

  return (
    <div className="App">
      <div class="particles-wrapper">
        <div id="particles-js"></div>
      </div>

      {/* Resto de la app */}
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Me />
    </div>
  );
}

export default App;
