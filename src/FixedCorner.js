import React, { useState, useEffect } from 'react';
import chief from './img/chief.png';
import "./App.css";
const FixedCornerImage = ({ altText, size = 150 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    // Small delay before starting the animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    // Function to check if user reached the bottom
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition === documentHeight) {
        setIsAtBottom(true); // User is at the bottom of the page
      } else {
        setIsAtBottom(false); // User is not at the bottom
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 z-50 transition-transform duration-1000 ease-out
        ${isVisible && !isAtBottom ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <div className="relative">
        <img
          src={chief}
          alt={"Assistant"}
          className="hover:scale-105 transition-transform duration-500 responsive-img"
          width={size}
          height={size}
        />
      </div>
    </div>
  );
};

export default FixedCornerImage;
