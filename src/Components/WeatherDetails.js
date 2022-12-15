import React from "react";
import { formatToLocalTime } from "../Utilities/formate";

const WeatherDetails = ({ current, timezone }) => {
    console.log(current);

    const { wind_speed, pressure, humidity, visibility, sunrise, sunset } = current;
    return (
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-2 gap-4 [&>*]:bg-neutral [&>*]:rounded-xl [&>*]:flex [&>*]:flex-col [&>*]:justify-center [&>*]:items-center [&>*]:p-4">
            <div>
                <div className="text-2xl font-bold">Wind</div>
                <div className="text-accent">{wind_speed} k/h</div>
            </div>
            <div>
                <div className="text-2xl font-bold">Pressure</div>
                <div className="text-accent">{pressure / 1000} kPa</div>
            </div>
            <div>
                <div className="text-2xl font-bold">Humidity</div>
                <div className="text-accent">{humidity} %</div>
            </div>
            <div>
                <div className="text-2xl font-bold">Visibility</div>
                <div className="text-accent">{visibility / 1000} km</div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Sunrise</h1>
                <div className="text-accent">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</div>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Sunset</h1>
                <div className="text-accent">{formatToLocalTime(sunset, timezone, "hh:mm a")}</div>
            </div>
        </div>
    );
};

export default WeatherDetails;
