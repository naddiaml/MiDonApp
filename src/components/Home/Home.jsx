import Hero from "../Hero/Hero.jsx";
import ScrollSection from "../ScrollSection/ScrollSection.jsx";
import WhatWeDoSection from "../WhatWeDoSection/WhatWeDoSection.jsx";
import AboutSection from "../AboutSection/AboutSection.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollSection />
      <WhatWeDoSection />
      <AboutSection />
    </div>
  )
}

export default Home