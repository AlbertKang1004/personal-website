import React from 'react';

export default function Header() {
  return (
    <header className="flex z-10 fixed top-0 left-0 w-full h-16 justify-center items-center border-b border-gray-600 bg-gray-900">
      <nav className="text-white">
        <a href="#main-page" className="mx-4">Main</a>
        <a href="#about-me" className="mx-4">About</a>
        <a href="#projects-container" className="mx-4">Projects</a>
        <a href="#contact" className="mx-4">Contact</a>
      </nav>
    </header>
  );
}
