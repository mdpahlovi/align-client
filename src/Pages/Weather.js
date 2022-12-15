import React, { useContext } from "react";
import DailyCard from "../Components/DailyCard";
import WeatherCard from "../Components/WeatherCard";
import { LoadData } from "../Contexts/DataContext";
import TempChart from "../Components/TempChart";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { formatToLocalTime } from "../Utilities/formate";

const Weather = () => {
    const { weatherData } = useContext(LoadData);
    if (Object.values(weatherData).length !== 0) {
        const { data, name } = weatherData;
        const { current, daily, timezone } = data;
        const { sunrise, sunset } = current;
        console.log(current);

        return (
            <section className="p-6 grid grid-cols-1 sm:grid-cols-8 xl:grid-cols-10 xl:grid-rows-2 gap-6 [&>*]:rounded-xl">
                <div className="sm:col-span-4 bg-base-content/5">
                    <WeatherCard current={current} day={daily[0]} timezone={timezone} name={name} />
                </div>
                <div className="sm:col-span-4 bg-base-content/5 p-6">
                    <h1 className="text-4xl font-bold">Today's Highlights</h1>
                </div>
                <div className="sm:col-span-6 bg-base-content/5 p-6">
                    <h1 className="text-4xl font-bold">How's the temperature today</h1>
                    <TempChart day={daily[0].temp} />
                </div>
                <div className="sm:col-span-2 grid grid-rows-2 gap-6 [&>*]:rounded-xl [&>*]:bg-base-content/5">
                    <div className="p-6 flex flex-col justify-center gap-2">
                        <h1 className="text-3xl font-bold">Sunrise</h1>
                        <div className="flex items-center gap-2 text-lg">
                            <GiSunrise className="text-3xl" />
                            <span className="opacity-50">{formatToLocalTime(sunrise, timezone, "hh:mm")}</span>
                            <span className="opacity-50">{formatToLocalTime(sunrise, timezone, "a")}</span>
                        </div>
                        <h1 className="text-3xl font-bold mt-4">Sunset</h1>
                        <div className="flex items-center gap-2 text-lg">
                            <GiSunset className="text-3xl" />
                            <span className="opacity-50">{formatToLocalTime(sunset, timezone, "hh:mm")}</span>
                            <span className="opacity-50">{formatToLocalTime(sunset, timezone, "a")}</span>
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="h-max xl:h-full sm:col-span-full xl:col-[9/11] xl:row-[1/-1] md:bg-base-content/5 grid grid-cols-1 xs:grid-cols-2 gap-4 md:grid-cols-4 divide-base-content/50 xl:grid-cols-1 md:divide-x-2 xl:divide-y-2 xl:divide-x-0 md:gap-0">
                    {daily.slice(1, 5).map((day, index) => (
                        <DailyCard key={index} timezone={timezone} day={day} />
                    ))}
                </div>
            </section>
        );
    }
};

export default Weather;
