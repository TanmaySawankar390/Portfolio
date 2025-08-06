import "./App.css";
import React, { useEffect, useState } from "react";
import { ChevronDown, X, Clock, Eye, EyeIcon } from "lucide-react";
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getDatabase, ref, onValue, set, get } from "firebase/database";
import { BiTrendingUp } from "react-icons/bi";
import goblin from "./img/goblin.png";
import { BsEyeSlashFill } from "react-icons/bs";
import { GiEyeShield, GiEyeTarget, GiSpyglass } from "react-icons/gi";
import { FaUserSecret } from "react-icons/fa";

function Header() {
  const [raidCount, setRaidCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time for display
  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  };

  // Format date for display
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const months = [
      'Jan', 'Feb', 'March', 'April', 'May', 'June',
      'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day}, ${month} ${year}`;
  };

  // Format count function to handle scaling
  const formatCount = (count) => {
    if (count >= 1000000) {
      return Math.floor(count / 1000000) + "M+";
    } else if (count >= 1000) {
      return Math.floor(count / 1000) + "k+";
    } else if (count >= 100) {
      return Math.floor(count / 100) * 100 + "+";
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
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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
      const countRef = ref(db, "villageRaids/count");

      const fetchCount = () => {
        return get(countRef)
          .then((snapshot) => {
            const currentCount = snapshot.exists() ? snapshot.val() : 0;
            setRaidCount(currentCount);
            setLoading(false);
            return currentCount;
          })
          .catch((err) => {
            console.error("Error fetching count:", err);
            setLoading(false);
            return 0;
          });
      };

      fetchCount().then((currentCount) => {
        const deviceId = localStorage.getItem("raider_id");

        if (!deviceId) {
          const newCount = currentCount + 1;

          set(countRef, newCount)
            .then(() => {
              const newRaiderId =
                Date.now().toString() +
                Math.random().toString(36).substring(2, 9);
              localStorage.setItem("raider_id", newRaiderId);

              try {
                logEvent(analytics, "new_raid", {
                  raid_id: newRaiderId,
                  raid_time: new Date().toISOString(),
                  new_count: newCount,
                });
              } catch (analyticsError) {
                console.error("Analytics error:", analyticsError);
              }
            })
            .catch((updateError) => {
              console.error("Error updating count:", updateError);
            });
        } else {
          try {
            logEvent(analytics, "return_visit");
          } catch (analyticsError) {
            console.error("Analytics error:", analyticsError);
          }
        }
      });

      let unsubscribe;
      try {
        unsubscribe = onValue(
          countRef,
          (snapshot) => {
            if (snapshot.exists()) {
              const value = snapshot.val();
              setRaidCount(value);
              setLoading(false);
            } else {
              setLoading(false);
            }
          },
          (error) => {
            console.error("Database listener error:", error);
            setLoading(false);
          }
        );
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
    switch (type) {
      case "github":
        // Show popup instead of directly opening GitHub
        setShowPopup(true);
        break;
      case "projects":
        document
          .getElementById("defenses")
          .scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        document.getElementById("clan").scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  // Function to handle GitHub navigation
  const navigateToGitHub = () => {
    window.open("https://github.com/TanmaySawankar390", "_blank");
    setShowPopup(false);
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="App">
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60" />

        {/* COC Clock Tower Widget */}
        <div className="absolute top-1 left-3 z-20">
          <div className="relative w-16 h-14">
            {/* Clock Tower Base */}
            <div className="absolute bottom-0 w-16 h-12 bg-gradient-to-b from-stone-400 via-stone-500 to-stone-600 rounded-sm shadow-lg border-2 border-stone-300">
              {/* Stone texture lines */}
              <div className="absolute inset-1 border border-stone-400 rounded-sm opacity-50"></div>
              <div className="absolute top-2 left-1 right-1 h-px bg-stone-600"></div>
              <div className="absolute top-4 left-1 right-1 h-px bg-stone-600"></div>
              
              {/* Clock face */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-br from-amber-200 to-amber-300 rounded-full border-2 border-yellow-600 shadow-inner">
                <div className="absolute inset-0.5 border border-yellow-500 rounded-full opacity-60"></div>
                {/* Time display */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-xs">
                  <div className="text-amber-900 font-bold leading-none text-[12px] mt-1">
                    {formatTime(currentTime).split(':')[0]}:{formatTime(currentTime).split(':')[1]}
                  </div>
                  <div className="text-amber-800 font-semibold text-[8px] -mt-0.5">
                    {formatTime(currentTime).split(' ')[1]}
                  </div>
                </div>
              </div>

              
            </div>



            {/* Date banner */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 px-1 py-1 rounded-md border-2 border-yellow-400 shadow-lg whitespace-nowrap">
              <div className="text-yellow-100 font-bold text-[12px] text-center leading-none">
                {formatDate(currentTime)}
              </div>
            </div>


            {/* Subtle glow */}
            <div className="absolute inset-0 bg-yellow-400 opacity-10 blur-md rounded-lg -z-10"></div>
          </div>
        </div>

        {/* Clash of Clans Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setShowPopup(false)}
            ></div>
            <div className="clash-popup animate-popup-in">
              {/* Popup Header */}
              <div className="clash-popup-header">
                <h3>Village Leave Confirmation</h3>
                <button
                  className="clash-close-btn"
                  onClick={() => setShowPopup(false)}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Popup Content */}
              <div className="clash-popup-content">
                <img
                  src={goblin}
                  alt="Goblin Icon"
                  className="w-40 h-20 mb-4"
                />
                <p>
                  Are you sure you want to leave your village and visit GitHub
                  Base?
                </p>
                <p className="text-sm text-yellow-200 mt-2">
                  Your progress will be saved
                </p>
              </div>

              {/* Popup Buttons */}
              <div className="clash-popup-buttons">
                <button
                  className="clash-btn clash-btn-cancel"
                  onClick={() => setShowPopup(false)}
                >
                  Back to Village
                </button>
                <button
                  className="clash-btn clash-btn-confirm"
                  onClick={navigateToGitHub}
                  >
                  Continue to GitHub
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Visitor Counter */}
        <div className="absolute top-4 right-4 z-20 flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:scale-95 transition-all duration-300 overflow-hidden wave-glass-bg">
          <div className="flex items-center gap-1 bg-yellow-500 p-1 rounded-full z-10">
            <EyeIcon className="w-5 h-5 text-blue-900" />
          </div>
          <div className="flex flex-col items-start z-10">
            <span className="text-lg font-bold flex items-center">
              {loading ? (
                <span className="text-yellow-400 flex items-center">
                  <span className="loading-dots">...</span>
                </span>
              ) : (
                <span className="text-yellow-400">
                  {formatCount(raidCount)}
                </span>
              )}
              <span className="text-white/90 text-xs ml-1  tracking-wider font-semibold">
                Spectators
              </span>
            </span>
            <span className="text-white/70 text-xs -mt-1">
              scouted your village!
            </span>
          </div>
        </div>

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

          {/* Resource Bar - Clash of Clans Style Resource Icons */}
          <div className="flex gap-2 items-center">
            {/* GitHub Base (Gold Coin) */}
            <div
              onClick={() => handleResourceClick("github")}
              className="resource-button-container"
            >
              <div className="coc-resource-icon gold-coin-button" aria-label="Gold Coin">
              </div>
              <div className="resource-button-content">
                  <span className="resource-button-text">GitHub Base</span>
                </div>
            </div>

            {/* Battle Projects (Elixir Drop) */}
            <div
              onClick={() => handleResourceClick("projects")}
              className="resource-button-container"
            >
              <div className="coc-resource-icon elixir-drop-button" aria-label="Elixir Drop">
                
              </div>
              <div className="resource-button-content">
                  <span className="resource-button-text">Battle Projects</span>
                </div>
            </div>

            {/* Clan Contact (Dark Elixir Drop) */}
            <div
              onClick={() => handleResourceClick("contact")}
              className="resource-button-container"
            >
              <div className="coc-resource-icon dark-elixir-drop-button" aria-label="Dark Elixir Drop">
              </div>
              <div className="resource-button-content">
                  <span className="resource-button-text">Clan Contact</span>
                </div>
            </div>
          </div>

          {/* Achievement Banner */}
          <div className="mt-12 bg-black/60 px-6 py-3 rounded-lg border border-yellow-500">
            <p className="text-gray-300 text-sm">
              🏆 Latest Achievement: Software Developer | 4-Star Performance
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