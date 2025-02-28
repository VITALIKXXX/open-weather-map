import Lottie from "lottie-react";
import sunAnimation from "../animations/sun.json";
import rainAnimation from "../animations/rain.json";
import snowAnimation from "../animations/snow.json";
import thunderAnimation from "../animations/thunder.json";
import cloudAnimation from "../animations//cloud.json";

const weatherAnimation = {
    Clear: sunAnimation,
    Rain: rainAnimation,
    Snow: snowAnimation,
    Thunderstorm: thunderAnimation,
    Clouds: cloudAnimation,
};

const WeatherAnimation = ({ weather }) => {
    const animationData = weatherAnimation[weather] || sunAnimation;
    return <Lottie animationData={animationData} loop style={{ width: 200, height: 200 }} />;
};

export default WeatherAnimation;