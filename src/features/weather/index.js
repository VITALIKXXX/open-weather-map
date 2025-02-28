import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherStart } from "./Weather/weatherSlice";
import { Container, Input, Button, Info } from "./styled";
import WeatherAnimation from "../../common/WeatherAnimation";

export const Weather = () => {
    const [city, setCity] = useState("");
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.weather);

    const fetchWeather = async () => {
        if (!city) return;
        dispatch(fetchWeatherStart(city));
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder="Wpisz miasto..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <Button onClick={fetchWeather} disabled={loading}>
                {loading ? "Ładowanie..." : "Sprawdz pogode"}
            </Button>
            {error && <p style={{ color: "red" }}>Błąd: {error}</p>}
            {data && (
                <Info>
                    <h2>{data.name}, {data.sys.country}</h2>
                    <WeatherAnimation weather={data.weather[0].main} />
                    <p>{data.weather[0].description}</p>
                    <p>Temperatura: {data.main.temp}°C</p>
                </Info>
            )}
        </Container>
    );
};

export default Weather;