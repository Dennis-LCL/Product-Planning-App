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
      <PromoCalendar
        productMaster={mockProductMaster}
        promoTypes={mockPromoTypes}
      />
      <ChartAnnualSummary />
      <ChartMonthlyTrend />
    </React.Fragment>
  );
}

const mockProductMaster = [
  {
    Brand: "Boldie",
    Group: "Shampoo 250ml",
    Code: "A01",
    Description: "Drop Your Hair Shampoo"
  },
  {
    Brand: "Boldie",
    Group: "Shampoo 250ml",
    Code: "A02",
    Description: "Scratch Your Sculp Shampoo"
  },
  {
    Brand: "Boldie",
    Group: "Shampoo 250ml",
    Code: "A03",
    Description: "Burn The Root Shampoo"
  },
  {
    Brand: "Boldie",
    Group: "Shampoo 250ml",
    Code: "A04",
    Description: "Amplify The Dandruff Shampoo"
  }
];

const mockPromoTypes = ["10% Off", "20% off", "30% Off", "50% Off"];

export default App;
