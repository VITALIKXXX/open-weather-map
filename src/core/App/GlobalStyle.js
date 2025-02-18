import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
    font-family: Arial, sans-serif;
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
`;

export default GlobalStyle;