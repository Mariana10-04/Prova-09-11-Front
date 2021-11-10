import { useState } from "react"
import api from '../../services/api'
import {Form, Input, Label, Button} from './style'


export default function Cadastro(props) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [tell, setTell] = useState("");
    

    const cadastro = {
        name: name,  
        email: email,
        tell: tell
      
    }

    async function handleSubmit(e) {
        e.preventDefault();
        await cadastrar(cadastro);
    }

    async function cadastrar(cadastro) {
        console.log(cadastro);
        const response = await api.post(
            '/contatos',
            cadastro
        )
        console.log(response.status);
        if (response.status === 201) {
            alert("Cadastrado com sucesso!!!")
        } else {
            alert("Contato já existente")
        }
    }

    return(
        <Form 
        onSubmit={(e) => handleSubmit(e)}
        >
            <Label>
                Nome:
                <Input
                type="text"
                name="name"
                onChange={value => setName(value.target.value)}
                value={name}
                />
            </Label>
            <Label>
                Email:
                <Input
                type="text"
                name="email"
                onChange={value => setEmail(value.target.value)}
                value={email}
                />
            </Label>
            <Label>
                Telefone:
                <Input
                type="text"
                name="tell"
                onChange={value => setTell(value.target.value)}
                value={tell}
                />
            </Label>

            <Button type="enviar" value="Cadastrar" />
        </Form>
    )
}