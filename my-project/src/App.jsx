import React, { useState, useEffect } from 'react'
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Carshowcase from './components/CarShowCase/Carshowcase';





const App = () => {
  let heroData = [
    { text1: "Drive the", text2: "Future today" },
    { text1: "Redefine", text2: "the road...." },
    { text1: "Unleash", text2: "the Drive Within" }
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((heroCount) => (heroCount + 1) % 3)
    }, 4000);
  }, [])

  return (
    <>
      <div class="relative">
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero setPlayStatus={setPlayStatus} heroData={heroData[heroCount]} heroCount={heroCount} setHeroCount={setHeroCount} playStatus={playStatus} />
        <Carshowcase />
        <Footer />

      </div>

    </>
  )
}

export default App;