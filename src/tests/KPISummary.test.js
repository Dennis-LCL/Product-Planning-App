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
  let mockProductPromoTypeFrequency = [];
  describe.only("GIV Forecast should be calculated correctly.", () => {
    it("GIV Forecast = 0 as default value.", () => {
      const { getByLabelText } = render(
        <KPISummary productPromoTypeFrequency={[]} forecastAssumptions={[]} />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("0");
    });
    it("A01 GIV Forecast = 78000 when there is no promotion.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 52 },
        { ID: "A01-10% Off", Frequency: 0 },
        { ID: "A01-30% Off", Frequency: 0 },
        { ID: "A01-50% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("78000");
    });
    it("A01 GIV Forecast = 78300 with 1 week 10% Off.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 51 },
        { ID: "A01-10% Off", Frequency: 1 },
        { ID: "A01-30% Off", Frequency: 0 },
        { ID: "A01-50% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("78300");
    });
    it("A01 GIV Forecast = 78600 with 2 week 10% Off.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 50 },
        { ID: "A01-10% Off", Frequency: 2 },
        { ID: "A01-30% Off", Frequency: 0 },
        { ID: "A01-50% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("78600");
    });
    it("A01 GIV Forecast = 81300 with 1 week 10% Off and 1 week 30% Off.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 50 },
        { ID: "A01-10% Off", Frequency: 1 },
        { ID: "A01-30% Off", Frequency: 1 },
        { ID: "A01-50% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("81300");
    });
    it("A01 GIV Forecast = 94800 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 49 },
        { ID: "A01-10% Off", Frequency: 1 },
        { ID: "A01-30% Off", Frequency: 1 },
        { ID: "A01-50% Off", Frequency: 1 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("94800");
    });
    it("A01 + A02 GIV Forecast = 156000 when there is no promotion.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 52 },
        { ID: "A01-10% Off", Frequency: 0 },
        { ID: "A01-30% Off", Frequency: 0 },
        { ID: "A01-50% Off", Frequency: 0 },
        { ID: "A02-NPW", Frequency: 52 },
        { ID: "A02-10% Off", Frequency: 0 },
        { ID: "A02-30% Off", Frequency: 0 },
        { ID: "A02-50% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("156000");
    });
    it("A01 + A02 GIV Forecast = 156600 with 1 week 10% Off each.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 51 },
        { ID: "A01-10% Off", Frequency: 1 },
        { ID: "A01-30% Off", Frequency: 0 },
        { ID: "A01-50% Off", Frequency: 0 },
        { ID: "A02-NPW", Frequency: 51 },
        { ID: "A02-10% Off", Frequency: 1 },
        { ID: "A02-30% Off", Frequency: 0 },
        { ID: "A02-50% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("156600");
    });
    it("A01 + A02 GIV Forecast = 157200 with 2 week 10% Off.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 50 },
        { ID: "A01-10% Off", Frequency: 2 },
        { ID: "A01-30% Off", Frequency: 0 },
        { ID: "A01-50% Off", Frequency: 0 },
        { ID: "A02-NPW", Frequency: 50 },
        { ID: "A02-10% Off", Frequency: 2 },
        { ID: "A02-30% Off", Frequency: 0 },
        { ID: "A02-50% Off", Frequency: 0 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("157200");
    });
    it("A01 + A02 GIV Forecast = 189600 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      mockProductPromoTypeFrequency = [
        { ID: "A01-NPW", Frequency: 49 },
        { ID: "A01-10% Off", Frequency: 1 },
        { ID: "A01-30% Off", Frequency: 1 },
        { ID: "A01-50% Off", Frequency: 1 },
        { ID: "A02-NPW", Frequency: 49 },
        { ID: "A02-10% Off", Frequency: 1 },
        { ID: "A02-30% Off", Frequency: 1 },
        { ID: "A02-50% Off", Frequency: 1 }
      ];
      const { getByLabelText } = render(
        <KPISummary
          productPromoTypeFrequency={mockProductPromoTypeFrequency}
          forecastAssumptions={mockForecastAssumptions}
        />
      );
      expect(getByLabelText("GIV Forecast:").textContent).toBe("189600");
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
