import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  className?: string;
  aspectRatio?: 'square' | 'wide' | 'tall';
  priority?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  tags, 
  link, 
  className = '',
  aspectRatio = 'square',
  priority = false
}) => {
  const aspectRatioClasses = {
    square: 'aspect-square',
    wide: 'aspect-[2/1]',
    tall: 'aspect-[1/2]'
  };

  return (
    <TiltCard className={`h-full ${className}`}>
      <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all h-full flex flex-col">
        <div className={`relative w-full ${aspectRatioClasses[aspectRatio]}`}>
          <Image 
            src={image} 
            alt={title}
            fill
            priority={priority}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 text-white text-sm font-medium"
            >
              View project <ExternalLink size={14} />
            </a>
          </div>
        </div>
        
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
          
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltCard>
  );
};

export default ProjectCard;