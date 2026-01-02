import React, { useRef } from "react";
import ProjectCard from "../ui/ProjectCard.js";
import MazeSolverImg from "../../assets/img/mazesolver-screenshot.png";
import CourseClashImg from "../../assets/img/courseclash-screenshot.png";
import PersonalWebsiteImg from "../../assets/img/personalwebsite-screenshot.png";

type Project = {
  id: string;
  title: string;
  link: string;
  image?: string;
  desc: string;
  inProgress?: boolean;
};

const projectData: Project[] = [
  {
    id: "courseclash",
    title: "CourseClash",
    link: "https://github.com/404Haze/CourseClash",
    image: CourseClashImg,
    desc: "An interactive educational quiz-based application designed to help students study course material.",
  },
  {
    id: "personal-website",
    title: "Personal Website",
    link: "https://github.com/AlbertKang1004/personal-website",
    image: PersonalWebsiteImg,
    desc: "A portfolio site built with React, TypeScript, and Tailwind CSS to showcase my projects and skills.",
    inProgress: true,
  },
  {
    id: "mazesolver",
    title: "MazeSolver",
    link: "https://github.com/AlbertKang1004/MazeSolver",
    image: MazeSolverImg,
    desc: "A Python program that uses Depth-First Search to find the best solution for a maze, including mazes with multiple solutions.",
  },
  {
    id: "money-laundry",
    title: "Money Laundry",
    link: "https://github.com/YehyunLee/big-data-ai-2026",
    image: "img/money-laundry-screenshot.png",
    desc: "In Progress: A machine learning project to detect money laundering activities using transaction data.",
    inProgress: true,
  },
];

export default function Projects(): React.ReactElement {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    // We only care about this on mobile where overflow is auto
    if (scrollRef.current && window.innerWidth < 1024) {
      const container = scrollRef.current;
      const width = container.clientWidth;
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  return (
    <div
      id="projects-container"
      className="flex flex-col justify-center bg-black pt-16 lg:pb-16 lg:px-16 h-screen lg:h-auto"
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className={`
          /* MOBILE: Flex row with scroll */
          flex overflow-x-auto snap-x snap-mandatory gap-5 px-6 no-scrollbar pb-5
          
          /* DESKTOP (lg): Grid with 2 columns */
          lg:grid lg:grid-cols-2 lg:overflow-visible lg:snap-none lg:gap-20 lg:max-w-6xl lg:mx-auto
        `}
      >
        {projectData.map((project) => (
          <div
            key={project.id}
            className={`
              /* MOBILE: Large width for swiping */
              min-w-[85vw] snap-always snap-center
              
              /* DESKTOP (lg): Normal width for grid cells */
              lg:min-w-0 lg:w-full
            `}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              githubLink={project.link}
              image={project.image}
              description={project.desc}
              inProgress={project.inProgress}
            />
          </div>
        ))}

        {/* Hide this spacer on desktop grid */}
        <div className="min-w-[5vw] shrink-0 lg:hidden"></div>
      </div>

      {/* DOTS INDICATOR: Hidden on lg screens */}
      <div className="flex justify-center items-center gap-2 mt-4 lg:hidden">
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