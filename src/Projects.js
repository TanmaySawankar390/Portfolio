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
            
            <style jsx>{`
                /* Ultra-realistic unstable wooden button styling */
                .unstable-wood-button-container {
                    position: relative;
                    width: 300px;
                    height: 70px;
                    transform-style: preserve-3d;
                    margin: 0 auto;
                }
                
                .wood-plank-shadow {
                    position: absolute;
                    top: 12px;
                    left: 15px;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.6);
                    filter: blur(15px);
                    z-index: -1;
                    transform: perspective(400px) rotateZ(-3deg) rotateX(5deg);
                }
                
                .unstable-wood-button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    clip-path: polygon(
                        3% 0%, 97% 2%, 99% 20%, 98% 40%, 100% 70%, 98% 100%,
                        75% 98%, 50% 100%, 25% 97%, 2% 98%, 0% 80%, 1% 50%, 0% 20%
                    );
                    color: #ffe7b3;
                    font-weight: 800;
                    font-size: 0.95rem;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.8);
                    box-shadow:
                        inset 0 2px 5px rgba(255,255,255,0.3),
                        inset 0 -2px 5px rgba(0,0,0,0.8),
                        0 5px 15px rgba(0,0,0,0.4);
                    transform: 
                        perspective(600px) 
                        rotateZ(-3deg) 
                        rotateY(2deg) 
                        rotateX(5deg);
                    transform-style: preserve-3d;
                    transition: all 0.15s;
                    text-decoration: none;
                    overflow: hidden;
                }
                
                /* Subtle wiggle animation */
                @keyframes subtleWiggle {
                    0%, 100% { transform: perspective(600px) rotateZ(-3deg) rotateY(2deg) rotateX(5deg); }
                    25% { transform: perspective(600px) rotateZ(-2.5deg) rotateY(2.5deg) rotateX(4.5deg); }
                    50% { transform: perspective(600px) rotateZ(-3.5deg) rotateY(1.5deg) rotateX(5.5deg); }
                    75% { transform: perspective(600px) rotateZ(-2.8deg) rotateY(2.2deg) rotateX(5.2deg); }
                }
                
                .animate-subtle-wiggle {
                    animation: subtleWiggle 6s ease-in-out infinite;
                }
                
                /* Wood grain texture overlay */
                .unstable-wood-button::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: 
                        repeating-linear-gradient(90deg, 
                            transparent, 
                            transparent 15px, 
                            rgba(0,0,0,0.05) 15px, 
                            rgba(0,0,0,0.05) 17px),
                        repeating-linear-gradient(10deg,
                            transparent,
                            transparent 30px,
                            rgba(0,0,0,0.03) 30px,
                            rgba(0,0,0,0.03) 35px);
                    opacity: 0.8;
                    z-index: 0;
                }
                
                /* Edge cracks */
                .edge-crack {
                    position: absolute;
                    background: rgba(0,0,0,0.5);
                    z-index: 3;
                }
                
                .top-edge {
                    top: 0;
                    left: 35%;
                    width: 30%;
                    height: 2px;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                    clip-path: polygon(0 0, 100% 0, 90% 100%, 10% 100%);
                }
                
                .right-edge {
                    top: 30%;
                    right: 0;
                    width: 2px;
                    height: 40%;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                    clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 90%);
                }
                
                .bottom-edge {
                    bottom: 0;
                    right: 40%;
                    width: 25%;
                    height: 2px;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                    clip-path: polygon(10% 0, 90% 0, 100% 100%, 0 100%);
                }
                
                .left-edge {
                    top: 15%;
                    left: 0;
                    width: 2px;
                    height: 35%;
                    box-shadow: 0 0 2px rgba(0,0,0,0.5);
                    clip-path: polygon(0 0, 100% 15%, 100% 85%, 0 100%);
                }
                
                /* Corner chips and damage */
                .corner-chip {
                    position: absolute;
                    background: rgba(0,0,0,0.4);
                    z-index: 3;
                }
                
                .top-left-chip {
                    top: 0;
                    left: 0;
                    width: 15px;
                    height: 15px;
                    clip-path: polygon(0 0, 100% 0, 0 100%);
                    transform: translate(-4px, -4px);
                }
                
                .top-right-chip {
                    top: 0;
                    right: 0;
                    width: 20px;
                    height: 12px;
                    clip-path: polygon(0 0, 100% 0, 100% 100%);
                    transform: translate(5px, -3px);
                }
                
                .bottom-left-chip {
                    bottom: 0;
                    left: 0;
                    width: 12px;
                    height: 18px;
                    clip-path: polygon(0 0, 100% 100%, 0 100%);
                    transform: translate(-3px, 4px);
                }
                
                .bottom-right-chip {
                    bottom: 0;
                    right: 0;
                    width: 16px;
                    height: 14px;
                    clip-path: polygon(100% 0, 100% 100%, 0 100%);
                    transform: translate(4px, 3px);
                }
                
                /* Additional weathering */
                .unstable-wood-button::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: 
                        radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 20%),
                        radial-gradient(circle at 70% 65%, rgba(255,255,255,0.1) 0%, transparent 20%),
                        linear-gradient(80deg, transparent 20%, rgba(0,0,0,0.2) 20.5%, transparent 21%, transparent 100%),
                        linear-gradient(-40deg, transparent 40%, rgba(0,0,0,0.2) 40.5%, transparent 41%, transparent 100%),
                        linear-gradient(190deg, transparent 10%, rgba(0,0,0,0.2) 10.5%, transparent 11%, transparent 100%),
                        linear-gradient(160deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.2) 20.5%, rgba(0,0,0,0) 21%);
                    z-index: 1;
                }
                
                .unstable-wood-button:hover {
                    transform: 
                        perspective(600px) 
                        rotateZ(-2deg) 
                        rotateY(1.5deg) 
                        rotateX(4deg) 
                        translateY(-5px);
                    box-shadow:
                        inset 0 2px 5px rgba(255,255,255,0.4),
                        inset 0 -2px 5px rgba(0,0,0,0.8),
                        0 10px 25px rgba(0,0,0,0.5);
                    filter: brightness(1.1) contrast(1.05);
                }
                
                .unstable-wood-button:active {
                    transform: 
                        perspective(600px) 
                        rotateZ(-4deg) 
                        rotateY(2.5deg) 
                        rotateX(6deg) 
                        translateY(-2px);
                    box-shadow:
                        inset 0 2px 8px rgba(0,0,0,0.8),
                        inset 0 -1px 3px rgba(255,255,255,0.3),
                        0 6px 10px rgba(0,0,0,0.4);
                    filter: brightness(0.95);
                }
                
                .unstable-button-text {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 8px;
                    position: relative;
                    z-index: 2;
                    padding: 0 10px;
                }
                
                .wood-icon {
                    width: 20px;
                    height: 20px;
                    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.7));
                    margin-left: 16px;
                    margin-right: 0px;
                }
                
                /* Missing bolt hole */
                .missing-bolt-hole {
                    position: absolute;
                    width: 14px;
                    height: 14px;
                    border-radius: 50%;
                    background: radial-gradient(circle at center, #20100a 0%, #3a1e14 60%, #2a1810 100%);
                    box-shadow: inset 0 2px 4px rgba(0,0,0,0.8);
                    top: -7px;
                    left: -7px;
                    z-index: 1;
                }
                
                /* Metal bolts */
                .bolt {
                    position: absolute;
                    width: 18px;
                    height: 18px;
                    z-index: 5;
                }
                
                .bolt-head {
                    position: relative;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    background: 
                        radial-gradient(circle at 35% 35%, 
                            #d0d0d0 0%, 
                            #909090 60%, 
                            #606060 100%);
                    box-shadow: 
                        inset 1px 1px 2px rgba(255,255,255,0.8),
                        inset -1px -1px 2px rgba(0,0,0,0.6),
                        0 0 4px rgba(0,0,0,0.5);
                    transform: rotate(30deg);
                    overflow: hidden;
                }
                
                .bolt-head::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 8px;
                    height: 2px;
                    background: #333;
                    transform: translate(-50%, -50%);
                    box-shadow: 0 0 1px rgba(0,0,0,0.8);
                }
                
                .bolt-head::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 2px;
                    height: 8px;
                    background: #333;
                    transform: translate(-50%, -50%);
                    box-shadow: 0 0 1px rgba(0,0,0,0.8);
                }
                
                .bolt-tr {
                    top: -8px;
                    right: -8px;
                    transform: rotate(-15deg);
                }
                
                .bolt-bl {
                    bottom: -8px;
                    left: -8px;
                    transform: rotate(30deg);
                }
                
                /* Loose bolt */
                .loose-bolt {
                    bottom: -8px;
                    right: -8px;
                    transform: rotate(-30deg) translateZ(5px);
                }
                
                .loose-bolt .bolt-head {
                    transform: rotate(-15deg);
                    height: 20px; /* Taller to show it's coming out */
                }
                
                .loose-bolt .bolt-shadow {
                    position: absolute;
                    width: 12px;
                    height: 6px;
                    background: rgba(0, 0, 0, 0.5);
                    border-radius: 50%;
                    filter: blur(2px);
                    bottom: -2px;
                    left: 2px;
                    z-index: -1;
                }
                
                /* Fallen bolt styling - positioned directly at the bottom of the section */
                .fallen-bolt {
                    position: absolute;
                    bottom: 8px;
                    left: calc(40% - 20px);
                    width: 44px;
                    height: 20px;
                    transform: rotate(105deg);
                    z-index: 10;
                    animation: bolt-bounce 0.5s ease-out;
                }
                
                @keyframes bolt-bounce {
                    0% { transform: rotate(105deg) translateY(-40px); opacity: 0; }
                    60% { transform: rotate(105deg) translateY(5px); opacity: 1; }
                    80% { transform: rotate(105deg) translateY(-2px); opacity: 1; }
                    100% { transform: rotate(105deg) translateY(0); opacity: 1; }
                }
                
                .fallen-bolt-head {
                    position: absolute;
                    left: 20px;
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: 
                        radial-gradient(circle at 35% 35%, 
                            #d0d0d0 0%, 
                            #909090 60%, 
                            #606060 100%);
                    box-shadow: 
                        inset 1px 1px 2px rgba(255,255,255,0.8),
                        inset -1px -1px 2px rgba(0,0,0,0.6),
                        0 0 4px rgba(0,0,0,0.5);
                    transform: rotate(15deg);
                    z-index: 2;
                }
                
                .fallen-bolt-head::after {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 8px;
                    height: 2px;
                    background: #333;
                    transform: translate(-50%, -50%);
                    box-shadow: 0 0 1px rgba(0,0,0,0.8);
                }
                
                .fallen-bolt-head::before {
                    content: "";
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 2px;
                    height: 8px;
                    background: #333;
                    transform: translate(-50%, -50%);
                    box-shadow: 0 0 1px rgba(0,0,0,0.8);
                }
                
                .fallen-bolt-thread {
                    position: absolute;
                    left: 8px;
                    top: -6px;
                    width: 34px;
                    height: 12px;
                    transform: rotate(-120deg) scaleX(0.8);
                    background: linear-gradient(to right, #b8b8b8, #808080);
                    border-radius: 0 5px 5px 0;
                    z-index: 1;
                }
                
                .fallen-bolt-thread::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: 
                        repeating-linear-gradient(to right,
                            rgba(255,255,255,0.4),
                            rgba(255,255,255,0.4) 1px,
                            rgba(0,0,0,0.2) 1px,
                            rgba(0,0,0,0.2) 3px);
                    border-radius: 0 5px 5px 0;
                    opacity: 0.8;
                }
                
                .fallen-bolt-thread::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background: linear-gradient(to bottom, 
                        rgba(255,255,255,0.2), 
                        transparent 40%, 
                        rgba(0,0,0,0.2) 60%,
                        transparent);
                    border-radius: 0 5px 5px 0;
                }
                
                .fallen-bolt-shadow {
                    position: absolute;
                    left: 12px;
                    top: -12px;
                    width: 40px;
                    height: 8px;
                    background: rgba(0,0,0,0.5);
                    border-radius: 50%;
                    filter: blur(3px);
                    transform: rotate(-120deg) scaleX(0.8);
                    z-index: 0;
                }
                
                /* Popup styling */
                .clash-popup-container {
                    border: 8px solid #583816;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 500px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.2);
                    position: relative;
                    z-index: 51;
                    transform: scale(0.95);
                    animation: popIn 0.3s forwards ease-out;
                }
                
                @keyframes popIn {
                    0% {
                        transform: scale(0.7);
                        opacity: 0;
                    }
                    70% {
                        transform: scale(1.05);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
                
                .clash-popup-header {
                    background-size: cover;
                    border-bottom: 6px solid #42280f;
                    padding: 15px 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                }
                
                .clash-popup-header::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.2));
                    pointer-events: none;
                }
                
                .clash-close-btn {
                    position: absolute;
                    right: 12px;
                    top: 50%;
                    transform: translateY(-50%);
                    background: #e74c3c;
                    border: 2px solid #fff;
                    border-radius: 50%;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
                }
                
                .clash-popup-content {
                    padding: 25px 20px;
                    background-size: cover;
                }
                
                .clash-popup-content::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3));
                    pointer-events: none;
                    z-index: -1;
                    border-radius: 12px;
                }
                
                .clash-text-shadow {
                    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.7);
                }
                
                /* Button styling for popup */
                .clash-wood-button-confirm, .clash-wood-button-cancel {
                    position: relative;
                    height: 46px;
                    padding: 0 15px;
                    border-radius: 8px;
                    color: #fff;
                    font-weight: 800;
                    font-size: 0.85rem;
                    text-transform: uppercase;
                    transition: all 0.1s;
                    overflow: hidden;
                }
                
                .clash-wood-button-confirm {
                    background-size: cover;
                    border: 4px solid #4f7c33;
                    text-shadow: 0 -1px 0 #2a5714;
                    box-shadow: 0 4px 0 #2a5714, 0 5px 10px rgba(0, 0, 0, 0.5);
                    transform: translateY(-2px);
                }
                
                .clash-wood-button-confirm::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
                    pointer-events: none;
                }
                
                .clash-wood-button-confirm:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 6px 0 #2a5714, 0 7px 10px rgba(0, 0, 0, 0.5);
                }
                
                .clash-wood-button-confirm:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 0 #2a5714, 0 3px 6px rgba(0, 0, 0, 0.5);
                }
                
                .clash-wood-button-cancel {
                    background-size: cover;
                    border: 4px solid #a53030;
                    text-shadow: 0 -1px 0 #6e1c1c;
                    box-shadow: 0 4px 0 #6e1c1c, 0 5px 10px rgba(0, 0, 0, 0.5);
                    transform: translateY(-2px);
                }
                
                .clash-wood-button-cancel::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
                    pointer-events: none;
                }
                
                .clash-wood-button-cancel:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 6px 0 #6e1c1c, 0 7px 10px rgba(0, 0, 0, 0.5);
                }
                
                .clash-wood-button-cancel:active {
                    transform: translateY(0);
                    box-shadow: 0 2px 0 #6e1c1c, 0 3px 6px rgba(0, 0, 0, 0.5);
                }
            `}</style>
        </div>
    );
}

export default Projects;