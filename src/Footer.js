import "./App.css";
import React from "react";

function Footer() {
  return (
    <div className="App">
      {/* Clash of Clans Themed Footer */}
      <footer 
        className="relative py-0 bg-gradient-to-b from-amber-900 via-yellow-800 to-amber-950 text-center overflow-hidden"
        id="achievements"
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600"></div>
        
        {/* Stone texture overlay */}
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-gray-600 via-stone-500 to-gray-700"></div>
        
        {/* Decorative shields/emblems */}
        <div className="absolute top-4 left-8 w-8 h-8 bg-yellow-500 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-6 right-12 w-6 h-6 bg-amber-400 rotate-45 opacity-50"></div>
        <div className="absolute bottom-4 left-16 w-10 h-10 bg-yellow-600 rounded-full opacity-40"></div>
        <div className="absolute bottom-8 right-8 w-7 h-7 bg-amber-500 rotate-12 opacity-50"></div>
        
        {/* Main content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-6">
          {/* Clan banner style heading */}
          
          {/* Made with love section */}
          <div className="mb-4">
            <p className="text-yellow-200 text-lg font-semibold flex items-center justify-center gap-2">
              <span className="text-red-400 animate-pulse">❤️</span>
              Made with Love & Code Magic
              <span className="text-red-400 animate-pulse">❤️</span>
            </p>
          </div>
          
          {/* Copyright with gaming theme */}
          <div className="bg-black/50 rounded-lg px-6 py-4 border border-yellow-600/30 shadow-inner">
            <p className="text-amber-200 text-base mb-2">
              🏰 <strong>Chief Tanmay Sawankar</strong> 🏰
            </p>
            <p className="text-yellow-300/80 text-sm">
              © {new Date().getFullYear()} • All Treasures Protected • Clan Rules Apply
            </p>
            <div className="mt-2 flex justify-center items-center gap-2 text-amber-400/60 text-xs">
              <span>⚡</span>
              <span>Powered by React Spells</span>
              <span>⚡</span>
            </div>
          </div>
        </div>
        
        {/* Bottom decorative border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"></div>
      </footer>
    </div>
  );
}

export default Footer;