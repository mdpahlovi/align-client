import React from "react";
import { MdDeviceThermostat } from "react-icons/md";
import { capitalizeFirstLetter, formatToLocalTime, iconUrlFromCode } from "../Utilities/formate";

const WeatherCard = ({ current, day, timezone, name }) => {
    const { dt, weather } = current;
    const { min, max } = day.temp;
    return (
        <div className="px-6 py-5 bg-neutral rounded-xl">
            <div className="space-y-2">
                <div className="font-bold text-4xl">{name}</div>
                <div className="text-accent">{formatToLocalTime(dt, timezone, "cccc, dd LLL yyyy")}</div>
                <div className="text-accent">{formatToLocalTime(dt, timezone, "hh:mm a")}</div>
            </div>
            <div className="flex items-center justify-center">
                <img src={iconUrlFromCode(weather[0].icon)} alt="" className="-m-4" />
            </div>
            <div className="flex flex-row items-center justify-center">
                <div className="font-medium text-5xl">{current.temp} ℃</div>
                <div className="ml-6">
                    <p className="text-lg text-right">{capitalizeFirstLetter(weather[0].description)}</p>
                    <div className="flex items-center justify-end">
                        <MdDeviceThermostat className="text-lg opacity-100" />
                        <span className="-ml-1.5 -mt-3.5 mr-2">-</span> <span className="text-accent">{min} ℃</span>
                    </div>
                    <div className="flex items-center justify-end mt-1">
                        <MdDeviceThermostat className="text-lg opacity-100" />
                        <span className="-ml-1.5 -mt-3.5 mr-2">+</span>
                        <span className="text-accent">{max} ℃</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;
