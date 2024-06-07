import AboutSectionImg from './AboutSectionImg.svg';
import Layout1 from '../Layout1/Layout1';

const AboutSection = () => {
  return (
    <section className="about-section">
        <Layout1 pathImg={AboutSectionImg} title={"Sobre Nosotros"} text={"Somos un grupo de jóvenes <span class='bold'>inquietos e inquietados por el otro, siendo y persiguiendo  una sociedad mejor</span> mientras nos ponemos en acción."} buttonContent={"Conocénos"} reverse={"reverse"} />
    </section>
  )
}

export default AboutSection