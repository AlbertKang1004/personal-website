import React from "react";
import Chip from "../ui/Chip.js";

type Skill = {
  icon: string;
  text: string;
};

const SkillData: Skill[] = [
  { icon: "html5", text: "HTML" },
  { icon: "css3", text: "CSS" },
  { icon: "javascript", text: "JavaScript" },
  { icon: "react", text: "React" },
  { icon: "c", text: "C" },
  { icon: "python", text: "Python" },
  { icon: "java", text: "Java" },
  { icon: "tailwindcss", text: "Tailwind" },
  { icon: "numpy", text: "NumPy" },
  { icon: "pandas", text: "Pandas" },
  { icon: "git", text: "Git" },
  { icon: "github", text: "GitHub" },
  { icon: "r", text: "R" },
  { icon: "typescript", text: "TypeScript" },
  { icon: "vscode", text: "VS Code" },
  { icon: "visualstudio", text: "Visual Studio" },
];

export default function MainPage(): React.ReactElement {
  return (
    <div
      id="main-page"
      className="px-5 bg-linear-to-tl from-[#1a0b2e] to-black grid grid-rows-[1fr_1fr_2fr] justify-center h-screen pt-16"
    >
      {/* Title + Description of Main Page */}
      <div className="self-end font-title text-7xl font-extrabold">
        ALBERT
        <br />
        KANG
      </div>
      <div className="font-desc text-xl font-light text-gray-400 pt-4 uppercase">
        Software Developer | Computer Science Specialist in University of
        Toronto
      </div>
      <div className="self-center flex flex-wrap gap-2 h-fit justify-center w-full">
        {SkillData.map((skill) => (
          <Chip key={skill.icon} icon={skill.icon} text={skill.text} />
        ))}
      </div>
    </div>
  );
}
