import { render, screen, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom";
import axios from "../mocks/axios"
import AddContato from '../tests/AddContato';

const mockedContato = { 
  nome: "Teste agora vai",
  number: "00000000",
  email: "bagasa@teste.com",
}

const openForm = true;

const handleFormClose = jest.fn();

describe(`${AddContato.nome}`, () => {

  
  test('pra não enviar vazio', async () => {
    axios.post.mockImplementation(() => Promise.resolve());

    render(
      <AddContato 
        openForm={openForm}
        handleFormClose={handleFormClose}
      />
    );
    
    const emailFild = screen.getByTestId("email").querySelector('input');
    const nomeFild = screen.getByTestId("nome").querySelector('input');
    const numberFild = screen.getByTestId("number").querySelector('input');
    const button = screen.getByText("salvoo");

    fireEvent.change(emailFild, { target: { value: "bagasa@teste.com"}});
    fireEvent.change(nomeFild, { target: { value: "Teste5"}});
    expect(emailFild.value).toBe("bagasa@teste.com");
    expect(nomeFild.value).toBe("Teste5");
    expect(numberFild.value).toBe("");
    fireEvent.click(button);

    expect(axios.post).toHaveBeenCalledTimes(0);
  })

})