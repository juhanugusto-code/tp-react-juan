import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import ListaLocal from './Listalocal';
import Contacto from './Contacto';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "20px", backgroundColor: "#eee", marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "20px" }}>Inicio </Link>
        <Link to="/lista" style={{ marginRight: "20px" }}>Productos Locales</Link>
        <Link to="/contacto" style={{ marginRight: "20px" }}>Contacto</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/lista" element={<ListaLocal />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;