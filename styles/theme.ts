import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100vh;
    font-family: "Noto Sans KR", sans-serif;
    color: #ffffff;
    background-color: #020615;
  }
`;

export const Layout = {
  flexColCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  flexColStartEnd: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
  `,
  flexColStartCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  flexColStartStart: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  flexRowCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  flexRowBetweenCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  flexRowStartCenter: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `
};
