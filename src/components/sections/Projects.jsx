import ProjectCard from "../ui/ProjectCard";

const projectData = [
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

export default function Projects() {
  return (
    <div
      id="projects-container"
      className="grid grid-cols-2 grid-rows-2 gap-20 p-20 items-center justify-center h-screen scroll-mt-16"
    >
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          id={project.id}
          title={project.title}
          githubLink={project.link}
          image={project.image}
          description={project.desc}
        />
      ))}
    </div>
  );
}
