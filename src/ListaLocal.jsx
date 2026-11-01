import React from 'react';

import { productos } from './datos';

function ListaLocal() {

          return (
    <div>
      <h1>Productos Locales</h1>
            {productos.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>
          <p>Precio: ${producto.precio}</p>
          <img src={producto.imagen} alt={producto.nombre} style={{ width: "100px" }} />
        </div>
      ))}

          </div>
  );
}

export default ListaLocal;