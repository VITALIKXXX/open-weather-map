import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchWeatherStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchWeatherSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchWeatherFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchWeatherStart, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.reducer;
export default weatherSlice.reducer;