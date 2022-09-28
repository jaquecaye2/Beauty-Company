import { useContext } from "react";
import Context from "../../Context/Context";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png";

export default function Header() {
  const { openSidebar, setOpenSidebar } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();

  function canRenderHeader() {
    return !["/"].includes(location.pathname);
  }

  function logout() {
    navigate("/");
  }

  function menu(){
    if (openSidebar){
      setOpenSidebar(false)
    } else {
      setOpenSidebar(true)
    }
    
  }

  return canRenderHeader() ? (
    <HeaderStyle>
      <div>
        <ion-icon onClick={menu} name="menu-outline"></ion-icon>
        <Link to="/schedule">
          <div>
            <img src={logo} alt="logo da empresa" />
          </div>
        </Link>
      </div>
      <div>
        <ion-icon name="person-outline"></ion-icon>
        <ion-icon name="notifications-outline"></ion-icon>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </HeaderStyle>
  ) : null;
}

const HeaderStyle = styled.header`
  background-color: var(--cor-header);
  border: 1px solid var(--cor-lateral);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;

  a {
    text-decoration: none;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: left;

    img {
      margin: 0 0 0 10px;
      width: 200px;
    }

    h1 {
      font-size: 30px;
      color: var(--cor-detalhes);
    }
  }

  ion-icon {
    font-size: 30px;
    color: var(--cor-cinza);
    margin: 0 15px;

    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;
