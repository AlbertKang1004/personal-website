import React from "react";
import Header from "./components/sections/Header.js";
import MainPage from "./components/sections/MainPage.js";
import Career from "./components/sections/Career.js";
import Footer from "./components/sections/Footer.js";
import Projects from "./components/sections/Projects.js";
import Contacts from "./components/sections/Contacts.js";

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen text-white bg-gray-900">
      <Header />
      <main className="bg-gray-900">
        <MainPage />
        <Career />
        <Projects />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}
