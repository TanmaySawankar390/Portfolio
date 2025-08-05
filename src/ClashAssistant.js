import React, { useState, useEffect } from 'react';
import { Trophy, Sword, Shield, Star, Users, Building, X } from 'lucide-react';

const ClashAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSection, setCurrentSection] = useState('hero');
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [boxHidden, setBoxHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);

    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = 'hero';

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = section.id;
        }
      });

      setCurrentSection(current);

      const scrollPosition = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsAtBottom(scrollPosition >= documentHeight);
    };

    const handleTouchOrClick = () => {
      if (boxHidden) {
        setIsVisible(true);
        setBoxHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('touchstart', handleTouchOrClick);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouchOrClick);
    };
  }, [boxHidden]);

  const getDayOfWeek = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
  };

  const sectionContent = {
    hero: {
      icon: <Trophy className="text-yellow-500" />,
      title: "Welcome Chief's Ally!",
      description: `Hey visitor, it's ${getDayOfWeek()} here! Ready to explore chief's Journey filled with Ups and Downs? Our chief achieved Town Hall 12, and have more to explore.`
    },
    stats: {
      icon: <Star className="text-yellow-500" />,
      title: "Battle Statistics",
      description: "Check out chief's profile including war stars, trophy count, and achievement completion rate."
    },
    troops: {
      icon: <Sword className="text-red-500" />,
      title: "Army Overview",
      description: "Explore chief's favorite tech stack, attack strategies and maxed troop compositions."
    },
    defenses: {
      icon: <Shield className="text-yellow-500" />,
      title: "Base Defense",
      description: "View my current base layout, projects and defense upgrade progress."
    },
    clan: {
      icon: <Users className="text-purple-500" />,
      title: "Clan Life",
      description: "Learn about chief by connecting them in clan leadership and war participation."
    },
    achievements: {
      icon: <Building className="text-green-500" />,
      title: "Achievements",
      description: "Discover me and my gaming milestones and special accomplishments."
    }
  };

  const content = sectionContent[currentSection];

  return (
    isVisible && (
      <div
        className={`fixed z-50 transition-all duration-500 ease-out
          md:bottom-4 md:left-20 
          bottom-0 left-0 right-0
          ${!isAtBottom ? 'translate-y-0 md:translate-x-10 opacity-60' : 'translate-y-full md:translate-y-0 md:-translate-x-full opacity-0'}`}
      >
        <div className="bg-black/90 backdrop-blur-sm text-white rounded-lg shadow-xl 
          p-4 md:max-w-xs w-full md:w-auto
          border-t-2 md:border-2 border-yellow-500/20
          mx-auto md:mx-0 relative">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            onClick={() => {
              setIsVisible(false);
              setBoxHidden(true);
            }}
          >
            <X size={16} />
          </button>
          <div className="flex items-center gap-3 mb-1 responsive">
            <div className="w-6 h-6">{content.icon}</div>
            <h3 className="font-bold text-m">{content.title}</h3>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed responsive text-justify">
            {content.description}
          </p>
        </div>
      </div>
    )
  );
};

export default ClashAssistant;