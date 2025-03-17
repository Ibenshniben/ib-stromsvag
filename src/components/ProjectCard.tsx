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
      <div className="relative h-48 w-full">
        <Image 
          src={image} 
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        <Link 
          href={link} 
          target="_blank"
          className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2 w-full"
        >
          Se prosjekt
          <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;