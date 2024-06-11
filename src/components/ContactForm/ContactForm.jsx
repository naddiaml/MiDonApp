import './ContactForm.css';
import CtaButton from '../CtaButton/CtaButton.jsx';

const ContactForm = () => {
    return (
        <div className="form__container">
            <form>
                <fieldset>
                    <div className="field">
                        <label htmlFor="name">Nombre<span className="required">*</span></label>
                        <input type="text" name="name" id="name" placeholder="Nombre"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="last-name">Apellido</label>
                        <input type="text" name="last-name" id="last-name" placeholder="Apellido"></input>
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email<span className="required">*</span></label>
                        <input type="email" name="email" id="email" placeholder="nombre@dominio.com"></input>
                    </div>
                </fieldset>
                <fieldset>
                    <label htmlFor="message">Mensaje<span className="required">*</span></label>
                    <textarea name="message" id="message" cols="30" rows="10"
                        placeholder="Escribe aquí tu mensaje."></textarea>
                </fieldset>
            </form>
            <CtaButton content={"Enviar"} />
        </div>
    )
}

export default ContactForm