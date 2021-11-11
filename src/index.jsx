import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Casinha from './views/pagHome';
import NovoContatinho from './views/novoContato';

ReactDOM.render(
  <Router>
    <Route path='/' exact component={Casinha} />
    <Route path='/edit' exact component={NovoContatinho} />
  </Router>,
  document.getElementById('root')
);