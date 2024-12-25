import "./App.css";
import React from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Trophy,FileText } from "lucide-react";

function Contact() {
  return (
    <div className="App">
      {/* Contact Section */}
      <section className="py-20" id="clan">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12 text-center">
            Join My Clan
          </h2>
          <form className="grid gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-black/20 p-4 rounded-lg border-2 border-yellow-600 focus:border-yellow-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-black/20 p-4 rounded-lg border-2 border-yellow-600 focus:border-yellow-400 outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="bg-black/20 p-4 rounded-lg border-2 border-yellow-600 focus:border-yellow-400 outline-none"
            />
            <button className="bg-yellow-600 hover:bg-yellow-500 px-8 py-4 rounded-lg font-bold transition-colors w-full md:w-auto md:self-start">
              Send Message
            </button>
          </form>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-yellow-400 mb-6">Connect with me</h3>
            <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="https://www.linkedin.com/in/tanmay-sawankar-57a945223/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-600 text-white p-4 rounded-lg transform hover:scale-110 transition-all duration-300 border-2 border-yellow-400 shadow-md"
          title="LinkedIn"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        
        <a
          href="https://github.com/TanmaySawankar390"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-gray-800 text-white p-4 rounded-lg transform hover:scale-110 transition-all duration-300 border-2 border-yellow-400 shadow-md"
          title="GitHub"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        
        <a
          href="https://leetcode.com/tanmaysawankar4441"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-600 text-white p-4 rounded-lg transform hover:scale-110 transition-all duration-300 border-2 border-yellow-400 shadow-md"
          title="LeetCode"
        >
          <Trophy className="w-6 h-6" />
        </a>
        
        <a
          href="https://drive.google.com/file/d/1dKIY0ZY6I8V2GARt7xAU_2aSF-YPVoJM/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-700 hover:bg-yellow-600 text-white p-4 rounded-lg transform hover:scale-110 transition-all duration-300 border-2 border-yellow-400 shadow-md"
          title="Resume"
        >
          <FileText className="w-6 h-6" />
        </a>
      </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
