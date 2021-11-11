import { useState } from "react";
import { Link } from "react-router-dom";
import api from '../../service/api'

export default function Edit() {
  var url = window.location;

  const id = url.pathname
  const [nome, setNome] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  

  const toEdit = {
    nome: nome,
    email: email,
    number: number
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await edit(toEdit);
  }

  async function edit(toEdit) {
    const response = await api.put(id, toEdit)

    if (response.status == 200) {
      alert("Contato editado! AEEEEE")
    } else {
      alert("Deu ruim :(")
    }
  }

  return (
    <div classNome="container">
      <div classNome="heading">
        <h3>Editando Contato</h3>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="formBg border">
          <label htmlFor="nome">Nome:</label>
          <input type="text" nome="nome" onChange={value => setNome(value.target.value)} value={nome} />

          <label>Telefone:</label>
          <input type="text" name="number" onChange={value => setNumber(value.target.value)} value={number} />

          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={value => setEmail(value.target.value)} value={email} />

          <button type="submit" value="Editar">Confirmar</button>
          <Link to="/">
            <button>Cancelar</button>
          </Link>
        </div>
      </form>
    </div>

  );
}