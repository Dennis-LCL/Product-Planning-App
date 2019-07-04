import React from "react";
import axios from "axios";
import logo from "../assets/logo.svg";
import PromoPlanner from "./PromoPlanner";
// import ChartAnnualSummary from "./ChartAnnualSummary";
// import ChartMonthlyTrend from "./ChartMonthlyTrend";
// import PromoPlanner from "./PromoPlanner";
// import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productMaster: [],
      promoType: [],
      algorithm: []
    };
  }

  // async componentDidMount() {
  //   const response = await axios.get("http://localhost:3001/products");
  //   // const productMaster = response.data;
  //   // console.log(productMaster);
  //   // this.productMaster = response.data;
  //   // console.log(this.productMaster);
  //   this.setState({ productMaster: response.data });
  //   console.log("From App.js: ", this.state);
  // }

  render() {
    return (
      <React.Fragment>
        <PromoPlanner
          // productMaster={mockProductMaster}
          productMaster={this.state.productMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      </React.Fragment>
    );
  }
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
    ID: "A01-10POFF",
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
    ID: "A01-30POFF",
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
    ID: "A01-50POFF",
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
    ID: "A02-NPW",
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
    ID: "A02-10POFF",
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
    ID: "A02-30POFF",
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
    ID: "A02-50POFF",
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
  }
  // {
  //   ID: "A03-NPW",
  //   Product: "Burn The Root Shampoo",
  //   PromoType: "Non-Promo Week",
  //   KPIs: {
  //     ScanUnit: 100,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 0,
  //     IncrementalGIV: 0,
  //     BaseListPrice: 15,
  //     TotalCost: 0,
  //     ScanDealUnitCost: 0,
  //     TotalBudget: 375,
  //     FundRate: 0.25,
  //     NetSufficiency: 375,
  //     ROI: 0
  //   }
  // },
  // {
  //   ID: "A03-10POFF",
  //   Product: "Burn The Root Shampoo",
  //   PromoType: "10% Off",
  //   KPIs: {
  //     ScanUnit: 120,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 20,
  //     IncrementalGIV: 300,
  //     BaseListPrice: 15,
  //     TotalCost: 360,
  //     ScanDealUnitCost: 3,
  //     TotalBudget: 450,
  //     FundRate: 0.25,
  //     NetSufficiency: 90,
  //     ROI: 1.83
  //   }
  // },
  // {
  //   ID: "A03-30POFF",
  //   Product: "Burn The Root Shampoo",
  //   PromoType: "30% Off",
  //   KPIs: {
  //     ScanUnit: 300,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 200,
  //     IncrementalGIV: 3000,
  //     BaseListPrice: 15,
  //     TotalCost: 2700,
  //     ScanDealUnitCost: 9,
  //     TotalBudget: 1125,
  //     FundRate: 0.25,
  //     NetSufficiency: -1575,
  //     ROI: 1.11
  //   }
  // },
  // {
  //   ID: "A03-50POFF",
  //   Product: "Burn The Root Shampoo",
  //   PromoType: "50% Off",
  //   KPIs: {
  //     ScanUnit: 1000,
  //     BaselineUnit: 100,
  //     IncrementalUnit: 900,
  //     IncrementalGIV: 13500,
  //     BaseListPrice: 15,
  //     TotalCost: 15000,
  //     ScanDealUnitCost: 15,
  //     TotalBudget: 3750,
  //     FundRate: 0.25,
  //     NetSufficiency: -11250,
  //     ROI: 0.9
  //   }
  // }
];
