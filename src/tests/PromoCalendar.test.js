import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import "jest-dom/extend-expect";
import PromoCalendar from "../components/PromoCalendar";

/*
Feature: Promo Calendar
Scenario: User launches the Promo Planner App first time and uses the Promo Calendar

Given(that)...
- I have a valid credential and already logged in, and
- I have pre-configured data access and base data,

When...
- I first launch the Promo Planner App and go to Promo Calendar,

Then...
The App should show me a Promo Calendar(a table) with below initial condition:
- All the products in my customer-category shown on rows,
- Non-Promo week and all authorized Promo Types on column,
- All the cells under Non-Promo Week column set to 52(weeks) for each product,
- All the cells under each Promo Type column set to 0(weeks) for each product.
*/

describe("Promo Calendar's initial condition when user launches it the first time.", () => {
  describe.only("PromoCalendar component should be rendered with required DOM nodes.", () => {
    it("should render and empty PromoCalendar component.", () => {
      const { getByText } = render(
        <PromoCalendar productMaster={[]} promoTypes={[]} />
      );
      expect(!!getByText).toBeTruthy();
    });
    it("should render a component title (h2 tag) says 'Promo Calendar'", () => {
      const { getByText } = render(
        <PromoCalendar productMaster={[]} promoTypes={[]} />
      );
      expect(getByText("Promo Calendar")).toBeInTheDocument();
    });
    it("should render a work space title (h3 tag) for later showing year, customer, category", () => {
      const { getByText } = render(
        <PromoCalendar productMaster={[]} promoTypes={[]} />
      );
      expect(getByText("Work Space:")).toBeInTheDocument();
    });
    it("should render an empty 1R1C table", () => {
      const { getByText } = render(
        <PromoCalendar productMaster={[]} promoTypes={[]} />
      );
      expect(getByText("Non-Promo Week")).toBeInTheDocument();
      expect(getByText("Fake Product Numero Uno")).toBeInTheDocument();
    });
  });

  describe.only("The Promo Calendar should have complete columns.", () => {
    it("should have all product attributes as columns based on product master passed in as props.", () => {
      const { getByText } = render(
        <PromoCalendar
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
        />
      );
      const productAttributes = Object.keys(mockProductMaster[0]);
      console.log(productAttributes);
      for (let i = 0; i < productAttributes.length; i++) {
        expect(getByText(productAttributes[i])).toBeInTheDocument();
      }
    });
    it("should have all promo types as columns based on authorized product type passed in as props ", () => {
      const { getByText } = render(
        <PromoCalendar
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
        />
      );
      console.log(mockPromoTypes);
      for (let i = 0; i < mockPromoTypes.length; i++) {
        expect(getByText(mockPromoTypes[i])).toBeInTheDocument();
      }
    });
  });

  describe("The Promo Calendar should have all products on rows.", () => {
    it("should render all products from the product master passed in as props for the component.", () => {
      const { getAllByText } = render(
        <PromoCalendar
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
        />
      );
      const numberOfRenderedProducts = getAllByText(/Shampoo/i).length;
      expect(numberOfRenderedProducts).toBe(mockProductMaster.length);
    });
    it("should populate the product attributes correctly per Promo Calendar columns.", () => {});
  });

  describe.skip("Each Product's initial value for Promo Types should be 0 with Non-Promo Week set to 52.", () => {});
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
  },
  {
    Brand: "Boldie",
    Group: "Shampoo 250ml",
    Code: "A03",
    Description: "Burn The Root Shampoo"
  }
];

const mockPromoTypes = ["10% Off", "30% Off", "50% Off"];
