'use client';
import { useEffect, useRef } from 'react';

const SkillBars = ({ skills }) => {
  const skillsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    skillsRef.current.forEach((skillBar) => {
      if (skillBar) {
        observer.observe(skillBar);
      }
    });

    return () => {
      skillsRef.current.forEach((skillBar) => {
        if (skillBar) {
          observer.unobserve(skillBar);
        }
      });
    };
  }, []);

  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="skill-bar-container">
          <div
            ref={(el) => (skillsRef.current[index] = el)}
            className="skill-bar"
            style={{ width: `${skill.level}%` }}
          >
            {skill.name} - {skill.level}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBars;