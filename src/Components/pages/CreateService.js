import styled from "styled-components";
import InputMask from "react-input-mask";
import { useContext } from "react";
import Context from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import Modal from "react-modal";

import Sidebar from "../shared/Sidebar";

function Sectors({ sector }) {
  const name = sector.name[0].toUpperCase() + sector.name.substring(1);

  return <option value={sector.id}>{name}</option>;
}

export default function CreateService() {
  const { token } = useContext(Context);

  const [sectors, setSectors] = React.useState([]);

  const [sector_id, setSectorId] = React.useState("");
  const [nameService, setNameService] = React.useState("");
  const [description, setDescription] = React.useState(null);
  const [price, setPrice] = React.useState("");

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
    if(error === "Serviço cadastrado com sucesso!"){
      navigate("/showServices")
    }
  }

  const navigate = useNavigate();

  function submitForm(event) {
    event.preventDefault();

    setDisabled(true);
    setLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const service = { name: nameService, description, price, sector_id };

    console.log(service);

    const promise = axios.post(
      "http://localhost:5000/service",
      service,
      config
    );

    promise
      .then((response) => {
        setError("Serviço cadastrado com sucesso!");
        openModal();
        setDisabled(false);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        openModal();
        setDisabled(false);
        setLoading(false);
      });
  }

  function renderSections() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get("http://localhost:5000/sector", config);

    promise
      .then((response) => {
        setSectors(response.data);
      })
      .catch((error) => {
        alert("Sessão expirada!");
        navigate("/");
      });
  }

  React.useEffect(() => {
    renderSections();
  }, []);

  return (
    <Window>
      <Sidebar />
      <Box>
        <h3>Cadastrar Novo Serviço</h3>

        <FormStyle onSubmit={submitForm}>
          <div className="inputs">
            <div>
              <label>Tipo de serviço:</label>
              <select
                name="select"
                required
                onChange={(e) => setSectorId(e.target.value)}
              >
                <option value="null" selected></option>

                {sectors.map((sector, index) => (
                  <Sectors key={index} sector={sector} />
                ))}
              </select>
            </div>

            <div>
              <label for="name">Nome do serviço:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={nameService}
                onChange={(e) => setNameService(e.target.value)}
                disabled={disabled}
              />
            </div>

            <div>
              <label for="description">Descrição do serviço:</label>
              <input
                type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                disabled={disabled}
              />
            </div>

            <div>
              <label for="price">Valor do serviço:</label>
              <input
                type="number"
                id="price"
                name="price"
                min="0"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                disabled={disabled}
              />
            </div>
          </div>
          <Buttons>
            <Link to="/showServices">
              <button>Voltar</button>
            </Link>
            <button type="submit" className="confirm">
              Cadastrar
            </button>
          </Buttons>
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
  padding-bottom: 220px;
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

const FormStyle = styled.form`
  border-top: 1px solid var(--cor-detalhes);
  padding: 20px 0;

  div.inputs {
    display: flex;
    align-items: initial;
    flex-direction: column;
  }

  input,
  select {
    background-color: var(--cor-branca);
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--cor-texto);
    padding: 0 10px;
    margin-bottom: 20px;
    margin-top: 5px;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
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
