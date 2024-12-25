import "./App.css";
import React from "react";

function Footer() {
    
  return (
    <div className="App">
      {/* Footer */}
      <footer className="py-8 bg-black/40 text-center" id="achievements">
        <h3><p className="text-gray-400">
          © {new Date().getFullYear()} Tanmay Sawankar All rights reserved.
        </p>
        </h3>
      </footer>
    </div>
);
}

export default Footer;