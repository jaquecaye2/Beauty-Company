import styled from "styled-components";
import InputMask from "react-input-mask";
import { Link } from "react-router-dom";

import SidebarClient from "../shared/SidebarClient";

import perfil from "../../assets/images/example.jpeg";

export default function ClientProfile() {
  // adicionar o olhinho em todos os passwords

  return (
    <Window>
      <SidebarClient />
      <Box>
        <h3>Meu perfil</h3>
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
                />
              </div>
              <div>
                <div>
                  <label for="name">Nome Completo:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value="Jaqueline Caye"
                    disabled
                  />
                </div>
                <div>
                  <label for="date">Data de nascimento:</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value="14/12/1997"
                    disabled
                  />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <InputMask
                    id="cpf"
                    name="cpf"
                    mask="999.999.999-99"
                    value="028.171.580-75"
                    disabled
                  />
                </div>
                <div>
                  <label>Sexo:</label>
                  <select name="select" disabled>
                    <option value="null"></option>
                    <option value="female" selected>
                      Feminino
                    </option>
                    <option value="masc">Masculino</option>
                    <option value="other">Prefiro não responder</option>
                  </select>
                </div>
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações de endereço</h4>

            <div>
              <div>
                <label for="adress">Endereço:</label>
                <input
                  type="text"
                  id="adress"
                  name="adress"
                  value="Rua Guaporé"
                  disabled
                />
              </div>
              <div>
                <label for="number">Número:</label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value="62D"
                  disabled
                />
              </div>
              <div>
                <label for="complement">Complemento:</label>
                <input
                  type="text"
                  id="complement"
                  name="complement"
                  value="Apto 1102, edifício Acácias"
                  disabled
                />
              </div>
              <div>
                <label for="district">Bairro:</label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value="Centro"
                  disabled
                />
              </div>
              <div>
                <label for="city">Cidade:</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value="Chapecó"
                  disabled
                />
              </div>
              <div>
                <label for="state">Estado:</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value="Santa Catarina"
                  disabled
                />
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações de contato</h4>
            <div className="contacts">
              <div>
                <label for="phone">Telefone:</label>
                <InputMask
                  id="phone"
                  name="phone"
                  mask="(99) 99999-9999"
                  value="(55) 99704-8940"
                  disabled
                />
              </div>
              <div>
                <label for="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="jaque@gmail.com"
                  disabled
                />
              </div>
            </div>
          </ElementForm>

          <ElementForm>
            <h4>Informações para login no sistema</h4>

            <div>
              <div>
                <label for="email2">E-mail:</label>
                <input
                  type="email"
                  id="email2"
                  name="email2"
                  value="jaque@gmail.com"
                  disabled
                />
              </div>
              <div>
                <label for="password">Senha:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value="123445556"
                  disabled
                />
              </div>
              <div>
                <label for="confirmPassword">Confirme a senha:</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value="123445556"
                  disabled
                />
              </div>
            </div>
          </ElementForm>

          <Buttons>
            <Link to="/newSchedule">
              <button>Voltar</button>
            </Link>
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

  div.contacts {
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
    height: 30px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid var(--cor-texto);
    padding: 0 10px;
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
`;
