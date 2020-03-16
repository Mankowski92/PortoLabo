import React, {useState} from "react";

const ContactFooter = () => {
 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: {
            // !!!!!!!!!!!BODY TO SENT HERE!!!!!!!!!!

        }
      })
    }


return (
    <>
        <div className="contact-footer-container" id="contact">
            <div className="contact__container">
                <div className="contact__title">Skontaktuj się z nami</div>
                <div className="contact_decoration-box"></div>
                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="form__name-and-email__container">
                        <div className="form__name-and-email">
                            <span>Wpisz swoje imię</span><span>Wpisz swój email</span>
                        </div>
                        <div className="form__name-and-email__inputs">
                            <input 
                                type="text" 
                                value={name}
                                onChange={e => setName(e.target.value)} 
                                placeholder="Krzysztof" 
                                className="form_name" />
                            <input 
                                type="text" 
                                value={email} 
                                onChange={e => setEmail(e.target.value)}
                                placeholder="abc@xyz.pl" 
                                className="form_email"/>
                        </div>  
                    </div>
                    <div className="form__message">
                        <span>Wpisz swoją wiadomość</span>
                        <textarea
                        type="text" 
                        value={text} 
                        onChange={e => setText(e.target.value)}
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
                    </div>
                    <div className="form__button" onClick={handleSubmit}>Wyślij</div>
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

// import React, {useState} from "react";
// const AddCar = ({onAddCar}) => {
//   const [name, setName] = useState("");
//   const [brand, setBrand] = useState("");
//   const [engineType, setEngineType] = useState("petrol");
//   const [hp, setHp] = useState("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const obj = {
//       name
//       brand,
//       engine: {
//         type: engineType,
//         hp
//       }
//     };
//     fetch("http://localhost:3000/cars", {
//       method: "POST",
//       body: JSON.stringify(obj),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Błąd sieci!");
//         }
//       })
//       .then(data => {
//         onAddCar(prevState => [...prevState, data]);
//       })
//       .catch(err => {
//         console.error("Pojawiły się błędy - " + err.message);
//       });
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={name}
//         onChange={e => setName(e.target.value)}
//         placeholder="Wpisz model auta"/>
//       <input
//         type="text"
//         value={brand}
//         onChange={e => setBrand(e.target.value)}
//         placeholder="Wpisz markę auta"/>
//       <select
//         value={engineType}
//         onChange={e => setEngineType(e.target.value)}>
//         <option value="petrol">BENZYNA</option>
//         <option value="diesel">ROPA</option>
//         <option value="electric">PRUND</option>
//         <option value="hybrid">HYBRYDA</option>
//         <option value="lpg">LPG</option>
//         <option value="hydrogen">WODÓR</option>
//       </select>
//       <input
//         type="number"
//         value={hp}
//         onChange={e => setHp(e.target.value)}
//         placeholder="Wpisz ilość koni mechanicznych"/>
//       <button>Dodaj auto</button>
//     </form>
//   );
// };
// export default AddCar;


// import React, {useState, useEffect} from "react";
// const Holidays = () => {
//   const [data, setData] = useState(false);
//   const [country, setCountry] = useState("PL");
//   useEffect(() => {
//     fetch(`https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=${country}`)
//       .then(response => {
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error("Błąd sieci!");
//         }
//       })
//       .then(data => {
//         setData(data.holidays);
//       })
//       .catch(err => {
//         console.error("Pojawiły się błędy - " + err.message);
//       });
//   }, [country]);
//   if (data === false) {
//     return <h1>Ładuję...</h1>;
//   }
//   return (
//     <div>
//       <select value={country} onChange={(e) => setCountry(e.target.value)}>
//         <option value="PL">Poland</option>
//         <option value="GB">Great Britain</option>
//         <option value="US">United States</option>
//       </select>
//       <ul className="list">
//         {data.map(holiday => (
//           <li key={holiday.uuid}>
//             <h3 className="holiday-name">{holiday.name}</h3>
//             <div className="holiday-date">{holiday.date}</div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default Holidays;