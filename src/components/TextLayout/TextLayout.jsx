import './TextLayout.css';

const TextLayout = ({ sectionTitle, subtitle }) => {
    return (
        <div className='main-section__text-container'>
            <span>{sectionTitle}</span>
            <span>{subtitle}</span>
        </div>
    )
}

export default TextLayout