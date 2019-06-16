import React from "react";
import { Doughnut, Bar, HorizontalBar } from "react-chartjs-2";

const HBarChartFundSufficiency = props => {
  const hBarData = {
    labels: ["Total Budget", "Total Cost", "Net Sufficiency"],
    datasets: [
      {
        label: "$US",
        backgroundColor: "rgba(17,17,17,0.6)",
        borderColor: "rgba(17,17,17,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [
          props.annualKPIs.TotalBudget,
          -props.annualKPIs.TotalCost,
          props.annualKPIs.NetSufficiency
        ]
      }
    ]
  };

  const doughnutData = {
    labels: ["Gap vs. GIV Target", "GIV Forecast"],
    datasets: [
      {
        data: [-props.GIVGap, props.annualKPIs.GIVForecast],
        backgroundColor: ["#FF6384", "#36A2EB"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB"]
      }
    ]
  };

  const barData = {
    labels: ["GIV Forecast", "GIV Last Year"],
    datasets: [
      {
        label: `GIV Forecast IYA: ${props.GIVForecastIYA}`,
        backgroundColor: "rgba(17,17,17,0.6)",
        borderColor: "rgba(17,17,17,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [props.annualKPIs.GIVForecast, props.GIVLastYear]
      }
    ]
  };

  return (
    <div className="ChartArea">
      <div className="chart" id="GIVSufficiency">
        <h3>GIV Sufficiency</h3>
        <Doughnut data={doughnutData} />
      </div>
      <div className="chart" id="GIVvsLastYear">
        <h3>vs. Year Ago</h3>
        <Bar data={barData} />
      </div>
      <div className="chart" id="FundSufficiency">
        <h3>Fund Sufficiency</h3>
        <HorizontalBar data={hBarData} />
      </div>
    </div>
  );
};

export default HBarChartFundSufficiency;
