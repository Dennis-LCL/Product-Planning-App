import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import ForecastAssumptions from "../components/ForecastAssumptions";

/*
Feature: FCST Assumptions
Scenario: User does not click any Product-PromoType cell in the PromoCalendar

Given (that)...
- The Promo Calendar is correctly populated with products and promo types

When...
- None of the Product-Promo Type cell is clicked (i.e. focused)

Then...
The App should
- Show all the Forecast Assumption labels without any value
*/

describe("Forecast Assumptions when no Product-PromoType cell is clicked (i.e. focused).", () => {
  describe("ForecastAssumptions component should be rendered with required DOM nodes.", () => {
    it("should render and empty ForecastAssumptions component.", () => {
      const { getByText } = render(
        <ForecastAssumptions productPromoTypeId="" algorithm={[]} />
      );
      expect(!!getByText).toBeTruthy();
    });
    it("should render a component title (h2 tag) says 'Forecast Assumptions'", () => {
      const { getByText } = render(
        <ForecastAssumptions productPromoTypeId="" algorithm={[]} />
      );
      expect(getByText("Forecast Assumptions")).toBeInTheDocument();
    });
    it("should render a 'Product-Promo Type:' title (h3 tag) for later showing Product-PromoType combo.", () => {
      const { getByText } = render(
        <ForecastAssumptions productPromoTypeId="" algorithm={[]} />
      );
      expect(getByText("for Product - Promo Type:")).toBeInTheDocument();
    });
  });

  describe.skip("All Forecast Assumption Items should be rendered on screen with one value version, with blank as default value.", () => {
    // This test group is skipped because we are doing hard-coding here. It should be worked once we refactor the table creation functionality.
    it("should render a table with all Forecast Assumption Items on rows", () => {
      return false;
    });
    it("should show one value version per Forecast Assumption Item.", () => {
      return false;
    });
    it("should show '--' as the default value for each Forecast Assumption Item - version combo.", () => {
      return false;
    });
  });
});

/*
Feature: FCST Assumption
Scenario: User clicks ONE Product-Promo Type cell in the Promo Calendar and the Forecast Assumptions can be found

Given (that)...
- The Promo Calendar is correctly populated with products and promo types

When...
- I click on any Product-Promo Type cell (i.e. focused),

Then...
The App should
- Show all the Forecast Assumptions with values found for the selected Product-Promo Type combination
- Any Forecast Assumptions without value will be shown blank in the UI
*/
describe("Forecast Assumptions when ONE Product-PromoType cell is clicked (i.e. focused) with KPIs found.", () => {
  it("should show KPIs correctly when a Product-PromoType cell is clicked (i.e. focused).", () => {
    const { getByText } = render(
      <ForecastAssumptions
        productPromoTypeId="A01-10%"
        algorithm={mockAlgorithm}
      />
    );
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
  it.skip("should show KPIs correctly when user click from one Product-PromoType cell to another.", () => {
    return false;
  });
  it.skip("should revert back to blank KPIs when user clicks something outside of the table.", () => {
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
  },
  {
    ID: "",
    Product: "",
    PromoType: "",
    KPIs: {
      ScanUnit: null,
      BaselineUnit: null,
      IncrementalUnit: null,
      IncrementalGIV: null,
      BaseListPrice: null,
      TotalCost: null,
      ScanDealUnitCost: null,
      TotalBudget: null,
      FundRate: null,
      NetSufficiency: null,
      ROI: null
    }
  }
];
