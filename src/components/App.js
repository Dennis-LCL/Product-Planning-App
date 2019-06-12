import React from "react";
import logo from "../assets/logo.svg";
import PromoCalendar from "./PromoCalendar";
import ChartAnnualSummary from "./ChartAnnualSummary";
import ChartMonthlyTrend from "./ChartMonthlyTrend";
// import PromoPlanner from "./PromoPlanner";
// import "../styles/App.css";

function App() {
  return (
    <React.Fragment>
      <PromoCalendar productMaster={mockProductMaster} />
      <ChartAnnualSummary />
      <ChartMonthlyTrend />
    </React.Fragment>
  );
}

const mockProductMaster = [
  {
    brand: "Boldie",
    group: "Shampoo 250ml",
    code: "A01",
    desc: "Drop Your Hair Shampoo"
  },
  {
    brand: "Boldie",
    group: "Shampoo 250ml",
    code: "A01",
    desc: "Drop Your Hair Shampoo"
  },
  {
    brand: "Boldie",
    group: "Shampoo 250ml",
    code: "A01",
    desc: "Drop Your Hair Shampoo"
  }
];

export default App;
