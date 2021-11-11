import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Casinha from './views/home';
import NovoContatinho from './views/novoContato';
import EditarContatinho from './views/editorContato';

ReactDOM.render(
  <Router>
    <Route path='/' exact component={Casinha} />
    <Route path='/novoContato' exact component={NovoContatinho} />
    <Route path= '/contato/editarContato/:id' exact component={EditarContatinho}/>
  </Router>,
  document.getElementById('root')
);