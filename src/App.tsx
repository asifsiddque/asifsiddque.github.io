import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ResearchProjects from './components/ResearchProjects';
import Publications from './components/Publications';
import Coursework from './components/Coursework';
import Awards from './components/Awards';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <ResearchProjects />
        <Publications />
        <Coursework />
        <Awards />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
