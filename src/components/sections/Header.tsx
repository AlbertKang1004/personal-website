import React from "react";
import { useActiveSection } from "../../hooks/useActiveSection.js";

export default function Header(): React.ReactElement {
  const activeSection = useActiveSection([
    "main-page",
    "projects-container",
    "career",
    "contact",
  ]);
  const navLinks = [
    {
      name: "Main",
      id: "main-page",
    },
    {
      name: "Projects",
      id: "projects-container",
    },
    {
      name: "Career",
      id: "career",
    },
    {
      name: "Contact",
      id: "contact",
    },
  ];
  return (
    <header className="fixed top-0 z-100 flex h-16 w-full items-center justify-center bg-black/70 backdrop-blur-md">
      <nav className="flex items-center text-white gap-2 lg:gap-8 font-sans">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`px-4 py-2 rounded-md transition-all duration-300 ${
              activeSection === link.id ? "font-bold text-white" : "font-normal text-neutral-300"
            }`}
          >
            {link.name}
          </a>
        ))}
      </nav>
    </header>
  );
}
