import styled from "styled-components";
import { useContext } from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const { openSidebar } = useContext(Context);

  return openSidebar ? (
    <SidebarStyle>
      <ul>
        <Link to="/clientProfile">
          <li>
            <ion-icon name="newspaper-outline"></ion-icon>
            <p>Seu perfil</p>
          </li>
        </Link>
        <Link to="/newSchedule">
          <li>
            <ion-icon name="people-outline"></ion-icon>
            <p>Novo agendamento</p>
          </li>
        </Link>
      </ul>
    </SidebarStyle>
  ) : null;
}

const SidebarStyle = styled.div`
  background-color: var(--cor-header);
  border: 1px solid var(--cor-lateral);
  width: 25%;
  min-height: 500px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 80px;
  left: 0;

  ul {
    margin-top: 20px;

    li {
      padding: 15px;
      font-size: 18px;
      height: 50px;
      border-bottom: 1px solid var(--cor-lateral);
      display: flex;

      :hover {
        background-color: var(--cor-header);
        cursor: pointer;
        filter: brightness(0.9);
      }

      ion-icon {
        font-size: 22px;
        margin-right: 10px;
      }
    }

    a{
      text-decoration: none;
      color: var(--cor-texto);
    }
  }
`;
