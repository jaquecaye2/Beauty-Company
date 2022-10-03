import { Link } from "react-router-dom";
import styled from "styled-components";
import InputMask from "react-input-mask";

import Sidebar from "../shared/Sidebar";

export default function CreateService() {
  // ao clicar em outro abrir um novo input dizendo qual é o outro serviço e cadastrar esse no banco

  return (
    <Window>
      <Sidebar />
      <Box>
        <h3>Cadastrar Novo Serviço</h3>

        <FormStyle>
          <div className="inputs">
            <div>
              <label>Tipo de serviço:</label>
              <select name="select" required>
                <option value="null" selected></option>
                <option value="hair">Cabelos</option>
                <option value="nails">Unhas</option>
                <option value="makeup">Maquiagem</option>
                <option value="hairRemoval">Depilação</option>
                <option value="other">Outro</option>
              </select>
            </div>

            <div>
              <label for="name">Nome do serviço:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div>
              <label for="description">Descrição do serviço:</label>
              <input type="text" id="description" name="description" />
            </div>

            <div>
              <label for="price">Valor do serviço:</label>
              <input type="number" id="price" name="price" min="0" required />
            </div>
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
  padding-bottom: 220px;
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
