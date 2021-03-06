import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.colors.backgroundColor};
    color: ${(props) => props.theme.colors.textColor};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Montserrat', sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textColor};
    letter-spacing: 0px;
    opacity: 1;
  }

  input {
    border: none;
  }

  textarea {
    border: none;
    border-radius: 10px;
  }

  h2 {
    ${(props) => props.theme.colors.mainColor}
    font-weight: 600;
  }

  h3 {
    ${(props) => props.theme.colors.mainColor}
    font-weight: 600;
  }

  h5 {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 2.58px;
    color: ${(props) => props.theme.colors.h5TextColor};
    text-transform: uppercase;
    margin-bottom: 17px;
  }
`;
