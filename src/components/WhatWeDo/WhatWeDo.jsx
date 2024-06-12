import './WhatWeDo.css';
import MisionImg from './MisionIllustration.svg';
import VisionImg from './VisionIllustration.svg';
import ConnectedWorld from './ConnectedWorldIllustration.svg';
import Layout1 from '../Layout1/Layout1';
import Hero from '../Hero/Hero';
import TextLayout from '../TextLayout/TextLayout';

const WhatWeDo = () => {
    return (
        <div>
            <Hero />
            <section className='main-section__container'>
                <TextLayout sectionTitle={"¿Qué hacemos?"} subtitle={"Nuestra misión y visión"} />
                <div className='intro'>
                    <span className='intro__subtitle'>MiDonApp</span>
                    <p>Es una iniciativa que busca mejorar la convivencia social y <span className='bold'>conectar</span> a aquellas personas que estén dispuestas a ayudar con quienes necesitan de nuestra ayuda.</p>
                    <img src={ConnectedWorld} alt="" />
                </div>
                <Layout1 pathImg={MisionImg} title={"Nuestra misión"} text={"Buscamos ser intermediarios entre las necesidades de la gente y personas que puedan y quieran ayudarnos a cubrirlas; nuestra <span class='bold'>misión</span> es la de <span class='bold'>conectar voluntarios con organizaciones</span>  que deseen obtener algo más de <span class='bold'>visibilidad y ayuda</span>."} reverse={"reverse"} />
                <Layout1 pathImg={VisionImg} title={"Nuestra visión"} text={"<span class='bold'>Las personas por lo general actúan sobre un problema una vez que este se vuelve visible.</span><br><br>Por eso, mediante la investigación y la implementación de la tecnología, queremos <span class='bold'>ser una referencia</span> tanto para las personas que quiren ayudar como para las organizaciones que necesitan ayuda y quieren mantenerse visibles."} />
            </section>
        </div>
    )
}

export default WhatWeDo