import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { GlobalStyle } from "./GlobalStyle";
import { Weather } from "../../features/weather";
import theme from "./theme";

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Normalize />
            <GlobalStyle />
            <Weather />
        </ThemeProvider>
    );
};

export default App;