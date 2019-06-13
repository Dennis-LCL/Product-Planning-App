import React from "react";
import logo from "../assets/logo.svg";
import PromoPlanner from "./PromoPlanner";
import PromoCalendar from "./PromoCalendar";
import ForecastAssumptions from "./ForecastAssumptions";
import ChartAnnualSummary from "./ChartAnnualSummary";
import ChartMonthlyTrend from "./ChartMonthlyTrend";
// import PromoPlanner from "./PromoPlanner";
// import "../styles/App.css";

function App() {
  return (
    <React.Fragment>
      <PromoPlanner />
      <ChartAnnualSummary />
      <ChartMonthlyTrend />
    </React.Fragment>
  );
}

export default App;
