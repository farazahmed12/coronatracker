import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchAPI();
  }, []);

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(0, 0, 255, 0.5)",
              "rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  // const lineChart = dailyData.length ? (
  //   <Line
  //     data={{
  //       labels: dailyData.map(({ date }) => date),
  //       datasets: [
  //         {
  //           data: dailyData.map(({ confirmed }) => confirmed),
  //           label: "Infected",
  //           borderColor: "rgb(75, 192, 192)",
  //           fill: false,
  //           tension: 0.1,
  //         },
  //         {
  //           data: dailyData.map(({ deaths }) => deaths),
  //           label: "Deaths",
  //           borderColor: "red",
  //           fill: false,
  //           tension: 0.1,
  //         },
  //       ],
  //     }}
  //   />
  // ) : null;
  return (
    <div className="container my-5">
      <h3 className="display-4 text-center">Chart</h3>
      <hr style={{ margin: "0 40%" }} />
      {barChart}
    </div>
  );
};

export default Chart;
