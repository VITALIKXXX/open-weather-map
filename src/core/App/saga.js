import { all } from "redux-saga/effects";
import { watchWeatherSaga } from "../../features/weather/Weather/weatherSaga";

export default function* rootSaga() {
    yield all([watchWeatherSaga()]);
}