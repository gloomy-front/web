import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100vh;
  },
`;

export const flexColCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;