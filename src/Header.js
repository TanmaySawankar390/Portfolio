import "./App.css";
import React from "react";
import { Shield, Gem, Sword, ChevronDown } from "lucide-react";

function Header() {
  const handleResourceClick = (type) => {
    switch(type) {
      case 'github':
        window.open('https://github.com/TanmaySawankar390', '_blank');
        break;
      case 'projects':
        document.getElementById('defenses').scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        document.getElementById('clan').scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Top Trophy Count Section */}
          {/* <div className="mb-8 flex items-center gap-2 bg-black/60 px-6 py-2 rounded-full border-2 border-yellow-500">
            <Trophy className="w-6 h-6 text-yellow-400" />
            <span className="text-xl font-bold text-yellow-400">Town Hall Level 12</span>
          </div> */}

          {/* Central Content */}
          <div className="text-center mb-3">
            <h1 className="text-6xl font-bold mb-4 text-white-400 drop-shadow-lg size">
              Tanmay Sawankar
            </h1>
            <p className="text-2xl text-yellow-200 mb-8">
              Developer | Clash Enthusiast | Programmer
            </p>
          </div>

          {/* Resource Bar */}
          <div className="flex gap-6 items-center">
            {/* GitHub (Gold) */}
            <div 
              onClick={() => handleResourceClick('github')}
              className="group flex flex-col items-center cursor-pointer transform hover:scale-110 transition-all"
            >
              <div className="bg-gradient-to-b from-yellow-500 to-yellow-700 w-16 h-16 rounded-xl flex items-center justify-center border-2 border-yellow-300 shadow-lg mb-2 group-hover:shadow-yellow-500/50">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <span className="text-yellow-400 font-bold">Github Base</span>
            </div>

            {/* Projects (Elixir) */}
            <div 
              onClick={() => handleResourceClick('projects')}
              className="group flex flex-col items-center cursor-pointer transform hover:scale-110 transition-all"
            >
              <div className="bg-gradient-to-b from-purple-500 to-purple-800 w-16 h-16 rounded-xl flex items-center justify-center border-2 border-purple-300 shadow-lg mb-2 group-hover:shadow-purple-500/50">
                <Sword className="w-8 h-8 text-white" />
              </div>
              <span className="text-purple-400 font-bold">Battle Projects</span>
            </div>

            {/* Contact (Gems) */}
            <div 
              onClick={() => handleResourceClick('contact')}
              className="group flex flex-col items-center cursor-pointer transform hover:scale-110 transition-all"
            >
              <div className="bg-gradient-to-b from-cyan-400 to-cyan-700 w-16 h-16 rounded-xl flex items-center justify-center border-2 border-cyan-300 shadow-lg mb-2 group-hover:shadow-cyan-500/50">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <span className="text-cyan-400 font-bold">Clan Contact</span>
            </div>
          </div>

          {/* Achievement Banner */}
          <div className="mt-12 bg-black/60 px-6 py-3 rounded-lg border border-yellow-500">
            <p className="text-gray-300 text-sm">
              🏆 Latest Achievement: Full Stack Developer | 3-Star Performance
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />

        {/* Animated Down Arrow */}
        <div 
          onClick={handleScrollDown}
          className="absolute bottom-8 left-1/1.8 transform -translate-x-1/2 cursor-pointer animate-bounce"
        >
          <div className="flex flex-col items-center">
            <ChevronDown className="w-8 h-8 text-yellow-400" />
            <ChevronDown className="w-8 h-8 text-yellow-400 -mt-4" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
