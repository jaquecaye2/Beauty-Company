import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo.png"

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  function canRenderHeader() {
    return !["/"].includes(location.pathname);
  }

  function logout() {
    navigate("/");
  }

  return canRenderHeader() ? (
    <HeaderStyle>
      <Link to="/schedule">
        <div>
          <img src={logo} alt="logo da empresa"/>
        </div>
      </Link>
      <ion-icon name="log-out" onClick={logout}></ion-icon>
    </HeaderStyle>
  ) : null;
}

const HeaderStyle = styled.header`
  background-color: var(--cor-header);
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
      margin: 0 5px 0 15px;
      width: 200px;
    }

    h1 {
      font-size: 30px;
      color: var(--cor-detalhes);
    }
  }

  ion-icon {
    font-size: 30px;
    color: var(--cor-detalhes);
    margin-right: 15px;

    :hover {
      cursor: pointer;
      filter: brightness(0.8);
    }
  }
`;
