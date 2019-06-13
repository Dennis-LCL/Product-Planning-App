import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PromoCalendar from "../components/PromoCalendar";
import ForecastAssumptions from "../components/ForecastAssumptions";
import PromoPlanner from "../components/PromoPlanner";

describe("PromoPlanner component should be rendered with required DOM nodes.", () => {
  it.only("should render and empty PromoPlanner component.", () => {
    const { getByText } = render(<PromoPlanner />);
    expect(!!getByText).toBeTruthy();
  });
  it.only("should render a component title (h1 tag) says 'Promo Planner'", () => {
    const { getByText } = render(<PromoPlanner />);
    expect(getByText("Promo Planner")).toBeInTheDocument();
  });
});
describe("When ONE Product-PromoType cell is clicked in PromoCalendar (i.e. focused) and KPIs are found.", () => {
  it.only("should render input field under each Product-PromoType combination for users to click.", () => {
    const { getByText, fireEvent } = render(<PromoPlanner />);
    const inputField = document.querySelector("#A01-10%");
    expect(!!inputField).toBeTruthy();
  });

  it("should trigger ForecastAssumptions to show KPIs correctly when a 'A01 10% Off' is clicked (i.e. focused).", () => {
    return false;
    // const { getByText } = render(
    //     <ForecastAssumptions
    //         productPromoTypeId="A01-10%"
    //         algorithm={mockAlgorithm}
    //     />
    // );
    // expect(getByText("120")).toBeInTheDocument();
    // expect(getByText("100")).toBeInTheDocument();
    // expect(getByText("20")).toBeInTheDocument();
    // expect(getByText("300")).toBeInTheDocument();
    // expect(getByText("15")).toBeInTheDocument();
    // expect(getByText("360")).toBeInTheDocument();
    // expect(getByText("3")).toBeInTheDocument();
    // expect(getByText("450")).toBeInTheDocument();
    // expect(getByText("0.25")).toBeInTheDocument();
    // expect(getByText("90")).toBeInTheDocument();
    // expect(getByText("1.83")).toBeInTheDocument();
  });
  it("should trigger ForecastAssumptions to show KPIs correctly when a 'A01 30% Off' is clicked (i.e. focused).", () => {
    return false;
    // const { getByText } = render(
    //   <ForecastAssumptions
    //     productPromoTypeId="A01-30%"
    //     algorithm={mockAlgorithm}
    //   />
    // );
    // expect(getByText("300")).toBeInTheDocument();
    // expect(getByText("100")).toBeInTheDocument();
    // expect(getByText("200")).toBeInTheDocument();
    // expect(getByText("3000")).toBeInTheDocument();
    // expect(getByText("15")).toBeInTheDocument();
    // expect(getByText("2700")).toBeInTheDocument();
    // expect(getByText("9")).toBeInTheDocument();
    // expect(getByText("1125")).toBeInTheDocument();
    // expect(getByText("0.25")).toBeInTheDocument();
    // expect(getByText("-1575")).toBeInTheDocument();
    // expect(getByText("1.11")).toBeInTheDocument();
  });
  it.skip("should trigger ForecastAssumptions to show KPIs correctly when user click from one Product-PromoType cell to another.", () => {
    return false;
  });
  it.skip("should trigger ForecastAssumptions to revert back to blank KPIs when user clicks something outside of the table.", () => {
    return false;
  });
});

const mockAlgorithm = [
  {
    ID: "A01-10%",
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
    ID: "A01-30%",
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
    ID: "A01-50%",
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
  }
];
