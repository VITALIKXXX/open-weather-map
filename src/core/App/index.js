import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
    return (
        <ThemeProvider>
            <Normalize />
            <GlobalStyle />

        </ThemeProvider>
    );
};

export default App;