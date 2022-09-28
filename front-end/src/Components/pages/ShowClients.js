import styled from "styled-components";

import Sidebar from "../shared/Sidebar";

export default function ShowCLients() {
  return (
    <Window>
      <Sidebar />
      <Box>Esta é a página ShowCLients</Box>
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
`;
