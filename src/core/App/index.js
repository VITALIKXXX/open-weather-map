import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";

export const App = () => {
    return (
        <ThemeProvider>
            <Normalize />

        </ThemeProvider>
    );
};

export default App;