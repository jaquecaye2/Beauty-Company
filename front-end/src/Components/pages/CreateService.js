import { Link } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../shared/Sidebar";

export default function CreateService() {
  return (
    <Window>
      <Sidebar />
      <Box>
        <h3>Cadastrar Novo Serviço</h3>

        <FormStyle>
          <div>
            <label>Tipo de serviço:</label>
            <select name="select">
              <option value="null" selected></option>
              <option value="hair">Cabelos</option>
              <option value="nails">Unhas</option>
              <option value="makeup">Maquiagem</option>
              <option value="hairRemoval">Depilação</option>
            </select>
          </div>

          <div>
            <label for="name">Nome do serviço:</label>
            <input type="text" id="name" name="name" />
          </div>

          <div>
            <label for="description">Descrição do serviço:</label>
            <input type="text" id="description" name="description" />
          </div>

          <div>
            <label for="price">Valor do serviço:</label>
            <input type="number" id="price" name="price" min="0"/>
          </div>
        </FormStyle>

        <Buttons>
          <Link to="/showServices">
            <button>Voltar</button>
          </Link>
          <button className="confirm">Cadastrar</button>
        </Buttons>
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

  div{
    display: flex;
    align-items: initial;
    flex-direction: column;
    
  }

  label {
    margin-bottom: 5px;
  }

  input, select{
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--cor-texto);
    padding: 0 10px;
    margin-bottom: 20px;
  }
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
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
