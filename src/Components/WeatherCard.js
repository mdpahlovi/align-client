import React from "react";
import { capitalizeFirstLetter, formatToLocalTime, iconUrlFromCode } from "../Utilities/formate";

const WeatherCard = ({ current, day, timezone, name }) => {
    const { dt, weather, wind_speed, visibility, humidity } = current;
    const { min, max } = day.temp;
    return (
        <div className="flex flex-col p-6 gap-4">
            <div className="space-y-2">
                <div className="font-bold text-4xl">{name}</div>
                <div className="text-base-content/50">{formatToLocalTime(dt, timezone, "cccc, dd LLL yyyy")}</div>
            </div>
            <div className="flex items-center justify-center">
                <img src={iconUrlFromCode(weather[0].icon)} alt="" className="-m-6" />
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="font-medium text-5xl">{current.temp} ℃</div>
                <div className="ml-6 text-right text-lg">
                    <p>{capitalizeFirstLetter(weather[0].description)}</p>
                    <p className="font-light text-base-content/50">{min} ℃</p>
                    <p className="font-light text-base-content/50">{max} ℃</p>
                </div>
            </div>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col items-center">
                    <div className="text-lg">Wind</div>
                    <div className="text-base-content/50">{wind_speed} k/h</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-lg">Humidity</div>
                    <div className="text-base-content/50">{humidity} %</div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="text-lg">Visibility</div>
                    <div className="text-base-content/50">{visibility} m</div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
