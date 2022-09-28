import styled from "styled-components";
import { useContext } from "react";
import Context from "../../Context/Context";

export default function Sidebar() {
  const { openSidebar } = useContext(Context);

  return openSidebar ? (
    <SidebarStyle>
      <ul>
        <li>
          <ion-icon name="newspaper-outline"></ion-icon>
          <p>Agenda</p>
        </li>
        <li>
          <ion-icon name="people-outline"></ion-icon>
          <p>Clientes</p>
        </li>
        <li>
          <ion-icon name="bag-handle-outline"></ion-icon>
          <p>Serviços</p>
        </li>
        <li>
          <ion-icon name="person-outline"></ion-icon>
          <p>Profissionais</p>
        </li>
      </ul>
    </SidebarStyle>
  ) : null;
}

const SidebarStyle = styled.div`
  background-color: var(--cor-header);
  border: 1px solid var(--cor-lateral);
  width: 25%;
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
  }
`;
