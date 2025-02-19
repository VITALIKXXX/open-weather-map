import axios from "axios";

const API_KEY = "4f1ea456aa3466ee9b4705d4305ed2de";
const URL = "https://openweathermap.org/";

export const getWeather = async (city) => {
    const response = await axios.get(URL, {
        params: {
            q: city,
            appid: API_KEY,
            units: "metric",
            lang: "pl"
        }
    });
    return response.data;
};