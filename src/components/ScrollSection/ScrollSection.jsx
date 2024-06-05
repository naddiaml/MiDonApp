import './ScrollSection.css';
import ScrollIcon from './Scroll-Icon.png'

const ScrollSection = () => {
  return (
    <div className='scroll'>
      <img src={ScrollIcon} alt="Icono de Scroll, deslizá para saber más!" />
      <span>Deslizá para saber más</span>
    </div>
  )
}

export default ScrollSection