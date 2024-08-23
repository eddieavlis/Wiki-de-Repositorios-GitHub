// src/style.js
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #0d1117;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
