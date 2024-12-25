import "./App.css";
import React from "react";
import { Shield, Trophy } from "lucide-react";
import th12 from "./img/th12.png";
import electro_dragon from "./img/electro-dragon.gif";
// import electro from "./img/electro.gif";

function About() {
  return (
    <div className="App">
      <section className="py-20 bg-black/30" id="stats">
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative max-w-4xl mx-auto border-2 border-yellow-500 bg-slate-900 text-yellow-100 rounded-lg overflow-hidden">
            {/* Image at the top-right corner */}
            <img
              src={electro_dragon} // Replace with the actual path to your image
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
                        <span className="text-gray-300">6th in SIH’23 Grand Finals</span>
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
                        <h3 className="font-medium text-yellow-300">Full Stack War Intern</h3>
                        <p className="text-gray-300">MotionCut, Nov - Dec 2023</p>
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
        </div>
      </section>
    </div>
  );
}

export default About;
