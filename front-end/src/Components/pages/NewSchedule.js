import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import getMonth from "date-fns/getMonth";
import getYear from "date-fns/getYear";

import "react-datepicker/dist/react-datepicker.css";

import SidebarClient from "../shared/SidebarClient";

export default function NewSchedule() {
  const [startDate, setStartDate] = useState(new Date());
  const [time, setTime] = useState("10:00");

  const years = [2022, 2023];
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 1 && day !== 0;
  };
  
  function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  return (
    <Window>
      <SidebarClient />
      <Box>
        <h3>Novo agendamento</h3>
        <FormStyle>
          <div>
            <label>Tipo de serviço:</label>
            <select name="select" required>
              <option value="null" selected></option>
              <option value="hair">Cabelos</option>
              <option value="nails">Unhas</option>
              <option value="makeup">Maquiagem</option>
              <option value="hairRemoval">Depilação</option>
            </select>
          </div>

          <div>
            <label>Tipo de serviço:</label>
            <select name="select" required>
              <option value="null" selected></option>
              <option value="hair1">Corte</option>
              <option value="hair2">Matização</option>
              <option value="hair3">Corte Bordado</option>
              <option value="hair4">Pintura</option>
              <option value="hair5">Corte</option>
              <option value="hair6">Matização</option>
              <option value="hair7">Corte Bordado</option>
              <option value="hair8">Pintura</option>
            </select>
          </div>

          <div>
            <label for="price">Valor do serviço:</label>
            <input
              type="text"
              id="price"
              name="price"
              min="0"
              value="R$100,00"
              disabled
            />
          </div>

          <div>
            <label>Profissional:</label>
            <select name="select" required>
              <option value="null" selected></option>
              <option value="name1">Fulano</option>
              <option value="name2">Ciclano</option>
            </select>
          </div>


          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            maxDate={addDays(new Date(), 90)}
            filterDate={isWeekday}
          />

          <div>
            <label>Horário:</label>
            <select name="select" required>
              <option value="null" selected></option>
              <option value="time">8:00</option>
              <option value="time">9:00</option>
              <option value="time">10:00</option>
              <option value="time">11:00</option>
              <option value="time">12:00</option>
              <option value="time">13:00</option>
              <option value="time">14:00</option>
              <option value="time">15:00</option>
              <option value="time">16:00</option>
              <option value="time">17:00</option>
              <option value="time">18:00</option>
            </select>
          </div>

          <Buttons>
            <Link to="/showServices">
              <button>Voltar</button>
            </Link>
            <button className="confirm">Cadastrar</button>
          </Buttons>
        </FormStyle>
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

const FormStyle = styled.div`
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

    :disabled{
      background-color: #EBEBE4;
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
