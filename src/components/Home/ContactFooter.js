import React, { useState } from "react";

const ContactFooter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const obj = {
      name,
      email,
      message
    };

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === "success") {
          console.log("OK!");
        } else {
            console.log("NOT OK AT ALL")
            }
      });
  };

  return (
    <>
      <div className="contact-footer-container" id="contact">
        <div className="contact__container">
          <div className="contact__title">Skontaktuj się z nami</div>
          <div className="contact_decoration-box"></div>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="form__name-and-email__container">
              <div className="form__name-and-email">
                <span>Wpisz swoje imię</span>
                <span>Wpisz swój email</span>
              </div>
              <div className="form__name-and-email__inputs">
                <input
                  type="text"
                  onChange={e => setName(e.target.value)}
                  value={name}
                  placeholder="Krzysztof"
                  className="form_name"
                />
                <input
                  type="email"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  placeholder="abc@xyz.pl"
                  className="form_email"
                />
              </div>
            </div>
            <div className="form__message">
              <span>Wpisz swoją wiadomość</span>
              <textarea
                type="text"
                onChange={e => setMessage(e.target.value)}
                value={message}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ></textarea>
            </div>
            <button className="form__button" type="submit">
              Wyślij
            </button>
          </form>
        </div>
        <div className="contact__over">
          <div className="contact__social-media">
            <div></div>
            <div className="footer__copyright">Copyright by Coders Lab</div>
            <div className="footer__socials">
              <div className="footer__socials__facebook"></div>

              {/*It could be problematic to add hrefs to empty div with backgroud added as class}
                        more handy solution will be to add socials as font awesome or <img></img> 
                        I should change it asap */}

              <div className="footer__socials__instagram"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFooter;
