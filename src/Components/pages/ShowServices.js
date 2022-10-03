import styled from "styled-components";
import { Link } from "react-router-dom";

import Sidebar from "../shared/Sidebar";

export default function ShowServices() {
  return (
    <Window>
      <Sidebar />
      <Box>
        <div className="newClient">
          <Link to="/createService">
            <div>
              <p>Cadastrar novo serviço</p>
              <ion-icon name="bag-add-outline"></ion-icon>
            </div>
          </Link>
        </div>

        <table border="1">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Valor</th>
              <th className="modifyElement">Editar</th>
              <th className="modifyElement">Excluir</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
            <tr>
              <td>Corte de cabelo</td>
              <td>R$100,00</td>
              <td className="modifyElement">
                <ion-icon name="create-outline"></ion-icon>
              </td>
              <td className="modifyElement">
                <ion-icon name="trash-outline"></ion-icon>
              </td>
            </tr>
          </tbody>
        </table>
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

  a {
    text-decoration: none;
  }

  div.newClient {
    margin: 10px 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: end;

    div {
      border: 1px solid #3cb371;
      background-color: #3cb371;
      color: var(--cor-fundo);
      border-radius: 10px;
      padding: 15px;
      margin-bottom: 10px;
      height: 100%;
      display: flex;
      align-items: center;

      p {
        font-size: 18px;
        margin-right: 10px;
      }

      :hover {
        filter: brightness(0.9);
        cursor: pointer;
      }

      ion-icon {
        font-size: 30px;
        filter: none;
      }
    }
  }

  table {
    padding: 20px;
    width: 100%;
  }

  thead {
    background-color: #696969;
    color: var(--cor-branca);
  }

  tr {
    border: 1px solid #d3d3d3;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  tbody tr:nth-child(even) {
    background-color: #dcdcdc;
  }

  tbody tr:nth-child(odd) {
    background-color: var(--cor-fundo);
  }

  th {
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    width: 40%;
  }

  th.modifyElement {
    width: 10%;
  }

  td {
    text-align: center;
    width: 40%;

    ion-icon {
      font-size: 25px;

      :hover {
        color: var(--cor-detalhes);
      }
    }
  }

  td.modifyElement {
    background-color: #dcdcdc;
    border: 1px solid #d3d3d3;
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      filter: brightness(0.8);
      cursor: pointer;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;
