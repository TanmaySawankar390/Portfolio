import React from "react";
import Music from "./music";
import Projects from "./Projects";
import FixedCornerImage from "./FixedCorner";
import ClashAssistant from "./ClashAssistant";
import About from "./About";
import Skills from "./Skills";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";
const ClashPortfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-900 to-yellow-700 text-white">
      <Music />
      <FixedCornerImage />
      <ClashAssistant />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      
    </div>
  );
};

export default ClashPortfolio;
