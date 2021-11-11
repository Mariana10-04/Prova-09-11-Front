import api from '../../service/api'
import './style.css';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [contato, setContato] = useState();

  useEffect(() => {
    handleContato()
  }, []);

  async function handleDeleteContato(id) {

    if (window.confirm("Vai querer deletar mesmo?")) {
      const response = await api.delete("contato/" + id);
      handleContato()

      if (response.status !== 204) {
        alert("Vihs");
      } else {
        alert("Contato deletado")
      }
    }
  }

  async function handleContato() {
    const response = await api.get("contato/");

    if (response.status !== 204) {
      setContato(response.data)
    }
  }

  // async function findByEmail(email) {
  //   const response = await api.get("contato/email/" + email);

  //   if (response.status !== 204) {
  //     setContato(response.data)
  //   }
  // }

  return (
    <div className="container">
      <div className="heading">
        <h3>Lista de Contatos</h3>
        <Link to="/novoContato">
          <button className="btn buttonPrimary">Novo Contato</button>
        </Link>
      </div>
      <div>
        {contato?.map(contato => (
          <div key={contato.id} className="contact border">
            <div>
              <strong>Nome:</strong>
              <p>{contato.nome}</p>
            </div>
            <div>
              <strong>Email:</strong>
              <p>{contato.email}</p>
            </div>
            <div>
              <strong>Telefone:</strong>
              <p>{contato.number}</p>
            </div>
            <div className="flex">
              <Link to={"/contato/editarContato/" + contato.id}>
                <button className="btn buttonPrimary" >Editar</button>
              </Link>
              <button className="btn buttonDanger" onClick={() => handleDeleteContato(contato.id)}>
                Deletar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}