import { call, put, takeLatest } from "redux-saga/effects";
import { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } from "./weatherSlice";
import { getWeather } from "../WeatherService";

function* fetchWeatherSaga(action) {
    try {
        const data = yield call(getWeather, action.payload);
        yield put(fetchWeatherSuccess(data));
    } catch (error) {
        yield put(fetchWeatherFailure(error.message));
    }
}

export function* watchWeatherSaga() {
    yield takeLatest(fetchWeatherStart.type, fetchWeatherSaga);
}