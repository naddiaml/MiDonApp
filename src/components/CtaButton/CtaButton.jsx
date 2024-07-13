import './CtaButton.css';

const CtaButton = ({ content, title }) => {
    return (
        <div className='cta-button'>
            <button title={title}>
                <span>{content}</span>
            </button>
        </div>
    )
}

export default CtaButton