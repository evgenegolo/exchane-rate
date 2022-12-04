import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import testRequest from "../axios/axios";

const BarChar = () => {
  const test = testRequest();

  var data = {
    labels: ["USD", "NIS", "Euro"],
    datasets: [
      {
        label: " ",
        data: [38, 75, 25],
        borderColor: ["rgb(82,134,163)"],
        backgroundColor: ["rgb(82,134,163)"],
        pointBackgroundColor: "rgb(82,134,163)",
        pointBorderColor: "rgb(82,134,163)",
      },
    ],
  };
  return (
    <Bar
      data={data}
      height={400}
      width={600}
      options={{
        maintainAspectRatio: false,
      }}
    />
  );
};

export default BarChar;
