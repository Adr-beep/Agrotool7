import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Panelusuarios from './Componentes/Panelusuarios';
import Crearusuarios from './Componentes/Crearusuarios';
import Infousuario from './Componentes/Infousuario';
import Crearpredios from './Componentes/Crearpredios';
import Crearcultivos from './Componentes/Crearcultivo';

ReactDOM.render( 
  <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Registro" element={<Registro />}/>
      <Route path="/Panelusuarios" element={<Panelusuarios/>}/>
      <Route path="/Crearusuarios" element={<Crearusuarios/>}/>
      <Route path="/Infousuario" element={<Infousuario/>}/>
      <Route path="/Crearpredios" element={<Crearpredios/>}/>
      <Route path="/Crearcultivos" element={<Crearcultivos/>}/>
    </Routes>
  </BrowserRouter>
  
</>,
document.getElementById('root')
);

function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Registro" element={<Registro />}/>
          <Route path="/Panelusuarios" element={<Panelusuarios/>}/>
          <Route path="/Crearusuarios" element={<Crearusuarios/>}/>
          <Route path="/Infousuario" element={<Infousuario/>}/>
          <Route path="/Crearpredios" element={<Crearpredios/>}/>
          <Route path="/Crearcultivos" element={<Crearcultivos/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default Index;



