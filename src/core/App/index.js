import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import { useSelector } from "react-redux";
import { GlobalStyle } from "./GlobalStyle";
import { Weather } from "../../features/weather";
import { darkTheme, lightTheme } from "./theme";
import ThemeSwitch from "../../common";

export const App = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Normalize />
            <GlobalStyle />
            <ThemeSwitch />
            <Weather />
        </ThemeProvider>
    );
};

export default App;