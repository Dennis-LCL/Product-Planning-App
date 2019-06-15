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
      <PromoPlanner
        productMaster={mockProductMaster}
        promoTypes={mockPromoTypes}
        algorithm={mockAlgorithm}
      />
      {/* <ChartAnnualSummary /> */}
      {/* <ChartMonthlyTrend /> */}
    </React.Fragment>
  );
}

export default App;

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
  }
  // {
  //   Brand: "Boldie",
  //   Group: "Shampoo 250ml",
  //   Code: "A03",
  //   Description: "Burn The Root Shampoo"
  // },
  // {
  //   Brand: "Boldie",
  //   Group: "Shampoo 250ml",
  //   Code: "A04",
  //   Description: "Let It Snow Shampoo"
  // },
  // {
  //   Brand: "Boldie",
  //   Group: "Shampoo 250ml",
  //   Code: "A05",
  //   Description: "Volumn Reduction Shampoo"
  // }
];

const mockPromoTypes = ["10% Off", "30% Off", "50% Off"];

const mockAlgorithm = [
  {
    ID: "A01-NPW",
    Product: "Drop Your Hair Shampoo",
    PromoType: "Non-Promo Week",
    KPIs: {
      ScanUnit: 100,
      BaselineUnit: 100,
      IncrementalUnit: 0,
      IncrementalGIV: 0,
      BaseListPrice: 15,
      TotalCost: 0,
      ScanDealUnitCost: 0,
      TotalBudget: 375,
      FundRate: 0.25,
      NetSufficiency: 375,
      ROI: 0
    }
  },
  {
    ID: "A01-10% Off",
    Product: "Drop Your Hair Shampoo",
    PromoType: "10% Off",
    KPIs: {
      ScanUnit: 120,
      BaselineUnit: 100,
      IncrementalUnit: 20,
      IncrementalGIV: 300,
      BaseListPrice: 15,
      TotalCost: 360,
      ScanDealUnitCost: 3,
      TotalBudget: 450,
      FundRate: 0.25,
      NetSufficiency: 90,
      ROI: 1.83
    }
  },
  {
    ID: "A01-30% Off",
    Product: "Drop Your Hair Shampoo",
    PromoType: "30% Off",
    KPIs: {
      ScanUnit: 300,
      BaselineUnit: 100,
      IncrementalUnit: 200,
      IncrementalGIV: 3000,
      BaseListPrice: 15,
      TotalCost: 2700,
      ScanDealUnitCost: 9,
      TotalBudget: 1125,
      FundRate: 0.25,
      NetSufficiency: -1575,
      ROI: 1.11
    }
  },
  {
    ID: "A01-50% Off",
    Product: "Drop Your Hair Shampoo",
    PromoType: "50% Off",
    KPIs: {
      ScanUnit: 1000,
      BaselineUnit: 100,
      IncrementalUnit: 900,
      IncrementalGIV: 13500,
      BaseListPrice: 15,
      TotalCost: 15000,
      ScanDealUnitCost: 15,
      TotalBudget: 3750,
      FundRate: 0.25,
      NetSufficiency: -11250,
      ROI: 0.9
    }
  },
  {
    ID: "A01-NPW",
    Product: "Drop Your Hair Shampoo",
    PromoType: "Non-Promo Week",
    KPIs: {
      ScanUnit: 100,
      BaselineUnit: 100,
      IncrementalUnit: 0,
      IncrementalGIV: 0,
      BaseListPrice: 15,
      TotalCost: 0,
      ScanDealUnitCost: 0,
      TotalBudget: 375,
      FundRate: 0.25,
      NetSufficiency: 375,
      ROI: 0
    }
  },
  {
    ID: "A02-10% Off",
    Product: "Scratch Your Sculp Shampoo",
    PromoType: "10% Off",
    KPIs: {
      ScanUnit: 120,
      BaselineUnit: 100,
      IncrementalUnit: 20,
      IncrementalGIV: 300,
      BaseListPrice: 15,
      TotalCost: 360,
      ScanDealUnitCost: 3,
      TotalBudget: 450,
      FundRate: 0.25,
      NetSufficiency: 90,
      ROI: 1.83
    }
  },
  {
    ID: "A02-30% Off",
    Product: "Scratch Your Sculp Shampoo",
    PromoType: "30% Off",
    KPIs: {
      ScanUnit: 300,
      BaselineUnit: 100,
      IncrementalUnit: 200,
      IncrementalGIV: 3000,
      BaseListPrice: 15,
      TotalCost: 2700,
      ScanDealUnitCost: 9,
      TotalBudget: 1125,
      FundRate: 0.25,
      NetSufficiency: -1575,
      ROI: 1.11
    }
  },
  {
    ID: "A02-50% Off",
    Product: "Scratch Your Sculp Shampoo",
    PromoType: "50% Off",
    KPIs: {
      ScanUnit: 1000,
      BaselineUnit: 100,
      IncrementalUnit: 900,
      IncrementalGIV: 13500,
      BaseListPrice: 15,
      TotalCost: 15000,
      ScanDealUnitCost: 15,
      TotalBudget: 3750,
      FundRate: 0.25,
      NetSufficiency: -11250,
      ROI: 0.9
    }
  },
  {
    ID: "A02-NPW",
    Product: "Scratch Your Sculp Shampoo",
    PromoType: "Non-Promo Week",
    KPIs: {
      ScanUnit: 100,
      BaselineUnit: 100,
      IncrementalUnit: 0,
      IncrementalGIV: 0,
      BaseListPrice: 15,
      TotalCost: 0,
      ScanDealUnitCost: 0,
      TotalBudget: 375,
      FundRate: 0.25,
      NetSufficiency: 375,
      ROI: 0
    }
  }
];
