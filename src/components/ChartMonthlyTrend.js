import React from "react";
import { Bar } from "react-chartjs-2";

class ChartMonthlyTrend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Bar data={kpiTrendData} />;
      </React.Fragment>
    );
  }
}

const kpiTrendData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: "Sales ($M)",
      type: "line",
      data: [120, 150, 80, 100, 200, 70, 120, 150, 100, 90, 100, 250]
    },
    {
      label: "Sales Target ($M)",
      type: "line",
      data: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150]
    },
    {
      label: "Budget Sufficiency ($M)",
      type: "bar",
      data: [20, -20, -30, 20, -40, -30, 20, -20, -30, 20, -20, -80]
    }
  ]
};

export default ChartMonthlyTrend;
