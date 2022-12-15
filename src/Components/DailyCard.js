import React from "react";
import { capitalizeFirstLetter, formatToLocalTime, iconUrlFromCode } from "../Utilities/formate";
import { MdDeviceThermostat } from "react-icons/md";

const DailyCard = ({ day, timezone }) => {
    const { dt, weather, temp } = day;

    return (
        <div className="text-center rounded-xl bg-neutral space-y-3 p-4 min-w-[13rem]">
            <div className="text-2xl font-bold">{formatToLocalTime(dt, timezone, "cccc")}</div>
            <div className="flex justify-between gap-6">
                <img src={iconUrlFromCode(weather[0].icon)} alt="" className="-m-4" />
                <div className="flex flex-col justify-center gap-1 text-left">
                    <div className="flex items-center">
                        <MdDeviceThermostat className="text-lg opacity-100" />
                        <span className="-ml-1.5 -mt-3.5 mr-2">-</span> <span className="text-accent">{temp.min} ℃</span>
                    </div>
                    <div className="flex items-center">
                        <MdDeviceThermostat className="text-lg opacity-100" />
                        <span className="-ml-1.5 -mt-3.5 mr-2">+</span>
                        <span className="text-accent">{temp.max} ℃</span>
                    </div>
                </div>
            </div>
            <div className="text-lg">{capitalizeFirstLetter(weather[0].description)}</div>
        </div>
    );
};

export default DailyCard;
