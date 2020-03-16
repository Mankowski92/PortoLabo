import React from "react";


const ContactFooter = () => {
    

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Błąd sieci!");
          }
        })
        .then(data => {
          onAddCar(prevState => [...prevState, data]);
        })
        .catch(err => {
          console.error("Pojawiły się błędy - " + err.message);
        });


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
                        <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
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


import React, {useState} from "react";
const AddCar = ({onAddCar}) => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [engineType, setEngineType] = useState("petrol");
  const [hp, setHp] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name,
      brand,
      engine: {
        type: engineType,
        hp
      }
    };
    fetch("http://localhost:3000/cars", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Błąd sieci!");
        }
      })
      .then(data => {
        onAddCar(prevState => [...prevState, data]);
      })
      .catch(err => {
        console.error("Pojawiły się błędy - " + err.message);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Wpisz model auta"/>
      <input
        type="text"
        value={brand}
        onChange={e => setBrand(e.target.value)}
        placeholder="Wpisz markę auta"/>
      <select
        value={engineType}
        onChange={e => setEngineType(e.target.value)}>
        <option value="petrol">BENZYNA</option>
        <option value="diesel">ROPA</option>
        <option value="electric">PRUND</option>
        <option value="hybrid">HYBRYDA</option>
        <option value="lpg">LPG</option>
        <option value="hydrogen">WODÓR</option>
      </select>
      <input
        type="number"
        value={hp}
        onChange={e => setHp(e.target.value)}
        placeholder="Wpisz ilość koni mechanicznych"/>
      <button>Dodaj auto</button>
    </form>
  );
};
export default AddCar;