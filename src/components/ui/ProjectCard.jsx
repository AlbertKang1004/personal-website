import githubIcon from "../../assets/img/github-icon.png";

function ProjectCard({ title, githubLink, image, description }) {
  return (
    <div
      id="project"
      className="flex flex-col items-start justify-start p-6 bg-linear-to-br from-gray-800 via-gray-900 to-black rounded-2xl w-full h-full hover:shadow-2xl shadow-black transition-shadow duration-300 border border-gray-700"
    >
      <div
        id="project-title-section"
        className="flex w-full items-center justify-between gap-4"
      >
        <div id="project-title" className="text-white text-2xl font-semibold">
          {title}
        </div>
        <div id="project-title-link">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <img
              src={githubIcon}
              alt="github icon"
              className="w-6 h-6 opacity-80 hover:opacity-100"
            />
          </a>
        </div>
      </div>
      <div
        id="project-image"
        className="w-full h-40 mt-4 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center text-gray-500 bg-gray-800"
      >
        {image ? <img src={image} alt="Project Screenshot" className="max-h-full max-w-full" /> : null}
      </div>
      <div
        id="project-content"
        className="mt-6 text-gray-300 leading-relaxed text-sm min-h-20"
      >
        {description}
      </div>
    </div>
  );
}

export default ProjectCard;
