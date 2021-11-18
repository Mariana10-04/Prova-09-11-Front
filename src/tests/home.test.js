import React from 'react';
import {render, fireEvent, waitFor, screen} from"@testing-library/react";
import "@testing-library/jest-dom";
import Home from '../views/home';
import {BrowserRouter} from 'react-router-dom';

test ("teste da home",async()=>{

    const {getByTestId}=render(
        <BrowserRouter><Home/></BrowserRouter>  
    )

    const titulo=getByTestId("teste_home");
    const butao=getByTestId("teste_button_home");

    expect(titulo).toBeInTheDocument();  //espera q esteja dentro do doc
    expect(butao).toBeInTheDocument();

})
