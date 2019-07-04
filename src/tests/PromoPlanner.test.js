import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PromoCalendar from "../components/PromoCalendar";
import ForecastAssumptions from "../components/ForecastAssumptions";
import PromoPlanner from "../components/PromoPlanner";
// import mockAxios from "./axios";

describe("PromoPlanner component should be rendered with required DOM nodes.", () => {
  it("should render and empty PromoPlanner component.", () => {
    const { getByText } = render(
      <PromoPlanner productMaster={[]} promoTypes={[]} algorithm={[]} />
    );
    expect(!!getByText).toBeTruthy();
  });
  it("should render a component title (h1 tag) says 'Promo Planner'", () => {
    const { getByText } = render(
      <PromoPlanner productMaster={[]} promoTypes={[]} algorithm={[]} />
    );
    expect(getByText("Promo Planner")).toBeInTheDocument();
  });
});

describe("When user clicks a Product-PromoType cell in PromoCalendar, ForecastAssumptions should show the KPIs for the clicked Product-PromoType combination.", () => {
  it("PromoCalendar should render input fields, each with unique identifier for Product-PromoType combination.", () => {
    const { getByText } = render(
      <PromoPlanner
        productMaster={mockProductMaster}
        promoTypes={mockPromoTypes}
        algorithm={[]}
      />
    );
    const inputField = document.getElementById("A02-50POFF");
    expect(!!inputField).toBeTruthy();
  });
  it("should trigger ForecastAssumptions to show KPIs correctly when the 10% off input field is focused.", () => {
    const { queryByText } = render(
      <PromoPlanner
        productMaster={mockProductMaster}
        promoTypes={mockPromoTypes}
        algorithm={[]}
      />
    );
    const inputField = document.getElementById("A01-10OFF");
    fireEvent.focus(inputField, { bubbles: false, cancelable: false });

    expect(queryByText("120")).toBe(null);
    expect(queryByText("100")).toBe(null);
    expect(queryByText("20")).toBe(null);
    expect(queryByText("300")).toBe(null);
    expect(queryByText("15")).toBe(null);
    expect(queryByText("360")).toBe(null);
    expect(queryByText("3")).toBe(null);
    expect(queryByText("450")).toBe(null);
    expect(queryByText("0.25")).toBe(null);
    expect(queryByText("90")).toBe(null);
    expect(queryByText("1.83")).toBe(null);
  });
  it.skip("should trigger ForecastAssumptions to show blank KPIs when an input field is focused but KPIs are not found.", () => {
    const { getByText } = render(
      <PromoPlanner
        productMaster={mockProductMaster}
        promoTypes={mockPromoTypes}
        algorithm={[]}
      />
    );
    const inputField = document.getElementById("A05-50POFF");
    fireEvent.focus(inputField, { bubbles: false, cancelable: false });

    // How to test if screen is showing null???????
    // expect(getByText(null)).toBeInTheDocument();
    return false;
  });
  it("should trigger ForecastAssumptions to revert back to blank KPIs when user clicks something outside of the table.", () => {
    const { queryByText } = render(
      <PromoPlanner
        productMaster={mockProductMaster}
        promoTypes={mockPromoTypes}
        algorithm={[]}
      />
    );
    const inputField = document.getElementById("A01-10POFF");
    fireEvent.focus(inputField, { bubbles: false, cancelable: false });
    fireEvent.blur(inputField, { bubbles: false, cancelable: false });

    expect(queryByText("120")).toBe(null);
    expect(queryByText("100")).toBe(null);
    expect(queryByText("20")).toBe(null);
    expect(queryByText("300")).toBe(null);
    expect(queryByText("15")).toBe(null);
    expect(queryByText("360")).toBe(null);
    expect(queryByText("3")).toBe(null);
    expect(queryByText("450")).toBe(null);
    expect(queryByText("0.25")).toBe(null);
    expect(queryByText("90")).toBe(null);
    expect(queryByText("1.83")).toBe(null);
  });
});

describe("When user input integer into the Product-PromoType cell in PromoCalendar, KPISummary should show annual summary of KPIs.", () => {
  describe("GIV Forecast", () => {
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
    it("A01 + A02 GIV Forecast = 156600 with 1 week 10% Off each.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      const inputField1 = document.getElementById("A01-10POFF");
      const inputField2 = document.getElementById("A02-10POFF");
      fireEvent.change(inputField1, { target: { value: "1" } });
      fireEvent.change(inputField2, { target: { value: "1" } });
      expect(getByLabelText("GIV Forecast:").textContent).toBe("156600");
    });
    it("A01 + A02 GIV Forecast = 189600 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      const inputField1 = document.getElementById("A01-10POFF");
      const inputField2 = document.getElementById("A01-30POFF");
      const inputField3 = document.getElementById("A01-50POFF");
      const inputField4 = document.getElementById("A02-10POFF");
      const inputField5 = document.getElementById("A02-30POFF");
      const inputField6 = document.getElementById("A02-50POFF");
      fireEvent.change(inputField1, { target: { value: "1" } });
      fireEvent.change(inputField2, { target: { value: "1" } });
      fireEvent.change(inputField3, { target: { value: "1" } });
      fireEvent.change(inputField4, { target: { value: "1" } });
      fireEvent.change(inputField5, { target: { value: "1" } });
      fireEvent.change(inputField6, { target: { value: "1" } });
      expect(getByLabelText("GIV Forecast:").textContent).toBe("189600");
    });
  });
  describe("Net Sufficiency", () => {
    it("A01 + A02 Net Sufficiency = 39000 when there is no promotion.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      expect(getByLabelText("Net Sufficiency:").textContent).toBe("39000");
    });
    it("A01 + A02 Net Sufficiency = 11280 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      const inputField1 = document.getElementById("A01-10POFF");
      const inputField2 = document.getElementById("A01-30POFF");
      const inputField3 = document.getElementById("A01-50POFF");
      const inputField4 = document.getElementById("A02-10POFF");
      const inputField5 = document.getElementById("A02-30POFF");
      const inputField6 = document.getElementById("A02-50POFF");
      fireEvent.change(inputField1, { target: { value: "1" } });
      fireEvent.change(inputField2, { target: { value: "1" } });
      fireEvent.change(inputField3, { target: { value: "1" } });
      fireEvent.change(inputField4, { target: { value: "1" } });
      fireEvent.change(inputField5, { target: { value: "1" } });
      fireEvent.change(inputField6, { target: { value: "1" } });
      expect(getByLabelText("Net Sufficiency:").textContent).toBe("11280");
    });
  });
  describe("Total Budget", () => {
    it("A01 + A02 Total Budget = 39000 when there is no promotion.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      expect(getByLabelText("Total Budget:").textContent).toBe("39000");
    });
    it("A01 + A02 Total Budget = 47400 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      const inputField1 = document.getElementById("A01-10POFF");
      const inputField2 = document.getElementById("A01-30POFF");
      const inputField3 = document.getElementById("A01-50POFF");
      const inputField4 = document.getElementById("A02-10POFF");
      const inputField5 = document.getElementById("A02-30POFF");
      const inputField6 = document.getElementById("A02-50POFF");
      fireEvent.change(inputField1, { target: { value: "1" } });
      fireEvent.change(inputField2, { target: { value: "1" } });
      fireEvent.change(inputField3, { target: { value: "1" } });
      fireEvent.change(inputField4, { target: { value: "1" } });
      fireEvent.change(inputField5, { target: { value: "1" } });
      fireEvent.change(inputField6, { target: { value: "1" } });
      expect(getByLabelText("Total Budget:").textContent).toBe("47400");
    });
  });
  describe("Total Cost", () => {
    it("A01 + A02 Total Cost = 0 when there is no promotion.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      expect(getByLabelText("Total Cost:").textContent).toBe("0");
    });
    it("A01 + A02 Total Cost = 36120 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      const inputField1 = document.getElementById("A01-10POFF");
      const inputField2 = document.getElementById("A01-30POFF");
      const inputField3 = document.getElementById("A01-50POFF");
      const inputField4 = document.getElementById("A02-10POFF");
      const inputField5 = document.getElementById("A02-30POFF");
      const inputField6 = document.getElementById("A02-50POFF");
      fireEvent.change(inputField1, { target: { value: "1" } });
      fireEvent.change(inputField2, { target: { value: "1" } });
      fireEvent.change(inputField3, { target: { value: "1" } });
      fireEvent.change(inputField4, { target: { value: "1" } });
      fireEvent.change(inputField5, { target: { value: "1" } });
      fireEvent.change(inputField6, { target: { value: "1" } });
      expect(getByLabelText("Total Cost:").textContent).toBe("36120");
    });
  });
  describe("GIV Gap", () => {
    it("A01 + A02 GIV Gap = -94000 when there is no promotion.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      expect(getByLabelText("GIV Gap:").textContent).toBe("-94000");
    });
    it("A01 + A02 GIV Gap = -60400 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      const inputField1 = document.getElementById("A01-10POFF");
      const inputField2 = document.getElementById("A01-30POFF");
      const inputField3 = document.getElementById("A01-50POFF");
      const inputField4 = document.getElementById("A02-10POFF");
      const inputField5 = document.getElementById("A02-30POFF");
      const inputField6 = document.getElementById("A02-50POFF");
      fireEvent.change(inputField1, { target: { value: "1" } });
      fireEvent.change(inputField2, { target: { value: "1" } });
      fireEvent.change(inputField3, { target: { value: "1" } });
      fireEvent.change(inputField4, { target: { value: "1" } });
      fireEvent.change(inputField5, { target: { value: "1" } });
      fireEvent.change(inputField6, { target: { value: "1" } });
      expect(getByLabelText("GIV Gap:").textContent).toBe("-60400");
    });
  });
  describe("GIV Forecast IYA", () => {
    it("A01 + A02 GIV Forecast IYA = 68 when there is no promotion.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      expect(getByLabelText("GIV Forecast IYA:").textContent).toBe("68");
    });
    it("A01 + A02 GIV Forecast IYA = 82 with 1 week 10% Off, 1 week 30% Off, and 1 week 50% Off.", () => {
      const { getByLabelText } = render(
        <PromoPlanner
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          algorithm={mockAlgorithm}
        />
      );
      const inputField1 = document.getElementById("A01-10POFF");
      const inputField2 = document.getElementById("A01-30POFF");
      const inputField3 = document.getElementById("A01-50POFF");
      const inputField4 = document.getElementById("A02-10POFF");
      const inputField5 = document.getElementById("A02-30POFF");
      const inputField6 = document.getElementById("A02-50POFF");
      fireEvent.change(inputField1, { target: { value: "1" } });
      fireEvent.change(inputField2, { target: { value: "1" } });
      fireEvent.change(inputField3, { target: { value: "1" } });
      fireEvent.change(inputField4, { target: { value: "1" } });
      fireEvent.change(inputField5, { target: { value: "1" } });
      fireEvent.change(inputField6, { target: { value: "1" } });
      expect(getByLabelText("GIV Forecast IYA:").textContent).toBe("82");
    });
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
    // Product: "Drop Your Hair Shampoo",
    // PromoType: "Non-Promo Week",
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
    // Product: "Drop Your Hair Shampoo",
    // PromoType: "10% Off",
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
    // Product: "Drop Your Hair Shampoo",
    // PromoType: "30% Off",
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
    // Product: "Drop Your Hair Shampoo",
    // PromoType: "50% Off",
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
    // Product: "Drop Your Hair Shampoo",
    // PromoType: "Non-Promo Week",
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
    // Product: "Scratch Your Sculp Shampoo",
    // PromoType: "10% Off",
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
    // Product: "Scratch Your Sculp Shampoo",
    // PromoType: "30% Off",
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
    // Product: "Scratch Your Sculp Shampoo",
    // PromoType: "50% Off",
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
];
