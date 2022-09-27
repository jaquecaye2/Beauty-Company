import styled from "styled-components";
import { Link } from "react-router-dom";
import React from "react";

import Button from "../shared/Button";

import logo from "../../assets/images/logo.png"
import fundo from "../../assets/images/fundo.jpg"

export default function SignIn() {

  return (
    <Window>
      <FormStyle>
        <div className="logo">
          <img src={logo} alt="logotipo da empresa"/>
        </div>
        <div className="input">
          <ion-icon name="person"></ion-icon>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            required
          />
        </div>
        <div className="input">
          <ion-icon name="lock-closed"></ion-icon>
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha"
            required
          />
        </div>
        <Button>Entrar</Button>
      </FormStyle>
    </Window>
  );
}

const Window = styled.div`
  background-color: var(--cor-fundo);
  border: 1px solid var(--cor-fundo);
  width: 100%;
  height: 100%;
`

const FormStyle = styled.form`
  background-color: #ffffffef;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid var(--cor-lateral);
  width: 60%;
  margin: 8% auto;
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  div.input {
    width: 85%;
    border: 1px solid var(--cor-lateral);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-bottom: 10px;

    ion-icon {
      padding: 5px;
      font-size: 30px;
      color: var(--cor-detalhes);
      margin: 0 5px;
    }

    input {
      width: 100%;
      height: 58px;
      border: none;
      color: var(--cor-texto);
      font-size: 18px;
      border-left: 1px solid var(--cor-lateral);
      padding-left: 10px;
    }

    &::placeholder {
      color: var(--cor-texto);
    }
  }

  div.logo{
    margin-bottom: 50px;
  }
`;

const LinkEstilo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  a {
    text-decoration: none;
    color: var(--cor-texto);
    font-weight: 400;
    font-size: 15px;

    &:hover {
      text-decoration: underline;
    }
  }
`;