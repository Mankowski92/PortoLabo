import React from "react";


const ContactFooter = () => {
    
return (
    <>
        <div className="contact-footer-container" id="contact">
            <div className="contact__container">
                <div className="contact__title">Skontaktuj się z nami</div>
                <div className="contact_decoration-box"></div>
                <form className="contact__form">
                    <div className="form__name-and-email__container">
                        <div className="form__name-and-email">
                            <span>Wpisz swoje imię</span><span>Wpisz swój email</span>
                        </div>
                        <div className="form__name-and-email__inputs">  
                            <input type="text" placeholder="Krzysztof" className="form_name" />
                            <input type="text" placeholder="abc@xyz.pl" className="form_email"/>
                        </div>  
                    </div>
                    <div className="form__message">
                        <span>Wpisz swoją wiadomość</span>
                        <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</textarea>
                    </div>
                    <div className="form__button">Wyślij</div>
                </form>
            </div>
            <div className="contact__over">
                <div className="contact__social-media">
                    <div></div>
                    <div className="footer__copyright">Copyright by Coders Lab</div>
                    <div className="footer__socials">
                        <div className="footer__socials__facebook"></div>
                        <div className="footer__socials__instagram"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
}

export default ContactFooter
