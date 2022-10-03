import styled from "styled-components";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

import Sidebar from "../shared/Sidebar";

import perfil from "../../assets/images/example.jpeg";

export default function CreateProfessional() {
  // abrir os serviços de acordo com os itens selecionados

  return (
    <Window>
      <Sidebar />
      <Box>
        <h3>Cadastrar Novo Profissional</h3>

        <form>
          <ElementForm>
            <h4>Informações pessoais</h4>

            <div className="personalInfo">
              <div className="profilePicture">
                <label for="avatar">Escolha uma foto de perfil:</label>
                <div>
                  <img src={perfil} />
                </div>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/png, image/jpeg"
                  required
                />
              </div>
              <div>
                <div>
                  <label for="name">Nome Completo:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div>
                  <label for="date">Data de nascimento:</label>
                  <input type="date" id="date" name="date" required />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <InputMask
                    id="cpf"
                    name="cpf"
                    mask="999.999.999-99"
                    required
                  />
                </div>
                <div>
                  <label>Sexo:</label>
                  <select name="select" required>
                    <option value="null" selected></option>
                    <option value="female">Feminino</option>
                    <option value="masc">Masculino</option>
                    <option value="other">Prefiro não responder</option>
                  </select>
                </div>
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações profissionais</h4>

            <div className="divWith2Itens">
              <div>
                <label for="profession">Cargo:</label>
                <input type="text" id="profession" name="profession" required />
              </div>
              <div>
                <label for="admissionDate">Data de admissão:</label>
                <input
                  type="date"
                  id="admissionDate"
                  name="admissionDate"
                  required
                />
              </div>
            </div>
            <div className="sectors">
              <h5>Setores de trabalho:</h5>
              <div>
                <label>
                  <input type="checkbox" value="hair" />
                  Cabelos
                </label>
                <label>
                  <input type="checkbox" value="nails" />
                  Unhas
                </label>
                <label>
                  <input type="checkbox" value="makeup" />
                  Maquiagem
                </label>
                <label>
                  <input type="checkbox" value="hairRemoval" />
                  Depilação
                </label>
              </div>
            </div>
            <div className="sectors">
              <h5>Serviços que serão realizados</h5>
              <div>
                <label>
                  <input type="checkbox" value="hair" />
                  Corte feminino
                </label>
                <label>
                  <input type="checkbox" value="nails" />
                  Matização
                </label>
                <label>
                  <input type="checkbox" value="makeup" />
                  Hidratação
                </label>
                <label>
                  <input type="checkbox" value="hairRemoval" />
                  Cauterização
                </label>
                <label>
                  <input type="checkbox" value="hair" />
                  Corte feminino
                </label>
                <label>
                  <input type="checkbox" value="nails" />
                  Matização
                </label>
                <label>
                  <input type="checkbox" value="makeup" />
                  Hidratação
                </label>
                <label>
                  <input type="checkbox" value="hairRemoval" />
                  Cauterização
                </label>
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações de endereço</h4>

            <div>
              <div>
                <label for="adress">Endereço:</label>
                <input type="text" id="adress" name="adress" required />
              </div>
              <div>
                <label for="number">Número:</label>
                <input type="text" id="number" name="number" required />
              </div>
              <div>
                <label for="complement">Complemento:</label>
                <input type="text" id="complement" name="complement" />
              </div>
              <div>
                <label for="district">Bairro:</label>
                <input type="text" id="district" name="district" required />
              </div>
              <div>
                <label for="city">Cidade:</label>
                <input type="text" id="city" name="city" required />
              </div>
              <div>
                <label for="state">Estado:</label>
                <input type="text" id="state" name="state" required />
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações de contato</h4>
            <div className="divWith2Itens">
              <div>
                <label for="phone">Telefone:</label>
                <InputMask
                  id="phone"
                  name="phone"
                  mask="(99) 99999-9999"
                  required
                />
              </div>
              <div>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" />
              </div>
            </div>
          </ElementForm>

          <Buttons>
            <Link to="/showProfessionals">
              <button>Voltar</button>
            </Link>
            <button className="confirm">Cadastrar</button>
          </Buttons>
        </form>
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

const ElementForm = styled.div`
  border-top: 1px solid var(--cor-detalhes);
  padding: 30px 0;

  h4 {
    color: var(--cor-detalhes);
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  div.divWith2Itens {
    justify-content: left;

    div {
      margin-right: 5%;
    }
  }

  div > div {
    width: 30%;
    margin: 10px 0;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  div.personalInfo {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      width: 45%;

      div {
        width: 100%;
      }
    }
  }

  div.profilePicture {
    height: 300px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        border-radius: 200px;
        width: 200px;
        height: 200px;
        object-fit: cover;
      }
    }

    input {
      border: none;
      display: flex;
    }
  }

  label {
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--cor-texto);
    padding: 0 10px;
  }

  select {
    background-color: var(--cor-branca);
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--cor-texto);
    padding: 0 10px;
  }

  div.sectors {
    margin-top: 20px;

    div {
      width: 100%;
      display: inline-block;

      input {
        width: 20px;
        height: 20px;
        display: inline-block;
        vertical-align: middle;
      }

      label {
        margin-right: 20px;
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
`;

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
