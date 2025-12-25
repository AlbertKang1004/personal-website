import React from 'react';
import Header from './components/sections/Header.js';
import MainPage from './components/sections/MainPage.js';
import AboutMe from './components/sections/AboutMe.js';
import Footer from './components/sections/Footer.js';
import Projects from './components/sections/Projects.js';
import Contacts from './components/sections/Contacts.js';

export default function App(): React.ReactElement {
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
