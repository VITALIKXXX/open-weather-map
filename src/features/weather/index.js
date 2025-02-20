import { useState } from "react";
import { getWeather } from "./WeatherService";
import { Container, Input, Button, Info } from "./styled";

export const Weather = () => {
    const [city, setSity] = useState("");
    const [weather, setWeather] = useState(null);

    const featchWeather = async () => {
        if (!city) return;
        const data = await getWeather(city);
        setWeather(data);
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder="Wpisz miasto..."
                value={city}
                onChange={(e) => setSity(e.target.value)}
            />
            <Button onClick={featchWeather}>Sprawdz pogode</Button>
            {weather && (
                <Info>
                    <h2>{weather.name}, {weather.sys.country}</h2>
                    <p>{weather.weather[0].description}</p>
                    <p>Temperatura: {weather.main.temp}°C</p>
                </Info>
            )}
        </Container>
    );
};

export default Weather;