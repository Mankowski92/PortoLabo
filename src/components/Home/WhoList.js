import React, {useState, useEffect} from "react";


const WhoList = () => {

    const [data, setData] = useState(false);

    useEffect(() => {
        fetch(`https://api.jsonbin.io/b/5e69461fe835bb6a77a18247/2`,
        {
            method: "GET",
            headers: {  
            "Content-Type": "application/json",
            "secret-key": "$2b$10$u8DPHjDCkFgde26MlWEb3O7/ERBULwxzQHDBlS3.HL3Zok7YPW4cC"
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
            setData(data);
            console.log(data)
          })
          .catch(err => {
            console.error("Pojawiły się błędy - " + err.message);
          });
      }, []);

 if (!data) {
    return <h1>Ładuje...</h1>;
  }
  return (
    <div className="test">
      
        {data[0]}
      
    </div>
  )
}

export default WhoList