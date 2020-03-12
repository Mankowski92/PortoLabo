import React, {useState, useEffect} from "react";


const WhoList = () => {

    const [data, setData] = useState(false);

    useEffect(() => {
        fetch(`https://jsonbin.io/5e69461fe835bb6a77a18247/4`,
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
            console.log(data.array[0].foundations[0].name)
            console.log(data.array[1].organisations[0].name)
            console.log(data.array[2].local[0].name)
          })
          .catch(err => {
            console.error("Pojawiły się błędy - " + err.message);
          });
      }, []);

 if (!data) {
    return <h1>Ładuje...</h1>;
  }
  return (
    <div className="entity-container">
      <div className="entity-name-and-description">
        <div className="entity-name-and-description__name">{data.array[0].foundations[0].name}</div>
        <div className="entity-name-and-description__description">{data.array[0].foundations[0].description}</div>
      </div>
      <div className="entity-additional-info">{data.array[0].foundations[0].status}</div>
    </div>
  )
}

export default WhoList