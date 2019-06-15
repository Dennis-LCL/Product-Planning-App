import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PromoCalendar from "../components/PromoCalendar";
import ForecastAssumptions from "../components/ForecastAssumptions";
import PromoPlanner from "../components/PromoPlanner";

describe("PromoPlanner component should be rendered with required DOM nodes.", () => {
  it("should render and empty PromoPlanner component.", () => {
    const { getByText } = render(<PromoPlanner />);
    expect(!!getByText).toBeTruthy();
  });
  it("should render a component title (h1 tag) says 'Promo Planner'", () => {
    const { getByText } = render(<PromoPlanner />);
    expect(getByText("Promo Planner")).toBeInTheDocument();
  });
});
describe("When user clicks a Product-PromoType cell in PromoCalendar, ForecastAssumptions should show the KPIs for the clicked Product-PromoType combination.", () => {
  it("PromoCalendar should render input fields, each with unique identifier for Product-PromoType combination.", () => {
    const { getByText } = render(<PromoPlanner />);
    const inputField = document.getElementById("A05-50% Off");
    expect(!!inputField).toBeTruthy();
  });
  it("should trigger ForecastAssumptions to show KPIs correctly when the 10% off input field is focused.", () => {
    const { getByText } = render(<PromoPlanner />);
    const inputField = document.getElementById("A01-10% Off");
    fireEvent.focus(inputField, { bubbles: false, cancelable: false });

    expect(getByText("120")).toBeInTheDocument();
    expect(getByText("100")).toBeInTheDocument();
    expect(getByText("20")).toBeInTheDocument();
    expect(getByText("300")).toBeInTheDocument();
    expect(getByText("15")).toBeInTheDocument();
    expect(getByText("360")).toBeInTheDocument();
    expect(getByText("3")).toBeInTheDocument();
    expect(getByText("450")).toBeInTheDocument();
    expect(getByText("0.25")).toBeInTheDocument();
    expect(getByText("90")).toBeInTheDocument();
    expect(getByText("1.83")).toBeInTheDocument();
  });
  it.skip("should trigger ForecastAssumptions to show blank KPIs when an input field is focused but KPIs are not found.", () => {
    const { getByText } = render(<PromoPlanner />);
    const inputField = document.getElementById("A05-50% Off");
    fireEvent.focus(inputField, { bubbles: false, cancelable: false });

    // How to test if screen is showing null???????
    // expect(getByText(null)).toBeInTheDocument();
    return false;
  });
  it.skip("should trigger ForecastAssumptions to revert back to blank KPIs when user clicks something outside of the table.", () => {
    const { getByText } = render(<PromoPlanner />);
    const inputField = document.getElementById("A01-10% Off");
    fireEvent.focus(inputField, { bubbles: false, cancelable: false });
    fireEvent.blur(inputField, { bubbles: false, cancelable: false });

    // expect(getByText("120")).not.toBeInTheDocument();
    // expect(getByText("100")).not.toBeInTheDocument();
    // expect(getByText("20")).not.toBeInTheDocument();
    // expect(getByText("300")).not.toBeInTheDocument();
    // expect(getByText("15")).not.toBeInTheDocument();
    // expect(getByText("360")).not.toBeInTheDocument();
    // expect(getByText("3")).not.toBeInTheDocument();
    // expect(getByText("450")).not.toBeInTheDocument();
    // expect(getByText("0.25")).not.toBeInTheDocument();
    // expect(getByText("90")).not.toBeInTheDocument();
    // expect(getByText("1.83")).not.toBeInTheDocument();
    // How to find something that's not there??????
    return false;
  });
});
describe.only("When user input integer into the Product-PromoType cell in PromoCalendar, KPISummary should show annual summary of KPIs.", () => {
  it("A01 + A02 GIV Forecast = 156000 when there is no promotion.", () => {
    const { getByLabelText } = render(
      <PromoPlanner
        productMaster={mockProductMaster}
        promoTypes={mockPromoTypes}
        algorithm={mockAlgorithm}
      />
    );
    expect(getByLabelText("GIV Forecast:").textContent).toBe("156000");
  });
});

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
