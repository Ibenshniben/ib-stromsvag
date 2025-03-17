import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/10 h-full flex flex-col">
      <div className="relative h-40 sm:h-48 w-full">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow text-sm sm:text-base">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg inline-flex items-center gap-2 transition-all transform hover:translate-x-1 touch-manipulation text-sm sm:text-base"
        >
          Se prosjektet <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;