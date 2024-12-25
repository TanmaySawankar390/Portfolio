import React from "react";
import { Code2, Database, Globe, Wrench, Terminal } from "lucide-react";

function Skills() {
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
    <div className="App relative">
      
      <section className="py-20 bg-gradient-to-r from-black/5 to-black/10 relative" id="troops">
        <div className="max-w-full mx-auto px-8">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Terminal className="w-8 h-8 text-yellow-500" />
            <h2 className="text-4xl font-bold text-yellow-500">Battle Skills</h2>
            <Terminal className="w-8 h-8 text-yellow-500" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {skillCategories.map((category) => (
              <div 
                key={category.category} 
                className="bg-slate-900/90 backdrop-blur-sm p-6 rounded-lg border-2 border-yellow-500 relative z-10"
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-2xl font-bold text-yellow-400">{category.category}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="bg-slate-800 p-4 rounded-lg">
                      <div className="flex justify-between mb-2">
                        <span className="font-bold text-gray-200">{skill.name}</span>
                        <span className="text-yellow-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2.5">
                        <div
                          className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2.5 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;