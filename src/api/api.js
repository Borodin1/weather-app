// Core
import axios from 'axios';

// Instruments
const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;


const api = Object.freeze({
    async getWeather() {
        const { data } =  await axios.get(`${WEATHER_API_URL}/forecast`);

        return data.data;
    },
});

export { api };
