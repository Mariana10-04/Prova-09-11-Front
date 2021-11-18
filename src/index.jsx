import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Casinha from './views/home';
import NovoContatinho from './views/novoContato';
import EditarContatinho from './views/editorContato';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<Casinha/>} />
    <Route path='/novoContato' element={<NovoContatinho/>} />
    <Route path= '/contato/editarContato/:id' element={<EditarContatinho/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);