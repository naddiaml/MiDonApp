import WhatWeDoSectionImg from './WhatWeDoSectionImg.svg';
import Layout1 from "../Layout1/Layout1";

const AboutSection = () => {
  return (
    <section className="wwd-section">
        <Layout1 pathImg={WhatWeDoSectionImg} title={"MiDonApp"} text={"Es una iniciativa que busca mejorar la convivencia social y <span class='bold'>conectar</span> a aquellas personas que estén dispuestas a ayudar con quienes necesitan de nuestra ayuda."} buttonContent={"Quiero saber más!"}  />
    </section>
  )
}

export default AboutSection