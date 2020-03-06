import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as S from "./styles";
import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/light";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <S.Container>
        <S.Header>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <S.NossoBotao>Nosso botao</S.NossoBotao>
        </S.Header>
      </S.Container>
    </ThemeProvider>
  );
}

export default App;
