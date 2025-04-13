import { useEffect, useState, useCallback } from "react";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
import BackToTop from "./Components/BackToTop/BackToTop";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Explore from "./Pages/Explore/Explore";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

// Constants to avoid magic numbers and improve maintainability
const HERO_DATA = [
  { text1: "Dive into", text2: "What you love" },
  { text1: "Indulge", text2: "your passions" },
  { text1: "Give in to", text2: "your desires" },
];
const SLIDE_INTERVAL = 3000; // in milliseconds
const MAX_HERO_COUNT = 2;

const App = () => {
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true); // video play state
  const [activeSection, setActiveSection] = useState("home");

  // Memoized handler to prevent unnecessary re-renders
  const handleHeroCountChange = useCallback((count) => {
    setHeroCount(count >= 0 && count <= MAX_HERO_COUNT ? count : 0);
  }, []);

  // Cycle through hero slides when video is not playing
  useEffect(() => {
    let intervalId;

    if (!playStatus) {
      intervalId = setInterval(() => {
        setHeroCount((currentCount) =>
          currentCount === MAX_HERO_COUNT ? 0 : currentCount + 1
        );
      }, SLIDE_INTERVAL);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [playStatus]);

  // Handle scroll-based section activation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "explore", "about", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ErrorBoundary>
      <main>
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar activeSection={activeSection} />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={HERO_DATA[heroCount]}
          heroCount={heroCount}
          setHeroCount={handleHeroCountChange}
          playStatus={playStatus}
        />
        <Home />
        <Explore />
        <About />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </ErrorBoundary>
  );
};

export default App;