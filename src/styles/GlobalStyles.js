import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body, html {
    color: ${props => props.theme.whiteColor};
    background-color: ${props => props.theme.backgroundColor};
    font-size: 14px;
    font-family: "Nunito", sans-serif;
  }
  a {
    color: inherit;
    text-decoration:none;
  }
  input:focus{
    outline:none;
  }
  button {
    background: 0 0;
    border: 0;
    cursor: pointer;
  }
`;
