import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useContext } from "react";
import Context from "../../Context/Context";
import { ThreeDots } from "react-loader-spinner";
import Modal from "react-modal";
import axios from "axios";

import Button from "../shared/Button";
import logo from "../../assets/images/logo.png";

export default function SignIn() {
  const { setToken, setAccessLevel, setIdUSer } = useContext(Context);

  const [typeLogin, setTypeLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [disabled, setDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-15%",
      transform: "translate(-50%, -50%)",
      border: "1px solid var(--cor-detalhes)",
      borderRadius: "10px",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [error, setError] = React.useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    setDisabled(true);
    setLoading(true);

    const userData = {
      email,
      password,
    };

    if (!typeLogin) {
      setError("Necessário selecionar uma opção de login");
      openModal();
      setDisabled(false);
      setLoading(false);
    } else if (typeLogin === "company") {
      const promise = axios.post(
        "http://localhost:5000/signincompany",
        userData
      );

      promise
        .then((response) => {
          setToken(response.data);
          setAccessLevel("company");
          navigate("/schedule/1");
        })
        .catch((error) => {
          setError(error.response.data);
          openModal();
          setDisabled(false);
          setLoading(false);
        });
    } else if (typeLogin === "client") {
      const promise = axios.post(
        "http://localhost:5000/signinclient",
        userData
      );

      promise
        .then((response) => {
          setToken(response.data.token);
          setIdUSer(response.data.iduser);
          setAccessLevel("client");
          navigate("/clientProfile");
        })
        .catch((error) => {
          setError(error.response.data);
          openModal();
          setDisabled(false);
          setLoading(false);
        });
    }
  }

  return (
    <Window>
      <FormStyle onSubmit={submitForm}>
        <div className="logo">
          <img src={logo} alt="logotipo da empresa" />
        </div>
        <div className="input">
          <ion-icon name="people"></ion-icon>
          <select
            name="select"
            required
            onChange={(e) => setTypeLogin(e.target.value)}
          >
            <option value="null" selected>
              Selecione opção ...
            </option>
            <option value="company" disabled={disabled}>
              Empresa
            </option>
            <option value="client" disabled={disabled}>
              Cliente
            </option>
          </select>
        </div>
        <div className="input">
          <ion-icon name="person"></ion-icon>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={disabled}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={disabled}
            required
          />
        </div>
        {loading ? (
          <Button disabled={disabled}>
            <ThreeDots color="#ffffff" height={45} width={80} />
          </Button>
        ) : (
          <Button disabled={disabled}>Entrar</Button>
        )}
      </FormStyle>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalEstilo>
          <p>{error}</p>
          <button onClick={closeModal}>Fechar</button>
        </ModalEstilo>
      </Modal>
    </Window>
  );
}

const Window = styled.div`
  background-color: var(--cor-fundo);
  border: 1px solid var(--cor-fundo);
  width: 100%;
  height: 100%;
`;

const FormStyle = styled.form`
  background-color: #ffffffef;
  border-radius: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid var(--cor-lateral);
  width: 60%;
  margin: 70px auto;
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

    input,
    select {
      background-color: var(--cor-branca);
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

  div.logo {
    margin-bottom: 50px;
  }
`;

const ModalEstilo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    font-size: 18px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  p {
    line-height: 25px;
    text-align: center;

    span {
      font-weight: 200;
    }
  }

  button {
    width: 50%;
    height: 30px;
    margin-top: 20px;
    background-color: var(--cor-detalhes);
    color: var(--cor-fundo);
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
