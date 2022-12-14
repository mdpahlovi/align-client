import axios from "axios";

export const getWeather = async (lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=f331471a1520e8b7f75f06063e8454d4&units=metric`);
    return res.data;
};
