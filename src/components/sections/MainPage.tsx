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
  { icon: "vite", text: "Vite" },
  { icon: "numpy", text: "NumPy" },
  { icon: "pandas", text: "Pandas" },
  { icon: "git", text: "Git" },
  { icon: "github", text: "GitHub" },
  { icon: "r", text: "R" },
  { icon: "typescript", text: "TypeScript" }
];

export default function MainPage(): React.ReactElement {
  return (
    <div
      id="main-page"
      className="grid grid-rows-[1fr_1fr_2fr] min-h-screen lg:min-h-[70vh] justify-center
      px-5 pt-16 bg-linear-to-tr from-black to-[#270241]"
    >
      {/* Title + Description of Main Page */}
      <div className="self-end font-title text-7xl font-extrabold">
        ALBERT
        <br />
        KANG
      </div>
      <div className="font-desc text-xl font-light text-gray-400 pt-4 uppercase">
        Software Developer |<br />Computer Science Specialist at the University of
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
