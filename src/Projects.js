import React, { useState } from "react";
import { Github, X, Shield, ChevronDown } from "lucide-react";
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
    const [showPopup, setShowPopup] = useState(false);
    
    const togglePopup = (e) => {
        e.preventDefault();
        setShowPopup(!showPopup);
    };
    
    const navigateToGitHub = () => {
        window.open("https://github.com/TanmaySawankar390", "_blank");
        setShowPopup(false);
    };
    
    const projects = [
        {
          title: "Life Saverr",
          description: "Developed a full-stack emergency blood donation platform connecting donors and recipients in real-time, achieving 50%+ faster simulated response times based on location and blood type.",
          tech: ["React", "Node.js","Javascript", "CSS", "HTML5","Socketio", "Typescript"],
          url: "https://lifesaverrr.site/",
        },
        {
          title: "Medicare Clinic",
          description: "Designed comprehensive patient history and appointment scheduling modules, significantly enhancing clinic workflow and improving doctor-patient interaction efficiency by 40%.",
          tech: ["JavaScript", "NodeJs", "Javascript","React.js", "MongoDB", "Node.js"],
          url: "https://medicareprojectsss.netlify.app/",
        },
        {
          title: "Moodle Login",
          description: "Developed a cross-browser web extension to streamline Moodle login, ensuring seamless access and compatibility with 5+ major browsers, including Chrome, Edge, Firefox, and Opera.",
          tech: ["JavaScript", "NodeJs", "CSS", "HTML", "(DOM)"],
          url: "https://github.com/TanmaySawankar390/Moodle-Auto-Login",
        },
    ];

    return (
        <div className="App relative">
            <section id="defenses" className="py-20 pb-2 bg-gradient-to-b from-black/40 to-black/20 relative min-h-screen">
                <FloatingBalloon />
                <div className="max-w-6xl mx-auto px-4 relative z-10 ">
                    <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
                        Battle Projects
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project) => (
    <a
      key={project.title}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-6 border-2 border-yellow-600 hover:border-yellow-400 transition-all duration-300 hover:transform hover:scale-105">
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
    </a>
  ))}
</div>

                    
                    <div className="flex justify-center mt-20 mb-20 text-center">
                        <div className="unstable-wood-button-container">
                            {/* Large shadow to suggest it's not flat against the surface */}
                            <div className="wood-plank-shadow"></div>
                            
                            <a 
                                href="#" 
                                onClick={togglePopup}
                                className="unstable-wood-button animate-subtle-wiggle"
                            >
                                <div className="edge-crack top-edge"></div>
                                <div className="edge-crack right-edge"></div>
                                <div className="edge-crack bottom-edge"></div>
                                <div className="edge-crack left-edge"></div>
                                <div className="corner-chip top-left-chip"></div>
                                <div className="corner-chip top-right-chip"></div>
                                <div className="corner-chip bottom-left-chip"></div>
                                <div className="corner-chip bottom-right-chip"></div>
                                <span className="unstable-button-text">
                                    <Github className="wood-icon" />
                                    View More Battle Projects
                                </span>
                            </a>
                            
                            {/* Three bolts - one missing from top-left */}
                            <div className="bolt bolt-tr"><div className="bolt-head"></div></div>
                            <div className="bolt bolt-bl"><div className="bolt-head"></div></div>
                            <div className="bolt bolt-br loose-bolt">
                                <div className="bolt-shadow"></div>
                                <div className="bolt-head"></div>
                            </div>
                            
                            {/* Missing bolt hole */}
                            <div className="missing-bolt-hole"></div>
                        </div>
                    </div>
                </div>
                
                {/* Fallen bolt directly at the bottom of the section */}
                <div className="fallen-bolt">
                    <div className="fallen-bolt-head"></div>
                    <div className="fallen-bolt-thread"></div>
                    <div className="fallen-bolt-shadow"></div>
                </div>
            </section>
            
            {/* Clash of Clans Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70" onClick={() => setShowPopup(false)}></div>
            <div className="clash-popup animate-popup-in">
              {/* Popup Header */}
              <div className="clash-popup-header">
                <h3>Village Leave Confirmation</h3>
                <button 
                  className="clash-close-btn"
                  onClick={() => setShowPopup(false)}
                >
                  <X size={18} />
                </button>
              </div>
              
              {/* Popup Content */}
              <div className="clash-popup-content">
                <Shield className="w-16 h-16 text-yellow-500 mb-4" />
                <p>Are you sure you want to leave your village and visit Battle Project?</p>
                <p className="text-sm text-yellow-200 mt-2">Your progress will be saved</p>
              </div>
              
              {/* Popup Buttons */}
              <div className="clash-popup-buttons">
                <button
                  className="clash-btn clash-btn-cancel"
                  onClick={() => setShowPopup(false)}
                >
                  Back to Village
                </button>
                <button
                  className="clash-btn clash-btn-confirm"
                  onClick={navigateToGitHub}
                >
                  Continue to GitHub
                </button>
              </div>
            </div>
          </div>
        )}
        </div>
    );
}

export default Projects;