import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0
  }

  body {
    max-width: 100%;
    overflow-x: hidden;
    color: #fefefe;
  }
`