import './ContactSection.css';
import ContactForm from "../ContactForm/ContactForm";

const ContactSection = () => {
    return (
        <section id="contact-section">
            <div className="section__text-container">
                <h3>Contactános!</h3>
                <p>Dejanos un mensaje y nos pondremos en contacto lo más rápido posible.</p>
            </div>
            <ContactForm />
        </section>
    )
}

export default ContactSection