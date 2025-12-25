import React from 'react';
import Header from './components/sections/Header';
import MainPage from './components/sections/MainPage';
import AboutMe from './components/sections/AboutMe';
import Footer from './components/sections/Footer';
import Projects from './components/sections/Projects';
import Contacts from './components/sections/Contacts';

export default function App() {
  return (
    <main>
      <Header />
      <MainPage />
      <AboutMe />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
} 