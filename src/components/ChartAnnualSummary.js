import React from "react";
import { Doughnut } from "react-chartjs-2";

class ChartAnnualSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Doughnut data={annualSummaryScanData} />;
  }
}

const annualSummaryScanData = {
  labels: ["Scan Actual ($M)", "Gap vs. Target ($M)"],
  datasets: [{ data: [1000, 800] }],
  backgroundColor: ["#36A2EB", "#FF6384"]
};

export default ChartAnnualSummary;
