import { useEffect, useState } from "react"
import Background from "./Components/Background/Background"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "What you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your desires" },
  ]
  const [heroCount, setHeroCount] = useState(0)
  const [playStatus, setPlayStatus] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!playStatus) {
        setHeroCount((count) => (count === 2 ? 0 : count + 1));
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [playStatus]);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App