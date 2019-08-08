import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    font-family: sans-serif;
  }
  body {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
  }

  #root {
    flex-shrink: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  ul {
    padding: 0;
  }
`;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 10px;
`;

const Header = styled(UnstyledHeader)`
  flex-shrink: 0;
`;

const Content = styled(Cards)`
  flex-grow: 1;
  overflow-y: auto;
  min-height: 0px;
`;

const App = () => (
  <Container>
    <GlobalStyle />
    <div>WELCOME</div>
  </Container>
);

export default App;
