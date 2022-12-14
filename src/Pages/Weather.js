import React, { useContext } from "react";
import DailyCard from "../Components/DailyCard";
import WeatherCard from "../Components/WeatherCard";
import { LoadData } from "../Contexts/DataContext";

const Weather = () => {
    const { weatherData } = useContext(LoadData);
    if (Object.values(weatherData).length !== 0) {
        const { data, name } = weatherData;
        const { current, daily, timezone } = data;

        return (
            <section className="p-6 min-h-screen grid grid-cols-1 sm:grid-cols-8 xl:grid-cols-10 xl:grid-rows-2 gap-5 [&>*]:rounded-xl">
                <div className="sm:col-span-4 bg-base-content/5">
                    <WeatherCard current={current} day={daily[0]} timezone={timezone} name={name} />
                </div>
                <div className="sm:col-span-4 bg-base-content/5">2</div>
                <div className="sm:col-span-5 bg-base-content/5">3</div>
                <div className="sm:col-span-3 bg-base-content/5">4</div>
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
