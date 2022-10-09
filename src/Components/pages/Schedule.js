import styled from "styled-components";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useNavigate } from "react-router-dom";
import Context from "../../Context/Context";
import React, { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// criar um events para cada profissional - pegar isso na api conforme o id do profissional vier
//import events from "../events/events.js";

import Sidebar from "../shared/Sidebar";

function Professionals({ professional, setName }) {
  const navigate = useNavigate();

  function navigatePage() {
    setName(professional.name)
    navigate(`/schedule/${professional.id}`);
  }

  return (
    <div onClick={navigatePage}>
      <img src={professional.image} alt="foto perfil" />
      <p>{professional.name}</p>
    </div>
  );
}

export default function Schedule() {
  const { token } = useContext(Context);
  const navigate = useNavigate();

  const localizer = momentLocalizer(moment);
  const { id_professional } = useParams();
  const [name, setName] = React.useState("")
  const [professionals, setProfessionals] = React.useState([]);
  const [events, setEvents] = React.useState([])


  function renderProfessionals() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get("http://localhost:5000/professionals", config);

    promise
      .then((response) => {
        setProfessionals(response.data);
      })
      .catch((error) => {
        alert("Sessão expirada!");
        navigate("/");
      });
  }

  function renderSchedules() {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(
      `http://localhost:5000/schedule/${id_professional}`,
      config
    );

    promise
      .then((response) => {
        const schedules = response.data

        const events = []

        for(let i = 0; i < schedules.length; i++){
          const date = schedules[i].date.split("/")

          const event = {
            title: `${schedules[i].services.name} | ${schedules[i].clients.name}`,
            start: new Date(`${date[0]}`,`${date[1] - 1}`, `${date[2]}`, `${schedules[i].hour}`, 0, 0),
            end: new Date(`${date[0]}`,`${date[1] - 1}`, `${date[2]}`, `${schedules[i].hour + 1}`, 0, 0)
          }

          events.push(event)
        }
        setEvents(events)
      })
      .catch((error) => {
        alert("Sessão expirada!");
        navigate("/");
      });
  }

  React.useEffect(() => {
    renderProfessionals();
    renderSchedules()
  }, [id_professional]);

  return (
    <Window>
      <Sidebar />
      <BoxCalendar>
        <ProfessionalsStyle>
          <h3>Escolha o profissional que você deseja ver a agenda:</h3>
          <div className="professionals">
            {professionals.map((professional, index) => (
              <Professionals key={index} professional={professional} setName={setName}/>
            ))}
          </div>
        </ProfessionalsStyle>
        <div className="calendar">
          <h2>Mostrando agenda de {name}</h2>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultView={Views.DAY}
            style={{ height: 500 }}
            min={new Date(0, 0, 0, 8, 0, 0)}
            max={new Date(0, 0, 0, 19, 0, 0)}
            eventPropGetter={(event, start, end, isSelected) => ({
              event,
              start,
              end,
              isSelected,
              style: { backgroundColor: "#8C6E64" },
            })}
          />
        </div>
      </BoxCalendar>
    </Window>
  );
}

const Window = styled.div`
  margin-top: 85px;
  width: 100%;
  display: flex;
`;

const BoxCalendar = styled.div`
  padding: 20px;
  width: 75%;
  margin: 0 auto;

  div.calendar {
    margin-bottom: 50px;

    h2{
      font-size: 20px;
      margin-bottom: 20px;
      font-weight: bold;
      color: var(--cor-detalhes);
    }

    .rbc-timeslot-group {
      min-height: 70px;
    }

    .rbc-calendar {
      font-size: 14px;
    }
  }
`;

const ProfessionalsStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cor-header);
  border-radius: 10px;
  margin-bottom: 50px;
  padding: 15px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  div.professionals {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;

    div {
      background-color: var(--cor-header);
      padding: 10px;
      width: 25%;
      height: 70px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--cor-lateral);

      :hover {
        filter: brightness(0.9);
        cursor: pointer;
      }
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
      margin-right: 10px;
    }

    p {
      font-size: 18px;
    }
  }
`;
