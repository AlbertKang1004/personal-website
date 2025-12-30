import React, { useRef } from "react";
import ProjectCard from "../ui/ProjectCard.js";

type Project = {
  id: string;
  title: string;
  link: string;
  image?: string;
  desc: string;
};

const projectData: Project[] = [
  {
    id: "mazesolver",
    title: "MazeSolver",
    link: "https://github.com/AlbertKang1004/MazeSolver",
    image: "img/mazesolver-screenshot.png",
    desc: "A Python program that uses Depth-First Search to find the best solution for a maze, including mazes with multiple solutions.",
  },
  {
    id: "courseclash",
    title: "CourseClash",
    link: "https://github.com/404Haze/CourseClash",
    image: "img/courseclash-screenshot.png",
    desc: "An interactive educational quiz-based application designed to help students study course material.",
  },
  {
    id: "personal-website",
    title: "Personal Website",
    link: "https://github.com/AlbertKang1004/personal-website",
    image: "img/personal-website-screenshot.png",
    desc: "A portfolio site built with Vite and React to showcase my work.",
  },
  {
    id: "money-laundry",
    title: "Money Laundry",
    link: "https://github.com/YehyunLee/big-data-ai-2026",
    image: "img/money-laundry-screenshot.png",
    desc: "A description of your money management project.",
  },
];

export default function Projects(): React.ReactElement {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const width = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  return (
    <div id="projects-container" className="flex flex-col justify-center bg-black pt-16 h-screen">
      {/* THE SLIDER WINDOW 
          - flex: puts cards in a row
          - overflow-x-auto: enables horizontal swiping
          - snap-x snap-mandatory: forces cards to stop in the center
          - no-scrollbar: (Ensure you have the CSS utility for this)
      */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 no-scrollbar pb-5"
      >
        {projectData.map((project) => (
          /* CARD WRAPPER
             - min-w-[85vw]: ensures the card is large but shows a 'peek' of the next one
             - snap-center: makes the card 'click' into the middle of the screen
          */
          <div
            key={project.id}
            className="min-w-[85vw] md:min-w-100 snap-center"
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              githubLink={project.link}
              image={project.image}
              description={project.desc}
            />
          </div>
        ))}

        {/* Invisible spacer at the end to allow the last card to center correctly */}
        <div className="min-w-[5vw] shrink-0"></div>
      </div>
      <div className="flex justify-center items-center gap-2 mt-4">
        {projectData.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-600"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </div>
  );
}
