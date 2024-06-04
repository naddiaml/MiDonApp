import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__img-layer"></div>
            <div className="hero__text-container">
                <span><b>Ayudanos</b> a <b>ayudar</b></span>
            </div>
            <div id="hero__svg-container">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 3841 108.5"
                    style={{ overflow: 'scroll', enableBackground: 'new 0 0 3841 108.5' }}
                    xmlSpace="preserve"
                >
                    <defs></defs>
                    <path
                        style={{ fill: '#FFFFFF', strokeMiterlimit: 10 }}
                        d="M3360.5,97.739c-242,0-480-48.375-480-48.375 S2647.5,0.5,2400.5,0.5s-480,48.375-480,48.375s-238,48.864-480,48.864s-480-48.375-480-48.375S727.5,0.5,480.5,0.5 S0.5,48.875,0.5,48.875V108h1920h1920V48.875C3840.5,48.875,3602.5,97.739,3360.5,97.739z"
                    />
                </svg>
            </div>
        </section>
    )
}

export default Hero;