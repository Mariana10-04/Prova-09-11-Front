import api from '../../service/api'
import './style.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";


export default function PagHome() {
  const [contato, setContato] = useState();

  useEffect(() => {
    api
      .get("contato")
      .then((response) => setContato(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  return(
    <div className="homeContainer">
      <div className="homeHeading">
        <h3>Lista de Contatos</h3>
        <Link to="/edit">
          <button className="buttonPrimary">
            Novo Contato
          </button>
        </Link>
      </div>
      <div>
        {contato?.map(contato => (
        <div key={contato.id} className="contato">
          <p>Nome: {contato.nome}</p>
          <p>Email: {contato.email}</p>
          <p>Telefone: {contato.number}</p>
        
        </div>
        ))}
      </div>
    </div>
  );
}