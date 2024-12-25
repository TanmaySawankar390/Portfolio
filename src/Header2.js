import "./App.css";
import React from "react";

function Header() {

  return (
    <div className="App">
      {/* Header/Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center p-8">
          <h1 className="text-6xl font-bold mb-4 text-yellow-400 drop-shadow-lg">
            Tanmay Sawankar
          </h1>
          <p className="text-2xl text-yellow-200 mb-8">
            Developer | Clash Enthusiast | Programmer
          </p>
          <div className="flex gap-4 justify-center">

          <button className="bg-yellow-600 hover:bg-yellow-500 px-6 py-3 rounded-lg font-bold transition-colors">
              View Projects
            </button>

            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg font-bold transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </header>
    </div>
);
}

export default Header;