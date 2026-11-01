import React, { useState, useEffect } from 'react'; 
function Inicio() {
      const [datos, setDatos] = useState([]);
        useEffect(() => {    fetch("https://jsonplaceholder.typicode.com/photos?_limit=3")
        .then((response) => response.json())
        .then((json) => setDatos(json));
      }, []);
      

        return (
    <div>
      <h1>Fotos de la API</h1>
      
      {datos.map((foto) => (
        <div key={foto.id}>
          {/* Solo mostramos la imagen para que sea simple */}
          <img src={foto.url} alt="foto" style={{ width: "100px" }} />
        </div>
      ))}
      
    </div>
  );
}

export default Inicio;