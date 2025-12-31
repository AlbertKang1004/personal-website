import React from 'react';
import { ExternalLink } from 'lucide-react'; // Swapped Chevron for an external link icon
import githubIcon from "../../assets/img/github-icon.png";

type ProjectCardProps = {
  id: string;
  title: string;
  githubLink: string;
  image?: string;
  description: string;
};

export default function ProjectCard({ id, title, githubLink, image, description }: ProjectCardProps): React.ReactElement {
  return (
    /* h-full ensures all cards in the slider have the same height if the parent is a flex container */
    <div className="w-full h-full bg-neutral-900 text-neutral-200 rounded-lg border border-neutral-800 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
      
      {/* 1. Project Image Container */}
      {image && (
        <div className="w-full h-48 overflow-hidden border-b border-neutral-800">
          <img 
            src={image} 
            alt={`${title} preview`} 
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}

      {/* 2. Content Area */}
      <div className="p-5 flex flex-col grow">
        {/* Title */}
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-title font-bold tracking-tight text-white">
            {title}
          </h3>
        </div>

        {/* Description - flex-grow ensures the button stays at the bottom */}
        <p className="text-neutral-400 text-sm leading-relaxed grow">
          {description}
        </p>

        {/* 3. Action Area */}
        <div className="mt-6 pt-4 border-t border-neutral-800/50">
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-md text-sm font-medium transition-all active:scale-95 w-full justify-center"
          >
            <img 
              src={githubIcon} 
              alt="GitHub" 
              className="w-5 h-5 brightness-200" 
            />
            <span>View Source</span>
            <ExternalLink size={14} className="opacity-50" />
          </a>
        </div>
      </div>
    </div>
  );
}