import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import { capitalizeFirstLetter } from "../Utilities/formate";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const TempChart = ({ day }) => {
    const labels = Object.keys(day).map((day) => capitalizeFirstLetter(day));
    const data = {
        labels: labels,
        datasets: [
            {
                data: Object.values(day),
                borderColor: "#B42F7E",
                pointBorderColor: "transparent",
                pointBorderWidth: 4,
                tension: 0.5,
            },
        ],
    };
    const options = {
        scales: {
            y: {
                ticks: {
                    stepSize: 2,
                    callback: (value) => `${value} ℃`,
                },
            },
        },
    };

    return (
        <div className="w-full h-full flex justify-center items-center pb-6">
            <Line data={data} options={options} style={{ width: "100%" }}></Line>
        </div>
    );
};

export default TempChart;
