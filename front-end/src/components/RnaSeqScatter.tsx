import React from 'react';
import {
  Chart,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import adataJson from "../data/adata.json"
import { Scatter } from "react-chartjs-2";

Chart.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

function RnaSeqScatter () {

    const data = adataJson.map((result) => ({
        x: result.x,
        y: result.y,
    }));

    const labels = adataJson.map(
        (result) =>
        result.key
    );
    

    const scatterStyle = {
        scales: {
          y: {
            beginAtZero: true,
          },
          x: {
            beginAtZero: true,
          },
        },
        plugins: { legend: { display: false, labels: { usePointStyle: true } } },
      };

    
      const dataPoints = {
        labels,
        datasets: [
          {
            data,
            pointRadius: 5,
            pointBackgroundColor: "rgba(200, 0, 100, 0.2)",
            pointBorderWidth: 2,
            pointBorderColor: "rgba(200, 0, 100, 0.8)",
          },
        ],
      };
      
    
    return (
        <>
            <Scatter options={scatterStyle} data={dataPoints} />
        </>
    );

}

export default RnaSeqScatter;