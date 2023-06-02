import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Reset some default styles */
  * {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
  
  /* Add more global styles here */
  
  /* Example: Applying a global style to a specific component */
  .my-global-style {
    background-color: lightblue;
    color: white;
  }
`;

export default GlobalStyle;