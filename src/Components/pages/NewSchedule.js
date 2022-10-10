import styled from "styled-components";
import Context from "../../Context/Context";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import Modal from "react-modal";

import SidebarClient from "../shared/SidebarClient";

function Sectors({ sector }) {
  const name = sector.name[0].toUpperCase() + sector.name.substring(1);

  return <option value={sector.id}>{name}</option>;
}

function Services({ service }) {
  const name = service.name[0].toUpperCase() + service.name.substring(1);

  return <option value={service.id}>{name}</option>;
}

function Professionals({ professional }) {
  const name =
    professional.name[0].toUpperCase() + professional.name.substring(1);

  return <option value={professional.id}>{name}</option>;
}

function Hours({ hour }) {
  return <option value={hour}>{hour}:00</option>;
}

export default function NewSchedule() {
  const navigate = useNavigate();

  const { token, iduser } = useContext(Context);

  const [sectors, setSectors] = useState([]);
  const [selectedSector, setSelectedSector] = useState("");
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("");
  const [price, setPrice] = useState("");
  const [professionals, setProfessionals] = useState([]);
  const [selectedProfissional, setSelectedProfissional] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState("");
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [avaiableHours, setAvaiablesHours] = useState([]);

  const [disabledService, setDisabledService] = React.useState(true);
  const [disabledProfessional, setDisabledProfessional] = React.useState(true);
  const [disabledHour, setDisabledHour] = React.useState(true);

  const [loading, setLoading] = React.useState(false);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 1 && day !== 0;
  };

  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function renderSections() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get("http://localhost:5000/sectors", config);

    promise
      .then((response) => {
        setSectors(response.data);
      })
      .catch((error) => {
        alert("Sessão expirada!");
        navigate("/");
      });
  }

  function renderServices() {
    if (selectedSector === "null") {
      setDisabledService(true);
      setServices([]);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = axios.get(
        `http://localhost:5000/services/${selectedSector}`,
        config
      );

      promise
        .then((response) => {
          setServices(response.data);
        })
        .catch((error) => {});
    }
  }

  function renderProfessionals() {
    if (selectedSector === "null") {
      setDisabledService(true);
      setServices([]);
    } else {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const promise = axios.get(
        `http://localhost:5000/professionals/${selectedSector}`,
        config
      );

      promise
        .then((response) => {
          setProfessionals(response.data);
        })
        .catch((error) => {});
    }
  }

  function renderHours() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const date = `${selectedDate.getFullYear()}/${
      selectedDate.getMonth() + 1
    }/${selectedDate.getDate()}`;

    const body = {
      date: date,
      professionals_id: Number(selectedProfissional),
    };

    const promise = axios.post(`http://localhost:5000/hours`, body, config);

    promise
      .then((response) => {
        const hoursNotAvaiable = [];
        for (let i = 0; i < response.data.length; i++) {
          hoursNotAvaiable.push(response.data[i].hour);
        }

        for (let i = 0; i < hours.length; i++) {
          for (let j = 0; j < hoursNotAvaiable.length; j++) {
            if (hours[i] == hoursNotAvaiable[j]) {
              hours.splice(i, 1);
            }
          }
        }

        setAvaiablesHours(hours);
      })
      .catch((error) => {});
  }

  React.useEffect(() => {
    renderSections();

    if (selectedSector) {
      renderServices();
      renderProfessionals();
      setDisabledService(false);
      setDisabledProfessional(false);
    }

    for (let i = 0; i < services.length; i++) {
      if (services[i].id == selectedService) {
        setPrice(services[i].price);
      }
    }

    if (selectedDate && selectedProfissional) {
      renderHours();
      setDisabledHour(false);
    }
  }, [
    selectedSector,
    selectedService,
    selectedProfissional,
    selectedDate,
    selectedHour,
  ]);

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
    if(error === "Agendamento realizado com sucesso!"){
      navigate("/clientProfile")
    }
  }

  function submitForm(event) {
    event.preventDefault();

    setLoading(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const info = {
      date: `${selectedDate.getFullYear()}/${selectedDate.getMonth() + 1}/${selectedDate.getDate()}`,
      hour: Number(selectedHour),
      clients_id: iduser,
      professionals_id: Number(selectedProfissional),
      services_id: Number(selectedService),
    };

    const promise = axios.post("http://localhost:5000/schedule", info, config);

    promise
      .then((response) => {
        setError("Agendamento realizado com sucesso!");
        openModal();
        setLoading(false);
      })
      .catch((error) => {
        setError(error.response.data);
        openModal();
        setLoading(false);
      });
  }

  return (
    <Window>
      <SidebarClient />
      <Box>
        <h3>Novo agendamento</h3>
        <FormStyle onSubmit={submitForm}>
          <div>
            <label>Setor de serviço:</label>
            <select
              name="select"
              required
              onChange={(e) => setSelectedSector(e.target.value)}
            >
              <option value="null" selected></option>
              {sectors.map((sector, index) => (
                <Sectors key={index} sector={sector} />
              ))}
            </select>
          </div>

          <div>
            <label>Tipo de serviço:</label>
            <select
              name="select"
              required
              disabled={disabledService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              <option value="null" selected></option>
              {services.map((service, index) => (
                <Services key={index} service={service} />
              ))}
            </select>
          </div>

          <div>
            <label for="price">Valor do serviço:</label>
            <input
              type="text"
              id="price"
              name="price"
              min="0"
              value={`R$ ${price},00`}
              disabled
            />
          </div>

          <div>
            <label>Profissional:</label>
            <select
              name="select"
              required
              disabled={disabledProfessional}
              onChange={(e) => setSelectedProfissional(e.target.value)}
            >
              <option value="null" selected></option>
              {professionals.map((professional, index) => (
                <Professionals key={index} professional={professional} />
              ))}
            </select>
          </div>

          <label>Data do agendamento:</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            maxDate={addDays(new Date(), 90)}
            filterDate={isWeekday}
          />

          <div>
            <label>Horário:</label>
            <select
              name="select"
              required
              disabled={disabledHour}
              onChange={(e) => setSelectedHour(e.target.value)}
            >
              <option value="null" selected></option>
              {avaiableHours.map((hour, index) => (
                <Hours key={index} hour={hour} />
              ))}
            </select>
          </div>

          <Buttons>
            <Link to="/clientProfile">
              <button>Voltar</button>
            </Link>

            {loading ? (
              <button type="submit" className="confirm">
                <ThreeDots color="#ffffff" height={45} width={80} />
              </button>
            ) : (
              <button type="submit" className="confirm">
                Cadastrar
              </button>
            )}
          </Buttons>
        </FormStyle>
      </Box>
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

const FormStyle = styled.form`
  border-top: 1px solid var(--cor-detalhes);
  padding: 20px 0;
  padding-bottom: 100px;

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

    :disabled {
      background-color: #ebebe4;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
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
