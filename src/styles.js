import styled from "styled-components";
import { Button } from "./components/button"
export const Container = styled.div``;

export const Header = styled.header`
  background-color: ${props => props.theme.colors.red};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const NossoBotao = styled(Button)`
   background: green;
`;