import React, { useState } from 'react';
import { Code2, Database, Globe, Wrench, Terminal, Sparkles } from 'lucide-react';

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const skillCategories = [
    {
      category: "Languages & Concepts",
      icon: <Code2 className="w-6 h-6 text-yellow-500" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "OOPS Concept", level: 85 }
      ]
    },
    {
      category: "Frontend and UI/UX",
      icon: <Globe className="w-6 h-6 text-yellow-500" />,
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "HTML", level: 90 },
        { name: "Figma", level: 80 },
        { name: "TailWind CSS", level: 85 }
      ]
    },
    {
      category: "Backend and DevOps",
      icon: <Database className="w-6 h-6 text-yellow-500" />,
      skills: [
        { name: "NodeJS", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "AWS Fundamentals", level: 75 }
      ]
    },
    {
      category: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-yellow-500" />,
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Github", level: 85 },
        { name: "Postman", level: 82 },
        { name: "MS Office 365", level: 85 }
      ]
    }
  ];

  return (
    <div className="relative min-h-screen ">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 " />
        <div className="absolute inset-0 bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:16px_16px] opacity-5" />
      </div>
      
      <section className="relative py-20 px-8" id="troops">
        <div className="max-w-7xl mx-auto">
          {/* Title with floating animation */}
          <div className="flex items-center justify-center gap-3 mb-16 animate-bounce">
            <Terminal className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              Battle Skills
            </h2>
            <Terminal className="w-8 h-8 text-yellow-500" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {skillCategories.map((category, idx) => (
              <div 
                key={category.category}
                className="group relative transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000" />
                
                {/* Main card */}
                <div className="relative bg-slate-900 p-6 rounded-lg border-2 border-yellow-500">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400">{category.category}</h3>
                  </div>

                  {/* Skills */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div 
                        key={skill.name} 
                        className="bg-slate-800/50 p-4 rounded-lg transform transition-all duration-300"
                        style={{
                          transitionDelay: `${skillIdx * 100}ms`
                        }}
                      >
                        <div className="flex justify-between mb-2">
                          <span className="font-bold text-gray-200">{skill.name}</span>
                          <span className="text-yellow-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2.5 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: hoveredCategory === idx ? `${skill.level}%` : '0%',
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Decorative sparkles */}
                  <Sparkles 
                    className={`absolute -top-2 -right-2 w-6 h-6 text-yellow-400 transition-opacity duration-300 ${
                      hoveredCategory === idx ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
