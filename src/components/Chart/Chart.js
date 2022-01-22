import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchAPI();
    console.log(dailyData);
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "rgb(75, 192, 192)",
            fill: false,
            tension: 0.1,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            fill: false,
            tension: 0.1,
          },
        ],
      }}
    />
  ) : null;
  return (
    <div className="container my-5">
      <h3 className="display-4 text-center">Chart</h3>
      <hr style={{ margin: "0 40%" }} />
      {lineChart}
    </div>
  );
};

export default Chart;
