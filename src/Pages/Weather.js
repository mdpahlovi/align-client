import React, { useContext } from "react";
import DailyCard from "../Components/DailyCard";
import WeatherCard from "../Components/WeatherCard";
import { LoadData } from "../Contexts/DataContext";
import TempChart from "../Components/TempChart";
import WeatherDetails from "../Components/WeatherDetails";

const Weather = () => {
    const { weatherData } = useContext(LoadData);
    if (Object.values(weatherData).length !== 0) {
        const { data, name } = weatherData;
        const { current, daily, timezone } = data;

        return (
            <section className="p-6 relative grid grid-cols-1 xl:grid-cols-[1fr_14rem] gap-4">
                <div className="h-max grid grid-cols-1 md:grid-cols-2 gap-4">
                    <WeatherCard current={current} day={daily[0]} timezone={timezone} name={name} />
                    <WeatherDetails current={current} timezone={timezone} />
                    <TempChart day={daily[0].temp} />
                </div>
                <div className="xl:absolute xl:h-full right-8 top-6 overflow-auto flex xl:flex-col gap-4">
                    {daily.slice(1).map((day, index) => (
                        <DailyCard key={index} timezone={timezone} day={day} />
                    ))}
                </div>
            </section>
        );
    } else {
        return (
            <section className="-mt-12 w-full h-screen flex justify-center items-center">
                <div className="text-4xl font-bold text-center">
                    <div>Search</div>
                    <div className="-mt-1">
                        <span className="gradient-text">o</span>r
                    </div>
                    <div>
                        Select a C<span className="gradient-text">o</span>untry
                    </div>
                </div>
            </section>
        );
    }
};

export default Weather;
