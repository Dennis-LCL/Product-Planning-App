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
  describe("PromoCalendar component should be rendered with required DOM nodes.", () => {
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

  describe("The Promo Calendar should have complete columns.", () => {
    it("should have all product attributes as columns based on product master passed in as props.", () => {
      const { getByText } = render(
        <PromoCalendar
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          productPromoTypeFrequency={[]}
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
          productPromoTypeFrequency={[]}
        />
      );
      for (let i = 0; i < mockPromoTypes.length; i++) {
        expect(getByText(mockPromoTypes[i].PromoType)).toBeInTheDocument();
      }
    });
  });

  describe("The Promo Calendar should have all products on rows.", () => {
    it("should render all products from the product master passed in as props for the component.", () => {
      const { getAllByText } = render(
        <PromoCalendar
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          productPromoTypeFrequency={[]}
        />
      );
      const numberOfRenderedProducts = getAllByText(/Boldie/i).length;
      expect(numberOfRenderedProducts).toBe(mockProductMaster.length);
    });
  });

  describe("Each Product's initial value for Promo Types should be 0 with Non-Promo Week set to 52.", () => {
    it("should render input fields for each product-promo type combination.", () => {
      const { getAllByPlaceholderText } = render(
        <PromoCalendar
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          productPromoTypeFrequency={[]}
        />
      );

      const numberOfProductPromoTypeCombos = getAllByPlaceholderText("--")
        .length;
      const expectedNumberOfProductPromoTypeCombos =
        mockProductMaster.length * mockPromoTypes.length;
      expect(numberOfProductPromoTypeCombos).toBe(
        expectedNumberOfProductPromoTypeCombos
      );
    });
    it("should set the Non-Promo Week to 52 for each product.", () => {
      const { getAllByText } = render(
        <PromoCalendar
          productMaster={mockProductMaster}
          promoTypes={mockPromoTypes}
          productPromoTypeFrequency={[]}
        />
      );
      expect(getAllByText("52").length).toBe(mockProductMaster.length);
    });
  });
});

const mockProductMaster = [
  {
    Code: "A01",
    Brand: "Boldie",
    Group: "Shampoo 250ml",
    Description: "Drop Your Hair Shampoo"
  },
  {
    Code: "A02",
    Brand: "Boldie",
    Group: "Shampoo 250ml",
    Description: "Scratch Your Sculp Shampoo"
  }
];

const mockPromoTypes = [
  {
    PTID: "10POFF",
    PromoType: "10% Off"
  },
  {
    PTID: "30POFF",
    PromoType: "30% Off"
  },
  {
    PTID: "50POFF",
    PromoType: "50% Off"
  }
];
