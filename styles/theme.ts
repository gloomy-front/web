import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100vh;
    font-family: "Apple SD Gothic Neo";
    color: #212025;
    background-color: white;
    -ms-overflow-style: none;
  }
  body::-webkit-scrollbar{ display:none; }
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
  flexRowBetweenEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  `,
  flexColEndCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  `,
  flexColStartCenter: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  `,
  flexColCenterStart: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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
  `,
  flexRowStartEnd: css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  `,
};
