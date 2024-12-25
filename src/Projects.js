import React from "react";
import { Github } from "lucide-react";
import ballon from "./img/Balloon.png";
import "./App.css";

const FloatingBalloon = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
    <div className="absolute w-40 h-40">
      <div className="w-full h-full m-8 animate-balloon-sway">
        <img 
          src={ballon} 
          alt="Floating Balloon"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </div>
);

function Projects() {
    const projects = [
        {
          title: "VartaLaap",
          description: "Vartalaap is a real-time chat application designed for collaborative communication on Canva. It allows users to create and join chat rooms, send and receive messages, and stay connected while working on projects. ",
          tech: ["React", "Node.js","Javascript", "CSS", "HTML5","Socketio", "Typescript"],
        },
        {
          title: "Rule Engine",
          description: "Engineered a Rule Engine project for HR data validation, using Abstract Syntax Trees. It parse and execute complex rule dependencies with accuracy, reducing time complexity.",
          tech: ["JavaScript", "NodeJs", "CSS", "HTML", "(AST)", "Data Structure", "PostgreSQL", "Express"],
        },
        {
          title: "Pure BG",
          description: "It aims to create a platform for removing background of an image considering the image URL from the internet.Its fast and efficient operation showcases its performance.",
          tech: ["JavaScript", "NodeJs", "CSS", "HTML", "Postman API"],
        },
    ];

    return (
        <div className="App relative">
            <section id="defenses" className="py-20 bg-gradient-to-b from-black/40 to-black/20 relative min-h-screen">
                <FloatingBalloon />
                <div className="max-w-6xl mx-auto px-4 relative z-10">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
                        Battle Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project) => (
                            <div 
                                key={project.title} 
                                className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border-2 border-yellow-600 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <h3 className="text-2xl font-bold text-yellow-400 mb-4">{project.title}</h3>
                                <p className="mb-4 text-gray-300 text-justify">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="bg-yellow-600/80 hover:bg-yellow-500/80 px-3 py-1 rounded-full text-sm transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center mt-12">
                        <a 
                            href="https://github.com/TanmaySawankar390" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-yellow-400 px-6 py-3 rounded-lg border-2 border-yellow-500 hover:border-yellow-400 transition-all duration-300 font-bold hover:transform hover:scale-105"
                        >
                            <Github className="w-6 h-6" />
                            View More Battle Projects
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Projects;