import styled from "styled-components";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

// criar um events para cada profissional - pegar isso na api conforme o id do profissional vier
import events from "../events/events.js";

import Sidebar from "../shared/Sidebar";

import perfil1 from "../../assets/images/perfil1.jpeg";
import perfil2 from "../../assets/images/perfil2.jpeg";
import perfil3 from "../../assets/images/perfil3.jpeg";
import perfil4 from "../../assets/images/perfil4.jpg";

export default function Schedule() {
  const localizer = momentLocalizer(moment);

  return (
    <Window>
      <Sidebar />
      <BoxCalendar>
        <Professionals>
          <h3>Escolha o profissional que você deseja ver a agenda:</h3>
          <div className="professionals">
            <div>
              <img src={perfil1} alt="foto perfil" />
              <p>Tocya</p>
            </div>
            <div>
              <img src={perfil2} alt="foto perfil" />
              <p>Sopon</p>
            </div>
            <div>
              <img src={perfil3} alt="foto perfil" />
              <p>Rorea</p>
            </div>
            <div>
              <img src={perfil4} alt="foto perfil" />
              <p>Elbro</p>
            </div>
          </div>
        </Professionals>
        <div className="calendar">
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
                style: { backgroundColor: "#9e3f39" }
              })}
          />
        </div>
      </BoxCalendar>
    </Window>
  );
}

const Window = styled.div`
  margin-top: 84px;
  width: 100%;
  display: flex;
`;

const BoxCalendar = styled.div`
  padding: 20px;
  width: 75%;
  margin: 0 auto;

  div.calendar {
    margin-bottom: 50px;

    .rbc-timeslot-group {
      min-height: 70px;
    }

    .rbc-calendar {
      font-size: 14px;
    }
  }
`;

const Professionals = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--cor-header);
  margin-bottom: 50px;
  padding: 10px;

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
  }

  div.professionals {
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      background-color: var(--cor-header);
      padding: 10px;
      width: 100%;
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
