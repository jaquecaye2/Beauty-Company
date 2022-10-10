import styled from "styled-components";
import InputMask from "react-input-mask";
import { useContext } from "react";
import Context from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Modal from "react-modal";

import Sidebar from "../shared/Sidebar";

import perfil from "../../assets/images/example.jpeg";

export default function CreateClient() {
  const { token } = useContext(Context);

  const [image, setImage] = React.useState("");
  const [name, setName] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [sex, setSex] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [complement, setComplement] = React.useState(null);
  const [district, setDistrict] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

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
    if (password === confirmPassword) {
      event.preventDefault();

      setDisabled(true);
      setLoading(true);

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const date = birthdate.split("/");

      const client = {
        number,
        image,
        name,
        birthdate: `${date[2]}/${date[1]}/${date[0]}`,
        cpf,
        sex,
        street,
        complement,
        district,
        city,
        state,
        phone,
        email,
        password,
      };

      console.log(client);

      const promise = axios.post(
        "http://localhost:5000/client",
        client,
        config
      );

      promise
        .then((response) => {
          console.log(response.data);
          setError("Cliente cadastrado com sucesso!");
          openModal();
          setDisabled(false);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.response.data);
          openModal();
          setDisabled(false);
          setLoading(false);
        });
    }
  }

  return (
    <Window>
      <Sidebar />
      <Box>
        <h3>Cadastrar Novo Cliente</h3>

        <form onSubmit={submitForm}>
          <ElementForm>
            <h4>Informações pessoais</h4>

            <div className="personalInfo">
              <div className="profilePicture">
                <label for="avatar">
                  Digite uma URL para sua foto de perfil:
                </label>
                <div>
                  <img src={image ? image : perfil} />
                </div>
                <input
                  type="text"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
              <div>
                <div>
                  <label for="name">Nome Completo:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={disabled}
                  />
                </div>
                <div>
                  <label for="date">Data de nascimento:</label>
                  <InputMask
                    id="date"
                    name="date"
                    mask="99/99/9999"
                    required
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    disabled={disabled}
                  />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <InputMask
                    id="cpf"
                    name="cpf"
                    mask="999.999.999-99"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    disabled={disabled}
                    required
                  />
                </div>
                <div>
                  <label>Sexo:</label>
                  <select
                    name="select"
                    required
                    onChange={(e) => setSex(e.target.value)}
                  >
                    <option value="null" selected></option>
                    <option value="female">Feminino</option>
                    <option value="masc">Masculino</option>
                    <option value="other">Prefiro não responder</option>
                  </select>
                </div>
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações de endereço</h4>

            <div>
              <div>
                <label for="adress">Endereço:</label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
              <div>
                <label for="number">Número:</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
              <div>
                <label for="complement">Complemento:</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  disabled={disabled}
                />
              </div>
              <div>
                <label for="district">Bairro:</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
              <div>
                <label for="city">Cidade:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
              <div>
                <label for="state">Estado:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações de contato</h4>
            <div className="contacts">
              <div>
                <label for="phone">Telefone:</label>
                <InputMask
                  id="phone"
                  name="phone"
                  mask="(99) 99999-9999"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações para login no sistema</h4>

            <div>
              <div>
                <label for="email2">E-mail:</label>
                <input
                  type="email"
                  id="email2"
                  name="email2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
              <div>
                <label for="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
              <div>
                <label for="confirmPassword">Confirme a senha:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={disabled}
                  required
                />
              </div>
            </div>
          </ElementForm>

          <Buttons>
            <Link to="/showClients">
              <button>Voltar</button>
            </Link>
            <button type="submit" className="confirm">
              Cadastrar
            </button>
          </Buttons>
        </form>
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
      </Box>
    </Window>
  );
}

const Window = styled.div`
  margin-top: 84px;
  width: 100%;
  display: flex;
`;

const Box = styled.div`
  padding: 20px;
  width: 75%;
  margin: 0 auto;

  h3 {
    color: var(--cor-detalhes);
    text-transform: uppercase;
    font-size: 22px;
    font-weight: bolder;
    text-align: center;
    margin: 20px 0;
  }
`;

const ElementForm = styled.div`
  border-top: 1px solid var(--cor-detalhes);
  padding: 30px 0;

  h4 {
    color: var(--cor-detalhes);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  div.contacts {
    justify-content: left;

    div {
      margin-right: 5%;
    }
  }

  div > div {
    width: 30%;
    margin: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  div.personalInfo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 45%;

      div {
        width: 100%;
      }
    }
  }

  div.profilePicture {
    height: 300px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        border-radius: 200px;
        width: 200px;
        height: 200px;
        object-fit: cover;
      }
    }
  }

  label {
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--cor-texto);
    padding: 0 10px;
  }

  select {
    background-color: var(--cor-branca);
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--cor-texto);
    padding: 0 10px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: var(--cor-fundo);
  }

  button {
    font-size: 18px;
    border: none;
    border-radius: 7px;
    background-color: var(--cor-detalhes);
    color: var(--cor-fundo);
    height: 30px;
    width: 150px;

    :hover {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }

  button.confirm {
    background-color: #3cb371;
    color: var(--cor-fundo);
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
