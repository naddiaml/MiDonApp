import Hero from "../Hero/Hero.jsx";
import ScrollSection from "../ScrollSection/ScrollSection.jsx";
import WhatWeDoSection from "../WhatWeDoSection/WhatWeDoSection.jsx";
import AboutSection from "../AboutSection/AboutSection.jsx";
import ContactSection from "../ContactSection/ContactSection.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <ScrollSection />
      <WhatWeDoSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}

export default Home