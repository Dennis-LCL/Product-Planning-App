import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PromoCalendar from "../components/PromoCalendar";
import KPISummary from "../components/KPISummary";

/*
Feature: KPI Summary
Scenario: User inputs numbers (integer) of Promo Week into the Promo Calendar to review annual summary of KPIs

Given (that)...
- I have already input a number (integer) in at least one of the Product-PromoType input fields in the Promo Calendar,

When...
- I click out of the input field, or
- I hit "Enter" on the input field,

Then...
The App should
- Calculate the annual summary of KPIs and show on the UI
*/

describe("KPISummary component should be rendered with required DOM nodes.", () => {
  it("should render an empty KPISummary component.", () => {
    const { getByText } = render(<KPISummary />);
    expect(!!getByText).toBeTruthy();
  });
  it("should render a component title (h2 tag) says 'Promo Calendar'", () => {
    const { getByText } = render(<KPISummary />);
    expect(getByText("KPI Summary")).toBeInTheDocument();
  });
  it("should render 'GIV Forecast' label on UI", () => {
    const { getByLabelText } = render(<KPISummary />);
    expect(getByLabelText("GIV Forecast:")).toBeInTheDocument();
  });
});

describe("KPISummary component should calculate Annual Summary KPIs correctly.", () => {
  let mockPromoFrequency = [];
  describe("GIV Forecast should be calculated correctly.", () => {
    it.only("GIV Forecast = 0 as default value.", () => {
      const { getByLabelText } = render(
        <KPISummary promoFrequency={[]} forecastAssumptions={[]} />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("0");
    });
    it.only("A01 GIV Forecast = 78000 when there is no promotion.", () => {
      mockPromoFrequency = [
        { ID: "A01-NPW", Frequency: 52 },
        { ID: "A01-10% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          promoFrequency={mockPromoFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("78000");
    });
    it.only("A01 GIV Forecast = 78300 with 1 week 10% Off.", () => {
      mockPromoFrequency = [
        { ID: "A01-NPW", Frequency: 51 },
        { ID: "A01-10% Off", Frequency: 1 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          promoFrequency={mockPromoFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("78300");
    });
    it.only("A01 GIV Forecast = 78600 with 2 week 10% Off.", () => {
      mockPromoFrequency = [
        { ID: "A01-NPW", Frequency: 50 },
        { ID: "A01-10% Off", Frequency: 2 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          promoFrequency={mockPromoFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("78600");
    });
  });
});

describe("KPISummary component should re-calculate and who correct KPIs when a Product-PromoType Input Field in the PromoCalendar is blurred or a hit on 'Enter' is detected.", () => {});

describe("KPISummary component should load the annual target for selected KPIs.", () => {});

const mockForecastAssumptions = [
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
  }
];
