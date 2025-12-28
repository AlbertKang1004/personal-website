import React from "react";

export default function Header(): React.ReactElement {
  return (
    <header className="fixed top-0 z-100 flex h-16 w-full items-center justify-center bg-black/70 backdrop-blur-md">
      <nav className="flex items-center text-white gap-8 font-medium">
        <a href="#main-page">
          Main
        </a>
        <a href="#about-me">
          About
        </a>
        <a href="#projects-container">
          Projects
        </a>
        <a href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}
