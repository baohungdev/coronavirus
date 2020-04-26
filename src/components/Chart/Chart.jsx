import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import "./Chart.style.css";
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [DailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  const lineChart = DailyData.length ? (
    <Line
      data={{
        labels: DailyData.map(({ data }) => data),
        datasets: [
          {
            data: DailyData.map(({ confirmed }) => confirmed.total),
            label: "Infected",
            borderColor: "#d7af70",
            fill: true,
          },
          {
            data: DailyData.map(({ deaths }) => deaths.total),
            label: "Deaths",
            borderColor: "#77625C",
            backgroundColor: "#ac9969",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgb(193, 140, 93)",
              "rgb(169, 153, 133)",
              "rgb(98, 144, 200)",
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
  return <div className="container">{country ? barChart : lineChart}</div>;
};

export default Chart;
