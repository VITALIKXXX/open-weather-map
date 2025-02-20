import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./themeSlice";
import { SwitchContainer, ToggleButton } from "./ThemeSwitch/styled";

const ThemeSwitch = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);
    const dispatch = useDispatch();

    return (
        <SwitchContainer>
            <ToggleButton onClick={() => dispatch(toggleTheme())}>
                {darkMode ? "🌙 Tryb Ciemny" : "☀️ Tryb Jasny"}
            </ToggleButton>
        </SwitchContainer>
    )
};

export default ThemeSwitch;