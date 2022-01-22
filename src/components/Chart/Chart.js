import React, { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";

const Chart = () => {
  const { dailyData, setDailyData } = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchAPI();
  });

  const lineChart = (
    <Line
      data={{
        lables: "",
        datasets: [{}, {}],
      }}
    />
  );

  return <div>Chart</div>;
};

export default Chart;
