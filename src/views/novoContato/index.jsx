import { useState } from "react"
import api from '../../service/api'

export default function NewContact() {
  const [name, setName] = useState("")
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const cadastro = {
        name: name,
        phone: phone,
        email: email
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await cadastrar(cadastro);
    }

    async function cadastrar(cadastro) {
        console.log(cadastro);
        const response = await api.post(
            '/contacts',
            cadastro
        )
        if (response.status === 201) {
            alert("Cadastrado com sucesso!!!")
        } else {
            alert("Já cadastrado")
        }
    }
    
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
          <label>
              Nome:
              <input type="text" name="name" onChange={value => setName(value.target.value)} value={name}/>
          </label>
          <label>
              Telefone:
              <input type="text" name="phone" onChange={value => setPhone(value.target.value)} value={phone}/>
          </label>
          <label>
              Email:
              <input type="text" name="email" onChange={value => setEmail(value.target.value)} value={email}/>
          </label>

          <button type="Enviar" value="Cadastrar">Vai caralha</button>
      </form>
    </div>
  );
}