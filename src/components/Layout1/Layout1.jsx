import './Layout1.css';
import CtaButton from '../CtaButton/CtaButton.jsx';

const Layout1 = ({pathImg, title, text, buttonContent, reverse}) => {
  return (
    <div className={`container ${reverse ? 'layout1-reverse' : 'layout1'}`}>
        <div className="layout1__item">
            <img src={pathImg} />
        </div>
        <div className="layout1__item">
            <span className='title'>{title}</span>
            <p className="text" dangerouslySetInnerHTML={{ __html: text }}></p>
            {buttonContent && <CtaButton content={buttonContent} />}
        </div>
    </div>
  )
}

export default Layout1