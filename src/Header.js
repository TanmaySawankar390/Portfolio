import "./App.css";
import React, { useEffect, useState } from "react";
import { Shield, Gem, Sword, ChevronDown, X } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { BiTrendingUp } from "react-icons/bi";
import React from "react";
import { Shield, Gem, Sword, ChevronDown } from "lucide-react";

function Header() {
  const [raidCount, setRaidCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false); // State for the popup
  
  // Format count function to handle scaling
  const formatCount = (count) => {
    if (count >= 1000000) {
      return Math.floor(count / 1000000) + "M+";
    } else if (count >= 1000) {
      return Math.floor(count / 1000) + "k+";
    } else if (count >= 100) {
      return Math.floor(count / 100) * 100 + "+";
    } else if (count >= 10) {
      return Math.floor(count / 10) * 10 + "+";
    }
    return count;
  };
  
  // Firebase code remains the same
  useEffect(() => {
    // Ensure we have a Firebase config regardless of environment variables
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID ,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    };
    
    try {
      // Initialize Firebase code remains the same...
      let app, db, analytics;
      
      try {
        app = initializeApp(firebaseConfig);
        db = getDatabase(app);
        analytics = getAnalytics(app);
      } catch (firebaseInitError) {
        console.error("Firebase initialization error:", firebaseInitError);
        setLoading(false);
        return;
      }
      
      // Rest of your Firebase code...
      const countRef = ref(db, 'villageRaids/count');
      
      const fetchCount = () => {
        return get(countRef).then((snapshot) => {
          const currentCount = snapshot.exists() ? snapshot.val() : 0;
          setRaidCount(currentCount);
          setLoading(false);
          return currentCount;
        }).catch(err => {
          console.error("Error fetching count:", err);
          setLoading(false);
          return 0;
        });
      };
      
      fetchCount().then(currentCount => {
        const deviceId = localStorage.getItem('raider_id');
        
        if (!deviceId) {
          const newCount = currentCount + 1;
          
          set(countRef, newCount)
            .then(() => {
              const newRaiderId = Date.now().toString() + Math.random().toString(36).substring(2, 9);
              localStorage.setItem('raider_id', newRaiderId);
              
              try {
                logEvent(analytics, 'new_raid', {
                  raid_id: newRaiderId,
                  raid_time: new Date().toISOString(),
                  new_count: newCount
                });
              } catch (analyticsError) {
                console.error("Analytics error:", analyticsError);
              }
            })
            .catch(updateError => {
              console.error("Error updating count:", updateError);
            });
        } else {
          try {
            logEvent(analytics, 'return_visit');
          } catch (analyticsError) {
            console.error("Analytics error:", analyticsError);
          }
        }
      });
      
      let unsubscribe;
      try {
        unsubscribe = onValue(countRef, (snapshot) => {
          if (snapshot.exists()) {
            const value = snapshot.val();
            setRaidCount(value);
            setLoading(false);
          } else {
            setLoading(false);
          }
        }, (error) => {
          console.error("Database listener error:", error);
          setLoading(false);
        });
      } catch (listenerError) {
        console.error("Error setting up listener:", listenerError);
        setLoading(false);
      }
      
      return () => {
        if (unsubscribe) unsubscribe();
      };
      
    } catch (err) {
      console.error("Global error:", err);
      setLoading(false);
    }
  }, []);

  // Modified resource click handler
  const handleResourceClick = (type) => {
    switch(type) {
      case 'github':
        // Show popup instead of directly opening GitHub
        setShowPopup(true);
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

  // Function to handle GitHub navigation
  const navigateToGitHub = () => {
    window.open('https://github.com/TanmaySawankar390', '_blank');
    setShowPopup(false);
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
              🏆 Latest Achievement:  Software Developer  |  4 - Star Performance
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
