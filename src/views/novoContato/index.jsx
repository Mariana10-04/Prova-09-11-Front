import { useState } from "react"
import api from '../../service/api'

export default function NewContact() {
  const [nome, setNome] = useState("")
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const cadastro = {
        nome: nome,
        number: number,
        email: email
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await cadastrar(cadastro);
    }

    async function cadastrar(cadastro) {
        console.log(cadastro);
        const response = await api.post(
            '/contato',
            cadastro
        )
        if (response.status != 201) {
            alert("Já cadastrado")
        } else {
            alert("Cadastrado com sucesso!!!")
        }
    }
    
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
          <label>
              Nome:
              <input type="text" name="nome" onChange={value => setNome(value.target.value)} value={nome}/>
          </label>

          <label>
              Email:
              <input type="text" name="email" onChange={value => setEmail(value.target.value)} value={email}/>
          </label>

          <label>
              Telefone:
              <input type="text" name="number" onChange={value => setNumber(value.target.value)} value={number}/>
          </label>

          <button name="botao2" type="Enviar" value="Cadastrar">Vai caralha</button>
      </form>
    </div>
  );
}