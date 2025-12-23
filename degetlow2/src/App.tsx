
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import BlogSection from './components/BlogSection';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'methodology', 'blog', 'team'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-red-500 selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="methodology" className="py-24 bg-grid border-b border-gray-900">
          <Methodology />
        </section>

        <section id="blog" className="py-24 bg-gray-900/50">
          <BlogSection />
        </section>

        <section id="team" className="py-24 bg-gray-950">
          <Team />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
