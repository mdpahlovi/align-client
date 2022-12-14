import React from "react";
import { capitalizeFirstLetter, formatToLocalTime, iconUrlFromCode } from "../Utilities/formate";

const DailyCard = ({ day, timezone }) => {
    const { dt, weather, temp } = day;

    return (
        <div className="flex flex-col justify-center p-4 text-center rounded-xl md:rounded-none bg-base-content/5 md:bg-transparent">
            <div className="text-lg font-bold">{formatToLocalTime(dt, timezone, "cccc")}</div>
            <div className="flex justify-between">
                <img src={iconUrlFromCode(weather[0].icon)} alt="" className="-m-4" />
                <div className="flex flex-col justify-center gap-2 text-left">
                    <div>{temp.min} ℃</div>
                    <div>{temp.max} ℃</div>
                </div>
            </div>
            <div className="text-lg font-bold">{capitalizeFirstLetter(weather[0].description)}</div>
        </div>
    );
};

export default DailyCard;
