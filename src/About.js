import React, { useState } from "react";
import { Shield, Trophy, Target, Zap, Code, Users, Calendar, Award, TrendingUp, Star } from "lucide-react";
import electro_dragon from "./img/electro-dragon.gif";
import th12 from "./img/th12.png";
import "./App.css";

function About() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Statistical data
  const educationStats = [
    { label: "10th Grade", value: "92.8%", icon: <Trophy className="w-5 h-5" /> },
    { label: "12th Grade", value: "91.8%", icon: <Award className="w-5 h-5" /> },
    { label: "B.Tech CGPA", value: "8.7/10", icon: <Star className="w-5 h-5" /> }
  ];

  const competitionStats = [
    { label: "SIH'23 Rank", value: "6th", icon: <Target className="w-5 h-5" /> },
    { label: "Hackathons", value: "8+", icon: <Zap className="w-5 h-5" /> },
    { label: "LeetCode Rating", value: "1676", icon: <Code className="w-5 h-5" /> }
  ];

  const projectStats = [
    { label: "Freelance Projects", value: "2+", icon: <Users className="w-5 h-5" /> },
    { label: "Open Source", value: "15+", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Experience", value: "3 Years", icon: <Calendar className="w-5 h-5" /> }
  ];

  return (
    <div className="App">
      <section className="py-20 bg-black/30" id="stats">
        <div className="max-w-4xl mx-auto px-4">
          <div className="perspective-1000">
            <div 
              className={`relative w-full h-[700px] transform-style-preserve-3d transition-transform duration-700 cursor-pointer ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              onClick={handleFlip}
            >
              {/* Front Card - Your Original Design */}
              <div className="absolute inset-0 backface-hidden border-2 border-yellow-500 bg-slate-900 text-yellow-100 rounded-lg overflow-hidden shadow-2xl shadow-yellow-500/20 hover:scale-95 transition-transform duration-1000">
                {/* Image at the top-right corner */}
                <img
                  src={electro_dragon}
                  alt="Top Right Corner"
                  className="absolute top-0 right-0 w-32 h-32 rounded-full border-yellow-500"
                />

                {/* Header */}
                <div className="border-b-2 border-yellow-500 p-6">
                  <div className="flex items-center justify-center gap-3">
                    <Shield className="w-8 h-8 text-yellow-500" />
                    <h1 className="text-3xl font-bold text-center text-yellow-500">
                      Village Chief Profile
                    </h1>
                    <Shield className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-center text-yellow-300 mt-2">Click to reveal battle statistics</p>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Left Column */}
                    <div className="w-full md:w-1/3 space-y-6">
                      <div className="relative">
                        <img
                          src="./img/image_tanmay.png"
                          alt="Profile"
                          className="rounded-lg border-4 border-yellow-500 shadow-lg shadow-yellow-500/50 w-full"
                        />
                        <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 border-2 border-yellow-500 flex items-center justify-center">
                          <img
                            src={th12}
                            alt="Assistant"
                            className="hover:scale-105 transition-transform duration-500"
                            width={32}
                            height={32}
                          />
                          TH12
                        </div>
                      </div>

                      <div className="bg-slate-800 p-4 rounded-lg border border-yellow-500">
                        <h2 className="text-2xl font-semibold mb-4 text-yellow-500 flex items-center gap-2">
                          <Trophy className="w-5 h-5" />
                          Achievements
                        </h2>
                        <ul className="space-y-3">
                          <li className="bg-slate-700 p-3 rounded flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-300">6th in SIH'23 Grand Finals</span>
                          </li>
                          <li className="bg-slate-700 p-3 rounded flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-300">1676 Leetcode Rating</span>
                          </li>
                          <li className="bg-slate-700 p-3 rounded flex items-center gap-2">
                            <Trophy className="w-4 h-4 text-yellow-500" />
                            <span className="text-gray-300">Open Source Contributor</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full md:w-2/3 space-y-6">
                      <div className="bg-slate-800 p-4 rounded-lg border border-yellow-500">
                        <h2 className="text-2xl font-semibold mb-8 text-yellow-500 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          Battle Experience
                        </h2>
                        <ul className="space-y-4">
                          <li className="bg-slate-700 p-3 rounded">
                            <h3 className="font-medium text-yellow-300">B.Tech Computer Science Engineering</h3>
                            <p className="text-gray-300">Madhav Institute of Technology and Science, 2022-2026</p>
                          </li>
                          <li className="bg-slate-700 p-3 rounded">
                            <h3 className="font-medium text-yellow-300">Freelance Developer</h3>
                            <p className="text-gray-300">Adobe Inc. , January - April 2025</p>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-slate-800 p-4 rounded-lg border border-yellow-500">
                        <h2 className="text-2xl font-semibold mb-4 text-yellow-500 flex items-center gap-2">
                          <Shield className="w-5 h-5" />
                          Battle Strategy
                        </h2>
                        <p className="text-gray-300 leading-relaxed text-justify">
                          Just as Clash of Clans requires strategy and dedication, I approach software 
                          development with the same level of commitment and tactical thinking. With extensive 
                          experience in full-stack and software development, I specialize in building 
                          scalable applications and creating engaging user experiences. My passion for gaming, 
                          particularly Clash of Clans, influences my approach to problem-solving and team collaboration.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Back Card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 border-2 border-yellow-500 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-yellow-100 rounded-lg overflow-hidden shadow-2xl shadow-yellow-500/20 ">
                {/* Header */}
                <div className="border-b-2 border-yellow-500 p-4 bg-slate-900">
                  <div className="flex items-center justify-center gap-3">
                    <Target className="w-6 h-6 text-yellow-500" />
                    <h1 className="text-2xl font-bold text-center text-yellow-500">
                      Battle Statistics
                    </h1>
                    <Target className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>

                {/* Statistics Grid */}
                <div className="p-6 space-y-6 overflow-y-auto h-full bg-slate-900">
                  {/* Education Stats */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-yellow-500/30">
                    <h3 className="text-lg font-semibold mb-4 text-yellow-500 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Academic Achievements
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {educationStats.map((stat, index) => (
                        <div key={index} className="bg-slate-700/50 p-3 rounded text-center border border-yellow-500/20">
                          <div className="flex justify-center mb-2 text-yellow-500">
                            {stat.icon}
                          </div>
                          <div className="text-xl font-bold text-yellow-500">{stat.value}</div>
                          <div className="text-xs text-yellow-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Competition Stats */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-yellow-500/30">
                    <h3 className="text-lg font-semibold mb-4 text-yellow-500 flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Competition Battle Record
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {competitionStats.map((stat, index) => (
                        <div key={index} className="bg-slate-700/50 p-3 rounded text-center border border-yellow-500/20">
                          <div className="flex justify-center mb-2 text-yellow-500">
                            {stat.icon}
                          </div>
                          <div className="text-xl font-bold text-yellow-500">{stat.value}</div>
                          <div className="text-xs text-yellow-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-yellow-500/30">
                    <h3 className="text-lg font-semibold mb-4 text-yellow-500 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Project Arsenal
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      {projectStats.map((stat, index) => (
                        <div key={index} className="bg-slate-700/50 p-3 rounded text-center border border-yellow-500/20">
                          <div className="flex justify-center mb-2 text-yellow-500">
                            {stat.icon}
                          </div>
                          <div className="text-xl font-bold text-yellow-500">{stat.value}</div>
                          <div className="text-xs text-yellow-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Current Status */}
                  <div className="bg-gradient-to-r from-yellow-500/10 to-transparent p-4 rounded-lg border border-yellow-500/50">
                    <h3 className="text-lg font-semibold mb-3 text-yellow-500 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Current Mission
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-300">Freelance Developer @ Adobe Inc.</span>
                        <span className="text-yellow-500 text-sm">Jan-Apr 2025</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-yellow-300">B.Tech CSE @ MITS</span>
                        <span className="text-yellow-500 text-sm">2022-2026</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;